import { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { listStudents, clearStudents } from "../db/database";
import { styles } from "../styles/studentListStyles"

export default function StudentListScreen({ reloadKey}) {
    const db = useSQLiteContext()
    const [rows, setRows] = useState([])

    const reload = useCallback(async() => {
        setRows(await listStudents(db))
    }, [db])

    useEffect(() => {
        reload()
    }, [reload, reloadKey])

    function handleClear() { // แก้ตัว L เป็นตัว l เล็กให้ตรงกัน
        Alert.alert('ล้างข้อมูลทั้งหมด', 'ลบข้อมูลผู้ลงทะเบียนทุกคน กู้คืนไม่ได้', [
            { text: 'ยกเลิก', style: 'cancel'},
            {
                text: 'ล้าง',
                style: 'destructive',
                onPress: async() => {
                    const n = await clearStudents(db) // เพิ่ม await
                    await reload()                  // เพิ่ม ()
                    Alert.alert('เสร็จแล้ว', `ลบไป ${n} รายการ`)
                }
            }
        ])
    }

    return (
        <FlatList
            data={rows}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.container}
            ListHeaderComponent={
                <Text style={styles.summary}>
                    ลงทะเบียนเเล้ว {rows.length} คน
                </Text>
            }
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Text style={styles.cardName}>
                        {item.name} {item.surname}
                    </Text>
                    <Text style={styles.cardLine}>รหัสนิสิต {item.student_id}</Text>
                    <Text style={styles.cardLine}>ชื่อผู้ใช้ {item.username}</Text>

                    <Text style={styles.hashLabel}>
                        คำย่อรหัสผ่าน{' '}
                        <Text style={styles.hashValue}>
                            {item.hash_preview}...
                        </Text>
                    </Text>
                </View>
            )}
            ListEmptyComponent={
                <Text style={styles.empty}>ยังไม่มีผู้ลงทะเบียน</Text>
            }
            ListFooterComponent={
                rows.length > 0 ? (
                    <Pressable style={styles.clearButton} onPress={handleClear}>
                        <Text style={styles.clearText}>
                            ล้างข้อมูลทั้งหมด
                        </Text>
                    </Pressable>
                ) : null
            }
        />
    )
}