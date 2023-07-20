import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../utils/Colors';
import {
  HomeIcon,
  LeaderboardIcon,
  LeagueIcon,
  ProfileIcon,
  ResearchIcon,
} from '../assets';
import {FONT_FAMILY, FONT_SIZE, normalize} from '../utils/Fonts';
import {TAB_NAME} from '../utils/Constants';
import Empty from '../screens/Empty';

const Tab = createBottomTabNavigator();

const getTabIcons = ({focused, route}) => {
  const fillColor = focused ? Colors.primary : Colors.gray;
  switch (route.name) {
    case TAB_NAME.HOME: {
      return (
        <HomeIcon
          fill={fillColor}
          height={normalize(24)}
          width={normalize(24)}
        />
      );
    }
    case TAB_NAME.LEAGUES: {
      return (
        <LeagueIcon
          fill={fillColor}
          height={normalize(24)}
          width={normalize(24)}
        />
      );
    }
    case TAB_NAME.RESEARCH: {
      return (
        <ResearchIcon
          fill={fillColor}
          height={normalize(24)}
          width={normalize(24)}
        />
      );
    }
    case TAB_NAME.LEADERBOARD: {
      return (
        <LeaderboardIcon
          fill={fillColor}
          height={normalize(24)}
          width={normalize(24)}
        />
      );
    }
    case TAB_NAME.PROFILE: {
      return (
        <ProfileIcon
          fill={fillColor}
          height={normalize(24)}
          width={normalize(24)}
        />
      );
    }
  }
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarIcon: data => getTabIcons({...data, route}),
          tabBarLabelStyle: {
            fontFamily: FONT_FAMILY.REGULAR,
            fontSize: FONT_SIZE.FONT10,
            color: Colors.gray,
          },
        })}>
        <Tab.Screen name={TAB_NAME.HOME} component={Home} />
        <Tab.Screen name={TAB_NAME.LEAGUES} component={Empty} />
        <Tab.Screen name={TAB_NAME.RESEARCH} component={Empty} />
        <Tab.Screen name={TAB_NAME.LEADERBOARD} component={Empty} />
        <Tab.Screen name={TAB_NAME.PROFILE} component={Empty} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
