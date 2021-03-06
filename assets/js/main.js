"use strict"

//add burger menu

let burgerBtn = document.querySelector(".nav__tel__burger");
let burgerMenu = document.querySelector(".nav__tel__active");
let burgerClose = document.querySelector(".nav__tel__active__close");

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("not-active");
});

burgerClose.addEventListener("click", () => {
    burgerMenu.classList.add("not-active");
});

// add prices calculator 

let btnResidential = document.querySelector(".buy-book__culc__price__buttons__left");
let btnCommercial = document.querySelector(".buy-book__culc__price__buttons__right");


let btnBedroomsPlus = document.querySelector(".bedrooms__plus");
let btnBedroomsMinus = document.querySelector(".bedrooms__minus");
let bedroomsNumber = document.querySelector(".bedrooms__number");
let numberBedrooms = 0;


let btnBathroomsPlus = document.querySelector(".bathrooms__plus");
let btnBathroomsMinus = document.querySelector(".bathrooms__minus");
let bathroomsNumber = document.querySelector(".bathrooms__number");
let numberBathrooms = 0;


// +/-  bedrooms
btnBedroomsPlus.addEventListener("click", () => {
    numberBedrooms++;
    bedroomsNumber.innerHTML = `${numberBedrooms}`;
    checkIncludes();
    allPrice += 25;
    checkPrices();




})
btnBedroomsMinus.addEventListener("click", () => {
    if (numberBedrooms > 0) {
        numberBedrooms--;
        bedroomsNumber.innerHTML = `${numberBedrooms}`;
        checkIncludes();
        allPrice -= 25;
        checkPrices();
    }
})

// +/-  bathrooms
btnBathroomsPlus.addEventListener("click", () => {
    numberBathrooms++;
    bathroomsNumber.innerHTML = `${numberBathrooms}`;
    checkIncludes();
    allPrice += 15;
    checkPrices();

})
btnBathroomsMinus.addEventListener("click", () => {
    if (numberBathrooms > 0) {
        numberBathrooms--;
        bathroomsNumber.innerHTML = `${numberBathrooms}`;
        checkIncludes()
        allPrice -= 15;
        checkPrices();
    }
})

///////////////////////////////////CHANGES

let resultType = document.querySelector(".buy-book__form__result__time");
let resultTime = document.querySelector(".buy-book__form__result__hours");
let hours = 5;

let resultInclude = document.querySelector(".buy-book__form__result__include");

let priceCleaning = document.querySelector(".buy-book__form__price");

let allPrice = 0;

// changes type

btnCommercial.addEventListener("click", function () {
    if (btnResidential.classList.contains("active")) {
        btnResidential.classList.remove("active");
    }
    btnCommercial.classList.add("active");
    resultType.innerHTML = "Commercial Cleaning - " + (resultTime.innerHTML = "<span class='buy-book__form__result__hours'>" + `${hours} ` + "hours </span>");
    checkPrices();
})


btnResidential.addEventListener("click", function () {
    if (btnCommercial.classList.contains("active")) {
        btnCommercial.classList.remove("active");
    }
    resultType.innerHTML = "Residential Cleaning - " + (resultTime.innerHTML = "<span class='buy-book__form__result__hours'>" + `${hours} ` + "hours </span>");
    btnResidential.classList.add("active");
    checkPrices()
})

// changes includes

function checkIncludes() {
    resultInclude.innerHTML = "Includes: " + `${numberBedrooms} bedrooms, ` + `${numberBathrooms} bathrooms,`;
}

checkIncludes();

// changes prices
function checkPrices() {
    if (btnResidential.classList.contains("active") || btnCommercial.classList.contains("active")) {
        priceCleaning.innerHTML = `${allPrice}` + ",00 $";
    } else {
        priceCleaning.innerHTML = `0` + ",00 $";
    }
}
checkPrices();



// carusel
let position = 0;
let sliderToShow = 2;
const sliderToScroll = 1;
let itemWidth = 440;
let screen = document.querySelector(".container").clientWidth;
if (screen > 800) {
    sliderToShow = 2;

} else if (screen <= 800) {
    sliderToShow = 1;
    itemWidth = 200;

}

const container = document.querySelector(".customer__review__carusel");
const track = document.querySelector(".customer__review__carusel__transform");
const items = document.querySelectorAll(".customer__review__item");
const item = document.querySelectorAll(".customer__review__item");
const btnPrev = document.querySelector("#prev-btn");
const btnNext = document.querySelector("#next-btn");


const itemCount = items.length;
const movePosition = sliderToScroll * itemWidth;






items.forEach((item) => {
    item.style.maxWidth = `${itemWidth}px`;
});

btnPrev.addEventListener("click", function () {
    if (position < 0) {

        position = position + movePosition;
        track.style.transform = `translateX(${position}px)`;
    }
})

btnNext.addEventListener("click", function () {

    if (position >= ((itemCount - sliderToShow - 1) * itemWidth) * -1) {

        position = position - movePosition;
        track.style.transform = `translateX(${position}px)`;

    }
})