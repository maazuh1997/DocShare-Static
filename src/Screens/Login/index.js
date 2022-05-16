import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../../Styles'
import { apple_white, fb_white, logo_white, mail_white } from '../../Assets'
import { Button, Modal, TextInput, CodeVerificationInput } from '../../Components'
import { connect } from 'react-redux'
import AuthAction from '../../Store/Actions/AppAction'

class Login extends Component {
    state = {
        forgotPassModal: false,
        codeVerificationModal: false,
        chanePassModal: false
    }

    onPressLogin = () => {
        this.props.isLogin(true)
    }
    renderForgotModal = () => {
        return (
            <Modal visible={this.state.forgotPassModal}>
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.BLACK, textAlign: 'center' }}>Forgot Password?</Text>
                    <Text style={{ color: Colors.GRAY_LIGHT, textAlign: 'center' }}>Enter Registered Email Address to Reset Password</Text>
                    <TextInput label={'Email'} value={'david.james@gmail.com'} />
                    <Button btnText={'Reset Password'} theme={'cyan'} style={{ marginVertical: 20 }}
                        onPress={() => this.setState({ forgotPassModal: false, codeVerificationModal: true })}
                    />
                </View>
            </Modal>
        )
    }
    renderChangePasswordModal = () => {
        return (
            <Modal visible={this.state.chanePassModal}
                style={{ height: 425 }}
            >
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.BLACK, textAlign: 'center' }}>Change Password</Text>
                    <TextInput label={'Current Password'} value={'**********'} />
                    <TextInput label={'New Password'} value={'**********'} />
                    <TextInput label={'Re-type new Password'} value={'**********'} />
                    <Button btnText={'Change Password'} theme={'cyan'} style={{ marginVertical: 20 }}
                        onPress={() => this.setState({ chanePassModal: false })}
                    />
                </View>
            </Modal>
        )
    }


    renderCodeVerificationModal = () => {
        return (
            <Modal visible={this.state.codeVerificationModal}>
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: Colors.BLACK, textAlign: 'center' }}>Verification Code</Text>
                    <Text style={{ color: Colors.GRAY_LIGHT, textAlign: 'center' }}>Please enter verification code sent on your registered email address.</Text>
                    <CodeVerificationInput />
                    <Button btnText={'Verify'} theme={'cyan'} style={{ marginVertical: 20 }}
                        onPress={() => this.setState({ codeVerificationModal: false, chanePassModal: true })}
                    />
                </View>
            </Modal>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo_white} style={styles.logo} resizeMode={'contain'} />
                <View style={styles.bodyContainer}>
                    <Text style={styles.welcomText}>Welcome Back !</Text>
                    <Text style={styles.lightGrayText}>Login to continue</Text>
                    <View style={styles.socialContainer}>
                        <View style={[styles.socialIconContainer, { backgroundColor: Colors.FB_BLUE }]}>
                            <Image source={fb_white} style={styles.socialIcon} resizeMode={'contain'} />
                        </View>
                        <View style={[styles.socialIconContainer, { backgroundColor: Colors.BLACK }]}>
                            <Image source={apple_white} style={styles.socialIcon} resizeMode={'contain'} />
                        </View>
                        <View style={[styles.socialIconContainer, { backgroundColor: Colors.GMAIL_RED }]}>
                            <Image source={mail_white} style={styles.socialIcon} resizeMode={'contain'} />
                        </View>
                    </View>
                    <Text style={styles.msg1}>Or connect with your email</Text>
                    <TextInput label={'Email'} value={'david.james@gmail.com'} />
                    <TextInput label={'Password'} value={'**********'} />
                    <Text style={styles.forgotPassText} onPress={() => this.setState({ forgotPassModal: true })}>Forget Password?</Text>
                    <Button btnText={'Sign in'} theme={'cyan'} onPress={this.onPressLogin} />
                    <Text style={styles.msg2} onPress={() => this.props.navigation.navigate('SignUp')}>Create an account</Text>
                </View>
                {this.renderForgotModal()}
                {this.renderCodeVerificationModal()}
                {this.renderChangePasswordModal()}
            </View>
        )
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        isLogin: (payload) => dispatch(AuthAction.isLogin(payload))
    }
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(Login)
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: Colors.BLUE, paddingBottom: 5
    },
    bodyContainer: {
        flex: 1, backgroundColor: Colors.WHITE, borderTopRightRadius: 45, borderTopLeftRadius: 45, paddingHorizontal: 40, paddingTop: 20
    },
    welcomText: {
        fontWeight: 'bold', fontSize: 22, color: Colors.BLACK
    },
    lightGrayText: {
        color: Colors.GRAY_LIGHT
    },
    socialContainer: {
        flexDirection: 'row', marginVertical: 10, justifyContent: 'space-evenly'
    },
    socialIconContainer: {
        width: 90, height: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 20
    },
    msg1: {
        color: Colors.GRAY_LIGHT, alignSelf: 'center'
    },
    forgotPassText: { color: Colors.GRAY_LIGHT, alignSelf: 'flex-end', marginVertical: 10 },
    msg2: { color: Colors.GRAY_LIGHT, alignSelf: 'center', marginVertical: 25 },
    socialIcon: { height: 25, width: 25 },
    logo: { width: '50%', alignSelf: 'center' }

})