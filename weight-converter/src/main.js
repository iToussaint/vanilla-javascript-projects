const pounds = document.getElementById("pounds")
const grams = document.getElementById("grams")
const kilograms = document.getElementById("kilograms")
const ounces = document.getElementById("ounces")


pounds.addEventListener("input", function(){
    grams.textContent = this.value/0.45359237
    kilograms
    ounces
})