function show() {
    /* Access image by id and change the display property to block*/
    document.getElementById('gif_rickroll')
            .style.display = "block";

    document.getElementById('buttonSubmit')
            .style.display = "none";

    document.getElementById('buttonExit')
            .style.display = "none";
}