export type TodoObject = {
  id?: String;
  text: String;
  completed: Boolean;
};

export interface TodoInterface {
  set id(value: String): void;
  get id(): String;
  complete(): void;
  pending(): void;
  toJSON(): TodoObject;
}
