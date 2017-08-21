<template>
  <div id="firstCom">
    <el-col :span="10">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="user name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>      
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          pwd: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>