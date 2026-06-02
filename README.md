# Nintendo Music Rich Presence for Discord

Display your currently playing Nintendo Music track directly in Discord Rich Presence.

This project uses a Chrome/Brave extension and a local Node.js bridge to read Nintendo Music playback information through the Media Session API and send it to Discord.

Repository:

[Nintendo-Music-rich-presence-Discord](https://github.com/xxjeysonxx/Nintendo-Music-rich-presence-Discord)

## Features

* Dynamic song title
* Dynamic game/album title
* Dynamic cover artwork
* Discord Rich Presence integration
* Chrome and Brave support
* Lightweight Node.js bridge

## Preview

```text
Minigames
The Legend of Zelda: A Link to the Past
```

With dynamic artwork taken directly from Nintendo Music.

---

## Requirements

* Discord Desktop
* Nintendo Music subscription
* Node.js 18+
* Chrome or Brave

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/xxjeysonxx/Nintendo-Music-rich-presence-Discord.git
cd Nintendo-Music-rich-presence-Discord
```

### 2. Install dependencies

```bash
cd app
npm install
```

### 3. Create a Discord Application

Go to:

https://discord.com/developers/applications

Create a new application and copy the Application ID.

Replace:

```js
const CLIENT_ID = "YOUR_CLIENT_ID";
```

inside:

```txt
app/index.js
```

### 4. Configure Rich Presence Assets

In Discord Developer Portal:

```text
Rich Presence → Art Assets
```

Upload a fallback image named:

```text
nintendo
```

### 5. Start the bridge

```bash
node index.js
```

Expected output:

```text
Bridge running on 35645
Discord RPC Ready
```

### 6. Load the extension

Open:

```text
chrome://extensions/
```

Enable:

```text
Developer Mode
```

Select:

```text
Load unpacked
```

and choose:

```text
extension/
```

### 7. Open Nintendo Music

Go to:

https://music.nintendo.com/

Play any track and Discord will update automatically.

---

## Project Structure

```text
Nintendo-Music-rich-presence-Discord/
│
├── app/
│   ├── index.js
│   └── package.json
│
└── extension/
    ├── manifest.json
    ├── background.js
    └── content.js
```

---

## How It Works

```text
Nintendo Music
      ↓
Media Session API
      ↓
Chrome Extension
      ↓
Local Express Bridge
      ↓
Discord RPC
      ↓
Discord Rich Presence
```

The extension reads:

```js
navigator.mediaSession.metadata
```

to obtain:

* Song title
* Artist/Game
* Album
* Cover artwork

---

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Nintendo or Discord.

Nintendo Music, Pokémon, Zelda, Mario, Pikmin, and all related properties belong to Nintendo and their respective owners.

---

## License

MIT License
