var submitButton = document.querySelector("get info");

renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textConter = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var submitButton = localStorage.getItem("get info");
    submitButton.textContent = submitButton;
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var submitButton = submitButtonInput.value;
    if (submitButton === "") {
        displayMessage("Please select a date.");

        localStorage.setItem("date", "weather");
        renderLastRegistered();
        }
});


