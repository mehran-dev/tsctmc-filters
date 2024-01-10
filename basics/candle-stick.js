true == function () {
    var Candel = "";
    if ((pmin) < (pl) && (pl) == (pf) && (pl) / (pf) < 1.005 && (pf) > (pc) && (pl) > (pc)) {
        Candel = " سنجاقک";
    }
    else if ((pl) > (pf) && ([ih][0].PDrCotVal) < ([ih][0].PriceFirst) && (pl) > [ih][0].PriceFirst && (pf) < [ih][0].PDrCotVal) {
        Candel = " پوشا";
    }
    else if ((pl) > (pf) && ((pl) - (pf)) / ((tmax) - (tmin)) > 0.7 && ((pmax) - (pmin)) / ((tmax) - (tmin)) > 0.6) {
        Candel = " مارابوزو";
    }
    else if ((pl) > (pf) && (((pf) - (pmin)) > (2.5 * ((pl) - (pf)))) && (((pmax) - (pl)) <= 0.5 * body)) {
        Candel = " چکش سفید";
    }
    else if ((((pmax) - (pmin)) > 3 * ((pf) - (pl))) && (((pmax) - (pl)) / (0.001 + (pmax) - (pmin)) > 0.6) && (((pmax) - (pf)) / (0.001 + (pmax) - (pmin)) > 0.6)) {
        Candel = " چکش معکوس";
    }
    else if ((pl) > (pc) && (pmax) > (pmin) && (pl) > (py) && (pmax) > (py) && (pf) >= (py) && (pl) > (pmin) && (pl) > (pf) && (pl) / (pf) < 1.015 && (pl) / (pf) > 1.005 && (pmax) == (pl) && (tno) > 1) {
        Candel = " چکش";
    }
    else if ((pl) > (pf) && (pmax) > (pl) && (pmin) < (pl) && (py) > (pc) && (pl) / (pf) < 1.004 && (py) > (pf)) {
        Candel = " صلیب";
    }
    else if ([ih][0].PDrCotVal < [ih][0].PriceFirst && [ih][0].PriceFirst < (pl) && (pf) > (pl) && (pf) < [ih][0].PDrCotVal) {
        Candel = " انگالفینگ صعودی";
    }
    else if ([ih][0].PDrCotVal > [ih][0].PriceFirst && [ih][0].PriceFirst > (pl) && (pf) < (pl) && (pf) > [ih][0].PDrCotVal) {
        Candel = " انگالفینگ نزولی";
    }
    (cfield0) = Candel
    return true;
}()