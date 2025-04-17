import { logger } from "../Logger/logger.mjs";

const dataLogger = (request, response, next) => {
  let message = ` ${request.method} \t ${request.headers.origin} \t ${request.path} `;
  let FILE_NAME = "dataLog.txt";
  logger(message, FILE_NAME);
  next();
};

export default dataLogger;
