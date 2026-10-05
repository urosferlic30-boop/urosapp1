import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const FifaImage4 = require('../../../assets/images/tabIcons/fifa4.png');

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Uroš</Text>
      <Text style={styles.role}>Avtor Aplikacije</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>O meni:</Text>
        <Text style={styles.infoText}>
          Sem Uroš Ferlič, star sem 16 let in sem avtor te aplikacije. Obiskujem 3. letnik računalniške šole v Velenju, kjer pridobivam znanje s področja računalništva in programiranja.{"\n\n"}
          V prostem času zelo rad igram nogomet, zato sem se odločil, da v svoji aplikaciji predstavim prav FIFA, saj je to moja najljubša igra. Nogomet mi je zelo pri srcu in uživam tako v igranju kot tudi v spremljanju nogometnega sveta.{"\n\n"}
          Poleg nogometa se rad družim s prijatelji, z njimi preživljam prosti čas in se zabavam. Rad tudi gledam resničnostne šove, saj so mi zanimivi zaradi različnih zgodb, tekmovanj in osebnosti, ki nastopajo v njih.{"\n\n"}
          S to aplikacijo sem želel združiti svoje znanje računalništva z eno izmed stvari, ki jih imam najraje – nogometom in igro FIFA.
        </Text>
      </View>

      {/* Maksimalno široka slika od roba do roba */}
      <Image source={FifaImage4} style={styles.image} />
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
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#1b1d20',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd33d',
    marginBottom: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  image: {
    width: '90%', 
    height: 400,
    borderRadius: 12,
    resizeMode: 'cover', // Slika se raztegne čez celotno širino
  },
});