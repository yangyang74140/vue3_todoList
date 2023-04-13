<script setup lang="ts">
import { Todo,userTodoStore } from '../stores/todo';

defineProps<{
  todo:Todo
}>() 
const todoStore = userTodoStore()
</script>

<template>
  <div>
    <div>
      {{ todo.title }}
    </div>
    <div>
      <button @click=" todoStore.removeTodo(todo.id)">remove</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
