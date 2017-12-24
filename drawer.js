import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Bold,Content,Footer,Thumbnail,Icon,Container} from 'native-base';

export default class drawer extends Component{
	render(){
		return(
		<Content style={{backgroundColor:'#ffffff'}}>
		<Thumbnail source={require('./sj.jpg')} style={{marginLeft:15,marginTop:15}} />
		<View style={{flexDirection: 'row'}}><Text style={{marginLeft:15,marginTop:8,fontSize:20,fontWeight:'bold',color:'black'}}>Santosh Jain</Text>             
	    <Icon name='ios-arrow-down' style={{marginLeft:160,marginTop:13,color:'blue',fontSize:18}}></Icon>
		</View>
		<Text style={{marginLeft:15,fontSize:16}}>@thesjstyle</Text>
		<Text></Text>
		<Text></Text>
		<View style={{flexDirection: 'row'}}>
		<Text style={{marginLeft:15,fontSize:16,fontWeight:'bold',color:'black'}}>0</Text>
		<Text style={{marginLeft:3,fontSize:16}}>Following</Text>
		<Text style={{marginLeft:15,fontSize:16,fontWeight:'bold',color:'black'}}>1000</Text>
		<Text style={{marginLeft:3,fontSize:16}}>Followers</Text>
</View>
<View
  style={{
	  marginTop:15,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  }}
/>

<View style={{flexDirection: 'row',marginLeft:17,marginTop:13}}>
<Icon name='ios-person-outline' style={{fontSize:36}}></Icon>
<Text style={{marginLeft:15,marginTop:4,fontSize:20,color:'black'}}>Profile</Text>
</View>
<Text></Text>
	<Text></Text>
		<Text></Text>
<View style={{flexDirection: 'row',marginLeft:15}}>
<Icon name='ios-list-box-outline' style={{fontSize:29}}></Icon>
<Text style={{marginLeft:16,fontSize:20,color:'black'}}>Lists</Text>
</View>

<Text></Text>
	<Text></Text>
		<Text></Text>
<View style={{flexDirection: 'row',marginLeft:20,marginTop:1}}>
<Icon name='ios-flash-outline' style={{fontSize:32}}></Icon>
<Text style={{marginLeft:19,fontSize:20,color:'black'}}>Moments</Text>
</View>

<Text></Text>
	<Text></Text>
		<Text></Text>
<View style={{flexDirection: 'row',marginLeft:15,marginTop:1}}>
<Icon name='ios-photos-outline' style={{fontSize:29}}></Icon>
<Text style={{marginLeft:13,fontSize:20,color:'black'}}>Highlights</Text>
</View>

<View
  style={{
	  marginTop:25,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  }}
/>
<Text style={{marginLeft:17,marginTop:22,fontSize:20,color:'black'}}>Settings and privacy</Text>
<Text style={{marginLeft:17,marginTop:20,fontSize:20,color:'black'}}>Help Centre</Text>	
<View
  style={{
	  marginTop:130,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  }}
/>
<View style={{flexDirection:'row'}}>
<Icon name='ios-moon-outline' style={{marginLeft:17,marginTop:10,color:'blue'}}></Icon>
<Icon name='barcode' style={{marginLeft:245,marginTop:10,color:'blue'}}></Icon>
</View>
	</Content>
		)
	};
} 