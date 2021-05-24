<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-scrollbar .el-scrollbar__wrap {overflow-x: hidden;}
.el-textarea .el-textarea__inner{
  height: 80px;
  resize: none;
}
</style>
