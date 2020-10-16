<template>
  <div>
    <h1>员工管理</h1>
    <button @click="addAction">添加员工</button>
  </div>
</template>

<script>
export default {
  methods: {
      addAction(){
        this.$router.push({name: 'add-acount'});
      }
  }
}
</script>

<style>

</style>