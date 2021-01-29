import { config } from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import Router from "./routes/user.routes";

import { errorResponse, status } from "../src/utils/responses";

config();

// Create global app object
const app = express();

app.use(cors());

const isProduction = process.env.NODE_ENV === "production";

// Normal express config defaults
app.use(morgan(isProduction ? "combined" : "dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Base Route Response
app.use(Router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/**
 * development error handler
   will print stacktrace
*/
if (!isProduction) {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500).json({
      message: err.message,
      status: "error",
      data: null,
    });
  });
}
/**
 *
   production error handler
   no stacktraces leaked to user
*/

app.use((err, req, res, next) => {
  return errorResponse(res, status.error, "Internal server error occurred.");
});

export default app;
