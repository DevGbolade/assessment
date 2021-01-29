import validationsUtils from "../utils/validate.utils";
import { errorResponse, status } from "../utils/responses";

const { propsExist, checkRuleAndData, validate } = validationsUtils;

export default function (req, res, next) {
  const { body } = req;
  if (!propsExist(body, "rule") && !propsExist(body, "data")) {
    return errorResponse(
      res,
      "The rule and data fields are required.",
      status.bad
    );
  }
  const correctRules = checkRuleAndData(body);
  if (correctRules) return errorResponse(res, correctRules, status.bad);

  const {
    rule: { condition, condition_value, field },
    data,
  } = body;

  if (!propsExist(data, field)) {
    return errorResponse(
      res,
      `field ${field} is missing from data.`,
      status.bad
    );
  }
  if (field.includes(".")) {
    let fieldOption = field.split(".");
    const error = !validate(
      data[fieldOption[0]][fieldOption[1]],
      condition_value,
      condition
    );
    const message = error
      ? `field ${field} failed validation.`
      : `field ${field} was successfully validated.`;
    const statusCode = error ? status.bad : status.success;
    const result = {
      validation: {
        error,
        field,
        field_value: data[field],
        condition,
        condition_value,
      },
    };
    req.body = { message, status: statusCode, result };
    return next();
  }

  const error = !validate(data[field], condition_value, condition);
  const message = error
    ? `field ${field} failed validation.`
    : `field ${field} was successfully validated.`;
  const statusCode = error ? status.bad : status.success;
  const result = {
    validation: {
      error,
      field,
      field_value: data[field],
      condition,
      condition_value,
    },
  };
  req.body = { message, status: statusCode, result };
  return next();
}
