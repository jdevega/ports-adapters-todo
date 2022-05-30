import { v4 as uuidv4 } from "uuid";

export class UUIDGeneratorAdapter {
  constructor() {
    this.__id = uuidv4;
  }

  generate() {
    return this.__id();
  }
}
