import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class FirstTabScreen extends React.Component {

    pushWizard = async () => {
        const visibleScreenInstanceId = await Navigation.getCurrentlyVisibleScreenId();
        console.log(visibleScreenInstanceId);

        this.props.navigator.push({
            animated:false,
            screen: 'container.wizard',
            title: `Wizard`,
            passProps: {
                callingScreen: visibleScreenInstanceId
            }
          });
    }

    render(){
    
        return(
            <View style={{
                display:'flex',
                alignItems:'center'
                }}>
                <Text>Main Screen</Text>
                <Button title='Push Wizard'
                        onPress={ this.pushWizard }/>
            </View>
        )
    }
}