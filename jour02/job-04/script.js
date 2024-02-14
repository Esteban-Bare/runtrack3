const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key.toLowerCase();

    if (keyPressed.length === 1 && keyPressed >= 'a' && keyPressed <= 'z') {
        textarea.value += keyPressed;
    }
});
