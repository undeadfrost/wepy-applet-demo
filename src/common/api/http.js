import wepy from 'wepy';
import qs from 'qs';
import config from '../config/index';

const http = async (method, url, data = {}, header = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
  let response = await wepy.request({
    url: config.baseUrl + url,
    method: method,
    data: qs.stringify(data),
    header: header
  });
  return response;
};

export default http;
