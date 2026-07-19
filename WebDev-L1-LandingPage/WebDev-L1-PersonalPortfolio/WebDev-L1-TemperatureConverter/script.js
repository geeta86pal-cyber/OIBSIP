function convertTemp(){

let value = document.getElementById("tempInput").value;
let unit = document.getElementById("unit").value;
let result = document.getElementById("result");

if(value === "" || isNaN(value)){
    result.innerHTML = "Please enter a valid numeric value.";
    return;
}

value = parseFloat(value);

if(unit==="celsius" && value < -273.15){
    result.innerHTML = "Temperature below absolute zero.";
    return;
}

if(unit==="fahrenheit" && value < -459.67){
    result.innerHTML = "Temperature below absolute zero.";
    return;
}

if(unit==="kelvin" && value < 0){
    result.innerHTML = "Temperature below absolute zero.";
    return;
}

let c,f,k;

if(unit==="celsius"){
    c=value;
    f=(value*9/5)+32;
    k=value+273.15;
}

if(unit==="fahrenheit"){
    c=(value-32)*5/9;
    f=value;
    k=c+273.15;
}

if(unit==="kelvin"){
    c=value-273.15;
    f=(c*9/5)+32;
    k=value;
}

result.innerHTML=
`
Celsius: ${c.toFixed(2)} °C <br>
Fahrenheit: ${f.toFixed(2)} °F <br>
Kelvin: ${k.toFixed(2)} K
`;
}