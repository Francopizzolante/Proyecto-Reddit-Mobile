// Comments.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Comments = ({ userComments }) => {
  const renderItem = ({ item }) => (
    <View style={styles.comment}>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <FlatList
      data={userComments}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default Comments;
