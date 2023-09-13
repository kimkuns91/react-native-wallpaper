import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigations } from './src/navigations/RootStackNavigations';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';

const LoadingView = () => <Text>Loading...</Text>

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={ LoadingView } persistor={persistor}>
        <NavigationContainer>
          <RootStackNavigations/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


