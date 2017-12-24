import React, { Component } from 'react';
import {Image,
  Text,
  View,FlatList,ScrollView,RefreshControl
} from 'react-native';
import {Content,ListItem,List,Container,Right,Card,CardItem,Left,Drawer,Header,Title,Icon,Button,Thumbnail,Body,Footer,FooterTab} from 'native-base';
import SideBar from './drawer';

export default class home extends Component<{}> {
  
  closeDrawer(){
	  this._drawer._root.close()
  }
  
  openDrawer(){
	  this._drawer._root.open()
  }
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
 _onRefresh() {
    this.setState({refreshing: true});
  
      this.setState({refreshing: false});
    ;
  }
  
  render() {
    return (
	
	<Container>
	
	<Drawer ref={(ref)=>{this._drawer=ref;}}
	content={<SideBar navigator={this._navigator}/>}
	onClose={()=>this.closeDrawer()}>
	
	
	<View style={{height:109,backgroundColor:'#ffffff'}}>
	<View style={{flexDirection:'row'}}>
	<Button transparent onPress={()=>this.openDrawer()} style={{marginLeft:15,marginTop:8}}>
	 <Thumbnail small source={require('./sj.jpg')} />
	</Button><Text style={{color:'black',fontSize:20,fontWeight:'bold',marginTop:13,marginLeft:20}}>Home</Text>
 </View>
 
 <View style={{flexDirection:'row',marginTop:13}}>
  <Button transparent style={{backgroundColor:'white',borderBottomWidth:5,width:95}}>
              <Icon name="ios-home-outline" style={{fontSize:30,color:'blue',marginLeft:38,fontWeight:'bold'}} />
            </Button>
			
            <Button transparent style={{marginLeft:37,backgroundColor:'white'}} onPress={()=>this.props.navigation.navigate('search')}>
              <Icon name="ios-search-outline" style={{fontSize:30,color:'#808080'}}/>
            </Button> 

 <Button transparent style={{marginLeft:45,backgroundColor:'white'}}>
              <Icon active name="ios-notifications-outline" style={{fontSize:30,color:'#808080'}}/>
            </Button>
            <Button transparent style={{marginLeft:45,backgroundColor:'white',}}>
              <Icon name="ios-mail-outline" style={{fontSize:30,color:'#808080'}}/>
            </Button>
 </View>
 </View>
<ScrollView style={{backgroundColor: 'white'}} refreshControl={ <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
           colors={["blue"]}/>
}>
 <Card style={{height:330}} transparent>
    <CardItem>
              <Left>
  <Thumbnail source={require('./sj.jpg')} style={{height:47,width:47}}/>
  <Body style={{}}>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>NativeBase<Text style={{fontSize:16,fontWeight:'normal',color:'gray'}}> @geekyants   24m                   </Text>
                  <Icon name='ios-arrow-down' style={{color:'gray',marginLeft:80,marginTop:4,fontSize:18}}></Icon> 
				</Text>
				<Text style={{fontSize:16,color:'black'}}>What do you call a game, and where are you from? <Text style={{color:'blue'}}>ift.tt/2R3QLd</Text></Text>
				</Body>
				
				</Left>
				
            </CardItem>
            <CardItem cardBody>
            <Image resizeMode="contain" source={require('./cr1.jpg')} style={{marginLeft:74,height:200, width: 330}} />
            </CardItem>
  <CardItem style={{marginLeft:40}}>
                 <Button transparent><Icon name='ios-text-outline' style={{fontSize:22,marginBottom:30}}/><Text style={{marginBottom:30}}>60</Text></Button>
              <Button transparent style={{marginLeft:30}}><Icon active name='ios-sync-outline' style={{fontSize:22,marginBottom:30}}/><Text style={{marginBottom:30}}>2</Text></Button>
              <Button transparent style={{marginLeft:30}}><Icon name='ios-heart-outline' style={{fontSize:22,marginBottom:30}}></Icon><Text style={{marginBottom:30}}>19</Text></Button>
               <Button transparent style={{marginLeft:20}}><Icon name='ios-mail-outline' style={{fontSize:22,marginBottom:30}}></Icon></Button>
            </CardItem>
		 </Card>
		 <View style={{borderBottomWidth:0,borderColor:'black'}}/>
	<Card style={{height:330}} transparent>
    <CardItem>
              <Left>
  <Thumbnail source={require('./sj.jpg')} style={{height:47,width:47}}/>
  <Body style={{}}>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>NativeBase<Text style={{fontSize:16,fontWeight:'normal',color:'gray'}}> @geekyants   24m                   </Text>
                  <Icon name='ios-arrow-down' style={{color:'gray',marginLeft:80,marginTop:4,fontSize:18}}></Icon> 
				</Text>
				<Text style={{fontSize:16,color:'black'}}>What do you call a game, and where are you from? <Text style={{color:'blue'}}>ift.tt/2R3QLd</Text></Text>
				</Body>
				
				</Left>
				
            </CardItem>
            <CardItem cardBody>
            <Image resizeMode="contain" source={require('./cr1.jpg')} style={{marginLeft:74,height:200, width: 330}} />
            </CardItem>
  <CardItem style={{marginLeft:40}}>
                 <Button transparent><Icon name='ios-text-outline' style={{fontSize:22,marginBottom:30}}/><Text style={{marginBottom:30}}>60</Text></Button>
              <Button transparent style={{marginLeft:30}}><Icon active name='ios-sync-outline' style={{fontSize:22,marginBottom:30}}/><Text style={{marginBottom:30}}>2</Text></Button>
              <Button transparent style={{marginLeft:30}}><Icon name='ios-heart-outline' style={{fontSize:22,marginBottom:30}}></Icon><Text style={{marginBottom:30}}>19</Text></Button>
               <Button transparent style={{marginLeft:20}}><Icon name='ios-mail-outline' style={{fontSize:22,marginBottom:30}}></Icon></Button>
            </CardItem>
		 </Card>
</ScrollView>	
	
	
	
	
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

</Drawer>
			
</Container>	
   	  
    );
  }
}

