function carregar(){
    var fsev = document.getElementsByName('criterio')
    var laudo = document.getElementById('laudo')
 if(fsev[0].checked){
    laudo.innerHTML = `Severidade 0`
    
 } else if(fsev[1].checked){
    laudo.innerHTML = `Severidade 1`
 
} else if(fsev[2].checked){
    laudo.innerHTML = `Severidade 2`
 
} else if(fsev[3].checked){
    laudo.innerHTML = `Severidade 3`
 
} else if(fsev[4].checked){
    laudo.innerHTML = `Severidade 4`
 
} else if(fsev[5].checked){
    laudo.innerHTML = `Severidade 5`
 
} 


}