import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// @ imports
import styles from "./styles";
import backgroundImage from "../../assets/food-forgot.png";

// & screen dimensions
const win = Dimensions.get("window");
const ratio = win.width / 1125; //541 is actual image width

import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  // Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailButton, setEmailButton] = useState(styles.inputIcon);
  const [emailCancelButton, setEmailCancelButton] = useState(
    styles.inputIconHidden
  );

  // Navigation
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }
  function navigateToContact() {
    navigation.goBack();
  }

  function cancelEmailMode() {
    if (email === "") {
      setEmailButton(styles.inputIcon);
      setEmailCancelButton(styles.inputIconHidden);
    } else {
      setEmailButton(styles.inputIconHidden);
      setEmailCancelButton(styles.inputIcon);
    }
  }

  // Page Structure
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={["#FF788C", "#F45E67", "#D4433E"]}
      >
        <ImageBackground
          style={{
            width: win.width,
            height: 1012 * ratio, //362 is actual height of image
            // position: "absolute",
            top: -150,
            marginBottom: -130,
          }}
          source={backgroundImage}
        />
        <Text style={styles.title}>Forgot Password?</Text>

        <Text style={styles.text}>
          Please enter the email address used on your Account. Your log-in
          informations will be sent to this email address.
        </Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="EMAIL"
            placeholderTextColor={"#fff"}
            style={styles.input}
            value={email}
            onFocus={() => cancelEmailMode()}
            onKeyPress={() => cancelEmailMode()}
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
          <TouchableOpacity style={emailButton}>
            <FontAwesome5 name="envelope" size={25} color="#F45E67" />
          </TouchableOpacity>
          <TouchableOpacity
            style={emailCancelButton}
            onPress={() => {
              setEmail("");

              setEmailButton(styles.inputIcon);
              setEmailCancelButton(styles.inputIconHidden);
            }}
          >
            <FontAwesome5 name="times" size={25} color="#F45E67" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigateToContact();
          }}
        >
          <Text style={styles.text}>
            For additional service or support, please{"\n"}
            <Text style={styles.textHeavy}>Contact Us.</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.socialWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigateBack();
            }}
            style={styles.submitBack}
          >
            <Feather name="arrow-left" size={50} color="#FFBB31" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit}>
            <Feather name="arrow-right" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
