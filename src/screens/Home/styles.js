import {StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  centerAlign: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperView: {position: 'absolute', bottom: 0, right: 0},
  regularText: {
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 10,
    fontSize: FONT_SIZE.FONT13,
    color: Colors.gray,
  },
  regularTextCenter: {
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: 'center',
    marginLeft: 10,
    fontSize: FONT_SIZE.FONT13,
    color: Colors.gray,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  borderView: {
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 5,
    height: 120,
    marginTop: 30,
  },
  centerIconStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 120,
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainerStyle: {justifyContent: 'center', flex: 1},
  rowStyle: {flexDirection: 'row', paddingLeft: 20},
  flexHalf: {flex: 0.5, marginTop: 10},
  rowStylePadding: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  boldTextStyle: {
    fontFamily: FONT_FAMILY.BOLD,
    paddingLeft: 10,
    fontSize: FONT_SIZE.FONT18,
  },
  mediumTextStyle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    marginTop: 10,
    fontSize: FONT_SIZE.FONT13,
    color: Colors.gray,
  },
  separator: {
    height: 4,
    backgroundColor: Colors.secondary,
    marginTop: 10,
  },
  tabContainer: {height: 60, flexDirection: 'row', alignItems: 'center'},
  tabContainerStyle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBorder: {
    borderBottomWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 20,
  },
  fontMedium: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.FONT13,
    color: Colors.gray,
  },
  height20: {
    height: 20,
  },
  colorPrimary: {
    color: Colors.primary,
  },
  bgColor: {
    backgroundColor: Colors.secondary,
  },
  containerStyle: {
    paddingBottom: 50,
  },
  listContainerStyle: {flexGrow: 1, paddingBottom: 10},
  containerItem: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  containerItemStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: Colors.background,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topSpace: {marginTop: 2},
  textBoldStyle: {fontFamily: FONT_FAMILY.MEDIUM, fontWeight: '600'},
  textMediumStyle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontWeight: '600',
    color: Colors.golden,
    fontSize: FONT_SIZE.FONT13,
  },
  mediumFont: {
    fontFamily: FONT_FAMILY.MEDIUM,
    marginTop: 10,
    fontSize: FONT_SIZE.FONT13,
    color: Colors.gray,
  },
  itemRightStyle: {flex: 3, paddingRight: 5},
  padding15: {padding: 15},
  fontRegular: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.FONT14,
    color: Colors.gray,
  },
  darkBGColor: {backgroundColor: Colors.background},
});
