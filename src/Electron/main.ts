import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './utils.js'
import { pollresources } from './resorcemanager.js'
import { pathresolver } from './pathresolver.js'

app.on( 'ready', () =>{
    const mainWindow = new BrowserWindow({
        webPreferences : {
            preload : pathresolver(),
        }
    })
    if(isDev()){
        mainWindow.loadURL('http://localhost:5234')
    }else{
        mainWindow.loadFile(path.join (app.getAppPath(), 'dist-web/index.html'))

    }
    pollresources()
})