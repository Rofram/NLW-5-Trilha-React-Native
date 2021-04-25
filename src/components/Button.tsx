import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.white,
  }
});