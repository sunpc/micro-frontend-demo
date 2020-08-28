class Shared {
  /**
   * 获取 Token
   */
  getToken() {
    return localStorage.getItem("token") != null ? localStorage.getItem("token") + "" : ""
  }

  /**
   * 设置 Token
   */
  setToken(token) {
    // 将 token 的值记录在 store 中
    localStorage.setItem("token", token)
  }
}

const shared = new Shared();
export default shared;