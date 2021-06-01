let lampada = document.querySelector('#lamp');
let botao = document.querySelector('#botao');
let lampadaQuebrada = false;


function ligarLampada(){
        if(!lampadaQuebrada){
            lampada.src = './img/ligada.jpg';
        }
}

function desligarLampada(){
    if(!lampadaQuebrada){
        lampada.src = './img/desligada.jpg';
    }
}

function quebrarLampada(){
    lampada.src = './img/quebrada.jpg';
    lampadaQuebrada = true;
}

function ligaDesliga(){
    if(botao.textContent == 'On'){
        ligarLampada();
        botao.textContent = 'Off';
    }else{
        desligarLampada();
        botao.textContent = 'On';
    }
}


lampada.addEventListener('dblclick',quebrarLampada);
lampada.addEventListener('mouseenter',ligarLampada);
lampada.addEventListener('mouseleave',desligarLampada);
botao.addEventListener('click',ligaDesliga);





