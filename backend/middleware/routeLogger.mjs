import { logger } from "../Logger/logger.mjs";

export const routeLogger = (request, response, next) => {
  let message = ` ${request.method} \t ${request.headers.origin} \t ${request.path}`;
  let FILE_NAME = "routeLog.txt";
  logger(message, FILE_NAME);
  next();
};
