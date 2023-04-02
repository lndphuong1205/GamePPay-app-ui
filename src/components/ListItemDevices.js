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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLOURS } from '../model/dataDevicesGame';

export default function ProductCard({ data, onPressDetails }) {
  return (
    <TouchableOpacity
      onPress={onPressDetails}
      style={{
        width: '48%',
        marginVertical: 15,
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundLight,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        {data.isOff ? (
          <View
            style={{
              position: 'absolute',
              width: '20%',
              height: '24%',
              backgroundColor: COLOURS.green,
              top: 0,
              left: 0,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.white,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              {data.offPercentage}%
            </Text>
          </View>
        ) : null}
        <Image
          source={data.poster}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: COLOURS.black,
          fontWeight: '600',
          marginBottom: 2,
        }}>
        {data.title}
      </Text>
      {
        data.isAvailable ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.green,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.green,
              }}>
              Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.red,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.red,
              }}>
              Unavailable
            </Text>
          </View>
        )
      }
      <Text>${data.price}</Text>
    </TouchableOpacity>
  );
};