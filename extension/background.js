chrome.runtime.onMessage.addListener((message) => {
  console.log("[NMRPC background]", message);

  if (message.type !== "NINTENDO_MUSIC_UPDATE") return;

  fetch("http://127.0.0.1:35645/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message.data)
  })
    .then(() => console.log("[NMRPC] sent to local app"))
    .catch((err) => console.error("[NMRPC] fetch error:", err));
});