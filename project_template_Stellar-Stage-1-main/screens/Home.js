import React, { Component } from 'react';
import { Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar</Text>
                    <Text style={styles.titleText}>App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>SpaceCrafts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Star Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? SatutusBar.currentHeight:0,
    },
    routeCard:{
        flex:0.12,
        justifyContent:'center',
        algnItems:'center',
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:'white',
    },
    titleBar:{
        flex:0.5,
        justifyContant:'center',
        algnItems:'center',
    },
    titleText:{
        fontSize:40,
        fontWeight:'cold',
        color:'white',
    },
    routeText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#D11583',
        justifyContent:'center',
        alignItems:'center'
    },
})