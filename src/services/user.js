import Http from '../utils/http'
export default {
  login(data){
    return Http.post("/api/login_sub.rm", data)
  },
  logout(){
    return Http.post("/api/logout_sub.rm")
  },
  certificateName(data) {
    return Http.post("/api/certification_sub1.rm", data)
  },
  identityInfo() {
    return Http.get("/api/identity_Info.rm")
  },
  getNewSumProfits() {
    return Http.post("/api/get_NewSumProfits.rm")
  }

}