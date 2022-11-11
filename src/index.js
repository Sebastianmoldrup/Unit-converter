
const form = document.querySelector('[data-id="form"]');
const input = document.querySelector('[data-id="input"]');

const metric = document.querySelector('[data-id="metric"]');
const imperial = document.querySelector('[data-id="imperial"]');

const meter = document.querySelector('[data-id="meter"]');
const feet = document.querySelector('[data-id="feet"]');
const liter = document.querySelector('[data-id="liter"]');
const gallon = document.querySelector('[data-id="gallon"]');
const kilogram = document.querySelector('[data-id="kilogram"]');
const pound = document.querySelector('[data-id="pound"]');
const celsius = document.querySelector('[data-id="celsius"]');
const fahrenheit = document.querySelector('[data-id="fahrenheit"]');

input.addEventListener('input', (e) => {
    e.preventDefault();
    
    meter.value = "Meters:" + " " + input.value;
    feet.value = "Feet:" + " " + Math.round( input.value * 3.28 );

    liter.value = "Liters:" + " " + input.value;
    gallon.value = "Gallons:" + " " + Math.round( input.value * 0.26 );

    kilogram.value = "Kilograms:" + " " + input.value;
    pound.value = "Pounds:" + " " + Math.round( input.value * 2.2 );

    celsius.value = "Celsius:" + " " + input.value;
    fahrenheit.value = "Fahrenheit:" + " " + Math.round( input.value * 1.8 + 32 );
});

function unitSwitch() {
    if(imperial.classList.contains('hidden')) imperial.classList.remove('hidden') && metric.classList.add('hidden'); 
}

