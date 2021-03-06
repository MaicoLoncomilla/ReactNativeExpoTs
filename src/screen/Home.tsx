import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Expo React V17.0.2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
