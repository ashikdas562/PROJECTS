// 1.  Variable 

var favoriteBook = '4 hour work week ';
// 2. array 
var bookList = ['positioning' , 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'story Brand';
bookList.push('small Gaints');
bookList.pop();

// console.log(bookList); 


// 3. conditionals 

if(bookList[1] == 'hooked'){
    console.log('i am hooked');
}
else{
    console.log('i am not hooked');
}


//4. loop 

// while-loop 

var i = 0; // loop variable
while( i < 15){
    console.log(i);
    console.log('its loop bro')
    i++;
}

// for loop 
for(var i = 15; i < 15; i++){
    console.log(i);
    console.log('its loop bro')
}