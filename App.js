import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { ButtonComponent } from './src/components/ButtonComponent';
import { useState } from 'react';

export default function App() {
  const [phrase, setPhrase] = useState('');
  const [imagePath, setImagePath] = useState(require('./src/img/biscoitoSorteFechado.png'));

  const phrases = [
    '"A vida trará coisas boas se tiver paciência"',
    '"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."',
    '"Não compense na ira o que lhe falta na razão"',
    '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
    '"A maior de todas as torres começa no solo"',
    '"Não há que ser forte. Há que ser flexível."',
    '"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"',
    '"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."',
    '"A juventude não é uma época da vida, é um estado de espírito."',
    '"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."',
    '"Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida."',
    '"Siga os bons e aprenda com eles"',
    '"Não importa o tamanho da montanha, ela não pode tapar o sol."',
    '"O bom-senso vale mais do que muito conhecimento"',
    '"Quem quer colher rosas tem de estar preparado para suportar os espinhos."'
  ]

  const showPhrase = () => {
    const indexPhrase = Math.floor(Math.random() * phrases.length);

    setImagePath(require('./src/img/biscoitoSorteAberto.png'));
    setPhrase(phrases[indexPhrase]);
  };

  const restart = () => {
    setPhrase('');
    setImagePath(require('./src/img/biscoitoSorteFechado.png'));
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagePath}
        style={styles.image}
      />
      <Text style={styles.phrase}>{phrase}</Text>

      <ButtonComponent
        text='Quebrar Biscoito'
        color='#E7B860'
        onPress={showPhrase}
      />
      <ButtonComponent
        text='Reiniciar Biscoito'
        color='#816323'
        onPress={restart}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  image: {
    marginBottom: 35
  },
  phrase: {
    fontSize: 15,
    color: '#E7B860',
    marginBottom: 35,
    marginHorizontal: 15,
    fontStyle: 'italic'
  }
});
