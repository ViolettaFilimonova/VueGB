<template>
  <div class="form-wrapper">
    <PaymentDisplay :items.sync="getPaymentList" />
   <div >
     <input type="text" v-model="date" placeholder="date">
     <select v-model="category" v-if="categoryList">
       <option v-for="(value, ind) in categoryList" :key="ind">{{value}}</option>
     </select>
     <input type="text" v-model.number="value" placeholder="value">
     <button @click="onClickSave">Save</button>
   </div>
  </div>
</template>
<script>
import PaymentDisplay from '../components/PaymentDisplay.vue'
import { mapGetters } from 'vuex';

export default {
  name:'AddPaymentVue',
  components: {
    PaymentDisplay
  },
  props: {
  },
  data(){
    return{
      date: '',
      category: '',
      value: '',
    }
  },
  methods:{
    onClickSave(){
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      // this.$emit('onClickSave', data)
      this.$store.commit('addDataToPaymentList', data)
      console.log(data)
    }
  },
  computed:{
    ...mapGetters({
      getPaymentList: 'getPaymentList'
    }),
    getCurrentDate(){
      // const today = new Date()
      // const d = today.getDay()
      // const m = today.getMonth()+1
      // const y = today.getFullYear()
      // return `${d}.${m}.${y}`
      const date =  new Date()
      const day = new Intl.DateTimeFormat('en-GB').format(date);

      return day
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  created(){
    this.$store.dispatch('fetchCategoryList');
    this.$on('formData', (payload) => {
      this.category = payload.category;
      this.value = payload.value;
      this.onClickSave();
      setTimeout(() => {
        this.category = null;
        this.value = null;
      }, 0);
    });
  },
  mounted() {
    if (this.categoryList.length){
      this.category = this.categoryList[0]
    }
  }
}
</script>