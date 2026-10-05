import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const FifaImage = require('../../../assets/images/tabIcons/fifa.webp');

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FIFA / EA Sports FC</Text>
      
      <Image source={FifaImage} style={styles.image} />

      <Text style={styles.description}>
        Dobrodošli v mobilni aplikaciji, posvečeni najbolj priljubljeni nogometni simulaciji na svetu!
      </Text>
      <Text style={styles.subDescription}>
        Aplikacija prikazuje opis igre, njene glavne lastnosti in podatke o avtorju.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 400, // Povečana višina za večjo sliko
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'contain', // Prikaz celotne slike brez rezanja robov
  },
  description: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
    marginBottom: 10,
  },
  subDescription: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
  },
});