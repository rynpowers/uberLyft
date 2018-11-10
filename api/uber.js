const axios = require('axios');
const config = require('../secrets')();

const root = 'https://api.uber.com/v1.2/estimates/price?';

const requestUrl = (start, end) => {
  return `${root}start_latitude=${start[0]}&start_longitude=${
    start[1]
  }&end_latitude=${end[0]}&end_longitude=${end[1]}`;
};

const requestUber = (start, end) => {
  return axios
    .get(requestUrl(start, end), {
      headers: {
        Authorization: config.uberConfig,
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US',
      },
    })
    .then(res => {
      return res.data.prices.map(
        ({ display_name, distance, high_estimate, low_estimate, duration }) => {
          return {
            type: display_name,
            distance,
            max: high_estimate,
            min: low_estimate,
            time: duration,
          };
        }
      );
    })
    .catch(e => console.log(e));
};

module.exports = requestUber;
