import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../../Components';
import {Colors} from '../../../Styles';
import {back_arrow, notification_white, search} from '../../../Assets';
import RenderHtml from 'react-native-render-html';

export default class TermsAndCondition extends Component {
  render() {
    const source = {
      html: `<ul><li><strong>What is Lorem Ipsum? Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,&nbsp;</li><li><strong>remaining essentially unchanged</strong>. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.&nbsp;</li><li><strong>The point of using Lorem Ipsum</strong> is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</li></ul>`,
    };
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arrow}
          onPressLeftIcon={() => this.props.navigation.navigate('Setting')}
          rightIcon={notification_white}
          onPressRightIcon={() =>
            this.props.navigation.navigate('Notification')
          }
          headerText={'Terms and Conditions'}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: Colors.WHITE_1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: Colors.BLACK,
              marginLeft: 20,
              marginVertical: 10,
            }}>
            {'TermsAndCondition'}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RenderHtml source={source} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
