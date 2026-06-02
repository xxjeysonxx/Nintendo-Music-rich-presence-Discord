const express = require("express");
const cors = require("cors");
const RPC = require("@xhayper/discord-rpc");

const CLIENT_ID = "YOUR_DISCORD_APP_CLIENT_ID"; // Reemplaza con tu Client ID de Discord

const app = express();
app.use(cors());
app.use(express.json());

const client = new RPC.Client({ clientId: CLIENT_ID });

let ready = false;
let current = "";

client.on("ready", () => {
  ready = true;
  console.log("Discord RPC Ready");
});

app.post("/update", async (req, res) => {
  const track = req.body;

  console.log("TRACK:", track);

  if (!ready) {
    console.log("RPC not ready yet");
    return res.sendStatus(200);
  }

  const key = `${track.title}-${track.artist}`;

  if (key === current) {
    return res.sendStatus(200);
  }

  try {
    await client.user.setActivity({
  details: track.title || "Nintendo Music",
  state: track.artist || track.album || "Nintendo Music",
  largeImageKey: track.artwork || "nintendo",
  largeImageText: `${track.title} - ${track.artist}`,
  startTimestamp: Date.now()
});

    current = key;
    console.log("Presence updated:", key);
  } catch (err) {
    console.error("RPC ERROR:", err);
  }

  res.sendStatus(200);
});

app.listen(35645, () => {
  console.log("Bridge running on 35645");
});

client.login();