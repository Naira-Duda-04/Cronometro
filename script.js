window.onload = function (){
    //execulta um JS imediatamente após o carregamento da pagina.

    var seconds = 00;
    var tens = 00;

    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function (){
        clearInterval(Interval);//O método cleareInterval() limpa o temporizador no método setInterval().

        Interval = setInterval(startTimer, 10);//O metodo setInterval() chama uma função  em itervalo especifico (milessegundos).

        };

        buttonStop.onclick = function(){
            clearInterval(Interval);
        };
        
        buttonReset.onclick = function(){
            clearInterval(Interval);
            tens = '00';
            seconds = '00';
            
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;

        };

        function startTimer(){
            tens++;

            if( tens <=9){
                appendTens.innerHTML = '0' + tens;

            }

            if(tens > 9){
                appendTens.innerHTML = tens

            if(tens > 99)
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;

            tens = '0';

            appendTens.innerHTML = '0' + 0;
            
            }
            if(seconds > 9){
                appendSeconds.innerHTML = seconds
            }
        }

}