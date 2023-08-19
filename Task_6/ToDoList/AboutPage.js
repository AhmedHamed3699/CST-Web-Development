import { StyleSheet, Text, View} from 'react-native';

const AboutPage = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>
            This app is brought to you by Ahmed Hamed
            it helps you add three different types of tasks
            ranging from ones you have to do today
            to ones that should be done in the future and even extra tasks!
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8fAED',
    },
    text: {
        fontSize: 20,
        padding: 30,
        textAlign: 'center',
        fontStyle: 'italic',
    }
});

export default AboutPage;