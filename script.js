// Esconder setinha de scroll down quando o usuário der scroll na página

// Pega a div downMain
let ArrowDown = document.getElementById('downMain')

// Vai ver se o usuário está dando scroll na página, se sim vai executa a função
document.addEventListener('scroll', function () {

    // Pega a posição atual do scroll vertical
    let scrollY = window.scrollY;

    // Se o scroll for maior que 50, adiciona a classe hidenDownMain
    if (scrollY > 50) {
        ArrowDown.setAttribute('class', 'hidenDownMain')
    }

    // Se o scroll for menor que 50, adiciona a classe normal anterior
    else {
        ArrowDown.setAttribute('class', 'downMain')
    }

});

// Ajuste de opacidade nos modelos de carro no menu de smartphone

const carModel = document.querySelectorAll(".carModel")

carModel[0].style.opacity = 0.3;
carModel[2].style.opacity = 0.3;

const optionItem = document.querySelectorAll(".option-item")

if (window.screen.width <= 500) {
    optionItem[0].style.display = "none";
}

// Menu lateral aparecer/desaparecer

const menuButton = document.getElementById('mainMenu');

const closeMenuButton = document.getElementById('closeMenu');

const menuContainer = document.getElementById('menuContainer');

menuButton.addEventListener('click', function () {
    menuContainer.classList.remove('closeMenu');
    menuContainer.classList.add('openMenu');
});

closeMenuButton.addEventListener('click', function () {
    menuContainer.classList.remove('openMenu');
    menuContainer.classList.add('closeMenu');
});

// Slider de carros

// Botão de passar slider para trás
const minusButton = document.getElementById('MinusSlider');

// Botão de passar slider para frente
const plusButton = document.getElementById('PlusSlider');

// Variável que armazena em um array todos os itens (carros) com a class car-item
let CarsItems = document.querySelectorAll('.car-item');

// Logo do carro que aparece no topo
const logoCar = document.getElementsByClassName('logoCar');

// Tipo de abastecimento do carro que aparece embaixo
const fuel = document.getElementsByClassName('fuel');

// Fundo maior do slider (Fundo menor esta dentro dessa div)
const backgroundSlider = document.getElementById('backgroundSlider');

// Fundo menor do slider, que destaca o carro selecionado
const selectedBackground = document.getElementsByClassName("selectedBackground");

// Variável que armazena a quantidade de itens (carros)
let CarsItemsLength = CarsItems.length;

// Variável para determinar o carro selecionado (esta como 1 para começar com o 2° do array)
let selectedCar = 1;

// Deixando visivel a logo e o abastecimento do carro que já aparece de ante-mão
logoCar[selectedCar].style.opacity = 1;
fuel[selectedCar].style.opacity = 1;

// Mostra informações no console para dúvidas
console.log(CarsItemsLength);
console.log(selectedCar);


// Espera um clique no no botão de menos para executar a função

function flowSlider(a){

    // Verifica se o carro selecionado no momento com o numero de array (selectedCar) tem a classe .selectedCar
    if (CarsItems[selectedCar].classList.contains('selectedCar')) {

        // Se tiver, esconde a logo e o abastecimento
        logoCar[selectedCar].style.opacity = 0;
        fuel[selectedCar].style.opacity = 0;
        // E remove a class .selectedCar, fazendo que ele não fique mais no foco
        CarsItems[selectedCar].classList.remove('selectedCar');

        // Pegamos e tiramos 1 ou colocamos 1 no selectedCar para ele ir para o array anterior ou posterior, fazendo que ele vá para trás ou para frente
        selectedCar += a;

        // Verfica se o carro selecionado for menor que o tamanho do array (o que causaria um erro por procurar um carro que não existe)
        // ele vai para o ultimo elemento do array
        if (selectedCar < 0) {

            // Colocamos - 1, pois um array vai de 0 à 5 por exemplo, o que seria 6 unidades (interprete 0 como 1 e 5 como 6)
            // e a var CarsItemsLength nos retorna por exemplo o numero 6, pois ele conta a quantidade de itens e não interpreta como array
            selectedCar = CarsItemsLength - 1;
        }

        // Verfica se o carro selecionado for maior que o tamanho do array (o que causaria um erro por procurar um carro que não existe)
        // ele vai para o primeiro elemento do array
        if (selectedCar > CarsItemsLength - 1) {
            selectedCar = 0;
        }

        // Passando pela verificação, nós iremos pegar o carro selecionado com o numero de array do selectedCar já subtraido
        // e colocamos a class selectedCar nesse novo carro, o que traz o foco para o mesmo
        CarsItems[selectedCar].classList.add('selectedCar');

        // .scrollIntoView é meio que uma animação padrão onde ele fala:
        // Pegue o carro selecionado de agora e vá até ele
        CarsItems[selectedCar].scrollIntoView({
            // Aqui falamos que a animação (comportamento) terá que ser suave (smooth)
            behavior: "smooth",
            // E aqui falamos que o carro selecionado tentará sempre ficar no meio (centralizado)
            inline: 'center'
        });

        // Aqui deixamos a logo e o abastecimento do carro novo visiviel
        logoCar[selectedCar].style.opacity = 1;
        fuel[selectedCar].style.opacity = 1;

    // Caso a gente clique e não exista um carro com a class .selectedCar colocaremos no array que esta com o numero do selectedCar
    // Apenas parar evitar erros
    } else {
        CarsItems[selectedCar].classList.add('selectedCar');
    }

    // Nesta parte estou verificando se o carro selecionado é o 1° (array 0)
    if (selectedCar == 0) {
        // Se sim, o fundo menor vai se posicionar na esquerda
        backgroundSlider.style.justifyContent = "start";

        // Nesta parte estou verificando se o carro selecionado é o ultimo (array 5 por exemplo)
    } else if (selectedCar == CarsItemsLength - 1) {
        // Se sim, o fundo menor vai se posicionar na direita
        backgroundSlider.style.justifyContent = "end";

        // Se nada disso for verdade, ele apenas deixara o fundo menor centralizado
    } else {
        backgroundSlider.style.justifyContent = "center";
    }

    // Mostra informações no console para dúvidas
    console.log(selectedCar);
};

// Execução das funçoes

minusButton.addEventListener("click", function(){
    flowSlider(-1);
});

plusButton.addEventListener("click", function(){
    flowSlider(1);
});




// Slider de informações do carro

// Mesma lógica do outro slider

const mainSection = document.getElementById('primary-section');
const sliderInfoL = document.getElementById('sliderInfoL');
const sliderInfoR = document.getElementById('sliderInfoR');
let infoCars = document.querySelectorAll('.infoCar-item');
let infoCarsLength = infoCars.length;
let optionsInfoCars = document.querySelectorAll('.optionInfo-item');

let selectedInfoCar = 1;

console.log(infoCarsLength);

infoCars[1].classList.add('selectedCarInfo');
infoCars[1].scrollIntoView();
mainSection.scrollIntoView();
optionsInfoCars[1].classList.add('selectedOptionInfo');

function flowSliderInfo(b){

    if(infoCars[selectedInfoCar].classList.contains('selectedCarInfo')){
        infoCars[selectedInfoCar].classList.remove('selectedCarInfo');
        optionsInfoCars[selectedInfoCar].classList.remove('selectedOptionInfo');

        selectedInfoCar += b;

        if (selectedInfoCar < 0){
            selectedInfoCar = infoCarsLength - 1;
        }

        if (selectedInfoCar > infoCarsLength - 1){
            selectedInfoCar = 0;
        }

        optionsInfoCars[selectedInfoCar].classList.add('selectedOptionInfo');

        infoCars[selectedInfoCar].classList.add('selectedCarInfo');
        infoCars[selectedInfoCar].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        })
    }

}

sliderInfoL.addEventListener('click', function(){
    flowSliderInfo(-1);
});

sliderInfoR.addEventListener('click', function(){
    flowSliderInfo(1);
});

