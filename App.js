import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.textHelloWorld}>Hola mundo</Text>
      <Text style={styles.textName}>Me llamo Omar</Text>
      <Text style={styles.textDescription}>Esta es la materia de Desarrollo de Aplicaciones Móviles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#102a57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloWorld:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textName:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textDescription:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default App;