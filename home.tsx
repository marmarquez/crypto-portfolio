import { View, Text, Button } from 'react-native'
import React from 'react'
import DetailScreen from './details';

const HomeScreen  = ({navigation}:any) => {
    return (
        <Button
          title="ADD NEW INVESTMENT"
          onPress={() =>
            navigation.navigate('Detail', {name: 'Jane'})
          }
        />
      );
}

export default HomeScreen