class Token {
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
    localStorage.setItem("token", token)
  }
}

const token = new Token();
export default token;