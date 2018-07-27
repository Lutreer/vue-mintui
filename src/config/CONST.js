const SERVERS = {
  DEVELOPMENT: {
    AA: 'http://api.local.com/api1'
  },
  TEST: {
    AA: 'http://api.test.com/api1'
  },
  PRODUCTION: {
    AA: 'http://api.online.com/api1'
  }
  
}
const CONSTS = {
  LOCALSCORAGE: {
    CERTIFICATION_SUCCESS: 'CERTIFICATION_SUCCESS',
    ACCESS_TOKEN:'token'
  }
}

CONSTS.SERVERS = SERVERS[process.env.NODE_ENV.toUpperCase().toString()]
export default CONSTS
