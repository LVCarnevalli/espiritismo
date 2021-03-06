import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import SpiritismScreen from '../../../screens/kardec/Spiritism';

const SpiritismStack = {
  screen: SpiritismScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'O que é Espiritismo?',
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.navigate('Kardec')} tintColor={'#000'} />
    ),
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center',
      flex: 1,
    },
    headerRight: <View></View>,
  }),
};

export default SpiritismStack;
