import React from 'react';
import{
    View,
    Button,
    Text
} from 'react-native';

export default class Final extends React.Component{
    render(){
        return (
            <View style={
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    marginTop: 50
                }
            }>
                <Text>Final Step</Text>
                <Button title='Done' onPress={ this.props.completeWizard }/>
            </View>
        )
    }
}