import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Comment = ({ title, content, date, onDelete }) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Comment;
