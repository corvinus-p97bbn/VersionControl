window.onload = () => { console.log("Loaded...") }
var faktX = (n) =>
{
    if (n === 0 || n === 1) {
        return 1
    }
    else {
        return n * faktX(n - 1)
    }
}

for (var i = 0; i < 10; i++)
{
    var sdiv = document.createElement("div");
    sdiv.classList.add("i");
    dovument.getElemenById("pascal").appendChild(sdiv);
}

for (var u = 0; u < i; u++)
{
    var ediv = document.createElement("div");
    sdiv.appendChild(ediv);
    ediv.classList.add("elem");
    ediv.innerText = faktX(i) / (faktX(u) * faktX(i - u));
    ediv.style.background = purple;
}