import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Button = (props) => {
    const {title} = props

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    text: {
        color: 'black',
    }
})

export default Button
