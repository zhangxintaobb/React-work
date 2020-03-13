import React, { useState, useEffect } from 'react';
import {Router, Scene,Tabs} from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import MyList from './compontents/MyList';
import Person from './compontents/Person';
import Icon from 'react-native-vector-icons/AntDesign';
import Buy from './compontents/Buy';
import Home from './compontents/Home';

const App = () => {
  return (
    <>
      <Router>
        <Scene hideNavBar>
          <Tabs
            key="tabbar"
            showLabel={true}
            tabBarStyle={{backgroundColor: "#ffffff"}}
            activeTintColor="#f23636"
          >
            <Scene
              hideNavBar
              key="Home"
              component={Home}
              title="首页"
              icon={
                ({focused})=><Icon 
                size={30}
                  color={focused?'#f23636':'#949494'} 
                  name="home"
                  
                />
              }
            />
            <Scene
              hideNavBar
              key="Mylist"
              component={MyList}
              title="商品分类"
              icon={
                ({focused})=><Icon 
                size={30}
                color={focused?'#f23636':'#949494'} 
                  name="appstore-o"
                />
              }
            />
            <Scene
              hideNavBar
              key="Buy"
              component={Buy}
              title="购物车"
              icon={
                ({focused})=><Icon 
                size={30}
                color={focused?'#f23636':'#949494'}  
                  name="shoppingcart"
                />
              }
            />
            
            <Scene
              hideNavBar
              key="Person"
              component={Person}
              icon={
                ({focused})=><Icon 
                size={30}
                color={focused?'#f23636':'#949494'} 
                  name="user"
                />
              }
              title="个人中心"
            />
          </Tabs>
      </Scene>
  </Router>
    </>
  )
};

const styles = StyleSheet.create({
 
});

export default App;
