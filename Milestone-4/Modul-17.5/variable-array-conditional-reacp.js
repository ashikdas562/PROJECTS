var bottalColor= 'yellow';
var waterQuantity = 1;
var isFull = false;


// Array 

var items = ['bottale', 'mog', 'paper', 'pen'];
items.indexOf('lojens');
console.log(items);
items.push('envelope');
items.push('watch');
items.pop();

// conditionals 

if(items.length >= 4){
    console.log('you have too many stuff on your desk')
}
else if (items.length == 4){
    console.log('You have only 1 Hali items')
}
else{
    console.log('WoW! you have clean desk');
}