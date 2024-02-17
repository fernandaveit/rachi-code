document.addEventListener("DOMContentLoaded", () => {
    var menu = document.querySelector('#menu')
    var lista = document.querySelector('#lista')
    menu.addEventListener('click', () => {

        if (lista.classList.contains('hidden')) {
            lista.classList.remove('hidden');
            lista.classList.add('flex');
        } else {
            lista.classList.remove('flex');
            lista.classList.add('hidden');

        }
    })
});


