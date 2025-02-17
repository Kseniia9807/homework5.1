document.addEventListener( 'DOMContentLoaded', function (){
    let count = 0;
    const but = document.getElementById('but');
    const countclick = document.getElementById('countclick');
    but.addEventListener('click', function(){
        count += 1;
        countclick.textContent = count;
        if(count>=8){
            but.disabled=true;
        }
    });
    let co = 0;
    const tim = document.getElementById("timer");
    const interval = setInterval( function(){
        co+= 1;
        tim.textContent = co;

        if(co>=10){
            clearInterval(interval);

        }
    }, 1000);
//дз5 последняя задача

let ct= 0;
let intervalic;

const tm = document.getElementById("tm");
const sb = document.getElementById("sb");
const st = document.getElementById("st");
const re = document.getElementById("re");

sb.addEventListener('click', function(){
    if(!intervalic){
        //проверяет не запущен ли таймер
        intervalic = setInterval(function(){
        ct+= 1;
        tm.textContent = ct;
        }, 500);
    }
});

st.addEventListener('click', function(){
  clearInterval(intervalic);
  intervalic = null;
  
});
re.addEventListener('click', function(){
    clearInterval(intervalic);
    intervalic = null;
    ct = 0;
    tm.textContent = ct;
    
  });

});

