import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import Layout from '../../constants/Layout';
import KardecScreen from '../../screens/Kardec';

const KardecStack = {
  screen: KardecScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'espiritismo',
    headerBackTitle: '',
    headerTruncatedBackTitle: '',
    headerBackTitleStyle: {
      color: '#000',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 35,
      fontFamily: 'grotes-sans-regular',
      textAlign: 'center',
      flex: 1,
    },
    headerRight: <View></View>,
    headerLeft: <HeaderBackButton onPress={() => navigation.navigate('Menu')} tintColor={'#000'} />,
  }),
};

export default KardecStack;
