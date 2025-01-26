import { appendFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import path from "path";

export const logger = async (message, fileName) => {
  // the log is in the format DD-MM-YYYY Time UUID RequestMethod HeaderOrigin Path
  const log =
    "\n" +
    new Date().toLocaleString({
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
      second: "2-digit",
    }) +
    "\t\t" +
    uuid() +
    "\t" +
    message;

  // append the log to the targeted file
  await appendFile(path.join(".", "logs", fileName), log);
};
