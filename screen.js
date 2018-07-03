import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './tabs/FirstTabScreen';
import SecondTabScreen from './tabs/SecondTabScreen';
import PushedScreen from './tabs/PushedScreen';
import Wizard from './wizard/wizard';
import Step1 from './wizard/screen1';
import Step2 from './wizard/screen2';
import Final from './wizard/final';

export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);

  //TODO Test if we can register on the fly because the Wizard Container could handle it
  Navigation.registerComponent('container.wizard', () => Wizard);
  Navigation.registerComponent('container.wizard.step1', () => Step1);
  Navigation.registerComponent('container.wizard.step2', () => Step2);
  Navigation.registerComponent('container.wizard.final', () => Final);
  
}