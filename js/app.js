let  submit = document.getElementById("submit-button");

function messageSubmitted() {
    alert("Your message has been successfully recorded");
}

submit.addEventListener("click", messageSubmitted);