document.querySelectorAll('#game-folder').forEach(function(el) {
  el.addEventListener('click', function() {
    Swal.fire({
      width: 650,
      color: '#ffffff',
      background: '#282828',
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
        <br>
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

document.getElementById("5").addEventListener("click", function(){
  let icon = this.querySelector("i");
  
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
  
  let image = document.getElementById("img5");
  
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

document.getElementById("3").addEventListener("click", function(){
  let icon = this.querySelector("i");
  
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
  
  let image = document.getElementById("img3");
  
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});