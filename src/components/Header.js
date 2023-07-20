/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../screens/Home/styles';
import {MessageIcon, PrimaryIcon} from '../assets';
import {normalize} from '../utils/Fonts';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <PrimaryIcon height={normalize(30)} width={normalize(30)} />
      <Text style={styles.fontRegular}>{'Profile'}</Text>
      <MessageIcon height={normalize(30)} width={normalize(30)} />
    </View>
  );
};

export default Header;
