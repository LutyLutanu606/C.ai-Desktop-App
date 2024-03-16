


const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create a new browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load YouTube in the new window
    mainWindow.loadURL('https://c.ai/');

}

// When Electron has finished initializing and is ready to create browser windows
app.on('ready', createWindow);

