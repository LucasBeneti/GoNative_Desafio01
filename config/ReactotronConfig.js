import Reactotron from 'reactotron-react-native'

const tron = Reactotron
  .configure()// controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

  console.tron = tron; //criar essa variavel pra poder usar globalmente no programa inteiro,
                    // sem ter que importar em todas as telas que quiser usar