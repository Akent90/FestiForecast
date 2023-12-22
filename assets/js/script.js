var submitButton = document.querySelector("get info");

renderLastRegistered();

function renderLastRegistered() {
    var submitButton = localStorage.getItem("get info");

    if (!submitButton || "" ) {
        return;
    }
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var submitButton = submitButtonInput.value;

    if (submitButton === "") {
        displayMessage("Please select a date.")

        localStorage.setItem("submitButton", "date");
        renderLastRegistered();
    }
});