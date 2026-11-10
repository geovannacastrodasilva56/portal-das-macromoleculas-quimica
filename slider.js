const imagens = [
    "https://cdn.kastatic.org/ka-perseus-images/885917f865b20c569acbf9e6a11664837a194549.png",
    "https://files.passeidireto.com/3db7d30a-0c07-4283-8fd4-4e6381ed87ab/bg2.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGC-uF3qkOBT7iG1IGacU3_Gk4Fld8vKQ581MhNeQDB_3QtxEcJFsgkGz&s=10",
];

let indice = 0;
const imagem = document.getElementById("imagem");

function mostrarItem() {
    imagem.src = imagens[indice];
    imagem.alt = "Imagem " + (indice + 1) + " do carrossel";
}

document.getElementById("proximo").addEventListener("click", function() {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    mostrarItem();
});

document.getElementById("anterior").addEventListener("click", function() {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    mostrarItem();
});
mostrarItem();
