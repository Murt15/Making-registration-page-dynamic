let arr1=[1,3,5,7];
let arr2=[0,2,6,8,9];
let n=arr1.length;
let m=arr2.length;


// for(let i=0;i<arr2.length;i++){
//     arr1.push(arr2[i])
// }
// //console.log(arr1)
// arr1.sort();
// console.log(arr1)
// arr2=arr1.slice(n)
// console.log(arr2)

for(let i=0;i<m;i++){
    arr1.push(arr2[i])
}

arr1.sort();

arr2=arr1.slice(n);

for(let i=0;i<m;i++){
    arr1.pop();
}
console.log(arr1)

console.log(arr2)

