<template>
  <div class="items">
    <div class="item" @click="onClick(cur-1)">-</div>
    <div  v-for="i in amount" :key="i" @click="onClick(i)" class="item ">
      {{i}}
    </div>
    <div class="item" @click="onClick(cur+1)">+</div>
  </div>
</template>
<script>
export default {
  name:'ListPagination',
  props:{
   length: Number,
    n: Number,
    cur: Number
  },
  data(){
    return{
      pageList: 3,
      page: 1,
      currentPage:1,

    }
  },
  computed:{
    amount(){
      return Math.ceil(this.length/this.n)
    }
  },
  methods:{
    onClick(page){
      if (page < 1 || page > this.amount){
        return
      }
      this.$emit('changePage', page)
    }
  }
}
</script>

<style>
.items{
  display: flex;
  justify-content: center;
}
.item{
  padding: 5px;
}
.item:active{
  background-color: beige;
}
</style>