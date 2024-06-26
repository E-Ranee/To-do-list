import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    // width: 320,
    // height: 68,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#ece0ff",
  },
  button: {
    // width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
  },
});