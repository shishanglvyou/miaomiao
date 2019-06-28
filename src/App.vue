<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
