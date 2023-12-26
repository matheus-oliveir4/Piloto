function carregar(){
    var fregiao = document.getElementsByName('regiao')
    var faltura = document.getElementsByName('altura')
    var fprop = document.getElementsByName('propagacao')
    var ftempo = document.getElementsByName('operacao')
    var ftam = document.getElementsByName('tamanho')
    var fluz = document.getElementsByName('luz')

    var laudo = document.getElementById('laudo')
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

 }

