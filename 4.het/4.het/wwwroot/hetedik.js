var kérdések;

    
fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

}
window.onload = () => {
    letöltés();
    document.getElementById("back").onclick = () => {
        sorszam--;
        if (sorszam== -1)
        {
            megjelenites(sorszam[2]);
        }
        document.getElementById("next").onclick = () => {
            sorszam++;
            if (sorszam == 3) {
                megjelenites(sorszam[0]);
            }
    }
}
