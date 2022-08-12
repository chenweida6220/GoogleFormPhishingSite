function exit_and_play() {
    /* Access image by id and change the display property to block*/
    document.getElementById('gif_screamingbeaver')
            .style.display = "block";

    document.getElementById('audio_screamingbeaver').play()

    document.getElementById('buttonSubmit')
            .style.display = "none";

    document.getElementById('buttonExit')
            .style.display = "none";
}

function submit_and_play() {
    /* Access image by id and change the display property to block*/
    document.getElementById('gif_rickroll')
            .style.display = "block";

    document.getElementById('audio_rickroll').play()
}

// function loading() {
//     console.log($('form')[0].checkValidity())
//     //use on form
//     if ($('form')[0].checkValidity()) {
//       $("#loading").show();
//       $("#content").hide();
//     }
//   }