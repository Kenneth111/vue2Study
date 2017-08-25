<template>
  <div>
    <input type="text" v-model="msg">
    <br>
    <child :inputValue="msg" v-on:xxx="abc"></child>
  </div>
</template>
<style>

</style>
<script>
  import child from './childCom.vue'
  export default{
    data(){
      return {
        msg: '请输入'
      }
    },
    components: {
      child
    },
    methods: {
        abc: function(data){
            console.log("message received: " + data);
            this.msg = data;
        }
    }
  }
</script>