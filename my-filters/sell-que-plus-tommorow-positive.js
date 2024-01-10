true == (function () {



    const sellQueHasGone = () => {
        if ((tvol) > (bvol) && (pmin) == (tmin) && ((pl) - (pc)) / (pl) * 100 > 1.5 && (ct).Sell_CountI >= (ct).Buy_CountI && (tno) > 20) {
            return true;
        }
        else {
            return false;
        }
    }

    const tommorowIsPositive = () => {
        return (tno) > 50 && (tvol) > (bvol) && (bvol) <= 7000000 && (plp) >= (pcp) + 1.5 && (eps) > 0

    }

    return sellQueHasGone() && tommorowIsPositive()
})()

