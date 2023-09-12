import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigations } from './src/navigations/RootStackNavigations';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigations />
    </NavigationContainer>
  );
}


