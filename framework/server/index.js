import express from "express";
import bodyParser from "body-parser";
import { FileLoggerAdapter } from "../../adapters/FileLoggerAdapter.js";
import { MemoryStoreAdapter } from "../../adapters/MemoryStore.js";
import { UUIDGeneratorAdapter } from "../../adapters/UUIDGenerator.js";
import { Application } from "../../application/Application.js";
import path from "node:path";

const server = express();
const PORT = 3000;
const application = new Application({
  logger: new FileLoggerAdapter(path.join(process.cwd(), "server.log")),
  store: new MemoryStoreAdapter(new UUIDGeneratorAdapter()),
});

server.use(bodyParser.json());

server.get("/api/todo", (req, res) => {
  res.json(application.getAll());
});

server.post("/api/todo", (req, res) => {
  const todo = application.addTodo(req.body.text);
  application.log(
    `Todo item with text "${req.body.text}" created with id ${todo.id} .`
  );
  res.json(todo.toJSON());
});

server.post("/api/todo/:id/complete", (req, res) => {
  const {
    params: { id },
  } = req;
  const message = `Todo item with id "${id}" completed.`;
  application.markTodoAsCompleted(id);
  application.log(message);
  res.send({ message });
});

server.post("/api/todo/:id/pending", (req, res) => {
  const {
    params: { id },
  } = req;
  const message = `Todo item with id "${id}" is pending.`;
  application.markTodoAsPending(id);
  application.log(message);
  res.send({ message });
});

server.get("/api/todo/pending", (req, res) => {
  res.send(application.getPending());
});

server.get("/api/todo/completed", (req, res) => {
  res.send(application.getCompleted());
});

server.listen(PORT, () =>
  application.log("[SERVER] Up and listening on port " + PORT)
);
