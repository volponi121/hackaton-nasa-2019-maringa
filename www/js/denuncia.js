let comFoto;

document.addEventListener('openPage', function() {
    esconderFoto();
})

function tirarFoto() {
    comFoto = document.getElementById('fotoFogo');
    comFoto.style.visibility = 'visible';
}

function esconderFoto() {
    comFoto = document.getElementById('fotoFogo');
    comFoto.style.visibility = 'hidden';
}

function localizar() {
    document.getElementById('obs').value='';
    document.getElementById('local').value='';
    document.getElementById('city').value='';
    document.getElementById('estado').value='';
    esconderFoto();
}
