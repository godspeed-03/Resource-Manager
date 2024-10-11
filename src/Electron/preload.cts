const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
    SubscribeStatics : (callback : (statistics :any)=>void) => callback({}),
    Staticdata : () => console.log('static')
})