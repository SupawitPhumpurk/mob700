export function validateForm({name, surname, studentId, username , 
    password , confirm}){
        const errors ={}

        if(name.trim() === '') errors.name = 'กรุณากรอกชื่อ'
        if(surname.trim() === '') errors.surname = 'กรุณากรอกนามสกุล'

        if(!/^\d{10}$/.test(studentId.trim())){
            errors.studentId =  'รหัสนิสิตต้องมี 10 หลัก'
        } 

        if(!/^[a-zA-Z0-9_]{4,20}$/.test(username.trim())){
            errors.username = 'ชื่อผู้ใช้ยาว 4-20 ตัว ใช้ได้เฉพาะ a-z A-Z 0-9 และ _'
        }

        if(password.length<8){
            errors.password = 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร'
        } else if(!/[a-zA-Z]/.test(password)|| !/\d/.test(password)) {
            errors.password = 'รหัสผ่านต้องมีทั้งตัวอักษรและตัวเลข'
        }
        if (!confirm ) {  errors.confirm = 'กรุณายืนยันรหัสผ่าน'
        }else if (confirm.length < 8) { 
        errors.confirm = 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร'
        } else if (confirm !== password) { errors.confirm = 'รหัสผ่านไม่ตรงกัน'
}
        return errors
}
export function hasError(errors){
    return Object.keys(errors).length > 0
}