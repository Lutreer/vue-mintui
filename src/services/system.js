import Http from '../utils/http'
export default {
  /**
   * 获取通知
   */
  getNotices() {
    return Http.get("/api/msgCounts_Newsnotice.rm")
  },
  /**
   * 轮播图
   */
  getSwiperImg() {
    return Http.get("/api/get_small.rm")
  },
  /**
   * 分润消息
   */
  getMsgInfoList() {
    return Http.get("/api/get_MsgInfo.rm")
  },
  /**
   * 系统消息
   */
  getNewsNoticeList() {
    return Http.get("/api/newsnotice_lists.rm")
  },
  /**
   * 获取验证码
   * @param {*} mobile 
   * @param {*} type 在CONST.js 中有配置
   */
  getSmsCode(mobile, type) {
    return Http.post("/api/identify_othercode.rm", {
      mobile: mobile,
      type: type
    })
  }


}
