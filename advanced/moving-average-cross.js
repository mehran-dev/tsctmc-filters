//   binazirchart.ir و سایت  

true == function () {
    var period1 = 26
    var period2 = 6
    var dlen = 60
    var xb = 0
    var yb = 0
    var dle = 0
    var sum = 0
    for (xb = 0; xb < dlen; xb++) {
        if ([ih]?.[xb]?.QTotTran5J > 0) {
            yb++
        } else { }
    }
    dle = yb
    var sma1 = []; sma1.length = dle
    var sma2 = []; sma2.length = dle
    var ema1 = []; ema1.length = dle
    var ema2 = []; ema2.length = dle
    var closdbs = []; closdbs.length = dle
    yb = dle + 1
    for (xb = 0; xb < dlen; xb++) {
        if ([ih]?.[xb]?.QTotTran5J > 0) {
            yb--
            closdbs[yb] = [ih]?.[xb]?.PDrCotVal
        } else { }
    }
    zr1 = 2 / (period1 + 1)
    zr2 = 2 / (period2 + 1)
    sum = 0
    for (xb = 1; xb <= period1; xb++) {
        sum += closdbs[xb]
    }
    sma1[period1] = sum / period1
    ema1[period1] = sma1[period1]
    for (xb = period1 + 1; xb <= dle; xb++) {
        ema1[xb] = zr1 * (closdbs[xb] - ema1[xb - 1]) + ema1[xb - 1]
    }
    ema1[dle] = Math.round(ema1[dle] * 100) / 100
    sum = 0
    for (xb = dle - period1 + 1; xb <= dle; xb++) {
        sum += closdbs[xb]
    }
    sma1[dle] = sum / period1
    sma1[dle] = Math.round(sma1[dle] * 100) / 100
    sum = 0
    for (xb = 1; xb <= period2; xb++) {
        sum += closdbs[xb]
    }
    sma2[period2] = sum / period2
    ema2[period2] = sma2[period2]
    for (xb = period2 + 1; xb <= dle; xb++) {
        ema2[xb] = zr2 * (closdbs[xb] - ema2[xb - 1]) + ema2[xb - 1]
    }
    ema2[dle] = Math.round(ema2[dle] * 100) / 100
    sum = 0
    for (xb = dle - period2 + 1; xb <= dle; xb++) {
        sum += closdbs[xb]
    }
    sma2[dle] = sum / period2
    sma2[dle] = Math.round(sma2[dle] * 100) / 100
    if (dle >= period2 && ema1[dle - 1] >= ema2[dle - 1] && ema1[dle] < ema2[dle]) {
        (cfield0) = dle
            (cfield1) = ema1[dle]
                (cfield2) = ema2[dle]
        return true
    } else {
        return false
    }
}();