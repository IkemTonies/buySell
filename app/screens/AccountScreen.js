import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import { SafeAreaView } from "react-native-safe-area-context";

const menuItems = [
  {
    title: "My Listings",
    Icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My Messages",
    Icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Vera Mosh"
          subTitle="veramosh@gmail.com"
          image={require("../assets/FaceImage.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponet={
                <Icon
                  name={item.Icon.name}
                  backgroundColor={item.Icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponet={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
