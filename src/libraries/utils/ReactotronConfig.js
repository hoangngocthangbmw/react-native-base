import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

let dev = __DEV__;

function configure(){
    if(!dev) return
    Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())


    

    connectConsoleToReactotron()
    return Reactotron.connect()
}


function connectConsoleToReactotron() {
    if(!dev) return
    console.log = Reactotron.log;
    console.warn = Reactotron.warn;
    console.error = Reactotron.error;
  }

export default ReactotronConfig = {
    configure,
}
