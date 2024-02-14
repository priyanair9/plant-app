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
                borderRadius: size/2,
                paddingBottom: 5
            }}> 
                 <Text style = {{
                    color: "white",
                    fontSize: size-10,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}
                >{title}</Text>
            </View>
           
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default SmallButton;