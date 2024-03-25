import { StyleSheet, View, Text } from 'react-native';

export default function Heading({ label }) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginHorizontal: 5,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
        // marginVertical: 15,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
    },
});