// Community.ts
import PATH from '@/constants/path';

const COMMUNITY_ROUTES = [
  {
    path: PATH.community,
    name: 'communityMain',
    component: () => import('@/views/community/CommunityMain.vue'),
    meta: { headerVariant: 'header-red' },
  },
  {
    path: PATH.communityFree,
    name: 'free',
    component: () => import('@/views/community/FreeCommunity.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.communityDetailFree,
    name: 'freeCommunityDetail',
    component: () => import('@/views/community/FreeCommunityDetail.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.communityMissing,
    name: 'missingCommunity',
    component: () => import('@/views/community/MissingCommunity.vue'),
    meta: { headerVariant: 'header-blue' },
  },
  {
    path: PATH.communityDetailMissing,
    name: 'freeCommunity',
    component: () => import('@/views/community/MissingCommunityDetail.vue'),
    meta: { headerVariant: 'header-blue' },
  },
];
export default COMMUNITY_ROUTES;
