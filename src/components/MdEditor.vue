<template>
  <v-md-editor 
  v-model="text" 
  height="100%" 
  left-toolbar="undo redo | h bold italic strikethrough quote | ul ol table hr | link image code | save"
  @change="change"
  @save="save"
  ></v-md-editor>
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
    let that = this;
    //进入页面获取txt
    getContext().then((res) => {
        this.text = res.data;
	    }).catch((res) => {
        });
    //自动保存定时器
    this.autoSave = setInterval(() => {
     this.save(that.text, "");
   }, 600000);
   //未保存提示
   this.hasSaved = true;
   
   window.addEventListener("beforeunload", function (event) {if(!that.hasSaved) that.beforeUnloadHandler(event)}, false);

  },
  beforeDestroy() {
   clearInterval(this.autoSave);
  },
  onUnmounted() {
    let that = this;
    window.removeEventListener("beforeunload", function (event) {if(!that.hasSaved) that.beforeUnloadHandler(event)}, false);
  },
  methods: {
    /**
     * 保存内容，上传服务器
     * @param {*} text 
     * @param {*} html 
     */
    save(text, html) {
      let params = ["none", text];
      upLoad(params).then((res) => {
		    Message.success({message: '保存成功！'});
        this.hasSaved = true;
	    }).catch((res) => {
        Message.warning({message: '保存失败！'});
        })
    },

    /**
     * 内容发生变化的回调
     * @param {*} text 
     * @param {*} html 
     */
    change(text, html) {
      this.hasSaved = false;
      console.log("unsave");
    },
    /**
     * 关闭页面提示
     */
    beforeUnloadHandler(e) {
      e.preventDefault();
      e.returnValue = "还有内容没保存呢，确定离开？"
      return "还有内容没保存呢，确定离开？"
    }
  }
};
</script>

<style scoped>
</style>