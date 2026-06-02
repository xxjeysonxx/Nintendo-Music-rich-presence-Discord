function getTrack() {
  const media = navigator.mediaSession?.metadata;

  const artwork =
    media?.artwork?.find(a => a.sizes === "512x512")?.src ||
    media?.artwork?.at(-1)?.src ||
    media?.artwork?.[0]?.src ||
    "";

  return {
    title: media?.title || "Nintendo Music",
    artist: media?.artist || media?.album || "Nintendo Music",
    album: media?.album || "",
    artwork,
    url: location.href,
    timestamp: Date.now()
  };
}

setInterval(() => {
  const data = getTrack();

  console.log("[NMRPC] sending:", data);

  chrome.runtime.sendMessage({
    type: "NINTENDO_MUSIC_UPDATE",
    data
  });
}, 3000);