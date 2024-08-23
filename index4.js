let arr=["hello","world","this","is","javascript"]
let results=arr.join(" ")
console.log(results);


let arr=[1,2,3,4,5]
let results=arr.delete(3)
console.log(results);


let arr1=[1,2,3]
let arr2=[4,5,6]
let results=arr1.concat(arr2)
console.log(results);

let arr1=[[1,2],[3,4],[5,[6,7]]]
let results=arr1.flat(2)
console.log(results);

let arr1=[[1,2],[3,4],[5,6],[7,8],[9,10]]
let results=arr1.flat()
console.log(results);

let arr1=["apple","banana","orange","grape"]
// let results=
arr1.splice(1,1,"kiwi","mango")
console.log(arr1);

let arr1=[1,2,3,4,5,6,7,8]
let results=arr1.slice(1,4)
console.log(results);


num=prompt('Enter the Number : ')
first=1

for(i of num)
{
    if(i>1)
    {
        c=0
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {
                c++
                break
            }
        }
        if(c==0)
        {
            if(first==1)
            {
                MinPrime=i
                first++
            }
            else
            {
                if(i<MinPrime)
                {
                    MinPrime=i
                }
                
            }
        }
    }
}
console.log(MinPrime);



a=20
b=40
a=a*b
b=a/b
a=a/b
console.log(a,b);