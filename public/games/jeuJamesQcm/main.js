// niveau 0 : addition (0 à 10)
// niveau 1 : soustraction (0 à 10)
// niveau 2 : multiplication (0 à 10)
// niveau 3 : division (0 à 10)


//bouton pause
//enlever les negatif NORMALEMENT C'EST BON
//temps restant et temps au dessus de la barre //C'EST BON
//page de demarrage




let res;
let score = 0;
let secondes = 0;
let chronoInterval;
const max = 30; //temps du chrono
let tempsPasse=0;
let largeur = 0;
let array=[];


const ratio = 100/max;

//affiche le niveau de difficulté
function lvl(score){
    niveau=Math.floor((score/6)+1);
    document.getElementById("niveaux").innerHTML = `NIVEAU ${niveau}`    
}

//affiche le nomble de point
function displayScore(){
    document.getElementById("score").innerHTML = `${score} POINT(S)`
}

//génére un chiffre aléatoirement et l'affiche
function calcule(){
    
    stopTimer()
    chronoInterval = window.setInterval(timer,1000);

    let a;
    let b;

    //addition LVL 1
    if(score <= 5){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        res = a + b;

        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} + ${b} = `
    
    //soustraction LVL 2
    }else if(score > 5 && score <=10){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        while(b>a){
            b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        }
        res = a - b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} - ${b} = `

    //multiplication LVL 3
    }else if(score > 10 && score <=15){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        res = a * b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} x ${b} = `

    //division LVL 4
    }else{
        document.getElementById("niveaux").innerHTML = `niveau 4`
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b;
        let alea;
        if(a===10){
            b=[10,5,2,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            
        }else if(a===9){
            b=[9,3,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===8){
            b=[8,4,2];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===7){
            b=[7,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===6){
            b=[6,3,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===5){
            b=[5,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===4){
            b=[4,2,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===3){
            b=[3,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===2){
            b=[2,1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            

        }else if(a===1){
            b=[1];
            alea=Math.floor(Math.random()*b.length);
            b=b[alea];            
        }else{
            b=Math.floor(Math.random()*11);
        }
        res = a / b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} / ${b} = `
    }
    answer();
}

//function pour creer 3 nombre au hasard et la bonne reponse dans les bouton
function answer(){
    array=[];
    let alea;
    if(score === 1){
        while(array.length<3){
            alea = Math.floor(Math.random()*21); //retourne un chiffre entre 0 et 20 inclus
            if(!array.includes(alea) && alea != res){
                array.push(alea);
            }
        }
        array.push(res);
        melange();
    }else if(score === 2){
        while(array.length<3){
            alea = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
            if(!array.includes(alea) && alea != res){
                array.push(alea);
            }
        }
        array.push(res);
        melange();
    }else if(score === 3){
        while(array.length<3){
            alea = Math.floor(Math.random()*101); //retourne un chiffre entre 0 et 100 inclus
            if(!array.includes(alea) && alea != res){
                array.push(alea);
            }
        }
        
        array.push(res);
        melange();
    }else{
        while(array.length<3){
            alea = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
            if(!array.includes(alea) && alea != res){
                array.push(alea);
            }
        }
        array.push(res);
        melange();
    }
}

//melanger les cases afin que la bonne reponse ne soit jamais au même index
function melange(){
    for(let i = array.length - 1; i >= 0; i--){
        let j = Math.floor(Math.random()*i+1);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    if (array.length !== 4) {
        console.error("Le tableau array ne contient pas exactement 4 éléments :", array);
        return;
    }
    for(let i = 0; i<array.length;i++){
        document.getElementById("case"+(i+1)).innerHTML = array[i];
    }
}

//vérifie la réponse de l'utilisateur
function checkAnswer(caseN){

    const button = document.getElementById(caseN);
    const userAnswer = parseInt(button.innerHTML);
    
    if(userAnswer === res){

        button.style.backgroundColor="green";
        stopTimer()
        score++;
        displayScore();
        lvl(score);
        //"reinitialise" la page
        setTimeout(()=>{ 
            button.style.backgroundColor="";                   
            calcule();
            resetTimer();
        },3000)
        return true;
    }else{
        button.style.backgroundColor="red";

        for(let i = 0; i<array.length; i++){ 
            if(array[i] === res){
               const rep = document.getElementById("case"+(i+1));
               rep.style.backgroundColor="green"
            }
        }
        

        stopTimer()
        setTimeout(()=>{ 
            button.style.backgroundColor="";  
            for(let i = 0; i<array.length; i++){
                const rep = document.getElementById("case"+(i+1));
                rep.style.backgroundColor=""
            }
            calcule();
            resetTimer();
        },5000)
        return false;
    }
}

//compte à rebours
function timer(){
    secondes++;
    let restTime = max - secondes;
    const temps = document.getElementById("chrono");

    if(secondes<=max){
        temps.innerHTML =`${restTime}`;   
        largeur = largeur+ratio
        temps.style.width = largeur + "%";
    }else{
        temps.innerHTML="Le temps est écoulé"
        stopTimer();
        largeur=0;
        
        
        //attend 5 secondes avant de relancé 
        setTimeout(()=>{
            calcule();
            resetTimer();
        },5000)
    }
}

//stop le compte a rebours
function stopTimer(){
    clearInterval(chronoInterval)


}

//remet le timer a 0
function resetTimer(){
    stopTimer();
    secondes = 0;
    largeur = 0;
    chronoInterval = setInterval(timer,1000);
}

niveau = lvl(score);
displayScore();
calcule();  
