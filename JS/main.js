const controle = document.querySelectorAll("[data-controle]");
const estatistica= document.querySelectorAll("[data-estatistica]");
const cores= document.querySelectorAll("[data-cor]");
const Robotron= document.querySelector("#robotron")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        
        alteraEstatistica(elemento.dataset.pecas, elemento.dataset.controle);
    })
})

cores.forEach((elemento)=>{
    elemento.addEventListener("click",(event)=>{
        alteraCor(event.target.dataset.cor);
        
    } )
})

function alteraEstatistica(peca, sinal){
  
  
    estatistica.forEach((elemento) => { 
        
         if (sinal === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
         } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
         }  
          
        
    })
}


function manipulaDados(operacao, ondeAlterar){
    const peca= ondeAlterar.querySelector("[data-contador]");
  
    
        if (operacao==="+"){
        peca.value= parseInt(peca.value)+1;  
    } else {
        peca.value= parseInt(peca.value)-1;
    } 
    
}

function alteraCor (cor){
    if (cor ==="blue"){
        document.querySelector('#robotron').src= "img/robotron_blue.png";
    } else if (cor ==="yellow"){
        document.querySelector('#robotron').src= "img/robotron_yellow.png";
    } else if (cor ==="black"){
        document.querySelector('#robotron').src= "img/robotron_black.png";
    } else if (cor ==="white"){
        document.querySelector('#robotron').src= "img/robotron_white.png";
    } else if (cor ==="red"){
        document.querySelector('#robotron').src= "img/robotron_red.png";
    } else if (cor ==="pink"){
        document.querySelector('#robotron').src= "img/robotron_pink.png";
    }

}