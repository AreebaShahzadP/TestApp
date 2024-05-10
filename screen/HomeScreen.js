import React from 'react';
import { View, FlatList, Image, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeScreen = ({navigation}) => {
  

  const foodItems = [
    { id: '1', name: 'Veggie tomato mix', price: 'N1,900' },
    { id: '2', name: 'Egg and cucmber...', price: 'N1,900' },
    { id: '3', name: 'Fried chicken m.', price: 'N1,900'},
    { id: '4', name: 'Moi-moi and ekpa.', price: 'N1,900'},
    { id: '5', name: 'Veggie tomato mix', price: 'N1,900' },
    { id: '6', name: 'Egg and cucmber...', price: 'N1,900'},
  ];
  
  const renderItem = ({ item }) => (
    <View style={[styles.card]}>
    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
    </TouchableOpacity>
    </View>
  );

  return (
  <View style={styles.container}>
        <View style={styles.searchBar}>
        <TouchableOpacity>
        <Icon name='chevron-left' size={22}  color="black" marginTop={30} marginLeft={20} />
        </TouchableOpacity>
          <TextInput
            placeholder="Spicy Chickens"
            placeholderTextColor={'#000000'}
            style={{marginLeft: 60,fontFamily:'SF-Pro-Rounded-Medium', marginTop:-36, fontSize:17,color:'#000000'}}
          />
          </View>
    <View style={styles.container1}>
      <Text style={styles.header}>Found {foodItems.length} items</Text>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container1: {
    flex: 1,
    marginTop:80,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius:30,
  },
  header: {
    alignSelf:'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000000',
    fontFamily:'SF-Pro-Rounded-Regular'
  },
  flatListContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginTop:10,
    margin: 20,
    alignItems: 'center',
    width: 125,
    shadowColor:'#0a0a0a',
    elevation:5,
  },
  image: {
    width: 110,
    height: 110,
    marginTop:-50,
    borderRadius: 50,
    marginBottom: 10,
    shadowColor:'#000000',
    elevation:5,
  },
  name: {
    fontFamily:'SF-Pro-Rounded-Regular',
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    alignSelf:'center',
    fontSize:22
  },
  price: {
    color: '#FA4A0C',
    fontWeight: 'bold',
    fontSize:20
  },
  rightCard:{
    width: 200,
    height: 200,
    marginRight:-25,
    marginTop: 80,
  },
  card:{
    width: 160,
    marginTop: 20,
    height: 200,
    marginBottom: 5,
    // borderRadius: 30,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
  }
});

export default HomeScreen;