// parameterts 

function bringSingara(taka){
    console.log( "i have money For Singara", taka);
    console.log(' ME: Mama Singara Den ');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var  money = 90;

var singara =  bringSingara(money);
console.log('MAMA: EI nen Singara', singara);