var socket = new WebSocket("ws://127.0.0.1:8765");
var msg_box = document.querySelector("#msg_box");
msg_box.value = "";
var name = "";

socket.onopen = function (e) {
  log("...open");
};

socket.onmessage = function (event) {
  //console.log("...message from server");
  log(event.data);
};

socket.onclose = function (event, code) {
  log("...close");
};

socket.onerror = function (event, code) {
  log("...error");
};

let send_button = document.querySelector("#send_button");

send_button.addEventListener("click", (event) => {
  let msg = document.querySelector("#message").value;
  document.querySelector("#message").value = "";
  if (name === "") {
    name = "[" + msg + "] ";
  }

  msg += "\n";
  socket.send(msg);
  log(name + msg);
});

function log(msg = "") {
  msg_box.value += msg + "\n";
}
