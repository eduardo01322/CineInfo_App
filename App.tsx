import React from 'react';
import CadastroFilme from './src/screens/CadastroFilme';
import AtualizarFilme from './src/screens/AtualizarFilme';
import Listagem from './src/screens/Listagem';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='Listagem' component={Listagem}
         options={{ headerShown: false }} />

         
      <Stack.Screen name='Cadastro' component={CadastroFilme} 
        options={{ headerShown: false }} />

      <Stack.Screen name='Login' component={LoginScreen} 
        options={{ headerShown: false }} />

      <Stack.Screen name='Atualizar' component={AtualizarFilme} 
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
