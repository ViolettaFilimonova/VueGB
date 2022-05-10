<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home</h1>

    <ListPagination :length="12" :cur="cur" :n="n" />
  </div>
</template>

<script>
import ListPagination from '../components/ListPagination.vue'
import PaymentDisplay from '../components/PaymentDisplay.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ListPagination, PaymentDisplay
  },
  data(){
    return{
      cur: 1,
      n: 5,
    }
  },
  computed: {
    ...mapGetters({
      getPaymentList: 'getPaymentList'
    }),
  },
}
</script>
