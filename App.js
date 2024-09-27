import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  // const [inputMessage, setInputMessage] = useState("");

  const handleButtonClick = () => {
    console.log("clicked");
  };

  const handleTextInput = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>(API response will be displayed here)</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your question here"
          placeholderTextColor="#888888"
          onChangeText={handleTextInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleButtonClick}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Dark background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  responseContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#2a2a2a', // Slightly lighter dark color for contrast
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  responseText: {
    fontSize: 16,
    color: '#ffffff', // Light text color for dark background
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: '#2a2a2a', // Dark input background
    color: '#ffffff', // Light text color for input
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  sendButton: {
    backgroundColor: '#005a9c', // Blue color for contrast
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  sendButtonText: {
    color: '#ffffff', // Light text color for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
