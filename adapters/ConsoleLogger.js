/** @typedef {import('../ports/types/Logger').LoggerPortInterface} LoggerPortInterface*/
/** @typedef {import('../domain/types/Todo').TodoObject} TodoObject*/

import logSymbols from "log-symbols";
import { Table } from "console-table-printer";
import chalk from "chalk";

/**
 * @class ConsoleLoggerAdapter
 * @implements {LoggerPortInterface}
 */
export class ConsoleLoggerAdapter {
  constructor() {
    this.__logger = console;
    this.__logger.table = (rows, columns) => {
      const table = new Table({
        columns: columns.map((name) => ({ name, alignment: "left" })),
      });
      table.addRows(rows);
      table.printTable();
    };
  }

  /**
   * Prints a string to the console
   * @param {String} text
   */
  log(text) {
    this.__logger.log(text);
  }

  /**
   *
   * @param {Array<TodoObject>} items
   * @param {Array<String>} columns
   */
  table(items, columns) {
    const parsedItems = this.__parseItems(items, columns);
    this.__logger.table(parsedItems, columns);
  }

  __parseItems(items, columns) {
    const parsedItems = items.map((item) => {
      Object.keys(item).forEach((key) => {
        if (!columns.includes(key)) delete item[key];
        if (typeof item[key] === "boolean") {
          item[key] = item[key]
            ? chalk.green(logSymbols.success)
            : chalk.red(logSymbols.error);
        }
      });
      return item;
    });
    return parsedItems;
  }
}
