import { AsyncStorage } from 'react-native';


function save(key, value) {
    AsyncStorage.setItem(key, value);
}

async function get(key) {
    return AsyncStorage.getItem(key);
}

export default {
    save,
    get,
}