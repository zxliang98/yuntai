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
}
