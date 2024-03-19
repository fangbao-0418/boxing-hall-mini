const request = require("../utils/request.js");

export const getOrderList = () => {
  return request.get('/customer/order');
}

export const getKnowledge = () => {
  return request.get('/customer/knowledge/list');
}