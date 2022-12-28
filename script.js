let rand = Math.floor(Math.random() * 101)

function play() {
    let message;
    let userNubmer = document.getElementById("user-number").value;

    if (userNubmer > rand) {
        message = "You're number is too big";
    } else if (userNubmer == rand) {
        message = "Congratulations! You guess the number";
    } else {
        message = "You're number is too small";
    }

    document.getElementById("system-message").innerHTML = message
}