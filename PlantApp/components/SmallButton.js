import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function SmallButton({style = {style}, title, backgroundColor, size, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style = {{height: size, width: size}}>
            <View style = {{
                backgroundColor: backgroundColor,
                width: size,
                height: size,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
            }}> 
                 <Text style = {{
                    color: "white",
                    fontSize: size-10,
                }}
                >{title}</Text>
            </View>
           
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default SmallButton;