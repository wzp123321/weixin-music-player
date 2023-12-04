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
    获取MV评论: '/comment/mv',
    查询歌曲详情: '/song/detail',
    查询歌词: '/lyric',
    获取专辑详情: '/album',
    音乐是否可用: '/check/music', // /check/music?id=33894312
    '获取音乐 url': '/song/url', // /song/url?id=405998841,33894312
  },
  搜索: {
    搜索建议: '/search/suggest', // 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
    搜索多重匹配: '/search/multimatch', // 调用此接口 , 传入搜索关键词可获得搜索结果
    默认搜索关键词: '/search/default',
    '热搜列表(简略)': '/search/hot',
    '热搜列表(详细)': '/search/hot/detail',
    搜索: '/search', // ?keywords= 海阔天空
  }
}