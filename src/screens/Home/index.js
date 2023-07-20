import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {LogoIcon} from '../../assets';
import {normalize} from '../../utils/Fonts';
import {listData} from '../../utils/JsonData';
import {styles} from './styles';
import {TopTabBarComponent} from '../../components/TopTabBarComponent';
import Header from '../../components/Header';
import UserDetail from '../../components/UserDetail';

export const Home = () => {
  const renderList = ({item, index}) => {
    return (
      <View key={index.toString()} style={styles.containerItem}>
        <View style={styles.containerItemStyle}>
          <View style={styles.containerItem}>
            <LogoIcon height={normalize(60)} width={normalize(60)} />
          </View>
          <View style={styles.itemRightStyle}>
            <Text style={styles.textBoldStyle}>
              {item.title}
              <Text style={styles.textMediumStyle}>{` ${item.subTitle}`}</Text>
            </Text>
            <Text style={styles.mediumFont}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.darkBGColor]}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerStyle}>
        <UserDetail />
        <View style={styles.separator} />
        <TopTabBarComponent />
        <FlatList
          data={listData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderList}
          contentContainerStyle={styles.listContainerStyle}
          style={styles.bgColor}
        />
      </ScrollView>
    </View>
  );
};
