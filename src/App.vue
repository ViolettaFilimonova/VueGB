<template>
  <div id="app">
    <nav>
      <div class="clickItem" @click="GoToAboutPage">
        <span>Go TO About</span>
      </div>
      <PaymentDisplay v-show="isHomePage" :items.sync="currentElement"  />
      <router-link to="/">Home</router-link>/
      <router-link to="/about">About</router-link>/
      <router-link to="/notfound">NotFound</router-link>
    </nav>
  <router-view/>
  </div>
</template>
<script>
import PaymentDisplay from "@/components/PaymentDisplay";
import { mapGetters } from 'vuex';


  export default {
    name: 'App',
    components:{
      PaymentDisplay
    },

    data(){
      return{
        page: '',
        show: true,
        text: 'Change Text',
        paymentList: [],
        total: 0,
        cur: 1,
        n: 5,
      }
    },
    methods:{
      GoToAboutPage(){
        this.$router.push({
          name:'about'
        })
      },
      setPage(){
       this.page = location.pathname.slice(1)
      },
      // ...mapMutations({
      //   myMutations: 'setPaymentsListData'
      // }),
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
      ...mapGetters({
        getPaymentList: 'getPaymentList'
      }),
      currentElement(){
        return Array.isArray(this.getPaymentList) && this.getPaymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
      },
      isHomePage() {
        return (this.$route && String(this.$route.name) === 'home');
      }
    },
    created() {
      this.$store.dispatch('fetchData', this.cur)
    },

    mounted() {
      this.setPage()
      const links = this.$el.querySelectorAll('a')
      links.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault()
          history.pushState({}, '', link.href)
          this.setPage()
        })
      });
      window.addEventListener('popstate', ()=>{
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
