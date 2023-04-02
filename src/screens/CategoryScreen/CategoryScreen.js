import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { freeGames, paidGames, toprated } from '../../model/dataGames';
import CustomSwitch from '../../components/CustomSwitch';
import ListItem from '../../components/ListItem';



function CategoryScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
          <Text style={{ fontSize: 21, fontFamily: 'Roboto-Medium' }}>
            Series Games
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            alignItems: 'center'
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            option3="Top rated"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => console.log('buy')}
              onPressDetail={() => navigation.navigate('Detail', { productID: item.id, dataList: freeGames })}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => console.log('buy')}
              onPressDetail={() => navigation.navigate('Detail', { productID: item.id, dataList: paidGames })}
            />
          ))}
        {gamesTab == 3 &&
          toprated.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() => console.log('buy')}
              onPressDetail={() => navigation.navigate('Detail', { productID: item.id, dataList: toprated })}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryScreen;