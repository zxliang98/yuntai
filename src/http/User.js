export default class User {
  /**
   * 用户登录
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static userLogin (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: `/user/userLogin`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
  }
  /**
   * 获取用户信息
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static getUserInfo (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/user/userInfo`
    })
  }
}
