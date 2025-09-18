//Seleziono elemento output DOM
const cardOut = document.querySelector(".row");

// setto costante per endpoint API
const endPointApi = "https://lanciweb.github.io/demo/api/pictures/";

// chiamata ajax all'API
axios.get(endPointApi).then((response) => {
    // estrapolo i dati inserendoli nella variabile
    const cards = response.data;
    // creo variabile di accumulo per l' output 
    let cardsString = "";

    //utilizzo dati array per creare elementi in pagina
    cards.forEach(cardItem => {

        // ad ogni card aggiungo pezzo a stringa outpput
        cardsString += `
        <div class="col-card">
            <div class="card">
                <img class="pin" src="img/pin.svg" alt="pin">
                <figure>
                    <img class="image" src="${cardItem.url}" alt="${cardItem.title}">
                    <figcaption>
                        <span class="date">${cardItem.date}</span>
                        <span class="title">${cardItem.title}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
        `;
    });

    //Output in HTML
    cardOut.innerHTML = cardsString;

    //seleziono tutte le col-card
    const colsCards = document.querySelectorAll(".col-card");

    //seleziono overlay
    const overlay = document.getElementById("overlay");

    //seleziono bottone
    const button = document.getElementById("btn");

    //seleziono immagine in overlay
    const imageOver = document.querySelector(".image-overlay");



    //ciclo su colsCards e ad ogni colCardItem aggiungo evento su di essa
    colsCards.forEach(colCardItem => {
        colCardItem.addEventListener("click", () => {
            //mostro overlay
            overlay.style.display = "flex";
            //seleziono immagine della card cliccata e la salvo in una variabile
            const img = colCardItem.querySelector(".image");
            //aggiorno overlay con l'immagine cliccata 
            imageOver.src = img.src;
            imageOver.alt = img.alt;
        });
    });

    //evento su bottone per chiudere overlay
    button.addEventListener("click", () => {
        //nascondo overlay
        overlay.style.display = "none";
    });
});