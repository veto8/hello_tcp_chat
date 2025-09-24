var socket = new WebSocket("ws://127.0.0.1:8765");
socket.onopen = function (e) {
  console.log("...open");
};
socket.onmessage = function (event) {
  console.log("...message from server");
  console.log(event.data);
};
socket.onclose = function (event, code) {
  console.log("...close");
};

socket.onerror = function (event, code) {
  console.log("...error");
};

let send_button = document.querySelector("#send_button");

send_button.addEventListener("click", (event) => {
  let msg = document.querySelector("#message").value;
  msg += "\n";
  socket.send(msg);
});

/*


window.onload = async function () {
  socket.addEventListener("open", () => {
    console.log("...open socket");
  });

  socket.addEventListener("error", (event) => {
    console.log("ERROR");
  });

  socket.addEventListener("close", (event) => {
    console.log("The connection has been closed successfully.");
  });

  socket.addEventListener("message", (event) => {
    console.log("...get message");
    var decoder = new TextDecoder("utf-8");
    const t = decoder.decode(event.data);

    console.log(t);
  });

  let send_button = document.querySelector("#send_button");

  send_button.addEventListener("click", (event) => {
    let msg = document.querySelector("#message").value;
    msg += "\n";
    console.log(msg);
    //socket.send(msg);
    socket.send(JSON.stringify({ type: "heartbeat" }));
  });
};

async function convert_text(blob) {
  const text = await new Response(blob).text();
  return text;
}
*/
