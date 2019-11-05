function palindrome(str) {
    var ganti="";
    for ( var i=str.length -1;i>=0;i--) {
        ganti +=str[i];
        
    }
    return ganti;
}
console.log(palindrome('kuda'))
    // you can only write your code here!
  
  
 /* // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false */