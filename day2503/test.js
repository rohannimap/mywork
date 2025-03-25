// function sen(str){
//     let rev = ''
// for(let i =str.length-1;i>=0;i--){
//     rev += str[i]
// }
// console.log(rev);
// }
// sen("rohan")
// -----------------------
// function count(str){
//     let v = 'aeiouAEIOU'
//     let  c = 0
//     for(let w of str){
//         for(let aa of v){
//             if( aa == w){
//                     c = c+1
//             }
//         }
//     }
//     console.log(c);
// }
// count("aeiou")
// -----------------------------------
// function ma(str){
//     return str.match(/[aeiouAEIOU]/g)?.length || 0;
// }
// console.log(ma("hello"));
// ---------------------
// function sen(str){
//     let  words = []
//     let word =''
//     for(let w of str){
//         if(w !== ' '){
//                 word+=w
//             }else{
//                 words.push(word)
//                 word =''
//             }
//         }
//         words.push(word)
//         // console.log(words);
//         let long = ''
//     for(let char of words){
//         if(char.length> long.length){
//                 long = char
//         }
//     }
//     console.log(long);
// }
// sen("helo ijnjnj am rohan")
// ---------------------------
// function sen(str){
// return str.split(' ').reduce((longest,current)=>longest.length<current.length ? current :longest ,''
// )
// }
// console.log(sen("helo ijnjnj am rohan"));
// -----------------------------
// function sen(str){
//     return [...new Set(str)].join("");
// }
// console.log(sen("hello"));
// ------------------
// function sen(str){
// let a = ''
// for(let i of str){
//    if(!a.includes(i)){
//     a+=i
//    }
// }
// console.log(a);
// }
// sen("hello")
// ----------------------
// function output(n){
// let out = []
// for(let i = 1;i<=n;i++){
//     if(i>5 && ){
//         out.push("*")
//     }else{
//         out.push(i)
//     }
// }
// console.log(out);

// }
// output(20)
// -----------------------


function output(n) {
    let out = [];
    for (let i = 1; i <= n; i++) {
        if (Math.floor((i - 1) / 10) % 2 === 0) {
            out.push(i); 
        } else {
            out.push("*"); 
        }
    }
    console.log(out);
}

output(30);





















