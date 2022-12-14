// contador
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

//botoes
var adicionar = document.getElementById('adicionar');
var substrair = document.getElementById('subtrair');



// mudar a cor para vermelho caso o numero seja negativo
function mudarCor(currentNumber){
    (currentNumber < 0)? currentNumberWrapper.style.color='red':currentNumberWrapper.style.color='black';
}

//desativar botoes caso o numero esteja acima/abaixo do limete
function desativarBotao(currentNumber){
    (currentNumber >= 10)? adicionar.hidden=true: adicionar.hidden=false;
    (currentNumber <= -10)? substrair.hidden=true: substrair.hidden=false;
}


// incrementar o contador 
function increment() {
    currentNumber = currentNumber + 1;
    mudarCor(currentNumber);
    desativarBotao(currentNumber);
    currentNumberWrapper.innerHTML = currentNumber;
}

// decrementar  o contador  
function decrement(){
    currentNumber = currentNumber -1;
    desativarBotao(currentNumber);
    mudarCor(currentNumber);
    currentNumberWrapper.innerHTML = currentNumber;
}


