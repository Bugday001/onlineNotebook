<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MdEditor from './components/MdEditor.vue'
</script>

<template>
  <h1>莫失莫忘</h1>
  <div class="editor">
    <MdEditor msg="Vite + Vue"/>
  </div>
  
</template>

<style scoped>
.editor{
  margin: 40px;
  padding: 40px;
  height: 600px;
}

h1 {
  /* padding-left: 100px; */
  padding: 20px 20px;
  margin-left: 50px;
  border-left: 10px solid #ed515191;background-color: rgba(208, 208, 208, 0);
  font-size: 50px;
  line-height: 40px;
  color: cornflowerblue;
  font-weight: bold;
}
</style>
