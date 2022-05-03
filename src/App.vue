<template>
  <div id="app">

<!--    <NewCalculator msg="Calculator"></NewCalculator>-->
<!--    <CounterButton :text="text" v-on:change="updateTitle($event)"  v-if="show"/>-->
<!--    <button @click="show=!show">show/hide</button>-->

    <div>Total Price = {{getFullPaymentValue}}</div>
    <button @click="show=!show">ADD NEW COST +</button>
    <AddPaymentVue v-if="!show" @onClickSave="addPaymentData($event)"  />
    <PaymentDisplay :items="currentElement"  />
    <ListPagination :length="12" :cur="cur" :n="n" @changePage="changePage"/>

  </div>
</template>

<script>

//import NewCalculator from "@/components/NewCalculator";
// import SecondCalculator from "@/components/SecondCalculator";
//import CounterButton from "@/components/CounterButton"
import PaymentDisplay from "@/components/PaymentDisplay";
import AddPaymentVue from "@/components/AddPaymentVue";
import ListPagination from "@/components/ListPagination";
import { mapMutations, mapGetters } from "vuex"


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
      total: 0,
      cur: 1,
      n: 5,
    }
  },
  methods:{
    ...mapMutations({
      myMutations: 'setPaymentsListData'
    }),
    changePage(page){
      this.cur = page
      this.$store.dispatch('fetchData', page)
    },
    addPaymentData(data){
      this.paymentList.push(data)
    },
    updateTitle(ev){
      this.text = ev
    },
  },
  computed:{
    currentElement(){
      return this.getPaymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    },
    ...mapGetters(['getFullPaymentValue', 'getPaymentList'])
  },
 created() {
     this.$store.dispatch('fetchData',this.cur)

    // this.paymentList = this.fetchData()
    // this.$store.commit('setPaymentsListData', this.fetchData())
    // this.myMutations(this.fetchData())
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
