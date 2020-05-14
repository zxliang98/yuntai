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
      url: `/login`
    })
  }
  /**
   * 用户注册
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static userRegister (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: `/register`
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
      url: `/user`
    })
  }
  /**
   * 获取用户信息
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static updateUserInfo (that, params = {}) {
    return that.$http({
      that,
      method: 'put',
      data: params,
      url: `/user`
    })
  }
  /**
   * 获取用户列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static getUserList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/userList`
    })
  }
  /**
   * 删除用户
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static deleteUser (that, params = {}) {
    return that.$http({
      that,
      method: 'delete',
      data: params,
      url: `/user`
    })
  }
}
