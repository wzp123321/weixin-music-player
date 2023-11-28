import { getRequest } from '@/services/request';

import { AlbumRes } from './album-detail-api';

const albumDetailService = {
  /**
   * 获取专辑详情
   * @param params
   * @returns
   */
  async getAlbumDetailById(params: { id: number }): Promise<AlbumRes> {
    const url = '/album';
    const res: AlbumRes = await getRequest(url, params);
    return res;
  },
};

export default albumDetailService;
