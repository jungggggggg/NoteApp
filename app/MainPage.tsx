import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import fonts from "../styles/fonts";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import renderItem from "../components/renderTag";
import colors from "../styles/colors";
import { useEffect, useState } from "react";
import { useAppContext } from "../components/MemoProvider";


export default function MainPage() {

    const { exampleData } = useAppContext();
    const [groupedData, setGroupedData] = useState([]);

    useEffect(() => {
        const grouped = [];

        exampleData.forEach(item => {
            const existingGroup = grouped.find(group => group.tag === item.tag);
            
            if (existingGroup) {
                existingGroup.items.push({
                    title: item.title,
                    content: item.content,
                    color: item.color,
                });
            } else {
                grouped.push({
                    tag: item.tag,
                    items: [{
                        title: item.title,
                        content: item.content,
                        color: item.color,
                    }]
                });
            }
        });

        setGroupedData(grouped);
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            {/* 헤더 */}
            <View style={styles.header}>
                <Text style={styles.headerText}>반가워요! 승운님</Text>
                <EvilIcons name="search" size={30} color="black" style={styles.searchIcon} />
            </View>

            {/* 네비게이션 */}
            <View style={styles.navigator}>
                <Text style={styles.mainText}>나의 메모</Text>
                <AntDesign name="plus" size={20} color="black" style={styles.addIcon} />
            </View>

            {/* 태그선택 */}
            <View style={styles.flatlistStyle}>
            <FlatList
                data={groupedData}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            </View>

            {/* 태그에 맞는 메모 */}


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    navigator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 30,
    },
    headerText: {
        fontFamily: fonts.naverClean,
        fontSize: 20,
        padding: 10,
        paddingHorizontal: 20,
        color: colors.fontColor
    },
    searchIcon: {
        padding: 10,
        paddingHorizontal: 20,
    },
    mainText: {
        fontFamily: fonts.naverFont,
        fontSize: 70,
        paddingHorizontal: 30,
        color: colors.fontColor
    },
    addIcon: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    flatlistStyle:{
        marginHorizontal: 20,
    }

})