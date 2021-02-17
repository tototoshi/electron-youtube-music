import electron from "electron";

const APP_NAME = "YouTube Music";
const URL_YOUTUBE_MUSIC = "https://music.youtube.com";

// Google is blocking access from Electron when you sign in.
// It's a dirty hack, but if you set your User-Agent to that of Microsoft Edge, you can sign in.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36 Edg/79.0.309.54";

const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    electron.shell.openExternal(url);
  });

  win.loadURL(URL_YOUTUBE_MUSIC);
};

electron.app.name = APP_NAME;
electron.app.userAgentFallback = USER_AGENT;
electron.app.on("ready", createWindow);
