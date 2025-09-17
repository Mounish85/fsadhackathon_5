let a = 0;
let b = 1;
let n = parseInt(prompt("Enter a number:"));
console.log(a);
console.log(b);
for(let i=1;i<=n-2;i++){
    let next = a+b;
    a=b;
    b=next;
    console.log(next);
}