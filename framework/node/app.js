#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import InterruptedPrompt from "inquirer-interrupted-prompt";
import { MemoryStoreAdapter } from "../../adapters/MemoryStore.js";
import { UUIDGeneratorAdapter } from "../../adapters/UUIDGenerator.js";
import { Application } from "../../application/Application.js";
import { ConsoleLoggerAdapter } from "../../adapters/ConsoleLogger.js";
// import { FileLoggerAdapter } from "../../adapters/FileLoggerAdapter.js";

InterruptedPrompt.replaceAllDefaults(inquirer);

const application = new Application({
  logger: new ConsoleLoggerAdapter(),
  // logger: new FileLoggerAdapter(),
  store: new MemoryStoreAdapter(new UUIDGeneratorAdapter()),
});

const program = new Command();
program
  .name("todo-cli")
  .description("CLI to create a TODO list")
  .version("0.0.1");

program.action(main);

program.parse();

async function main() {
  while (true) {
    console.clear();
    try {
      const answer = await renderActionsMenu();
      switch (answer.action) {
        case "add":
          const response = await inquirer.prompt([
            {
              type: "input",
              name: "text",
              message: "What do you want to do?",
            },
          ]);
          application.addTodo(response.text);
          break;
        case "list":
        case "list-pending":
        case "list-complete":
          let list;
          if (answer.action === "list") list = application.getAll();
          if (answer.action === "list-pending") list = application.getPending();
          if (answer.action === "list-complete")
            list = application.getCompleted();
          application.logTable(list, ["id", "text", "completed"]);
          await pressKeyToContinue();
          break;
        case "complete":
          const pendingChoices = application
            .getPending()
            .map(({ text, id }) => ({ name: text, value: id }));

          if (pendingChoices.length === 0) {
            await pressKeyToContinue(
              "There are no pending items. Press Enter to go back."
            );
          } else {
            const complete = await inquirer.prompt([
              {
                type: "list",
                message: "Select the item to complete",
                name: "id",
                choices: pendingChoices,
              },
            ]);
            application.markTodoAsCompleted(complete.id);
          }
          break;
        case "pending":
          const completedChoices = application
            .getCompleted()
            .map(({ text, id }) => ({ name: text, value: id }));

          if (completedChoices.length === 0) {
            await pressKeyToContinue(
              "There are no completed items. Press Enter to go back."
            );
          } else {
            const pending = await inquirer.prompt([
              {
                type: "list",
                message: "Select the item to complete",
                name: "id",
                choices: completedChoices,
              },
            ]);
            application.markTodoAsPending(pending.id);
          }
          break;
      }
    } catch (error) {
      application.log(error);
    }
  }
}

function renderActionsMenu() {
  console.log("=== TODO List ===");
  return inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Choose action",
      choices: [
        {
          value: "add",
          name: "Add Todo",
          short: "Add - Press <Esc> to go back to menu",
        },
        {
          value: "list",
          name: "List all",
          short: "List all - Press <Esc> to go back to menu",
        },
        {
          value: "list-pending",
          name: "List pending",
          short: "List pending - Press <Esc> to go back to menu",
        },
        {
          value: "list-complete",
          name: "List complete",
          short: "List pending - Press <Esc> to go back to menu",
        },
        {
          value: "complete",
          name: "Mark as completed",
          short: "Mark as completed - Press <Esc> to go back to menu",
        },
        {
          value: "pending",
          name: "Mark as pending",
          short: "Mark as pending - Press <Esc> to go back to menu",
        },
      ],
    },
  ]);
}

function pressKeyToContinue(message = "Press Enter to go back") {
  return inquirer.prompt([
    {
      type: "input",
      message,
      name: "continue",
    },
  ]);
}
