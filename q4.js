// Find the largest of three numbers

let num1=10, num2=5, num3= 20;

if(num1 > num2 && num1 > num3){
    console.log(num1 + " is greater");
}

else if(num2 > num1 && num2 > num3){
    console.log(num2 + " is greater");
}

else if(num3 > num1 && num3 > num2){
    console.log(num3 + " is greater");
}

else{
    console.log("all are equal");
}