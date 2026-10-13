import {View , Text, TextInput} from 'react-native'

import {styles} from '../styles/filedStyles'
import{colors} from '../styles/theme'

 export default function Field({label,style, error ,hint
,...inputProps}){
 return(
    <View style={[styles.container, style ]}>
        <Text style ={styles.label}>{label}</Text>
        <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={colors.dim}
        {...inputProps}
        />
        {error ? (
            <Text style={styles.errorText}>{error}</Text>
        ): hint ? (
            <Text style ={styles.hintText}>{hint}</Text>
        ) : null}
    </View>
 )
}

 //const Field = () =>{}
 //export default Field