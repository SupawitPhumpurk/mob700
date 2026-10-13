import { StyleSheet } from "react-native";
import { Color, colors } from "./theme";

export const styles = StyleSheet.create({
    container: {marginbottom: 14},
    label:{ color:colors.text, fontSize: 14, marginBottom: 6},
    input:{
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal:12,
        paddingVertical:11,
        color: colors.text,
        fontSize:15
    },
    inputError:{borderColor: colors.red},
    errorText:{color:colors.red, fontSize:12, marginTop:5},
    hintText:{color:colors.dim , fontSize: 12, marginTop: 5}
    
})