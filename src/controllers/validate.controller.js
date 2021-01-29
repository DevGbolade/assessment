import { successResponse } from "../utils/responses";
/**
 * @api {post} /validate-api
 * @apiName Validate request object
 * @apiParam  {Object} [rules] rules
 * @apiParam  {Object} [data] data
 * @apiSuccess (200) {Object} mixed `Validated` object
 */

const validateApi = (req, res, next) => {
  const { message, status, ...props } = req.body;
  return successResponse(res, message, status, props);
};

export default validateApi;
