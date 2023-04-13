// import { ref } from 'vue';
import { it, describe, expect, beforeEach } from "vitest";
import { userTodoStore } from "./todo";
import { setActivePinia, createPinia } from "pinia";

describe("todoStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("add todoItem", () => {
    const todoStore = userTodoStore();
    const todo = todoStore.addTodo("test");
    expect(todoStore.todos[0]).toEqual(todo);
  });

  it("reverse command", () => {
    const todoStore = userTodoStore();
    todoStore.addTodo("reverse:heihei");
    expect(todoStore.todos[0].title).toBe("iehieh");
  });

  it("remove todoItem", () => {
    const todoStore = userTodoStore();
    const todo = todoStore.addTodo("name");
    todoStore.removeTodo(todo.id);
    expect(todoStore.todos.length).toBe(0);
  });
});
