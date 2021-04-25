import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const [ isFocused, setIsFocused ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);
  const [ name, setName ] = useState<string>();
  const navigation = useNavigation();
  

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChanged(value: string) {
    setIsFilled(!!value);
    setName(value);
  }


  async function handleSubmit() {
    if(!name)
      return Alert.alert("Me diz como chamar você 😥");

    await AsyncStorage.setItem('@plantmanager:user', name);

    navigation.navigate('Confirmation');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.form}>
              <Text style={styles.emoji}>
                {isFilled ? '😆' : '😀'}
              </Text>
              <Text style={styles.title}>
                como podemos {'\n'}
                chamar você?
              </Text>
              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChanged}
              />
              <View style={styles.footer}>
                <Button 
                  title="Confirmar" 
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 44
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 24,
    color: colors.heading,
    textAlign: 'center',
    fontFamily: fonts.heading
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width: '100%',
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 20,
  }
});