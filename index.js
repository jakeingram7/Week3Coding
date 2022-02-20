var ages = ['2','3','8','9','23','28','64','93'];
var last = ages[ages.length - 1]
var first = ages[ages.length - ages.length]
var diff = last -  first

console.log(`The difference is: ${diff}`);


var ages = ['2','3','8','9','23','28','64','93'];
ages.push(34)

var last = ages[ages.length - 1]
var first = ages[ages.length - ages.length]
var diff = last -  first

console.log(`The difference is: ${diff}`)


var ages = ['2','3','8','9','23','28','64','93'];
ages.push(34)

var sum = 0, average = 0.0

for(let i = 0; i < ages.length; i++) {
    sum = sum + ages[i]
}
average = sum / ages.length
console.log("The average is:", sum/ages.length)

var names = ['Sam','Tommy','Tim','Sally','Buck','Bob']

var sum = 0, average = 0

for(let i = 0; i < names.length; i++) {
    sum = sum + names[i].length
}
console.log("The average is:", sum/names.length);

var con = names[0];
for(let i = 0; i < names.length; i++) {
    con = con.concat("", names[i]);
}
console.log("Concatenated names:", con);

console.log(names[names.length-1]);

console.log(names[0])

var namesLength = [];

for(let i = 0; i < names.length; i++) {
    namesLength.push( names[i].length)
}

var sumOfName = 0
for(i = 0; i < namesLength.length; i++) {
    sumOfName += namesLength[i]
}

console.log(sumOfName);

function twoParameters(word, n) {
    let space = "";

    for(let i = 1; i <= n; i++) {
        space += word;
    }
    return space;
}

console.log( twoParameters( "Jill", 3) );

function fullName( firstName, lastName) {
    return( firstName + " " + lastName);
}

console.log(fullName("Derrick", "Henry") );

function nums( arrayX ) {
var sum = 0;
for( let i = 0; i < arrayX.length; i++) {
    sum += arrayX[ i ];
     } if( sum > 100 ) {
         return true;
     } else
        return false;    
}

console.log( avrg( [ 4,8,2,1] ) );
console.log( avrg( [ 34, 53, 61 ] ) );


function avrg( x ){
    var sum = 0;
    for( let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return( sum / x.length );
}

console.log( avrg( [7,8,3,2] ) );
console.log( avrg( [8,8,8,8,8] ) );

function greaterThan( x, y){
    if( avrg(x) > avrg(y) ) {
        return true;
    }
    return false;
}

console.log( greaterThan( [ 6, 3, 8, 9, ], [ 2, 1, 4, 5] ) );
console.log( greaterThan( [30, 45, 65, 10], [12, 14, 16, 18] ) );

function willBuyDrink( isHotOutside, moneyInPocket ){
    if( isHotOutside === true && moneyInPocket > 10.50 ){
        return true;
    }
    return false;
}

console.log( willBuyDrink( true, 14.50 ) );

// I couldn't think of much but I used a function to calculate tax on a vehicle

function problemSolver( vehiclePrice ) {
    var fees = 15;
    var vehicleTax = 55;
    var salesTax;
    if( vehiclePrice > 55000) {
     salesTax = vehiclePrice * .1;
    } else if ( vehiclePrice < 55000 && vehiclePrice > 40000) {
        salesTax = vehiclePrice * .08;
    } else if ( vehiclePrice < 50000 && salesTax > 30000) {
        salesTax = vehiclePrice * .07;
    } else {
        salesTax = vehiclePrice * .05;
    }

    var totalCost = salesTax + vehicleTax + fees;

    console.log( totalCost );
}

problemSolver( 35000 );
problemSolver( 15000 );