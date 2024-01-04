//local storage, event listener, and alert
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
    var inputValue =JSON.parse(localStorage.getItem("location"));

    if (input === "") {
        alert("Please select a location.")

        localStorage.setItem("submitButton", "date");
        renderLastRegistered();
    }
});
//event listener for cards
weatherSection.addEventListener("click", function(event) {
    event.preventDefault();
console.log("hello")
    var input = weatherSection.value;
})