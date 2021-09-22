import * as React from 'react'
import { StatusBar, Text, View,  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { Store } from './src/state/store'
import Navigation from './src/navigation'

const App = (): JSX.Element => {
  return (
        <Provider store={Store}>
          <NavigationContainer>
            <StatusBar />
            <Navigation />
          </NavigationContainer>
        </Provider>
  )
}

export default App
