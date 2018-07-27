import Http from '../utils/http'
export default {
  newsNotice(){
    return Http.get("/api/msgCounts_Newsnotice.rm")
  }

}