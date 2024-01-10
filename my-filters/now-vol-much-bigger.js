// حجم در ایکس روز 
// حجم مبنا 
// میانگین قیمت 
//  واریانس و انحراف معیار قیمت 
//bvol == فکر کن میشه حجم مبنا 

true == function () {
    var period;
    var computedVolume = 0;

    let MIN_EXPECTED_VOLUME = 30000000

    for (period = 0; period <= 2; period++) {

        // zero will be ignored 
        if ([ih]?.[period]?.QTotTran5J) {


            computedVolume += [ih][period].QTotTran5J;
        }
    }




    if (
        computedVolume > MIN_EXPECTED_VOLUME &&
        computedVolume > 100 * (bvol) &&
        (bvol) > 10000

    ) {
        return true;
    }
    else {
        return false;
    }
}()