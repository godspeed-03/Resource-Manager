import path from 'path'
import { app } from 'electron'
import { isDev } from './utils.js'

export function pathresolver (){
    return path.join (
        app.getAppPath(),
        isDev()? "." : "..",
        '/dist-desk/preload.cjs'
    )
}

export function getUIpath() {
    return path.join(app.getAppPath(), 'dist-web/index.html')
}