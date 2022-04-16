<template>
  <div>
      <h1>{{msg}}</h1>
    <input type="text" v-model.number="operand1">
    <input type="text" v-model.number="operand2">

    <div class="keyboard">
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')" >/</button>
      <button @click="calculate('*')">*</button>
      <button @click="result = Math.floor(operand1 / operand2)">Целочисленное деление</button>
      <button @click="result = Math.pow(operand1, operand2)">Возведение в степень</button>
      <template>hello world</template>
    </div>
    {{err}}
    <h2>Result = {{result}}</h2>

    <input v-model="checked" type="checkbox">Отобразить экранную клавиатуру
    <div v-show="checked" class="numbers">
      <button  v-for="(item, i) in numbers" @click="numb(item)" :key="i" >{{item}}</button>
      <button @click="cle()">delete</button>

      {{num}}
    </div>

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
      operand1: '',
      operand2: '',
      result: 0,
      numbers:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      num: "0",
      show: false,
      err: '',
      checked:''
    }
  },
  methods:{
    calculate(operation){
      switch (operation){
        case "+":
          this.err = ''
          this.add()
              break;
        case "-":
          this.err = ''
          this.subtract()
          break;
        case "/":
          this.err = ''
          this.divide()
          break;
        case "*":
          this.err = ''
          this.multiply()
          break;
      }
    },
    add(){
      this.result = this.operand1 + this.operand2
    },
    subtract(){
      this.result = this.operand1 - this.operand2
    },
    divide(){
      const  {operand1, operand2} = this
      if (operand1 === 0){
        this.err = 'На ноль делить нельзя'
      }
      this.result = operand1 / operand2
    },
    multiply() {
      this.result = this.operand1 * this.operand2
    },
    cle(){
      let str = this.operand1.slice(0, -1)
      this.operand1 = str
    },
    numb(item){

      this.operand1 += item
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
