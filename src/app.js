function calculo(){

    const gasolinaDigitada = document.getElementById("mediaGasolina").value;
    const alcoolDigitado = document.getElementById("mediaAlcool").value;
    const Mgasolina = parseInt(gasolinaDigitada);
    const Malcool = parseInt(alcoolDigitado);

    const valorGasolina = document.getElementById("valorGasolina").value
    const valorAlcool = document.getElementById("valorAlcool").value
    const Vgasolina = parseFloat(valorGasolina);
    const Valcool = parseFloat(valorAlcool);
    
    const contaGasolina = Vgasolina / Mgasolina;
    const contaAlcool = Valcool / Malcool;

    if(contaGasolina < contaAlcool){
        const resultado = "É melhor abastecer com Gasolina"
        document.getElementById("result").innerHTML = resultado;
    }else{
        const resultado = "É melhor abastecer com Alcool"
        document.getElementById("result").innerHTML = resultado;
    }
   
}

