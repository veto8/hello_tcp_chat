window.onload = async function () {
  const wsUri = "ws://127.0.0.1:8765";
  const websocket = new WebSocket(wsUri);

  websocket.addEventListener("open", () => {
    console.log("open");
    //websocket.send("vetox");
  });

  websocket.addEventListener("error", (e) => {
    console.log("ERROR");
  });

  websocket.addEventListener("message", (e) => {
    console.log("...get message");
    let text = convert_text(e.data);
    websocket.send("xxxxxx");
    //event.data.text().then((txt) => console.log(txt));
  });
};

async function convert_text(blob) {
  const text = await new Response(blob).text();
  console.log(text);
  return text;
}
