<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import {userTodoStore} from '../stores/todo';
import { ref } from 'vue';

const todoStore =userTodoStore();
let newValue= ref("")

</script>

<template>
  <div>
    <div>todo-list</div>
    <input  v-model="newValue" type="text" @keyup.enter="todoStore.addTodo(newValue) ;newValue=''"> 
    <ul v-for="todo in todoStore.todos" :key="todo.id">
      <li>
        <TodoItem :todo="todo"/>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>
