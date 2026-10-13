import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = 'todo_basic:items';

export async function loadTodos() {
    try {
        const raw = await AsyncStorage.getItem(KEY);
        return raw != null ? JSON.parse(raw) : [];
    } catch (e) {
        console.warn('loadTodo ล้มเหลวที่คีย์', e);
        return [];
    }
}

export async function saveTodos(todos) {
    try {
      
        await AsyncStorage.setItem(KEY, JSON.stringify(todos));
        return true;
    } catch (e) {
        console.warn('saveTodos ล้มเหลว', e);
        return false;
    }
}

export async function clearTodos() {
    try {
        await AsyncStorage.removeItem(KEY);
        return true;
    } catch (e) {
        console.warn('clearTodos ล้มเหลว', e);
        return false;
    }
}
export async function debugDump(){
    const keys = await AsyncStorage.getAllKeys()
    return await AsyncStorage.multiGet(keys)
}
