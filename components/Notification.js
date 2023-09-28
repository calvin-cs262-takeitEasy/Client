import React from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const Notification = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
item: {
    backgroundColor: '#BBB',
    padding :15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#064663',
    opacity: 0.4,
},
itemText: {
    //maxWidth: '80%',
    width: Dimensions.get("window").width - 200,
},
circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
},
});

export default Notification;