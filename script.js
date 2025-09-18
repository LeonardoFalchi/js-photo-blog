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
                        <span class="title">${cardItem.title}</span>
                        <span class="date">${cardItem.date}</span>
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
    
    //selezione bottone
    const button = document.getElementById("btn");

    //selezione overlay
    const overlay = document.getElementById("overlay");

    //evento ad ogni col-card
    colsCards.forEach(colCardItem => {
        colCardItem.addEventListener("click", () => {
            overlay.style.display = "flex";
        });
    });

    //evento su bottone
    button.addEventListener("click", () => {
        overlay.style.display = "none";
    });


    
});