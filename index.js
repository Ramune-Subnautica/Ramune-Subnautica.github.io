document.querySelectorAll('#game-folder').forEach(function(el) {
  el.addEventListener('click', function() {
    Swal.fire({
      color: '#ffffff',
      confirmButtonColor: '#8f8989',
      background: '#282828',
      confirmButtonText: 'Thanks, found it!',
      width: 900,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      html: `
        <style>
          p {
            color: #ffffff;
          }
          b {
            color: #ffa801;
          }
        </style>
        <div class="sweet-alert-text-container">
        <br></br>
          <p><b>Game folder for Steam</b><br></br>Open Steam > Go to your Library > Right click Subnautica > Manage > Browse Local Files</p>
          <img src="https://media.discordapp.net/attachments/1012967749045190696/1070312447409401917/image.png" width="400" height="200">
          <br></br>
          <p><b>Game folder for Epic Games</b><br></br>Open Epic > Go to your Library > Click the ••• next to Subnautica > Manage > Click the folder icon</p>
          <img src="https://media.discordapp.net/attachments/1012967749045190696/1070316530065227836/image.png" width="400" height="200">
          <br></br>
        </div>
      `
    });
  });
});