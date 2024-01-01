/*Função para selecionar critério desejado*/
function selected(value){
   var formRugasT = document.getElementsByClassName('form1')
   var formCamada = document.getElementsByClassName('form2')
   var formAusenciaCamada = document.getElementsByClassName('form3')
   var formFurosInsert = document.getElementsByClassName('form4')

   if(value =="Rugas - Transversais"){
      formFurosInsert[0].style.display = 'none'
      formCamada[0].style.display = 'none'
      formRugasT[0].style.display = 'block'
      formAusenciaCamada[0].style.display = 'none'
   } else if(value == "Camada contaminada"){
      formAusenciaCamada[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formCamada[0].style.display = 'block'
      formFurosInsert[0].style.display = 'none'
      
   }else if(value =="Ausência de camada (Preform) - LE/TE - Casca")
   {
      formAusenciaCamada[0].style.display = 'block'
      formRugasT[0].style.display = 'none'
      formCamada[0].style.display = 'none'
      formFurosInsert[0].style.display = 'none'
   }else if(value =="Furos - Inserto do BF"){
      formAusenciaCamada[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formCamada[0].style.display = 'none'
      formFurosInsert[0].style.display = 'block'

   }
}

/*Get de radios*/
function carregar(){
   var fregiao = document.getElementsByName('regiao')
   var faltura = document.getElementsByName('altura')
   var fprop = document.getElementsByName('propagacao')
   var ftempo = document.getElementsByName('operacao')
   var ftam = document.getElementsByName('tamanho')
   var fluz = document.getElementsByName('luz')
   var laudo = document.getElementById('laudo')
   var fprop1 = document.getElementsByName('propagacao1')
   var ftempo1 = document.getElementsByName('operacao1')
   var ftempo2 = document.getElementsByName('operacao2')
   var fdesenv = document.getElementsByName('desenv')
   var ftempo3 = document.getElementsByName('operacao3')
   var fprop2 = document.getElementsByName('propagacao2')


 
/*---------------------------------------------------------*/
   
/*Condicionais para Rugas - Longitudinal*/

/*Condicionais para rugas  Transversais*/
 if(fregiao[1].checked && faltura[0].checked ){
    laudo.innerHTML = `Severidade 0` 
 } else if(faltura[0].checked && fprop[1].checked){
    laudo.innerHTML = `Severidade 0`   
 }else if(ftempo[0].checked && fprop[1].checked){
    laudo.innerHTML = `Severidade 1`
 } else if(ftempo[0].checked && ftam[0].checked && fprop[0].checked ){
    laudo.innerHTML = `Severidade 2`
 }else if(ftempo[1].checked && ftam[0].checked && fprop[0].checked){
    laudo.innerHTML = `Severidade 3`
 } else if(fprop[0].checked && ftam[0].checked && fluz[1].checked){
    laudo.innerHTML = `Severidade 4`
 } else if(fprop[0].checked && ftam[1].checked || fluz[0].checked){
    laudo.innerHTML = `Severidade 5`
 }

/*Condicionais para Rugas - Almas*/
/*Condicionais para Gap ou Ausência de Core - Cascas e Almas*/
/*Condicionais paraDegrau - Cascas*/
/*Condicionais para Tecido Seco na superfície - Cascas*/
/*Condicionais para Tecido Semi-Seco - Cascas e Almas*/
/*Condicionais para Bolhas - Casca*/
/*Condicionais para Corpo Estranho - Cascas e área de colagem (Somente aplicável para laminados infudidos ou áreas de colagem)			*/
/*Condicionais para Trincas transversais - Cascas e Almas*/
/*Condicionais para Trincas Longitudinais - Cascas e Almas*/
/*Condicionais para Trincas Transversais - linhas de colagem*/
/*Condicionais para Trincas Longitudinais - linhas de colagem*/
/*Condicionais paraDescolamentos  - Danos na alma/T-pultrudado*/
/*Condicionais para Trincas - Inserto do BF*/
/*Condicionais para Linhas de colagem - BA/BF*/
/*Condicionais para Vazio área de colagem ou Squeeze Out Pobre -Almas	*/
/*Condicionais para Vazio área de colagem - Pestanas BA e BF - até 2.000 mm da face da raiz	*/
/*Condicionais para Materiais soltos em geral - Interno da pá	*/
/*Condicionais para Delaminações - Cascas e Almas	*/
/*Condicionais para Delaminações - T-pultrudado	*/
/*Condicionais para LPS/LCTU - Root Chamber	*/
/*Condicionais para Danos ocasionados por raios/queimados/Flashover	*/
/*Condicionais para Camada rompida devido lixamento ou remoção de nylon	*/
/*Condicionais para Furos no laminado - Casca	*/
/*Condicionais para Furos no laminado - Inserto do BF	*/
if(ftempo3[0].checked && fprop2[0].checked){
   laudo.innerHTML= `Severidade 2`}
/*Condicionais para Ausência de camada (Preform) - LE/TE - Casca	*/
if(ftempo2[0].checked && fdesenv[1]){
   laudo.innerHTML = `Severidade 2`
}
/*Condicionais para Camada contaminada	*/
if(ftempo1[0].checked && fprop1[1].checked){
   laudo.innerHTML = `Severidade 1`
}else if(ftempo1[1].checked || fprop1[0].checked){
   laudo.innerHTML  = ` Severidade 3`
}
}
/*Func para redefinir as marcações recarregando a pagina*/
function redefinir(){
   window.location.reload(true);

}
