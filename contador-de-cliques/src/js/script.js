var contador = 0
        var titulo = document.querySelector('h1.titulo')

        function clicar () {
            contador += 1
            titulo.innerHTML = `${contador}x clicado`
        }