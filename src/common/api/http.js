import wepy from 'wepy';
import qs from 'qs';

const http = async (method, url, data = {}, header = { 'Content-Type': 'application/x-www-form-urlencoded' }) => {
  let response = await wepy.request({
    url: url,
    method: method,
    data: qs.stringify(data),
    header: header
  });
  return response;
};

export default http;
