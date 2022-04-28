<template>
  <div id="app">

<!--    <NewCalculator msg="Calculator"></NewCalculator>-->
<!--    <CounterButton :text="text" v-on:change="updateTitle($event)"  v-if="show"/>-->
<!--    <button @click="show=!show">show/hide</button>-->


    <button @click="show=!show">ADD NEW COST +</button>
    <AddPaymentVue v-if="!show" @onClickSave="addPaymentData($event)"  />
    <PaymentDisplay :items="currentElement"  />
    <ListPagination :length="paymentList.length" :cur="cur" :n="n" @changePage="changePage"/>

  </div>
</template>

<script>

//import NewCalculator from "@/components/NewCalculator";
// import SecondCalculator from "@/components/SecondCalculator";
//import CounterButton from "@/components/CounterButton"
import PaymentDisplay from "@/components/PaymentDisplay";
import AddPaymentVue from "@/components/AddPaymentVue";
import ListPagination from "@/components/ListPagination";


export default {
  name: 'App',
  components: {
    // NewCalculator,
    // CounterButton,
    PaymentDisplay,
    AddPaymentVue,
    ListPagination
  },
  data(){
    return{
      show: true,
      text: 'Change Text',
      paymentList: [],
      total: 0,
      cur: 1,
      n: 5,
    }
  },
  methods:{
    changePage(page){
      this.cur = page
    },
    addPaymentData(data){
      this.paymentList.push(data)
    },
    updateTitle(ev){
      this.text = ev
    },
    fetchData(){
      return [
        {
          date: "06.06.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "07.07.2022",
          category: "Transport",
          value: 69,
        },
        {
          date: "08.08.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "07.07.2022",
          category: "Transport",
          value: 69,
        },
        {
          date: "08.08.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "08.08.2022",
          category: "Food",
          value: 169,
        },
        {
          date: "08.08.2022",
          category: "Food",
          value: 19,
        },
        {
          date: "08.08.2022",
          category: "Food",
          value: 111,
        },
      ]
    }
  },
  computed:{
    currentElement(){
      return this.paymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    },
  },
  created() {
    this.paymentList = this.fetchData()
    this.$store.commit('setPaymentsListData', this.fetchData())
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
