// 请求地址
export const COMMON_REQUEST_PATH = {
  首页: {
    获取Banner: '/banner',
    查询热门歌手列表: '/top/artists',
    获取每日推荐歌曲: '/recommend/songs',
    获取推荐MV: '/personalized/mv'
  },
  歌手: {
    歌手详情: '/artists', //?id=3684
  },
  歌曲: {
    根据id获取MV详情: '/mv/detail',
    获取MV播放地址: '/mv/url',
    获取MV评论: '/comment/mv'
  }
}