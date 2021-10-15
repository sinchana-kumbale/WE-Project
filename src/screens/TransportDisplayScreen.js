import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Divider } from "react-native-elements";
const data = [
          {id:1, name: 'Route: 327H',starting_point: 'KR Market'},
          {id:2, name: 'Route: 327K',starting_point: 'Kempegowda Bus Station',},
          {name: 'Route: 181A', starting_point: 'Mahadeshwara Nagara',id:3},
          {name: 'Route: 294B', starting_point: 'Kempegowda Bus Station',id:4},
          {name: 'Route: 52E',id:5, starting_point: 'TR Mill'},
          {name: 'Route: 297K',id:6, starting_point:'Yelahanka'},
          {name: 'Route: 323L',id:7,starting_point:'Shivajinagar'},
          {name: 'Route: 50A',id:8,starting_point:'Brundavana Nagar'},
          {name: 'Route: 281A',id:9,starting_point:"JP Nagar"},
          {name: 'Route: 150',id:10,starting_point:'Vinayaka Nagar'},
          {name: 'Route: 273J',id:11,starting_point:'Hebbal'},
          {name: 'Route: 271L',id:12,starting_point:'MS Palya'},
          {name: 'Route: 271D',id:13,starting_point:'Hoskote'},
          {name: 'Route: 146E',id:14,starting_point:'KR Market'},
          {name: 'Route: 14B',id:15,starting_point:'BEL Circle'},
          {name: 'Route: 280M',id:16,starting_point:'KR Puram'},
          {name: 'Route: 10A',id:17,starting_point:'Allalasandra'},
          {name: 'Route: 269C',id:18,starting_point: 'Ramachandrpura'},
          
        ]


export default function App() {

  const Item = ({ name, starting_point, cost }) => (
    <View>
      <Text style = {styles.main}> 
      {name} 
      </Text>
      <Text> Starting From : {starting_point} </Text>
      <Text> Aproximate Cost : {cost} </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name ={ item.name } starting_point = { item.starting_point } cost = { item.cost}/>
  );
const header = () => {
  return (
    <View>
      <Text style={styles.title}> Transportation List</Text>
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
      <FlatList //onPress={navigation.navigate()}
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
   width: 1000,
   backgroundColor: '#ffdbf3',
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
  }
});

