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
    </div>
    {{err}}
    <h2>Result = {{result}}</h2>

    <input v-model="checked" type="checkbox">Отобразить экранную клавиатуру
    <div v-show="checked" class="numbers">
      <button  v-for="(item, i) in numbers" @click="numb(item, num)" :key="i" >{{item}}</button>
      <button @click="clean(num)">delete</button>
     <div>
       <input v-model="num" type="radio" name="operand" value="true">
       <label >Операнд1</label>
       <input v-model="num" type="radio" name="operand" value="false">
       <label >Операнд2</label>
     </div>
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
      num: " ",
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
      this.result = Number(this.operand1) + Number(this.operand2)
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
    clean(value){
      let str;
      if (value === 'true') {
        str = this.operand1.slice(0, -1)
        this.operand1 = str
      }else{
         str = this.operand2.slice(0, -1)
        this.operand2 = str
      }
    },
    numb(item, value){
      if (value === 'true') {
        this.operand1 += item
      }else if (value === ''){
        this.operand1 += item
      }
      else{
        this.operand2 += item
      }
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
