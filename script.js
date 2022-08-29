function genererNombreAleatoire() {
    const min = Number(document.querySelector("#premier-nombre").value);
    const max = Number(document.querySelector("#deuxieme-nombre").value);

    //let random =  Math.floor(Math.random() * (max - min + 1)) + min;
    // Random entre min et max
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('#nombre-aleatoire').innerHTML = random;
}
