import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 25,
  },
  cartColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  cartIcon: {
    color: '#0aada8',
    fontSize: 30,
  },
  cartNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  cartRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cartText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

const Cart = ({ containerStyle }) => {
  return (
    <TouchableOpacity onPress={() => console.log('navigate cart')}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.iconRow}>
          <Icon
            name="shopping-cart"
            underlayColor="transparent"
            iconStyle={styles.cartIcon}
            onPress={() => console.log('navigate cart')}
          />
        </View>
        <View style={styles.cartRow}>
          <View style={styles.cartColumn}>
            <Text style={styles.cartText}>Shopping Cart</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Cart
