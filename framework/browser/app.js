// @ts-nocheck
import { Application } from "../../application/Application.js";
import { ConsoleLoggerAdapter } from "../../adapters/ConsoleLogger.js";
import { SessionStorageStoreAdapter } from "../../adapters/SessionStorageStore.js";
import { UUIDGeneratorAdapter } from "../../adapters/UUIDGenerator.js";
import { css, html, LitElement } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";

const application = new Application({
  logger: new ConsoleLoggerAdapter(),
  store: new SessionStorageStoreAdapter("todos", new UUIDGeneratorAdapter()),
});

const FILTER_NONE = "none";
const FILTER_PENDING = "pending";
const FILTER_COMPLETED = "completed";

class TodoApp extends LitElement {
  static get properties() {
    return {
      filter: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    this.filter = FILTER_NONE;
  }

  static get styles() {
    return css`
      button {
        border-radius: 2px;
        border: 1px solid #b7b7b7;
      }

      button.selected {
        border-color: #7ac665;
      }
    `;
  }

  render() {
    return html`<h1>Todo App</h1>
      <add-todo-form
        @todo:add=${(event) => this.__addTodo(event.detail)}
      ></add-todo-form>
      <h2>List</h2>
      <div>
        <button
          class=${classMap({ selected: this.filter === FILTER_NONE })}
          @click=${() => (this.filter = FILTER_NONE)}
        >
          All
        </button>
        <button
          class=${classMap({ selected: this.filter === FILTER_PENDING })}
          @click=${() => (this.filter = FILTER_PENDING)}
        >
          Pending
        </button>
        <button
          class=${classMap({ selected: this.filter === FILTER_COMPLETED })}
          @click=${() => (this.filter = FILTER_COMPLETED)}
        >
          Completed
        </button>
      </div>
      <todo-list
        .filter=${this.__filter}
        .rows=${this.__getListItems()}
        @todo:complete=${(event) => this.__completeTodo(event.detail)}
        @todo:pending=${(event) => this.__pendingTodo(event.detail)}
      ></todo-list>`;
  }

  __getListItems() {
    switch (this.filter) {
      case FILTER_COMPLETED:
        return application.getCompleted();
        break;
      case FILTER_PENDING:
        return application.getPending();
      default:
        return application.getAll();
        break;
    }
  }

  __addTodo(text) {
    application.addTodo(text);
    this.requestUpdate();
  }

  __completeTodo(id) {
    application.markTodoAsCompleted(id);
    this.requestUpdate();
  }

  __pendingTodo(id) {
    application.markTodoAsPending(id);
    this.requestUpdate();
  }
}

class AddTodoForm extends LitElement {
  constructor() {
    super();
    this.__form = createRef();
    this.__text = createRef();
  }
  render() {
    return html`
      <form id="create-todo" ${ref(this.__form)}>
        <input type="text" name="text" ${ref(this.__text)} />
        <button @click=${this.__createTodo.bind(this)}>Add Todo</button>
      </form>
    `;
  }

  __createTodo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("todo:add", { detail: this.__text.value.value })
    );
    this.__form.value.reset();
  }
}

class TodoList extends LitElement {
  static get properties() {
    return {
      rows: { type: Array },
    };
  }

  static get styles() {
    return css`
      tr.row {
        text-align: center;
      }
      tr.completed {
        color: #bdbdbd;
      }
    `;
  }

  render() {
    return html`
      <table>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Completed</th>
          <th></th>
        </tr>
        ${this.__renderRows()}
      </table>
    `;
  }

  __renderRows() {
    return this.rows.map(
      ({ id, text, completed }) =>
        html`<tr class="row ${classMap({ completed })}">
          <td>${id}</td>
          <td>${text}</td>
          <td>${completed ? "Yes" : "No"}</td>
          <td>
            <button
              @click=${completed
                ? () =>
                    this.dispatchEvent(
                      new CustomEvent("todo:pending", { detail: id })
                    )
                : () =>
                    this.dispatchEvent(
                      new CustomEvent("todo:complete", { detail: id })
                    )}
            >
              ${completed ? "Mark as pending" : "Mark as completed"}
            </button>
          </td>
        </tr>`
    );
  }
}

customElements.define("todo-app", TodoApp);
customElements.define("add-todo-form", AddTodoForm);
customElements.define("todo-list", TodoList);

document.getElementById("app").replaceWith(document.createElement("todo-app"));
