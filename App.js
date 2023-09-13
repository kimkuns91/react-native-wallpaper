import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigations } from './src/navigations/RootStackNavigations';
import { Provider } from "react-redux";
import store from './src/store/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStackNavigations/>
      </Provider>
    </NavigationContainer>
  );
}


