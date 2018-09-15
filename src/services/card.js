import Http from '../utils/http'
export default {
  /**
   * 信用卡列表
   */
  getCreditcardList(){
    return Http.post("/api/creditcard_datas.rm")
  },
  /**
   * 信用卡详情
   */
  getCreditcardDetail(id){
    return Http.post("/api/creditcard_details.rm", {creditcardId: id})
  },
  /**
   * 添加储蓄卡
   */
  addDepositcard(data){
    return Http.post("/api/depositcard_add_sub1.rm", data)
  },
   /**
   * 添加信用卡
   */
  addCreditcard(data){
    return Http.post("/api/creditcard_add_sub.rm", data)
  },
  /**
   * 更新信用卡
   */
  editCreditcard(data){
    return Http.post("/api/creditcard_edit_sub.rm", data)
  },
  /**
   * 删除计划
   */
  delRepaymentplan(id){
    return Http.post("/api/remove_repaymentplan.rm", {repaymentplanId: id})
  },
  /**
   * 收款
   */
  withdraw(data){
    return Http.post("/api/appYee_repayment.rm", data)
  },
  /**
   * 添加还款计划
   */
  addRepaymentplan(data) {
    return Http.post("/api/add_repaymentplan.rm", data)
  },
  getBillsByData(data) {
    return Http.post("/api/get_bill_credit.rm", data)
  },

  /**
   * 手动添加账单
   */
  addBill(data) {
    return Http.post("/api/get_bill_credit.rm", data)
  },
  /**
   * 全部计划
   */
  allPlan(id) {
    return Http.get("/api/repaymentplan_data.rm", {params: {creditcardId: id}})
  },
  /**
   * 计划详情
   */
  planDetail(id) {
    return Http.post("/api/repayment_list.rm", {repaymentplanId: id})
  },
  /**
   * 交易列表
   */
  getDealList(params) {
    return Http.post("/api/getFundTrend.rm", params)
  },
  /**
   * 流水详情
   */
  payRecordDetail(params) {
    return Http.post("/api/payrecord_detils.rm", params)
  }

}