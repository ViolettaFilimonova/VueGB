<template>
  <div>

        <button>1</button>
        <button>2</button>

  </div>
</template>
<script>
export default {
  name:'ListPayment',
  props:{
    items: {
      type: Array,
      default: ()=>[]
    },
    total: Number,
    item: Number,
  },
  data(){
    return{
      amount: null,
      pageList: 3,
      page: 1,
      currentPage:1,

    }
  },
  methods:{
    getElements(){
      document.body.querySelectorAll('button')
      this.items.map((i) => console.log(i))
    }
  },
}
</script>