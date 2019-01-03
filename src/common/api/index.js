import http from './http';

export const testRequest = (data) => {
  return http('POST', '/api/video/getSpecialtyVideoByUser', data);
};
