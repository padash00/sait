document.addEventListener("DOMContentLoaded", () => {
    const captainBtn = document.getElementById("captain-btn");
    const soloBtn = document.getElementById("solo-btn");
    const captainForm = document.getElementById("captain-form");
    const soloForm = document.getElementById("solo-form");

    captainBtn.addEventListener("click", () => {
        captainForm.classList.remove("hidden");
        soloForm.classList.add("hidden");
    });

    soloBtn.addEventListener("click", () => {
        soloForm.classList.remove("hidden");
        captainForm.classList.add("hidden");
    });
});
