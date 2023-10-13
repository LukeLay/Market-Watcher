const { BrowserWindow, app } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1366,
        height: 1366,
        backgroundColor: '#666666',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            contentSecurityPolicy: "default-src 'self'; script-src 'self'",
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

