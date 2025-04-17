import { logger } from "../Logger/logger.mjs";

const requestLogger = (request, response, next) => {
  let message = ` ${request.method} \t ${request.headers.origin} \t ${request.path}`;
  let FILE_NAME = "requestLog.txt";
  logger(message, FILE_NAME);
  next();
};

export default requestLogger;
