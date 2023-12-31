/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../screens/Home/styles';
import {
  DownArrowIcon,
  LogoutIcon,
  PickIcon,
  StarIcon,
  UpArrowIcon,
  UserImage,
} from '../assets';
import {normalize} from '../utils/Fonts';

const UserDetail = () => {
  return (
    <View style={styles.padding15}>
      <View style={styles.centerAlign}>
        <View>
          <UserImage height={normalize(75)} width={normalize(75)} />
          <TouchableOpacity style={styles.upperView}>
            <PickIcon height={normalize(24)} width={normalize(24)} />
          </TouchableOpacity>
        </View>
        <Text style={styles.regularText}>{'Jina Simons'}</Text>
        <Text style={styles.regularText}>{'6000 Pts'}</Text>
        <Text style={styles.regularText}>
          {
            'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!'
          }
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <LogoutIcon height={normalize(20)} width={normalize(20)} />
        <Text style={[styles.regularTextCenter, styles.topSpace]}>
          {'Logout'}
        </Text>
      </View>

      <View style={styles.borderView}>
        <View style={styles.centerIconStyle}>
          <StarIcon height={normalize(26)} width={normalize(30)} />
        </View>
        <View style={styles.centerContainerStyle}>
          <View style={styles.rowStyle}>
            <View style={styles.flexHalf}>
              <Text style={styles.mediumTextStyle}>{'Under or Over'}</Text>
              <View style={styles.rowStylePadding}>
                <UpArrowIcon height={normalize(32)} width={normalize(32)} />
                <Text style={styles.boldTextStyle}>{'81%'}</Text>
              </View>
            </View>

            <View style={styles.flexHalf}>
              <Text style={styles.mediumTextStyle}>{'Top 5'}</Text>
              <View style={styles.rowStylePadding}>
                <DownArrowIcon height={normalize(32)} width={normalize(32)} />
                <Text style={styles.boldTextStyle}>{'-51%'}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserDetail;
