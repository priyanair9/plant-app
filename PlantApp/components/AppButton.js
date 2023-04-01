import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function AppButton({style = {style}, title, backgroundColor, textColor}) {
    return (
        <TouchableOpacity>
            <View style = {{
                backgroundColor: backgroundColor,
                borderWidth: 3,
                borderColor: backgroundColor,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginTop: 10,
                marginBottom: 10,
                padding: 10,
                paddingRight: 20,
                paddingLeft: 20,
                width: '30%'
                }}>
                <Text style = {{
                    color: textColor,
                    fontSize: 20,
                }}
                >{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default AppButton;