<template>
  <div>
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  created(){
    console.log(111);
  },
  beforeRouterEnter(to,from,next){
    console.log(from);
  }
}
</script>

<style>

</style>