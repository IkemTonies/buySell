import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";

import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { SafeAreaView } from "react-native-safe-area-context";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Vera",
    description: "Hello, can you tell me more about the product",
    image: require("../assets/FaceImage2.jpg"),
  },
  {
    id: 2,
    title: "Mosh Vera",
    description: "Please can I pay on delivery?",
    image: require("../assets/FaceImage2.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/FaceImage2.jpg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
