import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";


const ButtonComponent = ({text, onPress, color}) => {
    return (
        <TouchableOpacity 
            style={[styles.button, {borderColor: color}]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        padding: 12,
        borderRadius: 10,
        backgroundColor: 'none',
        borderWidth: 2,
        marginTop: 20
    },
    buttonText:{
        fontSize: 18,
        textTransform: 'uppercase'
    }
})

export { ButtonComponent };