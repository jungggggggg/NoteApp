import { SafeAreaView, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function addMemo() {

    const handlePress = () => {
        router.back()
    }

    return (
        <SafeAreaView>
            <Ionicons name="arrow-back" size={24} color="black" onPress={handlePress}/>
            <Text>adding memo</Text>
        </SafeAreaView>
    )
}