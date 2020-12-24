// BASIC:
import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// UTILITIES:
import { Context } from '../context/Blogs.context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// Index SCREEN:=>
const IndexScreen = () => {
  const { state, addBlog, removeBlog } = useContext(Context);

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={addBlog}
        style={{ ...Styles.addButton, ...Styles.rowing }}
      >
        <Text>Write A Blog</Text>
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={{ ...Styles.singleBlog, ...Styles.rowing }}>
            <Text style={Styles.blogTitle}>{`${item.title}`}</Text>
            <MaterialIcons
              name="delete-outline"
              size={30}
              color="#e93e3e"
              onPress={() => removeBlog(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

// write screen style:
const Styles = StyleSheet.create({
  // screen wrapper:
  container: {
    paddingHorizontal: 10,
  },
  addButton: {
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'silver',
    width: 150,
    borderRadius: 10,
  },
  singleBlog: {
    borderWidth: 1,
    borderColor: '#999',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: `#ddd`,
  },
  rowing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogTitle: {
    fontSize: 20,
  },
});

export default IndexScreen;
