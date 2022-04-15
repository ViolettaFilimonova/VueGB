<template>
  <div>
      <h1>{{msg}}</h1>
    <input type="text" v-model.number="operand1">
    <input type="text" v-model.number="operand2">

    <div class="keyboard">
      <button v-on:click="result = operand1 + operand2">+</button>
      <button v-on:click="result = operand1 - operand2">-</button>
      <button @click="result = operand1 / operand2" v-if="operand1 !== 0">/</button>
      <button @click="result = operand1 / operand2" v-else disabled>/</button>
      <button @click="result = operand1 * operand2">*</button>
      <button @click="result = Math.floor(operand1 / operand2)">Целочисленное деление</button>
      <button @click="result = Math.pow(operand1, operand2)">Возведение в степень</button>
    </div>

    <h2>Result = {{result}}</h2>

  </div>
</template>

<script>
export default {
  name: 'NewCalculator',
  props: {
    msg: String
  },
  data(){
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
