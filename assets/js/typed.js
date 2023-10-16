const typed = new Typed('.typed', {
  strings: [
            '<strong class="person">Full Stack Developer</strong>', 
            '<strong class="person">Journalist</strong>', 
            '<strong class="person">Lets work together!</strong>'
        ],
        
        // stringsELement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra, 
        startDelay: 500, // Tiempo de retraso en inictar la animacion. Aplica tambien cuando termina y vuelve a inictar, 
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra, 
        smartBackspace: true, // Elimtnar solamente las palabras que sean nuevas en una cadena de texto 
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array. false = infinite
        showcursor: true, // Mostrar cursor palpitanto
        cursorChar: '↓', //caracter para el cursor
        contentType: 'html' // 'html' o 'null' para texto sin formato
        

});
