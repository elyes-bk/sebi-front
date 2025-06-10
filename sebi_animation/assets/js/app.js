let head = document.getElementById('head');
let body = document.getElementById('body');

let animation = ['./assets/img/mascotte_head_open_eyes.png', './assets/img/mascotte_head_eyes_closed.png', './assets/img/mascotte_body_1.png', './assets/img/mascotte_body_2.png'];

let i = 0;
let j = 0;

head.src = animation[0]
body.src = animation[2]

head.addEventListener("mouseenter", (e) => {
    const animationSebi = setInterval(function(){
        head.src = animation[1];
        if(i%2 == 0){
            head.style.transform = 'rotate(10deg)';
        } else {
            head.style.transform = 'rotate(-10deg)';    }
        i++;
        if(j%2 == 0){
            body.src = animation[2];
        } else {
            body.src = animation[3];
        }
        j++;
    }, 400);
    head.addEventListener("mouseout", (e) => {
        clearInterval(animationSebi);
        head.src = animation[0]
        body.src = animation[2]
        head.style.transform = 'rotate(0deg)'
    });
});
body.addEventListener("mouseenter", (e) => {
    const animationSebi = setInterval(function(){
        head.src = animation[1];
        if(i%2 == 0){
            head.style.transform = 'rotate(10deg)';
        } else {
            head.style.transform = 'rotate(-10deg)';    }
        i++;
        if(j%2 == 0){
            body.src = animation[2];
        } else {
            body.src = animation[3];
        }
        j++;
    }, 400);
    body.addEventListener("mouseout", (e) => {
        clearInterval(animationSebi);
        head.src = animation[0]
        body.src = animation[2]
        head.style.transform = 'rotate(0deg)'
    });
});

