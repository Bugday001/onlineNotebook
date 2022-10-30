<template>
  <v-md-editor v-model="text" height="100%" @save="save"></v-md-editor>
</template>

<script>
import { getContext, upLoad } from '../foundation/file-api'
import Message from './../libs/myMessage/components/message.js';

export default {
  data() {
    return {
      text: '', // 修改返回text即可更改
    };
  },
  mounted() {
    getContext().then((res) => {
        this.text = res.data;
		    // console.log(res)
	    }).catch((res) => {
            // console.log(res)
        })
  },
  methods: {
    save(text, html) {
      let params = ["none", text];
      upLoad(params).then((res) => {
		    Message.success({message: '保存成功！'});
	    }).catch((res) => {
        Message.warning({message: '保存失败！'});
        })
    },
  }
};
</script>

<style scoped>
</style>