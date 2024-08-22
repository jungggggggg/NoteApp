import { Pressable, StyleSheet, Text, View } from "react-native";
import fonts from "../styles/fonts";



export default function RenderMemo ({ item }) {

    return (
        <Pressable style={[ styles.container,{ backgroundColor: `${item.color}`}]}>
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.smallText}>{item.content}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        // borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 1,
    },
    titleStyle: {
        fontFamily: fonts.naverClean,
        fontSize: 30,
    },
    smallText: {
        fontFamily: fonts.naverClean,
        fontSize: 20,
    }
})