
true === (
    function () {
        const minPrices = []
        for (let index = 0; index < 59; index++) {
            if ([ih]?.[1]?.PriceMin) {
                minPrices.push([ih]?.[1]?.PriceMin)
            }
        }
        return (Math.min(minPrices)) > ((Math.min((pmin), [ih]?.[1]?.PriceMin, [ih]?.[2]?.PriceMin, [ih]?.[3]?.PriceMin))) &&
            (tvol) >= (bvol) && (ct).Buy_N_Volume < (ct).Sell_N_Volume &&
            (tvol) > 500000
    }

)()



/* 
ORIGINAL FILTER 
(Math.min( [ih][1].PriceMin , [ih][2].PriceMin , [ih][3].PriceMin , [ih][4].PriceMin , [ih][5].PriceMin , [ih][6].PriceMin , [ih][7].PriceMin , [ih][8].PriceMin , [ih][9].PriceMin , [ih][10].PriceMin , [ih][11].PriceMin , [ih][12].PriceMin , [ih][13].PriceMin , [ih][14].PriceMin , [ih][15].PriceMin , [ih][16].PriceMin , [ih][17].PriceMin , [ih][18].PriceMin , [ih][19].PriceMin , [ih][20].PriceMin , [ih][21].PriceMin , [ih][22].PriceMin , [ih][23].PriceMin , [ih][24].PriceMin , [ih][25].PriceMin , [ih][26].PriceMin , [ih][27].PriceMin , [ih][28].PriceMin , [ih][29].PriceMin , [ih][30].PriceMin , [ih][31].PriceMin , [ih][32].PriceMin , [ih][33].PriceMin , [ih][34].PriceMin , [ih][35].PriceMin , [ih][36].PriceMin , [ih][37].PriceMin , [ih][38].PriceMin , [ih][39].PriceMin , [ih][40].PriceMin , [ih][41].PriceMin , [ih][42].PriceMin , [ih][43].PriceMin , [ih][44].PriceMin , [ih][45].PriceMin , [ih][46].PriceMin , [ih][47].PriceMin , [ih][48].PriceMin , [ih][49].PriceMin , [ih][50].PriceMin , [ih][51].PriceMin , [ih][52].PriceMin , [ih][53].PriceMin , [ih][54].PriceMin , [ih][55].PriceMin , [ih][56].PriceMin , [ih][57].PriceMin , [ih][58].PriceMin , [ih][59].PriceMin ))> ( ( Math.min( (pmin) , [ih][1].PriceMin , [ih][2].PriceMin , [ih][3].PriceMin )) ) &&
(tvol) >= (bvol) && (ct).Buy_N_Volume < (ct).Sell_N_Volume &&
(tvol) >500000

*/