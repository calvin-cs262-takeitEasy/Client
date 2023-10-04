import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Notification = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity>
          <AntDesign
            name="user"
            size={20}
            color={"55BCF6"}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.itemText}>{props.name}</Text>
        <Text style={styles.itemText}>{props.username}</Text>
        <Text style={styles.itemText}>{props.Text}</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity><AntDesign
            name="meh"
            size={18}
            color={"55BCF6"}
            style={{ marginLeft: 5 }}
          />
          </TouchableOpacity>
          <TouchableOpacity><FontAwesome
            name="comment"
            size={18}
            color={"55BCF6"}
            style={{ marginLeft: 5 }}
          /></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#BBB",
    width: Dimensions.get("window").width - 30,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    //maxWidth: '80%',
    width: Dimensions.get("window").width - 200,
  },

//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: "#55BCF6",
//     borderWidth: 2,
//     borderRadius: 5,
//   },
});

export default Notification;
