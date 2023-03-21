import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Cart from './Cart';
import Email from './Email';
import Separator from './Separator';
import Tel from './Tel';

function AccountScreen() {

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={require('../../assets/images/background.jpg')}
        >
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: '700', color: '#BDBDBF' }}>Logout</Text>
          </TouchableOpacity>

          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={require('../../assets/images/user.png')}
            />
            <Text style={styles.userNameText}>Đông Phương</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={() => console.log('onPressPlace')}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  Da Nang, Viet Nam
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  const TelRender = () => {
    return (
      <Tel
        number={'0777478337'}
        onPressSms={() => { console.log('sms') }}
        onPressTel={() => { console.log('call') }}
      />
    )
  }

  const EmailRender = () => {
    return (
      <Email
        email={'phuonglnd@rikkeisoft.com'}
        onPressEmail={() => { console.log('click mail'); }}
      />
    )
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <Header />
          <TelRender />
          <Separator />
          <EmailRender />
          <Separator />
          <Cart />
          <Separator />
        </Card>
      </View>
    </ScrollView>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})