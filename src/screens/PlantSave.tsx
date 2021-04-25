import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Button } from '../components/Button';

import WaterDropImg from '../assets/waterdrop.png';

export function PlantSave() {
  return (
    <>
    <View style={styles.container}>
      <SvgFromUri 
        uri=""
        width={150}
        height={150}
      />

      <Text style={styles.plantName}>
        Nome da Planta
      </Text>
      <Text style={styles.plantAbout}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium, distinctio! Iste optio animi quod, ab distinctio quia! 
      </Text>
    </View>
    <View style={styles.controllers}>
      <View style={styles.tipContainer}>
        <Image 
          source={WaterDropImg} 
          style={styles.tipImage}
        />
        <Text style={styles.tipText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Text>
      </View>

      <Text style={styles.alertLabel}>
        Escolha o melhor horário para ser lembrado.
      </Text>

      <Button 
        title="Cadastrar Planta" 
        onPress={() => {}}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  plantName: {

  },

  plantAbout: {

  },

  controllers: {

  },

  tipContainer: {

  },

  tipImage: {

  },

  tipText: {

  },

  alertLabel: {

  },
});