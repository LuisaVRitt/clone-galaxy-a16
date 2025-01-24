// Seleção de elementos
const button = document.querySelectorAll("#img-picker li");
const mainImage = document.querySelector("#product-img");
const backFront = document.querySelector("#galaxy_black");
const screen = document.querySelector("#galaxy_screen");
const screenRight = document.querySelector("#galaxy_screen_right");
const screenLeft = document.querySelector("#galaxy_screen_left");
const back = document.querySelector("#galaxy_back");
const colorSelected = document.getElementById("color-selected");

// Funções
button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        button.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const target = e.target;

        const id = target.getAttribute("id");
        
        target.querySelector(".color").classList.add("selected");

        if((colorSelected.innerHTML = `${id}`) === (colorSelected.innerHTML = "black")) {
            colorSelected.innerHTML = "Preto"
        } else if((colorSelected.innerHTML = `${id}`) === (colorSelected.innerHTML = "green")) {
            colorSelected.innerHTML = "Verde claro"
        } else if((colorSelected.innerHTML = `${id}`) === (colorSelected.innerHTML = "grey")) {
            colorSelected.innerHTML = "Cinza claro"
        }

        mainImage.setAttribute("src", `img/galaxy_${id}.png`);
        backFront.setAttribute("src", `img/galaxy_back_front_${id}.png`);
        screen.setAttribute("src", `img/galaxy_screen_${id}.png`);
        screenRight.setAttribute("src", `img/galaxy_screen_right_${id}.png`);
        screenLeft.setAttribute("src", `img/galaxy_screen_left_${id}.png`);
        back.setAttribute("src", `img/galaxy_back_${id}.png`);
    })
})