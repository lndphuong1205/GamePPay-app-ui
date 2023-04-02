import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { windowWidth } from '../../utils/Dimensions';
import { COLOURS, sliderData } from '../../model/dataGames';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../../components/BannerSlider';
import { mostBoughtGames } from '../../model/dataGames';
import ListItem from '../../components/ListItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Items } from '../../model/dataDevicesGame';
import ProductCard from '../../components/ListItemDevices';

function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

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
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium', color: COLOURS.black }}>
            Hello, Đông Phương
          </Text>
          <View style={{ flexDirection: 'row', width: "28%", justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <MaterialCommunityIcons
                name="cart"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundMedium,
                  padding: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundLight,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <ImageBackground
                source={require('../../assets/images/user.png')}
                style={{ width: 40, height: 40 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          </View>
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
            marginBottom: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            P-Pay Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18, fontWeight:'500', color: COLOURS.black }}>
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
          firstItem={1}
        />

        <View
          style={{
            paddingTop: 15
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Gaming Devices
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Click see all')}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#0aada8',
                  fontWeight: '400',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} onPressDetails={() => navigation.navigate('Detail', { productID: data.id, dataList: Items })} />;
            })}
          </View>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18, fontWeight:'500', color: COLOURS.black }}>
          Most Bought Games
          </Text>
          <TouchableOpacity onPress={() => console.log('Click see all')}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>
        {mostBoughtGames.map(item => (
          <ListItem
            key={item.id}
            photo={item.poster}
            title={item.title}
            subTitle={item.subtitle}
            isFree={item.isFree}
            price={item.price}
            onPressDetail={() => navigation.navigate('Detail', { productID: item.id, dataList: mostBoughtGames })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;