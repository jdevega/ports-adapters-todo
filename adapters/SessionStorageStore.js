/** @typedef {import('../ports/types/Store').StorePortInterface} StorePortInterface */

import { UUIDGeneratorAdapter } from "./uuidGenerator";

/**
 * @class SessionStorageStoreAdapter
 * @implements {StorePortInterface}
 */
export class SessionStorageStoreAdapter {
  /**
   *
   * @param {String} sessionStorageKey
   * @param {UUIDGeneratorAdapter} idGenerator
   */
  constructor(sessionStorageKey, idGenerator) {
    this.__store = sessionStorage;
    this.__sessionStorageKey = sessionStorageKey;
    this.__idGenerator = idGenerator;
  }

  save(item) {
    const list = this.list();
    const newItem = { ...item, id: this.__idGenerator.generate() };
    this.__store.setItem(
      this.__sessionStorageKey,
      JSON.stringify([...list, newItem])
    );
    return newItem;
  }

  get(id) {
    return this.list().find((item) => item.id === id);
  }

  update(id, data = {}) {
    const item = this.get(id);
    const updatedItem = { ...item, ...data };
    const newList = this.list().map((item) =>
      item.id === id ? updatedItem : item
    );
    this.__saveList(newList);
    return updatedItem;
  }

  list() {
    return JSON.parse(this.__store.getItem(this.__sessionStorageKey));
  }

  delete(id) {
    const newList = this.list().filter((item) => item.id !== id);
    this.__saveList(newList);
  }

  __saveList(list) {
    this.__store.setItem(this.__sessionStorageKey, JSON.stringify(list));
  }
}
