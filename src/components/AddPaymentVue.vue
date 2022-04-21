<template>
  <div class="form-wrapper">

   <div >
     <input type="text" v-model="date" placeholder="date">
     <input type="text" v-model="category" placeholder="category">
     <input type="text" v-model="value" placeholder="value">
     <button @click="onClickSave">Save</button>
   </div>
  </div>
</template>
<script>
export default {
  name:'AddPaymentForm',
  props:{

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
      this.$emit('onClickSave', data)
      console.log(data)
    }
  },
  computed:{
    getCurrentDate(){
      const today = new Date()
      const d = today.getDay()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  }
}
</script>