import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Color';
import { DIMENSIONS } from '../constants/Dimensions';
import { STRINGS } from '../constants/String';
import { SCREENS } from '../navigation/ScreenNames';

const TabTwoScreen1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                title={STRINGS.go_to_screen_tw0}
                onPress={() => navigation.navigate(SCREENS.tab_two_screen_2)}
            />
            <Text style={styles.messageText}>{STRINGS.tab_two_screen1}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.silver,
    },
    messageText: {
        color: COLORS.black,
        fontSize: DIMENSIONS.standard,
        backgroundColor: COLORS.white,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default TabTwoScreen1;
