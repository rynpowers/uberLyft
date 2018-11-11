const callUber = require('./uber');
const callLyft = require('./lyft');

module.exports = async () => {
  const start = [40.74215, -73.95886];
  const end = [40.70454, -74.00947];
  const [lyft, uber] = await Promise.all([
    callLyft(start, end),
    callUber(start, end),
  ]);

  const uberOptions = {
    UberPool: 0,
    UberX: 1,
    UberXL: 2,
    Black: 3,
    'Black SUV': 4,
  };
  const lyftOptions = {
    lyft_line: 0,
    lyft: 1,
    lyft_plus: 2,
    lyft_lux: 3,
    lyft_luxsuv: 4,
  };

  const uberResults = Array(Object.keys(uberOptions).length).fill(null);
  const lyftResults = Array(Object.keys(lyftOptions).length).fill(null);

  uber.forEach(ride => {
    const index = uberOptions[ride.type];
    uberResults[index] = ride;
  });

  lyft.forEach(ride => {
    const index = lyftOptions[ride.type];
    lyftResults[index] = ride;
  });

  return [lyftResults, uberResults];
};
