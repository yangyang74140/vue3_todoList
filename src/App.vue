<script setup lang="ts">
import Todo from './views/Todo.vue';
</script>

<template>
  <div class="mainStyle">
   <Todo/> 
  </div>
</template>

<style lang="scss" scoped>
.mainStyle{
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
