import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { exampleData, useMyContext } from "./MemoProvider";

export default function RenderItem ({ item, onPressTag, tagPressed }: { item: exampleData, onPressTag: (tag: string) => void, tagPressed: string })  {

    const isTagPressed = tagPressed === item.tag;
    const backgroundColor = isTagPressed ? colors.greenBlue : 'transparent';

    return (
        <Pressable style={[styles.container, { backgroundColor }]} onPress={() => onPressTag(item.tag)}>
            <Text style={[styles.tagText, { color: 'black' }]}>{item.tag}</Text>
        </Pressable>
    );
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
        fontFamily: fonts.naverFont,
        fontSize: 20,
    }
});