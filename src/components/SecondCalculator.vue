<template>
 <div>
   <h1>{{text}}</h1>
   <div class="calculator">
     <div class="line">{{current || '0'}}</div>
     <div @click="clear" class="btn">C</div>
     <div @click="sign" class="btn">+/-</div>
     <div @click="percent"  class="btn">%</div>
     <div @click="share" class="btn operator">/</div>
     <div @click="number(7)" class="btn">7</div>
     <div @click="number(8)" class="btn">8</div>
     <div @click="number(9)" class="btn">9</div>
     <div @click="multiply" class="btn operator">x</div>
     <div @click="number(4)" class="btn">4</div>
     <div @click="number(5)" class="btn">5</div>
     <div @click="number(6)" class="btn">6</div>
     <div @click="minus" class="btn operator">-</div>
     <div @click="number(1)" class="btn">1</div>
     <div @click="number(2)" class="btn">2</div>
     <div @click="number(3)" class="btn">3</div>
     <div @click="plus" class="btn operator">+</div>
     <div @click="number(0)" class="zero btn">0</div>
     <div @click="doth" class="btn">.</div>
     <div @click="equals" class="btn operator">=</div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'SecondCalculator',
  props: {
    text: String
  },
  data(){
    return {
      current:'',
      operator: null,
      clicked: false,
      previous: null
    }
  },
  methods:{
    clear(){
      this.current = ''
    },
    doth(){
      if (this.current.indexOf('.') === -1){
        this.current += '.'

      }
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
          this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    number(num){
      if (this.clicked){
        this.current = ''
        this.clicked = false
      }
      this.current = `${this.current}${num}`

    },
     multiply(){
      this.operator = (a,b) => a * b
      this.setPrevious()
     },
     minus(){
      this.operator = (a,b) => a - b
      this.setPrevious()
     },
    plus(){
      this.operator = (a,b) => a + b
      this.setPrevious()
    },
     share(){
      this.operator = (a,b) => a / b
      this.setPrevious()
     },
    equals(){
      this.current = `${this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)

      )}`;
      this.previous = null
    },
    setPrevious(){
      this.previous = this.current
      this.clicked = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr );
  grid-auto-rows: minmax(50px,auto);
  font-size: 40px;
}
.line{
  grid-column: 1/5;
  background-color: cornflowerblue;
}
.zero{
  grid-column: 1/3;
}
.btn{
  border: 1px solid black;
  background-color: aliceblue;
}
.operator{
  background-color: #ff9674;
  color: white;
}
</style>
