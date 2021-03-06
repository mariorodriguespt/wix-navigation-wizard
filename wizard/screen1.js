import React from 'react';
import{
    View,
    Button,
    Text
} from 'react-native';

export default class Step1 extends React.Component{
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
                <Text>Screen 1</Text>
                <Button title='Next' 
                        onPress={ this.props.nextScreen }
                        />
            </View>
        )
    }
}