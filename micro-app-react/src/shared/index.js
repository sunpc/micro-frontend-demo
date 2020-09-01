class Shared {
    
    getMsgCount() {
      // 子应用独立运行时，在 localStorage 中获取
      if (!localStorage.getItem("msgCount")) {
          return 0
      }

      return localStorage.getItem("msgCount")
    }
  
    setMsgCount(count) {
      // 子应用独立运行时，在 localStorage 中设置
      localStorage.setItem("msgCount", count);
    }
  }
  
  class SharedModule {
    static shared = new Shared();
  
    /**
     * 重载 shared
     */
    static overloadShared(shared) {
      SharedModule.shared = shared;
    }
  
    /**
     * 获取 shared 实例
     */
    static getShared() {
      return SharedModule.shared;
    }
  }
  
  export default SharedModule;