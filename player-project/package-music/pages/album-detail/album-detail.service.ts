import { ref } from 'vue';
import { FGetQueryParam } from '@/core/token';
import infoService from './services/album-detail-service';

import { AlbumVO } from './services/album-detail-api';
import { Common_IMusic } from '../../services/common-api/common-api';

/*
 * @Descrption: 专辑详情服务
 * @Author: wanzp
 * @Date: 2022-07-31 13:20:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-07-31 15:17:09
 */
class info {
  //#region
  private _info = ref<AlbumVO>();

  private _songs = ref<Common_IMusic[]>([]);

  public get info(): AlbumVO {
    return this._info.value as AlbumVO;
  }
  public get songs(): Common_IMusic[] {
    return this._songs.value;
  }
  //#endregion
  //#region
  async query() {
    try {
      const id = FGetQueryParam('id');
      const res = await infoService.getAlbumDetailById({ id: Number(id) });
      if (res?.code === 200) {
        this._info.value = res?.album;
        this._songs.value = res?.songs;
      } else {
        this._songs.value = [];
      }
    } catch (error) {
      this._songs.value = [];
    }
  }
  //#endregion
}

export default new info();
