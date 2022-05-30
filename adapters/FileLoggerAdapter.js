/** @typedef {import('../ports/types/Logger').LoggerPortInterface} LoggerPortInterface */
import path from "node:path";

import log from "log-to-file";
/**
 * @class FileLoggerAdapter
 * @implements {LoggerPortInterface}
 */
export class FileLoggerAdapter {
  /**
   * Path where the log file is stored. If a path is not provided, it will create a logfile.log in the current working directory.
   * @param {String} [absolutePath]
   */
  constructor(absolutePath) {
    this.__path = absolutePath || path.join(process.cwd(), "logfile.log");
    this.__log = log;
  }
  /**
   * Adds a log entry in the log file
   * @param {String} text
   */
  log(text) {
    this.__log(text, this.__path);
  }
}
