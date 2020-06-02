const app = document.getElementById("app");
const valores=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var parametro = 6;
let qtPares = (parametro*parametro)/2;

let cartaPega = [];
let qtselecionadas=0;
let qtDescobertos=0;

console.log(parametro);
console.log(qtPares);
function renderizarCartas(){
    var pares=[];
    for(var i=0;i<qtPares;i++) { pares.push(0); }
    for(var li = 0;li < parametro;li++){
        let linha = document.createElement("div");
        linha.classList.add("row");

        for(let col = 0;col < parametro;col++){
            let id =li.toString()+'-'+col.toString();
            let vlCarta = 0;

            do{
                vlCarta = Math.floor(Math.random()*qtPares);
            }while(pares[vlCarta] ==2);
            pares[vlCarta]+=1;

            let carta= document.createElement("div");
            
            carta.classList.add("col");
            carta.classList.add("align-middle");
            carta.classList.add("carta");
            carta.id = id;
            carta.addEventListener('click',function(){ seleCarta(id,vlCarta); });
            linha.appendChild(carta);
        }
        app.appendChild(linha);
    }
    console.log(pares);
}
function seleCarta(idc='',valor=0){
    if(qtselecionadas<2){
        var selecionado = document.getElementById(idc);
        if(selecionado.innerHTML !=''){
            console.log("nao selecionavel!");
            return;
        }
        selecionado.innerHTML = valores[valor];
        qtselecionadas++;
        cartaPega.push(selecionado);

        if(qtselecionadas==2){
            if(cartaPega[0].innerHTML == cartaPega[1].innerHTML){
                console.log("cartas iguais!");
                qtselecionadas = 0;
                cartaPega = [];
                qtDescobertos++;
                if(qtDescobertos == qtPares) {
                    console.log("finalizado!");
                }
            }
            else{
                setTimeout(() => {
                    console.log("cartas diferentes!");
                    cartaPega[0].innerHTML='';
                    cartaPega[1].innerHTML='';
                    qtselecionadas = 0;
                    cartaPega = [];
                }, 500);
            }
        }
    }
    else{ console.log('nao pode selecionar!'); }
}
renderizarCartas();