function forLoop(array) { 
for(var i = 0; i < 25; i++) {
  if (i === 1) {
     array.push('I am 1 strange loop.');
 } else if (i < 25) {
    array.push('I am ' + i + ' strange loops.');
     } 
   }
   return array;
 }
 
 while(n > 10){
	console.log(--n);
	var n = Math.floor(Math.random() * 10);
}
console.log("done");