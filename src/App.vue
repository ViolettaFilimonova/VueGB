<template>
  <div id="app">
    <header>
      <nav>
<!--        <a href="dashboard">Dashboard</a>/-->
<!--        <a href="about">About</a>/-->
<!--        <a href="notfound">Not found</a>-->
      </nav>
      <router-view/>
    </header>


<!--    <CounterButton :text="text" v-on:change="updateTitle($event)"  v-if="show"/>-->
<!--    <button @click="show=!show">show/hide</button>-->

<!--  <main>-->

<!--    <PaymentDisplay :items="currentElement" v-if="page === 'dashboard'"  />-->
<!--    <ListPagination :length="12" :cur="cur" :n="n" @changePage="changePage" v-if="page === 'about'"/>-->
<!--    <NewCalculator msg="Calculator" v-if="page === 'notfound'"></NewCalculator>-->
<!--  </main>-->

  </div>
</template>

<script>

import NewCalculator from "@/components/NewCalculator";
// import SecondCalculator from "@/components/SecondCalculator";
//import CounterButton from "@/components/CounterButton"
import PaymentDisplay from "@/components/PaymentDisplay";
// import AddPaymentVue from "@/components/AddPaymentVue";
import ListPagination from "@/components/ListPagination";
import { mapMutations, mapGetters } from "vuex"


export default {
  name: 'App',
  components: {
    NewCalculator,
    // CounterButton,
    PaymentDisplay,
    // AddPaymentVue,
    ListPagination
  },
  data(){
    return{
      show: true,
      text: 'Change Text',
      total: 0,
      cur: 1,
      n: 5,
      page: ''
    }
  },
  methods:{
    setPage(){
      this.page = location.pathname.slice(1)
    },
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
  },
  mounted(){
    this.setPage()
    const links = this.$el.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', (event) =>{
        event.preventDefault()
        history.pushState({}, '', link.href)
        this.setPage()
      })
    })
    window.addEventListener('popstate', () =>{
      this.setPage()
    })
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
