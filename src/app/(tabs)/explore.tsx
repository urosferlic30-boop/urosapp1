import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const FifaImage2 = require('../../../assets/images/tabIcons/fifa 2.webp');
const FifaImage3 = require('../../../assets/images/tabIcons/fifa3.jpg');

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Podrobnejši opis igre FIFA</Text>
      
      <Text style={styles.text}>
        FIFA (zdaj znana kot EA Sports FC) je vodilna športna videoigra na svetu, ki igralcem omogoča vodenje svojih najljubših nogometnih ekip in igralcev z uradnimi licencami.
      </Text>

      {/* Zamenjano: Sedaj je tukaj fifa3.jpg */}
      <Image source={FifaImage3} style={styles.image} />

      <Text style={styles.subHeading}>Glavni načini igranja:</Text>
      <Text style={styles.bullet}>• Ultimate Team: Sestavi svojo ekipo sanj z igralci iz celotne zgodovine.</Text>
      <Text style={styles.bullet}>• Career Mode: Postani menedžer kluba ali zgradi kariero kot posamezen igralec.</Text>
      <Text style={styles.bullet}>• Clubs: Igraj spletne tekme skupaj s prijatelji v isti ekipi.</Text>

      <Text style={styles.text}>
        Vsako leto igra prinaša izboljšano grafiko, bolj realistično fiziko žoge in nove animacije igralcev.
      </Text>

      {/* Zamenjano: Sedaj je tukaj fifa 2.webp */}
      <Image source={FifaImage2} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  bullet: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 8,
    paddingLeft: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginVertical: 12,
    resizeMode: 'cover',
  },
});