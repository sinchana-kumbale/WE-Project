import React from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Divider } from "react-native-elements";

import BackButton from '../components/BackButton'
const data = [
          {id:1, name: 'Route: 327H',starting_point: 'KR Market',cost:12},
          {id:2, name: 'Route: 327K',starting_point: 'Kempegowda Bus Station',cost:17},
          {name: 'Route: 181A', starting_point: 'Mahadeshwara Nagara',id:3,cost: 30},
          {name: 'Route: 294B', starting_point: 'Kempegowda Bus Station',id:4,cost: 30},
          {name: 'Route: 52E',id:5, starting_point: 'TR Mill',cost: 27},
          {name: 'Route: 297K',id:6, starting_point:'Yelahanka',cost:43},
          {name: 'Route: 323L',id:7,starting_point:'Shivajinagar',cost:20},
          {name: 'Route: 50A',id:8,starting_point:'Brundavana Nagar',cost:25},
          {name: 'Route: 281A',id:9,starting_point:"JP Nagar",cost:5},
          {name: 'Route: 150',id:10,starting_point:'Vinayaka Nagar',cost:15},
          {name: 'Route: 273J',id:11,starting_point:'Hebbal',cost: 35},
          {name: 'Route: 271L',id:12,starting_point:'MS Palya',cost: 44},
          {name: 'Route: 271D',id:13,starting_point:'Hoskote',cost: 50},
          {name: 'Route: 146E',id:14,starting_point:'KR Market',cost: 15},
          {name: 'Route: 14B',id:15,starting_point:'BEL Circle',cost: 47},
          {name: 'Route: 280M',id:16,starting_point:'KR Puram',cost: 35},
          {name: 'Route: 10A',id:17,starting_point:'Allalasandra',cost: 38},
          {name: 'Route: 269C',id:18,starting_point: 'Ramachandrpura',cost: 18},
          
        ]


export default function App({ navigation }) {
  

  const Item = ({ name, starting_point, cost }) => (
    <View style = {styles.item}>
      <Text style = {styles.main}> 
      {name} 
      </Text>
      <Text> Starting From : {starting_point}</Text>
      <Text> Aproximate Cost Per Person: {cost} </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ThankYou'
,{name: item.name})}>
    <Item name ={ item.name } starting_point = { item.starting_point } cost = { item.cost}/>
    </TouchableOpacity>
  );
const header = () => {
  return (
    
    <View>
    <BackButton goBack={navigation.goBack} />
      <Text style={styles.title}>Click on your Choice!</Text>
      <Divider orientation="vertical" />
    </View>
  );
};
const separator = () => {
  return <Divider orientation="vertical" />;
};

  return (
    <View style={styles.container}>
        {data && (
      <FlatList 
        ListHeaderComponent={header}
        ItemSeparatorComponent={separator}

        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
    )}
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   width: '100%',
   backgroundColor: 'white',
  },
  title: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#ff1493',
    backgroundColor: 'white'
  },
  main:{
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#ff1493',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});

