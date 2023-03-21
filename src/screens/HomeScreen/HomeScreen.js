import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { windowWidth } from '../../utils/Dimensions';
import { COLOURS, sliderData } from '../../model/data';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../../components/BannerSlider';
import { freeGames, paidGames } from '../../model/data';
import ListItem from '../../components/ListItem';

function HomeScreen({ navigation }) {
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium' }}>
            Hello Đông Phương
          </Text>
          <TouchableOpacity onPress={() => console.log('click avt')}>
            <ImageBackground
              source={require('../../assets/images/user.png')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
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

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => console.log('Click see all')}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={false}
        />

        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', marginVertical: 20 }}>
          Most Bought Games
        </Text>

        {paidGames.map(item => (
          <ListItem
            key={item.id}
            photo={item.poster}
            title={item.title}
            subTitle={item.subtitle}
            isFree={item.isFree}
            price={item.price}
            onPress={() => console.log('click buy')}
            onPressDetail={() => navigation.navigate('Detail', { productID: item.id, dataList: paidGames })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;