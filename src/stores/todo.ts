import { ref } from "vue";
import { defineStore } from "pinia";

interface Todo {
  title: string;
  id: number;
}

let id = 1;

export const userTodoStore = defineStore("todo", () => {
  let todos = ref<Todo[]>([]);

  function addTodo(title: string) {
    if (title.startsWith("reverse:")) {
      title = title.slice(8).split("").reverse().join("");
    }
    const todo = {
      title,
      id: id++,
    };
    todos.value.push(todo);
    return todo;
  }

  function removeTodo(id: Todo["id"]) {
    todos.value = todos.value.filter((item) => {
      return item.id !== id;
    });
  }

  return {
    todos,
    addTodo,
    removeTodo,
  };
});
