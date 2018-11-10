const axios = require('axios');
const config = require('../secrets')();

const root = 'https://api.lyft.com/v1/cost?';

const requestUrl = (start, end) => {
  return `${root}start_lat=${start[0]}&start_lng=${start[1]}&end_lat=${
    end[0]
  }&end_lng=${end[1]}`;
};

const requestLyft = (start, end) => {
  return axios
    .get(requestUrl(start, end), {
      headers: {
        Authorization: config.lyftConfig,
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US',
      },
    })
    .then(res => {
      return res.data.cost_estimates.map(
        ({
          ride_type,
          display_name,
          estimated_duration_seconds,
          estimated_distance_miles,
          estimated_cost_cents_min,
          estimated_cost_cents_max,
        }) => {
          return {
            type: ride_type,
            display_name,
            time: estimated_duration_seconds,
            distance: estimated_distance_miles,
            min: estimated_cost_cents_min,
            max: estimated_cost_cents_max,
          };
        }
      );
    })
    .catch(e => console.log(e));
};

module.exports = requestLyft;
