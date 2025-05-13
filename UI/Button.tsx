import { GlobalStyles } from "@/constants/styles";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({children, onPress, mode, style}:{children?:any, onPress:any, mode?:any, style?:any}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=>pressed && Styles.pressed}>
        <View style={[Styles.button, mode=='flat' && Styles.flat]}>
          <Text style={[Styles.buttonText, mode== 'flat' && Styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;


const Styles = StyleSheet.create({
    button : {
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.Colors.primary500
    },
    flat:{
        backgroundColor:'transparent',   
    },
    buttonText : {
        textAlign:"center",
        color:"#fff"
    },
    flatText : {
        color:GlobalStyles.Colors.primary200,
    },
    pressed:{
        opacity:0.75,
        backgroundColor:GlobalStyles.Colors.primary100,
        borderRadius:4
    }
})
