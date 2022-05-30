/** @typedef {import('../ports/types/Logger').LoggerPortInterface} LoggerPortInterface*/

/**
 * @class ConsoleLoggerAdapter
 * @implements {LoggerPortInterface}
 */
export class ConsoleLoggerAdapter {
  constructor() {
    this.__logger = console;
  }

  /**
   * Prints a string to the console
   * @param {String} text
   */
  log(text) {
    this.__logger.log(text);
  }
}
