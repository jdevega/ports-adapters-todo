/** @typedef {import('../ports/types/Store').StorePortInterface} StorePortInterface*/
/**
 * @class MemoryStoreAdapter
 * @implements {StorePortInterface}
 */
export class MemoryStoreAdapter {
  constructor(idGenerator) {
    this.__store = new Map();
    this.__idGenerator = idGenerator;
  }
  save(item) {
    item.id = this.__idGenerator.generate();
    this.__store.set(item.id, item);
    return item;
  }
  get(id) {
    return this.__store.get(id);
  }
  update(id, data = {}) {
    const item = this.get(id);
    const updatedItem = { ...item, ...data };
    this.__store.set(id, updatedItem);
    return updatedItem;
  }
  list() {
    return [...this.__store.values()];
  }
  delete(id) {
    this.__store.delete(id);
  }
}
