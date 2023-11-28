/*
 * @Descrption: 专辑详情
 * @Author: wanzp
 * @Date: 2022-07-31 13:19:17
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-07-31 15:17:23
 */
import { defineComponent, onMounted } from 'vue';
import albumDetail from './album-detail.service';

import { formatDate, formatDuration } from '../../core/utils';

export default defineComponent({
  name: 'AlbumDetail',
  setup() {
    onMounted(() => {
      albumDetail.query();
    });

    return {
      albumDetail,
      formatDate,
      formatDuration,
    };
  },
});
