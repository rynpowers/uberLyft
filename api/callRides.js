const callUber = require('./uber');
const callLyft = require('./lyft');

module.exports = () => {
  const start = [40.74215, -73.95886];
  const end = [40.70454, -74.00947];
  return Promise.all([callLyft(start, end), callUber(start, end)]);
};
