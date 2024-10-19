const car = {
    type: "Chevrolet",
    model: "Camaro",
    color: "Yellow"
};

console.log("Type of car:", typeof car); 

car.type = "Chevrolet";
console.log("Updated car object:", car); 

car.wheels = 4;
console.log("Car object after adding wheels:", car);