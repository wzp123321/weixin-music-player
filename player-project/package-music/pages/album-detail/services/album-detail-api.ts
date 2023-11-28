import { ArtistVO } from '../../artist/artist-detail/services/artist-detail-api';
import { Common_IMusic } from '../../../services/common-api/common-api';

export interface AlbumRes {
  code: number;
  resourceState: boolean;
  songs: Common_IMusic[];
  album: AlbumVO;
}

export interface AlbumVO {
  paid: boolean;
  onSale: boolean;
  mark: number;
  companyId: number;
  blurPicUrl: string;
  commentThreadId: string;
  artists: ArtistVO[];
  alias: string[];
  copyrightId: number;
  picId: number;
  artist: ArtistVO;
  pic: number;
  picUrl: string;
  publishTime: number;
  company: string;
  description: string;
  status: number;
  name: string;
  id: number;
  type: string;
  picId_str: string;
  info: {
    commentThread: {
      id: string;
      resourceInfo: {
        id: number;
        name: string;
        imgUrl: string;
      };
      resourceType: number;
      commentCount: number;
      likedCount: number;
      shareCount: number;
      hotCount: number;
      resourceTitle: string;
      resourceId: number;
    };
    liked: boolean;
    resourceType: number;
    resourceId: number;
    commentCount: number;
    likedCount: number;
    shareCount: number;
  };
}
