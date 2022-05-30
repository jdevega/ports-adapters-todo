/** @typedef {import('./types/Todo').TodoObject} TodoObject*/
/** @typedef {import('./types/Todo').TodoInterface} TodoInterface*/
/**
 * @class Todo
 * @type {TodoObject}
 * @implements {TodoInterface}
 */
export class Todo {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }

  set id(value) {
    this.__id = value;
  }

  get id() {
    return this.__id;
  }

  complete() {
    this.completed = true;
  }

  pending() {
    this.completed = false;
  }

  /**
   *
   * @returns {TodoObject}
   */
  toJSON() {
    return {
      id: this.__id,
      text: this.text,
      completed: this.completed,
    };
  }

  /**
   * Creates an instance of a Todo item from an object
   * @param {TodoObject} obj
   * @returns {Todo} Todo
   */
  static fromJSON(obj) {
    const todo = new Todo(obj.text);
    todo.id = obj.id;
    todo.completed = obj.completed;

    return todo;
  }
}
