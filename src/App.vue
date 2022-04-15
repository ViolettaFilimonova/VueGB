<template>
  <div id="app">

    <NewCalculator msg="Calculator"></NewCalculator>
    <SecondCalculator text="SecondCalculator"></SecondCalculator>

  </div>
</template>

<script>

import NewCalculator from "@/components/NewCalculator";
import SecondCalculator from "@/components/SecondCalculator";


export default {
  name: 'App',
  components: {
    NewCalculator,
    SecondCalculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
