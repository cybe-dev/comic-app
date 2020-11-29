import React from 'react';
import {Modal, Text, View} from 'react-native';
import {BlockButton} from '../../atoms';
import {primary} from '../../colors';

const Alert = ({
  show = false,
  title = '',
  body = '',
  onConfirm = () => {},
  confirmText = '',
}) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => setVisible(show), [show]);
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FFF',
            margin: 25,
            borderRadius: 5,
            elevation: 3,
            padding: 9,
          }}>
          <Text
            style={{
              marginHorizontal: 12,
              marginTop: 12,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginHorizontal: 12,
              marginTop: 6,
              marginBottom: 12,
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            }}>
            {body}
          </Text>
          <View style={{flexDirection: 'row', margin: 12, marginTop: 6}}>
            <BlockButton
              style={{backgroundColor: '#C9C9C9', flex: 1, marginRight: 2}}
              textStyle={{color: '#000'}}
              onPress={() => setVisible(false)}>
              Batal
            </BlockButton>
            <BlockButton
              style={{backgroundColor: primary, flex: 1, marginLeft: 2}}
              textStyle={{color: '#FFF'}}
              onPress={onConfirm}>
              {confirmText}
            </BlockButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
