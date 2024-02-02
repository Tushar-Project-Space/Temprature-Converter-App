const textBox = document.querySelector("#input");
const Celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const result = document.querySelector(".result");
let temp;

function converter(){
     if(Celsius.checked){        //checked for activating button
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";    //tofixed -> for digit after decimal .
    }
    else if(fahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}