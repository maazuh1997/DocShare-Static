import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { draw_file, draw_header, file_edit } from '../../Assets'

export class DrawFile extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    alert('Document edit feature will be available in the live version of the application.')
                }}
                activeOpacity={1}
                style={{ flex: 1, }}>
                <Image source={draw_header} style={{ width: '100%', height: 100 }} resizeMode={'contain'} />
                <Image source={file_edit} style={{ width: '100%', height: '100%', }} resizeMode={'contain'} />
            </TouchableOpacity>
        )
    }
}

export default DrawFile