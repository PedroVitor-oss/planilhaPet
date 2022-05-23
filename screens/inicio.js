import { StatusBar } from 'expo-status-bar';
import React,{useState}  from 'react';
import { StyleSheet, Text, View,FlatList,Item,Button,SafeAreaView  } from 'react-native';
import {Picker} from '@react-native-picker/picker';




export default function App() {
  const getCurrentDate=()=>{
    var date = String(new Date().getDate());
    var month = String(new Date().getMonth() + 1);
    var year = new Date().getFullYear();

    if(month.length == 1)
    month = '0'+month
    if(date.length == 1)
    date = '0'+date


    return date + '/' + month + '/' + year;
  }
  const [selectedClient, setSelectedClinnet] = useState();
  const renderItem = ({ item }) => (
    <Item title={item.nome} />
  );
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Picker
      style={styles.selectorClients}
    selectedValue={selectedClient}
   onValueChange={(itemValue, itemIndex) =>setSelectedClinnet(itemValue)}>
  <Picker.Item label="Ariane" value="Ariane" />
  <Picker.Item label="Sandra" value="Sandra" />
   <Picker.Item label="Gessica" value="Gessica" />
  <Picker.Item label="Susana" value="Susana" />
</Picker>

        <Text style={styles.data}>{getCurrentDate()}</Text>
      </View>
      <View style={styles.contLine}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={Clients}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      </View>
      <View style={styles.spaceButton}>
      <Text>1 - poduto - valor</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    width:320,
    height:100,
    backgroundColor:'#BEBEBE',
    padding:10,
    paddingTop:35,
  },
  data:{
    position:'absolute',
    right:10,
    top:42,
    fontSize:20,
  },
  contLine:{
    width:'100%',
    height:'70%',
    borderBottomColor:'black',
    borderBottomWidth:1
  },
  spaceButton:{
    width:'100%',
    height:'70%',
    backgroundColor:'black'
  }
 
});
