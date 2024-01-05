import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';




import { fontSize } from '../Constant/index';
export default Button = ({
  text,
  disabled,
  onPress,
  loading,
  indicatorColor,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  disableStyle,
  disableTextColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress ?? null}
      style={[styles.mainContainer, style, disabled && disableStyle]}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            gap:5,
            alignItems: 'center',
          }}>
          {leftIcon}
          <Text
            style={[
              styles.buttonText,
              textStyle,
              disabled && {color: disableTextColor},
            ]}>
            {text}
          </Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '50%',
    paddingVertical: 12,
    backgroundColor: 'green',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
   alignSelf:'center',
   marginTop:8
  },
  buttonText: {
    color: 'white',
    fontSize:12,
    alignSelf: 'center',
    fontWeight: '500',
  },
  indicatorColor: 'white',
 
});
