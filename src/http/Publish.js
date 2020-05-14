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
   * 发布游玩
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

  /**
   * 编辑公告
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static UpdateNotice (that, params = {}) {
    return that.$http({
      that,
      method: 'put',
      data: params,
      url: `/notice`
    })
  }

  /**
   * 编辑景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static UpdateView (that, params = {}) {
    return that.$http({
      that,
      method: 'put',
      data: params,
      url: `/view`
    })
  }

  /**
   * 编辑游玩
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static UpdatePlay (that, params = {}) {
    return that.$http({
      that,
      method: 'put',
      data: params,
      url: `/play`
    })
  }
}
