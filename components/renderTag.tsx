import { View, Text, StyleSheet, Pressable } from "react-native"
import colors from "../styles/colors"
import fonts from "../styles/fonts"
import { useState } from "react"
import { exampleData } from "./MemoProvider"

export default function renderItem  ({ item }: { item: exampleData })  {

    
    return (
        <Pressable style={styles.container} onPress={() => console.log(item.tag)}>
            <Text style={styles.tagText}>{item.tag}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 5,
        borderColor: colors.fontColor,
        marginVertical: 10,
    },
    tagText: {
        color: colors.fontColor,
        fontFamily: fonts.naverFont,
        fontSize: 20,
    }
})