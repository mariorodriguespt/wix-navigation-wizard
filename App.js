import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screen';
import { Platform } from 'react-native';

registerScreens(); // this is where you register all of your app's screens

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/home.png'),
      selectedIcon: require('./img/home.png'),
      
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/risk.png'),
      
      title: 'Screen Two'
    }
  ],

  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarTextFontFamily: 'Avenir-Medium',
        
        tabBarBackgroundColor: '#ffffff'
  },
  appStyle: {
    
    navBarButtonColor: '#ffffff',
    
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
});
