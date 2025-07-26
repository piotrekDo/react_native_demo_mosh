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
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg: Message) => {
    setMessages(state => state.filter(m => m.id !== msg.id));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem
            title={item.title}
            subTitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            image={item.image}
            showChevron
            onPress={() => {}}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/app-foto/mosh.jpg'),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});
