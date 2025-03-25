// function str(sen){
//     console.log(sen.split(' '));
    
//     let words = []
//     let word = '';
// for(let char of sen){
//     if(char!== ' '){
//         word+=char
//     }else{
//         words.push(word)
//         word=''
//     }
    
// }
// words.push(word)
// console.log(words);
// }
// str("hello goog mor");
// ----------------------------------
// function str(sen){
//   return  [...new Set(sen)].join('')
// }
// console.log( str("hello"));
// -------------------------------
// let a = ["abbc","brj","kk","kkkkkkk"]
// let longest = ''
// for(let w of a){
//     if(w.length > longest.length){
//         longest = w
//     }
// }
// console.log(longest);
// ---------------------
// function sen(str){
//     let word=''
//     for(let w of str){
//         if(!word.includes(w)){
//             word+=w
//         }
//     }
//     console.log(word);
// }
// // sen("hello")
// sen("hiiamheallol")
// ----------------------
// let a = {}
// for(let i = 0;i<10;i++){
//     a[i] = i+1
// }
// console.log(a);

// -
// function sen(str){
// let count = {}
// for(let w of str){
//     if(count[w]){
//         count[w]++
//     }else{
//         count[w]=1
//     }
// }
// console.log(count);
// }
// sen("hello")
// -----------------------------

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); 
// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num % 2 === 0);      //here elemt not acces fot that filter is use
// console.log(doubled); 

// ---------------------------------?

// async function timer(i = 1) {
//     if (i > 5) return;
//     await new Promise((resolve) => setTimeout(resolve, i * 1000));
//     console.log(`Hello, it is ${i} sec`);
//     timer(i + 1);
// }

// timer();
//  -----------------------------
// function timer(time){
//     return  new  Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("hello")
//         }, time);
//     })
// }
// timer(2000).then((data)=>console.log(data)
// )
// ------------
// let a= 10 , b = 20;
// [a,b]= [b,a];
// console.log(a,b);
// ---------
// function revInt(n){
//     let digit;
//     let res;
//     let sum = 0
//     while(!n == 0){
//         digit = n%10
//         res = res +sum
//         n/10
//     }
// }
// revInt(324)

// let a = '5';
// let b = 5;
// let c = false;
// console.log(a + b - c);

// console.log('5' + 10 - 5);
// console.log(('10' * '2') == (true + true + true + true + true));
// console.log('5' - - '2');
// console.log('3' + 2 * 2 - '1');
// console.log(('3' - '2' + '5') * true);

// let x = true == 1;
// let y = '1' == 1;
// let z = '1' === 1;
// console.log(x + y + z);



// console.log("start");
// let a = new Promise((resolev)=>{
//    resolev(1
//    )
//     })
// a.then
// ((data)=>console.log(data)
// )
// console.log("End");    //start 1 end
// ------------------

// function v(str){
//         let v = 'aeiouAEIOU'
//         for(let w of str){
//             for(let aa of v){
//                 if( aa.includes(w)){
//                         console.log(w);
//                 }
//             }
//         }
//     }
//     v("rohan")
// --------------------------------
let a =  Promise.resolve("Instant Success!").then(console.log); // Output: "Instant Success!"
