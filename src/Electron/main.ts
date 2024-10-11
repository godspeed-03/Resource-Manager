import {app, BrowserWindow} from 'electron'
import path from 'path'
import { ipcMainHandle, isDev } from './utils.js'
import { getdevicedata, pollresources } from './resorcemanager.js'
import { getUIpath, pathresolver } from './pathresolver.js'

app.on( 'ready', () =>{
    const mainWindow = new BrowserWindow({
        webPreferences : {
            preload : pathresolver(),
        }
    })
    if(isDev()){
        mainWindow.loadURL('http://localhost:5234')
    }else{
        mainWindow.loadFile(getUIpath())

    }
    pollresources(mainWindow)

    ipcMainHandle('Staticdata', () => {
        return getdevicedata();
    })
})