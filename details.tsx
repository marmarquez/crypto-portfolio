import { View, Text, TextInput,StyleSheet, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const DetailScreen = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [investment, setInvestment] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };


  return (
    <View>
      <Text>Add a new investment:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Crypto Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Value"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Investment"
        keyboardType="numeric"
      />
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={true}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default DetailScreen