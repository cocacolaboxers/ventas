var QuickBooks = require('node-quickbooks');

module.exports = new QuickBooks(
    'AByvgAe44fVPRkObL1rT9vg7BLZEkzTGFHxF2iv5v5OavDSE4D',
    'CjnWd2CAov5sjbM3Gk0Q3LkmOGiCoIibsXDOpfZF',
    'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..QB81j37YICIBGNDvheS86g.ur1s9VyYZJnmtSWjescavdrNTmfZXAVOEpBuQINv8dAAvs-AxcOfQT4dU9Onvnpr7PWqYs4IyD_7teFlUiv8pG48ocyQIifZCwkgVQ0Ex_2xGzcsMVETVpGQyAdo4LdZFUHmvvJcyvSodTrEV3bIoP6xw7OTCvWMRxYWGJcIU6wBHO8NRGBpAOYwbuFM7ZUwnrUcMptOnEGtGZ-qGCRAa4oSbKZIoKP0kBM9JvLzVy8JBPcNKZGbwX9bbDVMtOa9gDy4wCuXII7At7vNp6kjmhMogsL5RjoNK_q5VTCJi7XEsBgnfx6Uyz3rR7EWg1U5hbKfmp36xqBjiPkesascQbRmlYPn1HV7qQNalmjdho71U_-7gQatSnKGhm9b8bKUunp3zcOnGzmUTvxwofv-rJkXRCCLqFTI8lc5L8gq0m_m6IgW0t-XvGOqyAzO-7B_Dm3lxKIYEgssEOkwESAS-gop11gus49BNeavFn2G9YI9Z3yCj20NYdcqaGcu4_ej-YhUdLy6BBG3sxs27E3vTjuOTzQsvve2WxpWwXrhjd5ehku-l-HWLcD0Ay3eHrAlQPQRVgpc-WA-PIzY5GbDgXJ9G2SYLNOGhZPiOWX91aZkNacmxUeCxY6Qb4mbVhaCQggCQsohJWNczBTiWTDD4HJoHDT43xmWrD2kTF8hNWbQ9_rbQCocxSu-QbXKkrRTNoA16FaEK7ZD-XHecP2DPSk1nSF76mAPpFlUCN7buys._Jd1OiKIkK0jGQRWuPPq_A',
    false, // no token secret for oAuth 2.0
    '4620816365043257540',
    true, // use the sandbox?
    true, // enable debugging?
    47, // set minorversion, or null for the latest version
    '2.0', //oAuth version
    'AB115950527221L38gPicMVSk2LcGXI4m2QfEDmpyG3jgwBf7I'
);
