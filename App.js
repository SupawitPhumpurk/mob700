import { Pressable, StatusBar, Text, View } from 'react-native';
import { SQLiteProvider } from 'expo-sqlite';

import { DATABASE_NAME, initDb } from './src/db/database';
import { colors } from './src/styles/theme';
import RegisterScreen from './src/screens/RegisterScreen';
import { styles } from './src/styles/appStyles';
import StudentListScreen from './src/screens/StudentListScreen'
import { useState } from 'react';
export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.bg} />
      <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}>
        <Main />
      </SQLiteProvider>
    </>
  );
}

function Main() {
  const [tab, setTab] = useState('register')
  const [reloadKey, setReloadKey] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ระบบลงทะเบียนนิสิต</Text>
      </View>
      <View style={styles.tabs}>
        <TabButton
          label='ลงทะเบียน'
          active={tab === 'register'}
          onPress={() => setTab('register')}
        />
        <TabButton
          label='รายชื่อ'
          active={tab === 'list'}        
          onPress={() => setTab('list')}    
        />
      </View>
      {tab === 'register' ? (
        <RegisterScreen onRegistered={() => setReloadKey((k) => k + 1)} />
      ) : (
        <StudentListScreen reloadKey={reloadKey} />
      )}
    </View>
  )
}

function TabButton({ label, active, onPress }) {
  return (
    <Pressable style={[styles.tab, active && styles.tabActive]}
      onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabActive]}>
        {label}

      </Text>

    </Pressable>
  )
}
