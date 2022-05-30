/** @typedef {import('./types/Application').ApplicationInterface} ApplicationInterface*/
/** @typedef {import('./types/Application').ApplicationAdapters} ApplicationAdapters*/
/** @typedef {import('../domain/types/Todo').TodoObject} TodoObject*/
import { Todo } from "../domain/Todo.js";

/**
 * @class Application
 * @implements {ApplicationInterface}
 */
export class Application {
  /**
   *
   * @param {Object} adapters
   * @param {import("../ports/types/Logger").LoggerPortInterface} adapters.logger
   * @param {import("../ports/types/Store").StorePortInterface} adapters.store
   */
  constructor(adapters) {
    this.__logger = adapters.logger;
    this.__store = adapters.store;
  }

  /**
   * Add a new todo to the list
   * @param {String} text
   * @returns {Todo} Todo
   */
  addTodo(text) {
    const todo = this.__createTodo(text);
    try {
      /** @type {TodoObject} */
      // @ts-ignore
      const todoObject = this.__store.save(todo.toJSON());
      const newItem = Todo.fromJSON(todoObject);
      this.__logger.log(`[ADDED]: ${JSON.stringify(newItem)}`);
      return newItem;
    } catch (error) {
      this.__logger.log(
        "[ERROR]: There was a problem while adding a new todo" + error
      );
    }
  }

  /**
   * Create a new todo item
   * @param {String} text
   * @returns {Todo} Todo
   */
  __createTodo(text) {
    return new Todo(text);
  }

  markTodoAsCompleted(id) {
    const todo = this.__getTodo(id);
    todo.complete();
    this.__store.update(todo.id, todo.toJSON());
  }

  markTodoAsPending(id) {
    const todo = this.__getTodo(id);
    todo.pending();
    this.__store.update(todo.id, todo.toJSON());
  }

  /**
   * Get the todo object from the store an returns an instance of Todo class.
   * @param {String} id
   * @returns {Todo} Todo
   */
  __getTodo(id) {
    /** @type {TodoObject} */
    // @ts-ignore
    const todoObject = this.__store.get(id);
    return Todo.fromJSON(todoObject);
  }

  deleteTodo(id) {
    this.__store.delete(id);
  }

  /**
   * @returns {Array<Todo>}
   */
  getCompleted() {
    // @ts-ignore
    const /** @type {Array<TodoObject>} */ list = this.__store.list();
    return list.filter((item) => item.completed).map(Todo.fromJSON);
  }
  /**
   * @returns {Array<Todo>}
   */
  getPending() {
    // @ts-ignore
    const /** @type {Array<TodoObject>} */ list = this.__store.list();
    return list.filter((item) => !item.completed).map(Todo.fromJSON);
  }
  /**
   * @returns {Array<Todo>}
   */
  getAll() {
    // @ts-ignore
    const /** @type {Array<TodoObject>} */ list = this.__store.list();
    return list.map(Todo.fromJSON);
  }

  logList() {
    this.__logger.log(JSON.stringify(this.getAll()));
  }
}
