function inputValues(){

var triangleSide1 = (document.getElementById('Hypotenuse').value);
var triangleSide2 = (document.getElementById('Opposite').value);
var triangleSide3 = (document.getElementById('Adjacent').value);

if(triangleSide1.length === 0 && triangleSide2.length === 0 && triangleSide3.length === 0){
    alert('Please fill in values')
  }
else if(triangleSide1 === triangleSide2 && triangleSide2 === triangleSide3 && triangleSide1 === triangleSide3){
alert ("This is an equilateral triangle!");

}
else if(triangleSide1 === triangleSide2 || triangleSide2 === triangleSide3){
alert ("This is an isosceles triangle!");
}
else if((triangleSide1 + triangleSide2) <= triangleSide3 || (triangleSide2 + triangleSide3) <= triangleSide1){
alert ("This is not a triangle! Please try again.");

}

else if(triangleSide1 != triangleSide2 != triangleSide3){
alert("This is a scalene triangle");
}
};
