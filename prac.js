
const arr1=[3,7,34,90,12];
const num=arr1.slice(-1);
const numb=arr1.slice(3);
console.log(numb);
console.log(num);
console.log(numb.length-1)
// slice returns the selected elements in an array.using - negative index counts back from the end of the array.when you use a positive index it returns the element at the specified index.
const arr2=[true,"true","where",12,56];
const arr=arr2.slice(-1);
console.log(arr);
let myPets=["cow","bird","snake","Dog"];
let pets=myPets.join()
console.log(pets)
// adds the all the elements of an array to a strings.returns an array into a string
const arr3=[-5,9,5,3,2,-3,6,8,4,1];
const arri=arr3.sort((a,b)=>(b,-a))
console.log(arri)
// determine the order of elements either in accending or decending order.
// the(a,b) used to determine the order of elements .returns a negative value
//  if the first value is less than the second value,zero if they are equal and posstive if otherwise
// if you want get an accending order it will be((a,b)=>(b,a)) so that litteraly means that a is bigger than b so we will get a negative
// if you want to get it in decennding order you make  a to be a negative((a,b)=>(b,-a))
let arrie=["apple","mango","apple","orange","mango","mango"];
function removeDuplicate(arrie){
    return[...new Set(arrie)];
}
console.log(removeDuplicate(arrie));
// set creates a new collections of array then removes the duplicate elements then converts it back to an array.
// the word new creates a new object,sets the invisible "prototype",returns a newly generated object unless the function returns a non-null object reference.
// the three dots before new are the spread or the rest/operator.it allows an expression to be expanded in places where multiple arguments are expected. 
let arr5=["the","way","x",4];
let word="we"
if (arr5.includes(word)){
console.log("search");
}
else{
    console.log("the search word not found");
}
// because there are  two conditions we can use if or else .if is used to execute if the condition is true while else is to execute if the condition is false
// the include method returns true if a string contains a specified string and it aslo determinse wether the string includes a certain value
// ?QUESTION includes() is said to be case sensitive what we mean by case sensitive.
let word2="sevink";
function text(word2){
    return text.split('').sort().join()
}
console.log(word2)
// convert the string to an array using split('').split() method divide a string into a list of sustrings and returns them as an array
// sort array using sort
// convert the array to string using join('')
const cars=[];
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
console.log(cars);
Array.isArray(cars)

// Binary search
let number=[2,5,6,12,45]
let target =6
// start by defining the left and right
// returns the greatest interger less than or equal to its numric argument
function binary(number,target){
    leftIndex=0
    rightIndex=number.length-1
    while (leftIndex<=rightIndex){
       let middle = Math.floor((leftIndex+rightIndex)/2);
      if (number[middle] ===target){
         return middle;
      } 
      else  if(number[mid]<target){
        rightIndex =middle-1
      }
      else{
        leftIndex =middle+1
      }
      return -1
    }
  }
  console.log(binary(number,target))

  // MERGE SORT
  function divideArray(array){
    if (array.length<=1){
    return array;
    
  };
  let middle=Math.floor(array.length/2);
  let left=array.slice(0,middle);
  let right=array.slice(middle);
  console.log({left});
  console.log({right});
  return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
  let emptyArray=[]
  while(left.length&& right.length){
    if(right[0]<left[0]){
      emptyArray.push(right.shift());
    }
    else{
      emptyArray.push(left.shift());
    }
  }
console.log({emptyArray});
return[...emptyArray,...left,...right];
}
let array=[3,40,46,89,10,50];
console.log(divideArray(array));


function divideArray(arr8){
  if (arr8.length<=1){
  return arr8;
  };
let middle=Math.floor(arr8.length/2)
let left=arr8.slice(0,middle)
let right=arr8.slice(middle)
console.log({left});
console.log({right});

return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
  let emptyArray=[]
  while(left.length && right.length){
    if(right[0]<left[0]){
      emptyArray.push(right.shift())
    }
    else{
      emptyArray.push(left.shift())
    }
  }
  console.log({emptyArray})
  return[...emptyArray,...right,...left]
}
let arr8=[50,40,9,2,7,3,0];
console.log(divideArray(arr8))

function divideArray(any){
  if(any.length<=1){
    return any;
  }
  let middle=Math.floor(any.length/2)
  let left=any.slice(0,middle)
  let right=any.slice(middle)
  console.log({left});
  console.log({right});
  return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
  let emptyArray=[]
  while(left.length && right.length){

  if (right[0]<left[0]){
emptyArray.push(right.shift())
  }
  else{
    emptyArray.push(left.shift())
  }
}
return [...emptyArray,...left,...right]
}
let any=[5,3,9,20,17,8]
console.log(divideArray(any));
 
function divideArray(numric){
  if(numric.length<=1){
    return numric
  }
  let middle=Math.floor(numric.length/2)
  let left=numric.slice(0,middle)
  let right=numric.slice(middle)
  console.log({left});
  console.log({right});
  return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
  let emptyArray=[]
while (left.length && right.length){
  if(right[0]<left[0]){
    emptyArray.push(left.shift())
  }
  else{
    emptyArray.push(right.shift())
  }
}
console.log({emptyArray});
return [...emptyArray,...left,...right];
  
}
let numric=[90,170,3,2,1,15,12]
console.log(divideArray(numric));

// Create a function that prints all even numbers from 0 – 10
// Print a table containing multiplication tables from 1-10
// Calculate the sum of numbers within an array
let numb1=[2,4,6,3,7]
let sum=0

for (i =0; i < numb1.length; i++)
 {
  console.log(i);
  sum+=numb1[i]
  // 
}
console.log({sum});
// Create a function that reverses an array
let numb2=[2,3,1,9,6]

function reverseNum(numb2){
  let num2=numb2.reverse()
 console.log(numb2);
}
reverseNum(numb2)
// .Sort an array from lowest to highest

let sort=[9,4,3,6,0,1]
let sort1=sort.sort((a,b)=> -b+a)
console.log(sort1);

// .Create a function that filters out negative numbers

let negative=[5,7,-2,8,-5,3]
function numberNeg(negative) {
  for ( i = 0; i< negative.length; i++) {
    console.log(negative[i]);
    if(i<1){
negative.filter()
      
    }
    else{
      
    }

    
  }
  
  
}
numberNeg(negative)

// Remove the spaces found in a string
let name=" Hello name"
console.log(name.trim());

// Return a Boolean if a number is divisible by 10
let num4=10
num4=5
if(num4%10===0){
  console.log(true);
}
else{
  console.log(false);
}

// Return the number of vowels in a string



