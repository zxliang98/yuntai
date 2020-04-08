export default class Content {
  /**
   * 获取公告列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentNoticeList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/noticeList`
    })
  }
  /**
   * 获取单个公告
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentNotice (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/notice`
    })
  }
}
