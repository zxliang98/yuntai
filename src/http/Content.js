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

  /**
   * 删除公告
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static DeleteNotice (that, params = {}) {
    return that.$http({
      that,
      method: 'delete',
      data: params,
      url: `/notice`
    })
  }

  /**
   * 获取景区列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentViewList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/viewList`
    })
  }
  /**
   * 获取单个景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentView (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/view`
    })
  }

  /**
   * 删除景区
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static DeleteView (that, params = {}) {
    return that.$http({
      that,
      method: 'delete',
      data: params,
      url: `/view`
    })
  }

  /**
   * 获取游玩列表
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentPlayList (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/playList`
    })
  }
  /**
   * 获取单个游玩
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static ContentPlay (that, params = {}) {
    return that.$http({
      that,
      method: 'get',
      params: params,
      url: `/play`
    })
  }

  /**
   * 删除游玩
   * @param {Object} that this
   * @param {Object} params 传参
   */
  static DeletePlay (that, params = {}) {
    return that.$http({
      that,
      method: 'delete',
      data: params,
      url: `/play`
    })
  }
}
