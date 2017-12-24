import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Bold,Content,Header,Footer,Card,Thumbnail,Input,Item,Icon,Container} from 'native-base';

export default class drawer extends Component{
	render(){
		return(
		<Container>
		 <Header searchBar style={{backgroundColor:'white'}}>
          <Item>
		  <Icon name='md-arrow-back' style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('home')}></Icon>
            <Input placeholder="Search Twitter" />
          </Item>
		  </Header>
		  <Card style={{marginTop:557}}></Card>
		  <Footer style={{height:45,flexDirection:'row',backgroundColor:'white'}}>		  
		  <View style={{width:50,backgroundColor:'white',marginTop:9}}>
              <Text style={{fontSize:17,fontWeight:'bold'}}>All</Text>
			</View>
			<View style={{width:80,backgroundColor:'white',marginRight:225,marginTop:9}}>
              <Text style={{fontSize:17,fontWeight:'bold'}}>Mentions</Text>
			</View>
			<View>
			<Icon name='ios-settings-outline' style={{color:'blue',marginTop:9}}></Icon>
			</View>
			</Footer>
			</Container>
		)
	};
} 