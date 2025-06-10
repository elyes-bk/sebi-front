// niveau 0 : additionSimple (0 à 9)
// niveau 1 : additionComplexe (10 à 100)
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
    
    //addition LVL 2
    }else if(score > 5 && score <=10){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        res = a + b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} + ${b} = `

    //soustraction LVL 3
    }else if(score > 10 && score <=15){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        while(b>a){
            b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        }
        res = a - b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} - ${b} = `

    //multiplication LVL 4
    }else if(score >15 && score <=20){
        a = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        b = Math.floor(Math.random()*11); //retourne un chiffre entre 0 et 10 inclus
        res = a * b;
        //affichage des chiffres dans la bulle
        document.getElementById("number").innerHTML=`${a} x ${b} = `

    //division LVL 5
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
    
    
}

//vérifie la réponse de l'utilisateur
function checkAnswer(){
    const userAnswer = parseInt(document.getElementById("response").value);
    const response = document.getElementById("response");
    const number = document.getElementById("number");
    const correct = document.getElementById("correct");
    const faux = document.getElementById("faux");
    let modulo = niveau % 2;

    /*if(modulo != 0){
        response.style.display="none";
        faux.style.display="none";
    }else*/
    if(userAnswer === res){
        stopTimer();
        response.style.display="none";
        number.style.display="none";
        correct.style.display="block";
        score++;
        displayScore();
        lvl(score)

        //"reinitialise" la page
        setTimeout(()=>{
            calcule();
            resetTimer();
            response.style.display="block";
            number.style.display="block";
            correct.style.display="none";
        },3000)
        return true;

    }else{
        stopTimer()
        response.style.display="none";
        faux.style.display="flex";
        faux.style.justifyContent="center";
        faux.style.alignItems="center";
        faux.innerHTML=`Résultat ${res} !`;
        faux.style.backgroundColor="red";

        setTimeout(()=>{                    
            calcule();
            resetTimer();
            response.style.display="block";
            faux.style.display="none";
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
        response.style.display="none";
        faux.style.display="flex";
        faux.style.justifyContent="center";
        faux.style.alignItems="center";
        faux.innerHTML=`Résultat ${res} !`;
        
        //attend 3 secondes avant de relancé 
        setTimeout(()=>{
            calcule();
            resetTimer();
            response.style.display="block";
            faux.style.display="none";
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




