<template>
  <div>
    <h2 @click="changeTitle">{{text}}</h2>
    <button @click="counter">{{i}}</button>
  </div>
</template>

<script>
export default {
  name:'CounterButton',
  props:{
    text: String
  },
  data(){
    return{
      i: 0,

    }
  },
  methods:{
    onMouseOver(){
      console.log('Hover on btn')
    },
    counter(){
      this.i++
    },
    changeTitle(){
      this.$emit('change', 'text changed')
    }
  },
  mounted() {
    const btn = this.$el.querySelector('button')
    if (btn){
      btn.addEventListener('mouseover', this.onMouseOver)
    }
    console.log('mounted')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    // if (btn){
    //   btn.removeEventListener('mouseover', this.onMouseOver)
    // }
  },
  destroyed() {
    console.log('destroyed')
  }


  // created() {
  //   this.i = 1
  // },

}
</script>
<style>

</style>