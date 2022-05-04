<template>
  <div id="app">
    <nav>
      <a href="home">Home</a>/
      <a href="about">About</a>/
      <a href="notfound">NotFound</a>
    </nav>
    <main>
      <home-view v-if="page==='home'"/>
      <about-view v-if="page==='about'"/>
      <not-found v-if="page==='notfound'"/>
    </main>
  </div>
</template>
<script>
import HomeView from "@/views/HomeView"
import AboutView from "@/views/AboutView";
import NotFound from "@/views/NotFound";
  export default {
    name: 'App',
    components: {NotFound, HomeView, AboutView},
    data(){
      return{
        page: ''
      }
    },
    methods:{
      setPage(){
       this.page = location.pathname.slice(1)
      }
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
