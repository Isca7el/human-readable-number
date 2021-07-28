module.exports = function toReadable(number) {

    a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    c = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let len = number.toString().length,
        toTen = number % 10,
        toHun = number % 100,
        toTenSub = number / 10,
        toHunSub = number / 100,
        toStr = number.toString();


    if (number == 0) {
        return ('zero');
    } else if (len < 2) { // для чисел от 1 до 9
        return `${a[number-1]}`;
    } else if (len < 3 && toTen == 0) { // для чисел кратных 10
        return `${c[(number / 10) - 1]}`;
    } else if (len < 3 && number < 20 && toTen !== 0) { // для чисел от 11 до 19
        return `${b[(number % 10) - 1]}`;
    } else if (len < 3 && toTen !== 0) { // для чисел от 21 до 99
        return `${c[(parseInt(toTenSub, 10)) - 1]} ${a[(number % 10) - 1]}`;
    } else if (len < 4 && toHun == 0) { // для чисел кратных 100
        return `${d[(number / 100) - 1]}`;
    } else if (len < 4 && toHun !== 0 && toHun < 10) {
        return `${d[parseInt(toHunSub,10) - 1]} ${a[toStr[2] - 1]}`;
    } else if (len < 4 && toHun !== 0 && parseInt(toHun, 10) / 10 == 1){
        return `${d[parseInt(toHunSub,10) - 1]} ten`;
    } else if (len < 4 && toHun !== 0 && toHun < 20) {
        return `${d[parseInt(toHunSub,10) - 1]} ${b[toStr[2] - 1]}`;
    } else if (len < 4 && toHun !== 0 && parseInt(toHun, 10) % 10 == 0) {
        return `${d[parseInt(toHunSub,10) - 1]} ${c[toHun/10 - 1]}`;
    } else if (len < 4 && toHun !== 0) {
        return (`${d[parseInt(toHunSub,10) - 1]} ${c[toStr[1] - 1]} ${a[toStr[2] - 1]}`);
    } else if (number === 0) {
        return zero;
    }
}


// let toTen = 110 % 100;
// console.log(toTen);


// // // let toTen = 110 % 100;
// // // c = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// // // console.log(c[parseFloat((toTen, 10) / 10) - 1]);

// // // console.log(30 % 10);






// function toReadable(number) {

//     a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     c = [0, 1, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
//     var len = number.toString().length,
//         toTen = number % 10,
//         toHun = number % 100,
//         toTenSub = number / 10,
//         toHunSub = number / 100,
//         toLow = toHun / 10,
//         e = (number/10) % 10,
//         toStr = number.toString();

//     if (number == 0) {
//         console.log ('zero');
//     } else if (len < 2) { // для чисел от 1 до 9
//         return (`${a[number-1]}`);
//     } else if (len < 3 && toTen == 0) { // для чисел кратных 10
//         console.log(`${c[(number / 10) - 1]}`);
//     } else if (len < 3 && number < 20 && toTen !== 0) { // для чисел кратных 
//         console.log(`${b[(number % 10) - 1]}`);
//     } else if (len < 3 && toTen !== 0) { // для чисел от 21 до 99
//         console.log(`${c[(parseInt(toTenSub, 10)) - 1]} ${a[(number % 10) - 1]}`);
//     } else if (len < 4 && toHun == 0) { // для чисел кратных 100
//         console.log(`${d[(number / 100) - 1]}`);
//     } else if (len < 4 && toHun !== 0 && toHun < 10) {
//         console.log(`${d[parseInt(toHunSub,10) - 1]} ${a[toStr[2] - 1]}`);
//     } else if (len < 4 && toHun !== 0 && parseInt(toHun, 10) / 10 == 1){
//         console.log(`${d[parseInt(toHunSub,10) - 1]} ten`);
//     } else if (len < 4 && toHun !== 0 && toHun < 20) {
//         console.log(`${d[parseInt(toHunSub,10) - 1]} ${b[toStr[2] - 1]}`);
//     } else if (len < 4 && toHun !== 0 && parseInt(toHun, 10) % 10 == 0) {
//         console.log(`${d[parseInt(toHunSub,10) - 1]} ${c[toHun/10 - 1]}`);
//     } else if (len < 4 && toHun !== 0) {
//         console.log(`${d[parseInt(toHunSub,10) - 1]} ${c[toStr[1] - 1]} ${a[toStr[2] - 1]}`);
//     }
// }


// toReadable(810);
// toReadable(870);
