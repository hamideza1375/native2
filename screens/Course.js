import React, { useState, useCallback, useEffect} from "react";
import { BackHandler, Alert, StyleSheet, Text, View, Image, FlatList, Button, Platform, StatusBar, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";
import Screen from "../components/Screen";



// style = {{ width: "100%", height: portrait ? "50%" : screen.height, backgroundColor: "dodgerblue" }}


const Course = ({ navigation, route}) => {

  useEffect(() => {
    const checkForNet = ( async () => {
      const state = await NetInfo.fetch();
      // console.log("Connection Type: ", state.type);
      // console.log("Is Connected: ", state.isConnected);
      if (!state.isConnected) { alert("ارتباط با سرور")}
    })()
  }, []);


  const [loading, setLoading] = useState(true);

  const { screen, window } = useDimensions();
  const { landscape, portrait } = useDeviceOrientation();

    // console.log(Constants);


  useFocusEffect(
    useCallback(() => {
      console.log("Focused");

      return () => {
        console.log("Unfocused");
      };
    })
  );


  const [course] = useState([
    { key: 1, title: "یونس قربانی" },
    { key: 2, title: "ایمان مدائنی" },
    { key: 3, title: "سجاد باقرزاده" },
    { key: 4, title: "محمد اردوخانی" },
    { key: 5, title: "محمد قاری" },
    { key: 6, title: "هوتن همتی" },
    { key: 7, title: "نوید عباپور" },
    { key: 8, title: "احمدرضا اسکندری" },
    { key: 9, title: "حسام اثناعشری" },
    { key: 10, title: "وحید طهماسبی" },
  ]);

  const { id, text } = route.params;

  const pressHandler = () => navigation.navigate("Course", { id:"11", text: "سلام" });




    return (
      <Screen>
        {loading && <ActivityIndicator size="large" color="tomato" animating={loading} /> }


        <View style={{ flexDirection: 'row', width: '100%', justifyContent:'space-around'}}>

        <View style={{ flexBasis:'26%'}}>
            <Button title={id} color='green' onPress={() => navigation.setOptions({ title: text })} />
        </View>

          <View style={{ flexBasis: '70%'}}>
            <Button title={text} color='yellowgreen' onPress={pressHandler} />
        </View>
    </View>


            <FlatList
                horizontal={true}
                // numColumns={3}
                data={course}
                renderItem={({ item }) => (

                  <View style={styles.container2}>
                    <Image style={styles.img} source={require('../assets/bg1.jpg')} />
                    <Text>{item.title}</Text>
                  </View>
                    
                )}
            />
        </Screen>
    );
}

export default Course;


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        //require('./componentios.js')
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
        padding: 10,
      },
      android: {
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
        padding: 10,
      },
      default: {
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
        padding: 10,
      },
    }),
  },
   container2:{
       flexBasis:280,
       flexGrow:1,
       height:230,
       maxWidth:'350px',
       border:`1px solid blue`,
       borderRadius:5,
       margin:15,
   },
    img:{
       width:'99.75%',
       height:'66%',
   },
  firstContainer: {
    // marginTop: Platform.OS === "android" ? 30 : 20,
    // marginTop: StatusBar.currentHeight,
    marginTop: Constants.statusBarHeight,
  },
});
