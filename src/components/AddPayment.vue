<template>
  <AddPaymentVue />
</template>
<script>
import AddPaymentVue from "@/components/AddPaymentVue";
export default {
    components:{
      AddPaymentVue
    },
     mounted() {
       const paymentVue = this.$children.find(comp => comp.$options.name === 'AddPaymentVue');
       if (paymentVue) {
         paymentVue.$emit('formData', {
           category: this.$route.params.slug,
           value: this.$route.query.value,
         })
       }
     },
}
</script>
