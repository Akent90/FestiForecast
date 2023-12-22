var inputValue = document.querySelector("#inputLocation");
var submitButton = document.querySelector("#submitButton")

renderLastRegistered();

function renderLastRegistered() {
    var submitButton = localStorage.getItem("#get-info");

    if (!submitButton || "" ) {
        return;
    }
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var input = inputValue.value;

    if (input === "") {
        alert("Please select a date.")

        localStorage.setItem("submitButton", "date");
        renderLastRegistered();
    }
});