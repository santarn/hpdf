import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import{
	Platform,
	StyleSheet,
	Text,View
}from 'react-native';

import home from './home';
import search from './search';

const RootNav=StackNavigator({
	home:{screen:home},
	search:{screen:search}},
		{
		headerMode:'none',
mode:'modal'		
		}		
); 

export default class App extends Component{
	render(){
		return(
		<RootNav/>
		)
	};
}