const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const brightness = require('brightness'); // Node.js package to adjust brightness

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,  // Allow renderer process to communicate with Node.js
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));  // Load the HTML file
}

app.whenReady().then(createWindow);

// Listen for 'adjust-brightness' event from renderer process
ipcMain.on('adjust-brightness', (event, brightnessValue) => {
  const brightnessLevel = brightnessValue / 100; // Convert slider (0-100) to (0-1)
  
  brightness.set(brightnessLevel)  // Set brightness
    .then(() => {
      console.log(`Brightness set to: ${brightnessLevel * 100}%`);
    })
    .catch(err => {
      console.error('Failed to adjust brightness:', err);
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
