import Constants from 'expo-constants';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';
import { ListItemDeleteAction } from '../components/ListItemDeleteAction';
import { ListItemSeparator } from '../components/ListItemSeparator';
import { Message } from '../model/Message';
const messagesMock: Message[] = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/app-foto/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/app-foto/mosh.jpg'),
  },
];

export const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(messagesMock);
  const handleDelete = (msg: Message) => {
    setMessages(state => state.filter(m => m.id !== msg.id))
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
