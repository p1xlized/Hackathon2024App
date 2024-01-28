import React from 'react';
import {StyleSheet, View} from "react-native";
import {Input} from '@ui-kitten/components';

const CustomInput = ({value, setValue, placeHolder}) => {

    return (
        <View style={styles.container}>
            <Input
                value={value}
                placeholder={placeHolder}
                style={styles.input}
                size='large'
                onChange={setValue}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    input: {
        borderRadius: 10
    },
});


export default CustomInput;