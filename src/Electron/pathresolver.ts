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