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
import { LinearGradient } from "expo-linear-gradient";

// @ imports
import styles from "./styles";
import backgroundImage from "../../assets/food-signup.png";

// & screen dimensions
const win = Dimensions.get("window");
const ratio = win.width / 1125; //541 is actual image width

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  // Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hidden, setHidden] = useState(true);
  const [passButton, setPassButton] = useState(styles.inputIcon);
  const [eyeButton, setEyeButton] = useState(styles.inputIconHidden);

  const [userButton, setUserButton] = useState(styles.inputIcon);
  const [userCancelButton, setUserCancelButton] = useState(
    styles.inputIconHidden
  );

  const [emailButton, setEmailButton] = useState(styles.inputIcon);
  const [emailCancelButton, setEmailCancelButton] = useState(
    styles.inputIconHidden
  );

  // Navigation
  function navigateToSignup() {
    navigation.navigate("SignUp");
  }
  function navigateToForgot() {
    navigation.navigate("Forgot");
  }
  function navigateBack() {
    navigation.goBack();
  }

  // password mode
  function passwordMode() {
    if (password === "") {
      setPassButton(styles.inputIcon);
      setEyeButton(styles.inputIconHidden);
    } else {
      setPassButton(styles.inputIconHidden);
      setEyeButton(styles.inputIcon);
    }
  }

  // cancel mode
  function cancelUserMode() {
    if (username === "") {
      setUserButton(styles.inputIcon);
      setUserCancelButton(styles.inputIconHidden);
    } else {
      setUserButton(styles.inputIconHidden);
      setUserCancelButton(styles.inputIcon);
    }
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
        colors={["#2FABC9", "#52B8B0", "#93C63B"]}
      >
        <ImageBackground
          style={{
            width: win.width,
            height: 1012 * ratio, //362 is actual height of image
            // position: "absolute",
            top: -130,
            marginBottom: -110,
          }}
          source={backgroundImage}
        />
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="USER NAME"
            placeholderTextColor={"#fff"}
            style={styles.input}
            value={username}
            onFocus={() => cancelUserMode()}
            onKeyPress={() => cancelUserMode()}
            onChangeText={(username) => setUsername(username)}
          ></TextInput>
          <TouchableOpacity style={userButton}>
            <FontAwesome5 name="user-alt" size={25} color="#52B8B0" />
          </TouchableOpacity>
          <TouchableOpacity
            style={userCancelButton}
            onPress={() => {
              setUsername("");

              setUserButton(styles.inputIcon);
              setUserCancelButton(styles.inputIconHidden);
            }}
          >
            <FontAwesome5 name="times" size={25} color="#52B8B0" />
          </TouchableOpacity>
        </View>
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
            <FontAwesome5 name="envelope" size={25} color="#52B8B0" />
          </TouchableOpacity>
          <TouchableOpacity
            style={emailCancelButton}
            onPress={() => {
              setEmail("");

              setEmailButton(styles.inputIcon);
              setEmailCancelButton(styles.inputIconHidden);
            }}
          >
            <FontAwesome5 name="times" size={25} color="#52B8B0" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="PASSWORD"
            placeholderTextColor={"#fff"}
            style={styles.input}
            value={password}
            onFocus={() => passwordMode()}
            onKeyPress={() => passwordMode()}
            onChangeText={(username) => {
              setPassword(username);
            }}
            secureTextEntry={hidden}
          ></TextInput>
          <TouchableOpacity style={passButton}>
            <FontAwesome5 name="key" size={25} color="#52B8B0" />
          </TouchableOpacity>
          <TouchableOpacity
            style={eyeButton}
            onPress={() => {
              setHidden(!hidden);
            }}
          >
            <FontAwesome5 name="eye" size={25} color="#52B8B0" />
          </TouchableOpacity>
        </View>

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
