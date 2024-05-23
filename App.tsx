import React from 'react';
import CadastroFilme from './src/screens/CadastroFilme';
import AtualizarFilme from './src/screens/AtualizarFilme';
import Listagem from './src/screens/Listagem';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import CadastroSerie from './src/screens/CadastroSerie';
import Listagem2 from './src/screens/Listagem';
import ListagemF from './src/screens/ListagemFilmes';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='Listagem' component={ListagemF}
         options={{ headerShown: false }} />

      <Stack.Screen name='CadastroFilme' component={CadastroFilme} 
        options={{ headerShown: false }} />

      <Stack.Screen name='Login' component={LoginScreen} 
        options={{ headerShown: false }} />

      <Stack.Screen name='CadastroSerie' component={CadastroSerie} 
        options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
