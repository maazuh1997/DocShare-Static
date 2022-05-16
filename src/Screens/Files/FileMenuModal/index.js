import { StyleSheet, View, FlatList, Image, TouchableOpacity, Modal as RNModal } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Styles'
import { face1, face2, face3, face4, face5, plus_icon, download_gray, link_chain, email, passcode_icon, delete_gray, star_blue } from '../../../Assets';
import { Button, Modal, Text, TextInput } from '../../../Components'

const friendList = [
    {
        id: 1,
        image: face1,
        name: 'Jacob'
    },
    {
        image: face2,
        id: 2,
        name: 'David'
    },
    {
        image: face3,
        id: 3,
        name: 'Joseph'

    },
    {
        image: face4,
        id: 4,
        name: 'Adam'

    },
    {
        image: face5,
        id: 5,
        name: 'Alex'

    },
];

const FileMenuModal = ({ isVisible, toggleFileMenuModal }) => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [isShowDeleteFileModal, setIsShowDeleteFileModal] = useState(false)
    const [isShowPasscodeModal, setIsShowPasscodeModal] = useState(false)
    const [isShowCreatePasscodeFormModal, setIsShowCreatePasscodeFormModal] = useState(false)



    const friendCarts = ({ item }) => {
        return (
            <View>
                <View style={styles.friendCardWrapper}>
                    <Image
                        source={item.image}
                        resizeMode="stretch"
                        style={{ width: 40, height: 40, }}
                    />

                </View>
                <Text style={{ textAlign: 'center', color: Colors.TEXT_GRAY }}>{item.name}</Text>
            </View>
        );
    };

    const renderButton = (icon, label, onPress) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{ backgroundColor: Colors.GRAY_2, borderRadius: 10, elevation: 3, marginVertical: 7 }}>
                <View style={{
                    backgroundColor: Colors.GRAY_BG, flexDirection: 'row', alignItems: 'center',
                    paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, marginRight: 20,
                }}>
                    <Image source={icon} style={{ height: 25, width: 60 }} resizeMode={'contain'} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.GRAY_1 }}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderDeleteFileModal = () => {
        return (<Modal visible={isShowDeleteFileModal}        >
            <View style={{ paddingHorizontal: 20, paddingVertical: 20, }}>
                <Image source={delete_gray} style={{ height: 60, alignSelf: 'center' }} resizeMode={'contain'} />
                <Text style={{ color: Colors.GRAY_LIGHT, textAlign: 'center', marginVertical: 10 }}>Are you sure you want to </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.TEXT_GRAY, textAlign: 'center' }}>Delete file?</Text>
                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
                    <Button btnText={'Not right now'} theme={'white'} style={{ flex: 1, marginRight: 5 }} />
                    <Button btnText={`Yes I'm`} theme={'cyan'} style={{ flex: 1, marginLeft: 5 }}
                        onPress={() => {
                            setIsShowDeleteFileModal(false)
                            toggleFileMenuModal()
                        }}

                    />
                </View>
            </View>
        </Modal>)
    }

    const renderPasscodeModal = () => {
        return (<Modal visible={isShowPasscodeModal}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20, }}>
                <Image source={star_blue} style={{ height: 60, alignSelf: 'center' }} resizeMode={'contain'} />
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.TEXT_GRAY, textAlign: 'center', marginVertical: 10 }}>Create Passcode</Text>
                <Text style={{ color: Colors.GRAY_LIGHT, textAlign: 'center', }}>Please Upgrade Your Plan </Text>
                <Button btnText={'Subscribe'} theme={'cyan'} style={{ width: 150, alignSelf: 'center', marginTop: 20 }}
                    onPress={() => {
                        setIsShowPasscodeModal(false);
                        setIsShowCreatePasscodeFormModal(true)
                    }}
                />
            </View>
        </Modal>)
    }

    const renderCreatePassCodeFormModal = () => {
        return (<Modal visible={isShowCreatePasscodeFormModal}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.BLACK, textAlign: 'center', marginVertical: 10 }}>Create Passcode</Text>
                <Text style={{ color: Colors.GRAY_LIGHT, color: Colors.BLACK, fontWeight: 'bold' }}>File Name </Text>
                <Text style={{ color: Colors.GRAY_LIGHT, color: Colors.TEXT_GRAY, fontSize: 18 }}>House agreement.png</Text>
                <TextInput label={'Set New Passcode'} value={'**********'} />
                <Button btnText={'Set Passcode'} theme={'cyan'} style={{ marginTop: 10 }}
                    onPress={() => {
                        setIsShowCreatePasscodeFormModal(false)
                        toggleFileMenuModal()
                    }}

                />
            </View>
        </Modal>)
    }




    return (
        <RNModal
            animationType={"slide"}
            transparent={true}
            visible={isVisible}

            onRequestClose={() => {

            }}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{
                    backgroundColor: Colors.WHITE,
                    height: 500, width: '100%',
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                    paddingHorizontal: 30,
                    paddingTop: 40
                }}>
                    <View style={{ marginVertical: 20 }}>
                        {renderButton(passcode_icon, 'Create Password', () => { setIsShowPasscodeModal(true) })}
                        {renderButton(delete_gray, 'Delete', () => { setIsShowDeleteFileModal(true) })}
                        {renderButton(download_gray, 'Download', () => { toggleFileMenuModal() })}
                    </View>
                </View>
            </View>
            {renderDeleteFileModal()}
            {renderPasscodeModal()}
            {renderCreatePassCodeFormModal()}
        </RNModal>
    )
}

export default FileMenuModal

const styles = StyleSheet.create({
    friendCardWrapper: {
        width: 45,
        height: 45,
        borderRadius: 10,
        borderColor: Colors.BORDER_BLUE_COLOR,
        borderWidth: 2,
        borderStyle: 'solid',
        marginHorizontal: 10,
    },
    addBtn: {
        backgroundColor: Colors.LIGHTBLUE,
        marginRight: 10,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    iconImg: {
        width: 18,
        height: 18,
    },
})