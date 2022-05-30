export interface StorePortInterface {
  save(item: Object): Object;
  get(id: String): Object;
  update(id: String, data: Object): Object;
  list(): Array<Object>;
  delete(id: String): void;
}
