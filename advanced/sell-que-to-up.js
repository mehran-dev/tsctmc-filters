true == function () {
    if ((tvol) > (bvol) && (pmin) == (tmin) && ((pl) - (pc)) / (pl) * 100 > 1.5 && (ct).Sell_CountI >= (ct).Buy_CountI && (tno) > 20) {
        return true;
    }
    else {
        return false;
    }
}()

//(tvol)>(bvol)&&(pmin)==(tmin)&&(((pl)-(pc))/(pl))*100>1.5&&(ct).Sell_CountI>=(ct).Buy_CountI&&(tno)>50