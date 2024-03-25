import { StyleSheet, View, Text } from 'react-native';

export default function Title({ label }) {
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
        padding: 20,
        backgroundColor: "purple",
        marginVertical: 10,
        marginTop: 40
    },
    text: {
        fontSize: 45,
        fontWeight: "600",
        color: "white"
    },
});