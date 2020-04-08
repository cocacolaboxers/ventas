var QuickBooks = require('node-quickbooks');

module.exports = new QuickBooks(
    'AByvgAe44fVPRkObL1rT9vg7BLZEkzTGFHxF2iv5v5OavDSE4D',
    'CjnWd2CAov5sjbM3Gk0Q3LkmOGiCoIibsXDOpfZF',
    'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..DtV4oLNWkgtmcrSeueZ8dA.ltWyARE-NIlHdGTzTjzJz-hnDhePCRe-YOVtORyO8_EBN2uWgLM1CZQ9r6v9NGDrRkG0gLnDRJ-1fg-mcdKeONoU4TVw1Fdij577y4d4nyH78U1GlSBR4BbMb5dq8c6qi711MDC3rQQiHWZl1Rpk6kahwhniDSjNCdhaZHU5OQ6sI_9zwKlMG6UEeDR-JVFK5WmnBmVCxU2AYgGzzTT1QEbNyUW3tYdCBE0gRYhdf3_htEKiKAf1DIM1SBLELq5Su1lGV7xajCS1Zr07hJDgXjdue6wiLQwC4vDE6kQrrAi9okNpxraYeRQ_ishFsMJ3tY_RqJ5b9XGXJHk_aWxnF7oSeUZKWHHf3aTvQBsdnkDTNqkOaIZm2MB2QunjaFElAsESepsT9iGJ7qVvHciRwY-8mPKaSLT9Gcaajhi8Y8qj1ZCWoTuefY0vU0jRGEfvBjL0Nk49VilJ3RvsS7c_mZ5bL3TBUpo12hey4WnIKbP-iUFaTE6V_T4p6P7rg3NqrAOap52SXI-BFTq-AYOIx-YNmGpRpzYLSzNbq8RNnO_JSn8XaWqV0x_ALumkU1Q8EI78C0EIf3PU-AcjeFLg6b_jyNwXpW6yh-krSUh_zoZ4tTWuCzYuQG0D5VKSsWsfP_I_OwelUohfe708OW5V3ESiYdWnuwC8vpVR9OMrn_vZaZzdXLAuUCOKt2QfKKKYFsQk7GLiBfyQBlNWegjAxkXGqlk9BgxaN0fb2DCjUmg.wNzWeSw0tCanFfOLlcOt-w',
    false, // no token secret for oAuth 2.0
    '4620816365043257540',
    true, // use the sandbox?
    true, // enable debugging?
    47, // set minorversion, or null for the latest version
    '2.0', //oAuth version
    'AB115950527221L38gPicMVSk2LcGXI4m2QfEDmpyG3jgwBf7I'
);
