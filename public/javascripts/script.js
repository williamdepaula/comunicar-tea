function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);

  console.log(event);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElemnt = document.getElementById(id);
  console.log(draggableElemnt.innerHTML);
  const clone = draggableElemnt.cloneNode(true);
  const dropzone = document.getElementById("drop");
  dropzone.appendChild(clone);

  event.dataTransfer.clearData();
}

function reload() {
  // window.location.reload(true);
  document.getElementById("drop").innerHTML = "";
}

function enterFullScreen() {
  // element which needs to enter full-screen mode
  var element = document.querySelector("#container");

  // make the element go to full-screen mode
  element
    .requestFullscreen()
    .then(function () {
      // element has entered fullscreen mode successfully
    })
    .catch(function (error) {
      // element could not enter fullscreen mode
    });
}

function exitFullScreen() {
  document
    .exitFullscreen()
    .then(function () {
      // element has exited fullscreen mode
    })
    .catch(function (error) {
      // element could not exit fullscreen mode
      // error message
      console.log(error.message);
    });
}

function fullScreen() {
  // If element is in full-screen
  if (!window.screenTop && !window.screenY) {
    exitFullScreen();
  } else {
    enterFullScreen();
  }
}

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "26373633677-01380q883o7nmklh9750ol9kdgfoh895.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "continue_with.",
      logo_alignment: "left",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
