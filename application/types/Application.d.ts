import { Todo } from "../../domain/types/Todo";

export interface ApplicationInterface {
  addTodo(text: String): Todo;
  markTodoAsCompleted(id: Number): Todo;
  markTodoAsPending(id: Number): Todo;
  deleteTodo(id: Number);
  getCompleted(): Array<Todo>;
  getPending(): Array<Todo>;
  getAll(): Array<Todo>;
  logList(): void;
}

export type ApplicationAdapters = {
  logger: LoggerAdapter;
  store: StoreAdapter;
};
