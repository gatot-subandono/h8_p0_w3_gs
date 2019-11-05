function palindrome(kata) {
    var ganti="";
    for ( var i=kata.length -1;i>=0;i--) {
        ganti +=kata[i];

    }
    if(kata==ganti){
        return true;}
    else {
        return false
        }
    }


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false