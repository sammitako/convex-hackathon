import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('ID:>> ', id);

  return (
    <View>
      <Text>Group id: {id}</Text>
    </View>
  );
};

export default Page;
