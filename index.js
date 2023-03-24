// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOMM has loaded");
    let parTag = document.getElementById("text")
    parTag.textContent = "This is really cool!"
})

console.log("Load Dom before event listener")