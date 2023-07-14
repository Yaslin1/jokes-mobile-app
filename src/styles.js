import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(238,174,202)',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: 'whitesmoke',
  },
  jokeText: {
    color: '#514F59',
    textAlign: 'center',
    fontSize: 48,
    textShadowColor:"rgba(0,0,0,0.2)",
    textShadowOffset:{width:2, height:2},
    textShadowRadius: 5,
  },
 
  bigButton: {
    backgroundColor: '#6D72C3',
    padding: 24,
    borderRadius: 6,
    width: "100%",
  },
  
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlign: "center",
  },

  touchToReveal: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 20,
  },
  punchline: {
    textAlign: 'center',
    color: '#514F59',
    fontSize: 20,
  },
  
  hidden: {
    backgroundColor: '#94bbe9',
    width: '60%',
    height: 60,
    padding: 15,
    borderRadius: 10,
  },
  show: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 88,
    padding: 16,
  },
});








