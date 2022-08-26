but = document.getElementById("button0");

for (let i = 1; i < 5; i++) {
    const newE1 = document.createElement("butten");
    newE1.innerHTML = `hello ${i}` //the text inside
    newE1.id = `button${i}`;
    newE1.addEventListener("click", function () {
        alert(`click on button ${i}`);

    });

    but.after(newE1);
}



// מסך, גודל מסויים.
כמות הכפתורים ידועה
אפשר לעשות עם bootstrape
//https://www.webtips.dev/memory-game-in-javascript