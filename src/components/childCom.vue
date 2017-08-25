<template>
  <div>
    <p>{{inputValue}}</p>
    <input type="text" v-model="msg" @change="onInput">
  </div>
</template>
<style>

</style>
<script>
    export default{
        props: {
          inputValue: String
        },
        data () {
            return {
                msg: this.inputValue
            }
        },
        watch: {
            inputValue: function(){
                this.msg = this.inputValue
            }
        },
        methods: {
          onInput: function(){
             this.$emit('xxx', this.msg);
             console.log("message sent: " + this.msg);
          }
        }
    }
</script>