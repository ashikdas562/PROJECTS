var gotJob = true;
var moneySave = 50000;
var hasFlat = false;
var hasHouse = true;

// if(gotJob == true && moneySave > 200000){
//     console.log('lets married')
// }
// else{
//     console.log('tor kopale sangga nai')
// }


// if(gotJob == true && moneySave > 200000 && hasFlat == true){
//     console.log('lets married')
// }
// else{
//     console.log('tor kopale sangga nai')
// }


// if(gotJob == true || moneySave > 200000){
//     console.log('lets married')
// }
// else{
//     console.log('tor kopale sangga nai')
// }

// complex condition 

if((gotJob == true && moneySave > 200000) || hasHouse == true ){
    console.log('lets married')
}
else{
    console.log('tor kopale sangga nai')
}

