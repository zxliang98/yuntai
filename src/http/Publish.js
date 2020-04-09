export default class Publish {
  /**
   * 发布公告
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static PublishNotice (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: `/notice`
    })
  }

  /**
   * 发布景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static PublishView (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: `/view`
    })
  }

  /**
   * 发布景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static PublishPlay (that, params = {}) {
    return that.$http({
      that,
      method: 'post',
      data: params,
      url: `/play`
    })
  }
}
