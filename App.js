import { StatusBar } from 'expo-status-bar';
import TodoScreen from './scr/screens/TodoScreen';
import { COLORS } from './scr/constants/colors';

export default function App() {
  return (
    <>
    <StatusBar barStyle ='light-content' backgroundColor={COLORS.bg}/>
      <TodoScreen/>
    </>
  );
}