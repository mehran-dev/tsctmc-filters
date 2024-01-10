true == function () {
    var periodShort = 5
    var periodLong = 22

    var shortComputedVolume = 0;
    var longComputedVolume = 0;
    let MIN_EXPECTED_VOLUME = 9000000 // ~ 3M


    for (let i = 0; i <= periodShort; i++) {

        // zero will be ignored 
        if ([ih]?.[i]?.QTotTran5J) {


            shortComputedVolume += [ih][i].QTotTran5J;
        }
    }

    for (let j = 0; j <= periodLong; j++) {

        // zero will be ignored 
        if ([ih]?.[j]?.QTotTran5J) {


            longComputedVolume += [ih][j].QTotTran5J;
        }
    }






    if (
        shortComputedVolume > MIN_EXPECTED_VOLUME &&
        shortComputedVolume > 12 * periodShort * (bvol) &&
        (bvol) > 10000
        &&
        longComputedVolume / periodLong < 0.5 * shortComputedVolume / periodShort

    ) {
        return true;
    }
    else {
        return false;
    }
}()