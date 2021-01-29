import { userObject } from "../models";

/**
 *
 * @apiSuccess (200) {Object} mixed `User` object
 */
exports.getUser = (req, res, next) => {
  const data = {
    message: "User data retrieved successfully.",
    status: "success",
    data: {
      ...userObject,
    },
  };
  return res.status(200).json(data);
};
