const btn = document.getElementById("helloBtn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
    msg.textContent = "Hello! This works offline :)";
});
