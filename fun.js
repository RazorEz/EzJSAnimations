const containerWidth = document.querySelector('.container').getBoundingClientRect()['width']
const sq1 = document.querySelector('#square1');
const sq2 = document.querySelector('#square2');
const sq3 = document.querySelector('#square3');
const sq4 = document.querySelector('#square4');

function translateX_func(el){
    el.setAttribute('data-x', anime.random(0, containerWidth));
    return el.getAttribute('data-x');
}

function translateY_func(el, i, l){
    el.setAttribute('data-y', anime.random(-10, (i)));
    return el.getAttribute('data-y');
}

function borderR_func(){
    var base_val = 0;
    var rand_num = anime.random(35, 50);
    var dimensions = [base_val + "%", rand_num + "%",];
    console.log(dimensions);
    return dimensions;
}

function animate(element){
    return anime({
    targets: [element],
    direction: 'alternate',
    loop: true,
    autoplay: false,
    translateX: function(el){
        return translateX_func(el)
    },
    translateY: function(el, i, l){
        return translateY_func(el, i, l);
    },
    scale: function(el, i, l){
        return (0);
    },
    borderRadius: function() {return borderR_func()},
    duration: function() { return anime.random(1200, 1800)},
    delay: function() {return anime.random(0, 300)},
    rotate: function() {return anime.random(-360, 360)}
});
};

//document.getElementById('play').onclick = translating.play;
//document.getElementById('pause').onclick = translating.pause;

sq1.addEventListener("click", animate(sq1).play);

sq2.addEventListener("click", animate(sq2).play);

sq3.addEventListener("click", animate(sq3).play);

sq4.addEventListener("click", animate(sq4).play);
