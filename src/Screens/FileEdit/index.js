import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { file_edit, mail_white, pencil_white } from '../../Assets'
import { Colors } from '../../Styles'

export class FileEdit extends Component {
    render() {
        return (
            <View>

                <Image source={file_edit} style={{ width: '100%', height: '100%', }} resizeMode={'contain'} />
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 5, right: 10, }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('DrawFile') }}
                        style={{ width: 40, height: 40, backgroundColor: Colors.BLUE, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={pencil_white} style={{ width: 15, height: 15 }} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 10, width: 40, height: 40, backgroundColor: Colors.BLUE, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={mail_white} style={{ width: 15, height: 15 }} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default FileEdit