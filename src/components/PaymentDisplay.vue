<template>
  <div class="paymentList" >
    <div class="paymentItem" v-for="(item, index) in items" :key="index">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name:'PaymentDisplay',
  props:{
    items: {
      type: Array,
      default: ()=>[]
    }
  },
  data(){
    return{

    }
  }
}
</script>