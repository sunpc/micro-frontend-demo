import store from "./store"

class Shared {

    getMsgCount() {
        const state = store.getState()
        return state.msgCount
    }
    
    setMsgCount(count) {
        store.dispatch({
            type: "set",
            msgCount: count
        })
    }
  }
  
  const shared = new Shared();
  export default shared;