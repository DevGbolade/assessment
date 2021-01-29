export default class Validations {
  static propsExist(data, props) {
    props = props.toString();
    if (typeof data === "string") {
      return !!data[props];
    }
    if (typeof data !== "object") {
      return `propsExist requires an object as first argument, got ${data}.`;
    }
    if (props.includes(".")) {
      props = props.split(".");
      return Object.hasOwnProperty.call(data[props[0]], props[1]);
    }

    return Object.hasOwnProperty.call(data, props);
  }

  static checkRule(rule) {
    const allowedFields = ["field", "condition", "condition_value"];
    const allowedConditions = ["contains", "eq", "neq", "gt", "gte"];
    if (!rule) return "rule is required.";
    if (typeof rule !== "object") return "rule should be an object.";
    for (let field of allowedFields) {
      if (!Validations.propsExist(rule, field))
        return `rule.${field} is required`;
    }
    if (!allowedConditions.includes(rule.condition))
      return `rule condition should be one of [${allowedConditions.join(
        ", "
      )}].`;
    return "";
  }

  static checkData(data) {
    if (!data) return "data is required.";
    switch (typeof data) {
      case "object":
      case "string":
        break;
      default:
        return "data should be either an {object}, [array] or 'string'";
    }
    return "";
  }

  static checkRuleAndData({ rule, data }) {
    const isRuleIncorrect = Validations.checkRule(rule);
    const isDataIncorrect = Validations.checkData(data);
    if (isRuleIncorrect) return isRuleIncorrect;
    if (isDataIncorrect) return isDataIncorrect;
    return "";
  }

  static validate(fieldValue, conditionValue, condition) {
    switch (condition) {
      case "eq":
        return fieldValue === conditionValue;
      case "neq":
        return fieldValue !== conditionValue;
      case "gt":
        return fieldValue > conditionValue;
      case "gte":
        return fieldValue >= conditionValue;
      case "contains":
        return fieldValue.includes(conditionValue);
    }
  }
}
