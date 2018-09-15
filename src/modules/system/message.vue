<template>
    <div>
        <div class="message" @click="toMessage(1)">
            <img src="../../assets/img/message-dividend.png" alt="">
            <div class="message_box">
                <div class="title">系统消息</div>
                <div class="content">版本更新：请您更新到最新版本</div>
            </div>
        </div>
        <div class="message" @click="toMessage(2)">
            <img src="../../assets/img/message-interaction.png" alt="">
            <div class="message_box">
                <div class="title">分润详情</div>
                <div class="content">点击查看新的分润消息</div>
            </div>
        </div>
        <div class="message" @click="toMessage(3)">
            <img src="../../assets/img/message-system.png" alt="">
            <div class="message_box">
                <div class="title">互动消息</div>
                <div class="content">张**领取了您的红包</div>
            </div>
        </div>

    </div>
</template>
<script>
import SystemService from "../../services/system"
export default {
  name:'system_message',
  methods: {
      toMessage(type) {
          this.$toast("开发中...")
      }
      
  },
  data() {
    return {
        list:[]
    }
  },
  mounted(){
      this.$loading.close()


    //   this.$loading.open({
    //     spinnerType: "triple-bounce"
    //   });
    //   let msg = SystemService.getMsgInfoList() // 分润 type = 1
    //   let notice = SystemService.getNewsNoticeList() // 系统 type =2
    //     Promise.all([msg, notice]).then(res => {
    //         res[0].msgs.forEach(element => {
    //             element["createDate"] = element.sendDate
    //         });
    //         res[1].news.forEach(element => {
    //             element["type"] = 2
    //         });
    //         let message = [...res[0].msgs, ...res[1].news]
    //         this.list = this.$_.orderBy(message, ["createDate"],["desc"])
    //         this.$loading.close()
    //     }).catch(err => {
    //         this.$loading.close()
    //         this.$toast(err[0].msg)
    //     })
  }
};
</script>
<style lang="scss" scope>
    @import "../../assets/css/common.scss";
    .message{
        display: flex;
        align-items: center;
        padding: px2rem(22px) px2rem(32px);
        background-color: #fff;
        border-bottom: 1px solid #f5f5f5;
        img{
            width: px2rem(86px);
        }
        .message_box{
            margin-left: px2rem(30px);
            .title{
                font-size: px2rem(28px);
                color:#3c3c3c;
            }
            .content{
                font-size: px2rem(24px);
                color: #c3c3c3;
            }
        }
    }
    
</style>


