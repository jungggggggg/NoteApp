import { Slot } from "expo-router";
import { AppProvider } from "../components/MemoProvider";


export default function RootLayout() {
    return (
        <AppProvider>
        <Slot />
        </AppProvider>
    )
}