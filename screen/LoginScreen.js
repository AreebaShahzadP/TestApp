// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to Home screen on successful login
      navigation.navigate('HomeScreen');
    }, 2000); // Simulated delay
  };

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username "
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleSubmit} />
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default LoginScreen;