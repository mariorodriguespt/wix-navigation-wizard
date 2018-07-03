import React from 'react';
import Step1 from './screen1';
import Step2 from './screen2';
import Final from './final';

import {
    View
} from 'react-native';

const views = {
    1 : 'container.wizard.step1',
    2 : 'container.wizard.step2',
    3 : 'container.wizard.final' 
};

export default class Wizard extends React.Component{
    state = {        
        currentScreen : 0,
        finalScreen : 3
    }

    nextScreen = () => {
        const nextChildView = this.state.currentScreen + 1;

        this.setState({
            currentScreen : nextChildView
        });
    
        this.props.navigator.push({
            animated:false,
            screen: views[ nextChildView ],
            passProps : {
                nextScreen : this.nextScreen,
                completeWizard : this.resetNavigationToCallingScreen
            }
        });
    }

    resetNavigationToCallingScreen = () =>{
        this.props.navigator.resetTo({
            screen : 'example.FirstTabScreen'
        });    
    }

    componentDidMount(){
        this.nextScreen()
    }

    render(){        
        return (<View></View>);
    }
}