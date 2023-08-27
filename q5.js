// Check if a triangle is equilateral, scalene, or isosceles.

let s1 = 8, s2 = 10 , s3 = 10;

if(s1==s2 && s1==s3 && s2==s3){
    console.log("Equilateral Triangle");
}

else if(s1 == s2 || s2 == s3){
    console.log("Isoceles Triangle");
}

else if(s1 != s2 && s1 != s3 && s2 != s3){
    console.log("Scalene Triangle");
}