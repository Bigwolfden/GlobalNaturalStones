const { ipcRenderer } = require('electron');
const updateOnlineStatus = () => {
    //TODO: Create dialog box that notifies the user
    ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline');
};
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline',  updateOnlineStatus);