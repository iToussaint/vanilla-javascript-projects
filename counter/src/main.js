const hamburger = document.getElementById("hamburger")
const navabar = document.getElementById("navbar")

const  first_hamburger_item = document.querySelector("#hamburger > div:nth-child(1)")
const  second_hamburger_item = document.querySelector("#hamburger > div:nth-child(2)")
const  third_hamburger_item = document.querySelector("#hamburger > div:nth-child(3)")


console.log(first_hamburger_item)


hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("right-0")
    second_hamburger_item.classList.toggle("opacity-0")

    first_hamburger_item.classList.toggle("rotate-45")
    third_hamburger_item.classList.toggle("-rotate-45")

    console.log("clicked!!!")
})