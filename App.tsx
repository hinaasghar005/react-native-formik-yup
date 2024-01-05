
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Loginpage from './src/Screen/Authflow/LOginScreen';
import Signuppage from './src/Screen/Authflow/Signup';




const Stack = createNativeStackNavigator();




const StackNavigator = () => (
  <Stack.Navigator  initialRouteName="Loginpage"
  >
  

 
     <Stack.Screen         options={{
            headerShown:false,
            
            
        }
        }
     name="Loginpage" component={Loginpage} />
     <Stack.Screen           options={{
            headerShown:false,
            
        }
        }
    name="Signuppage" component={Signuppage} /> 

  </Stack.Navigator>
);

const App = () => {

  return(


  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
 
  )
};

export default App;



