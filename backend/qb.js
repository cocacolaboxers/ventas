var QuickBooks = require('node-quickbooks');

module.exports = new QuickBooks(
    'AByvgAe44fVPRkObL1rT9vg7BLZEkzTGFHxF2iv5v5OavDSE4D',
    'CjnWd2CAov5sjbM3Gk0Q3LkmOGiCoIibsXDOpfZF',
    'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..Udw_PnLguAG507_m82ettw.f73Fl6mAxDKN-0ELB4LDiuvuLzi0RA4u1stY-bSredBCToB86G3ICpvxBwNUFzoKGu_PzpW-jqCYM2VWBO9x8EA-CkguEXkKsungOm7RmlVnMIJJwh3ME4bfQfT8sc0-9-HCHjRsUl-1w2PnJBmCYELESAcHBgJHmJpjYsKBOiG3vhoUxQJ7vGGEZwqC35n2Vllzx-WCuoWa3XTW6GdaSjlDll7Yslr0p9T2nbvphCZjzmEtPfELs1S3I_iAeCP7V1YOY2ozqmgvtf7tjF-uHKVDh69-3rhsoTFk-x-fZIBxQDxSxIQPI7JJcsKkGhi7p6lXbXyowlWHz4aiNlF6TNhuFAK4qMSIf4MqAymSxT2GIxUoI6iaJwjx2i1FpJRSvemizz_clh5emMq4mZcyTJXTR_zOQ4Ee6E5s49igHIwMW7NMRd-Z7Mp-D2Q-WeD8pH3xM3RApSMnJ267WofmZtgq_CZe3KUPmXWVRbluq7xlQ7poVn-SREi9Uccs06NonYgAfdc-pHsAB_xPGXaE0K1RLL_A2IU3ucJUsYrHqlGJYzzb0V-eoegtebdNIxtY0t2YCbnrGZ9P2XPZ5aJfZzBUqb3eyrtQh3TKwTyEJHqrHWCIWbmeqjYCItbJRqli4BmVRTwgByu_AHKlcLbKlq1tkcZLcLWbOJBy_4Smab_NsyFRRxbV78MXJAdbteabZHEjFHfGfiuVUcOglW75TXWuZJSfkCeuNcK3rHiE0EI.Qnvpyk16TekgXPPLbaCglg',
    false, // no token secret for oAuth 2.0
    '4620816365043257540',
    true, // use the sandbox?
    true, // enable debugging?
    47, // set minorversion, or null for the latest version
    '2.0', //oAuth version
    'AB115950527221L38gPicMVSk2LcGXI4m2QfEDmpyG3jgwBf7I'
);
