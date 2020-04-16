import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Hello ${incident.name}, I'm getting in touch as I'd like to help in the incidents "${incident.title}" with ${Intl.NumberFormat('en', { style: 'currency', currency: 'GBP' }).format(incident.value)}`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Incident's hero: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color={'#E02041'} />
          </TouchableOpacity>
        </View>     

        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
          <Text style={styles.incidentProperty}>NGO:</Text>
          <Text style={styles.incidentValue}>{incident.name} from {incident.city}</Text>

          <Text style={styles.incidentProperty}>Case:</Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>Amount:</Text>
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat('en', { 
              style: 'currency', 
              currency: 'GBP' }).format(incident.value)}
          </Text>   
        </View> 

        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Save the day!</Text>
            <Text style={styles.heroTitle}>Be the hero of this incident.</Text>

            <Text style={styles.heroDescription}>Get in touch:</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                <Text style={styles.actionText}>WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.action} onPress={sendMail}>
                <Text style={styles.actionText}>E-mail</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}