import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function Button({onpress, color, size, name} : {onpress:any, color:any, size:any, name:any}) {
  return (
    <Pressable style={({pressed})=>pressed && styles.press} onPress={onpress}  >
      <View style={styles.buttonContainer}>
       <Ionicons name={name} color={color} size={size}/>
      </View>
    </Pressable>
  );
}
export default Button;

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    press:{
        opacity:0.75
    }
})