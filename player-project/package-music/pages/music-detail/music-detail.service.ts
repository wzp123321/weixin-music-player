import { BehaviorSubject, Observable } from 'rxjs';
import { FGetQueryParam } from '@/core/token';
import { ref } from 'vue';
import musicService from '../../views/home/components/play-controller/pc.service';
import { getRequest } from '@/services/request';
import { AD_IMusicVO } from '../artist/artist-detail/services/artist-detail-api';

enum EPath {
  查询歌曲详情 = '/song/detail',
}

class MusicDetailService {
  //#region
  private _musicDetail$ = new BehaviorSubject<AD_IMusicVO>({
    name: '',
    id: 0,
    ar: [],
    alia: [],
    al: {
      id: 0,
      name: '',
      picUrl: '',
      pic_str: '',
      pic: 0,
    },
    dt: 0,
    copyright: 0,
    mark: 0,
    publishTime: 0,
  });

  public get musicDetail$() {
    return this._musicDetail$ as unknown as Observable<AD_IMusicVO>;
  }
  //#endregion

  //#region
  private _lyric = ref<string>('');

  public get lyric(): string {
    return this._lyric.value;
  }
  //#endregion

  async query() {
    const id = FGetQueryParam('id') as string;
    const res = await getRequest(EPath.查询歌曲详情, { ids: id });
    if (res?.songs) {
      this._musicDetail$.next(res?.songs?.[0]);
      this.queryLyric();
    }
  }

  async queryLyric() {
    const id = Number(FGetQueryParam('id'));
    const res = await musicService.getLyricById({ id });
    console.log(res);
  }
}

export default MusicDetailService;
