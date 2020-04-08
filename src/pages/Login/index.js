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
import backgroundImage from "../../assets/food-login.png";

// & screen dimensions
const win = Dimensions.get("window");
const ratio = win.width / 1125; //541 is actual image width

import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();
  // Variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hidden, setHidden] = useState(true);
  const [passButton, setPassButton] = useState(styles.inputIcon);
  const [eyeButton, setEyeButton] = useState(styles.inputIconHidden);

  const [userButton, setUserButton] = useState(styles.inputIcon);
  const [userCancelButton, setUserCancelButton] = useState(
    styles.inputIconHidden
  );

  // Navigation
  function navigateToSignup() {
    navigation.navigate("SignUp");
  }
  function navigateToForgot() {
    navigation.navigate("Forgot");
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

  // Page Structure
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={["#FF9846", "#FF8648", "#FF3D4C"]}
      >
        <ImageBackground
          style={{
            width: win.width,
            height: 1012 * ratio, //362 is actual height of image
            // position: "absolute",
            top: -180,
            marginBottom: -190,
          }}
          source={backgroundImage}
        />
        <Text style={styles.title}>Login</Text>

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
            <FontAwesome5 name="user-alt" size={25} color="#FF7649" />
          </TouchableOpacity>
          <TouchableOpacity
            style={userCancelButton}
            onPress={() => {
              setUsername("");
            }}
          >
            <FontAwesome5 name="times" size={25} color="#FF7649" />
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
            <FontAwesome5 name="key" size={25} color="#FF7649" />
          </TouchableOpacity>
          <TouchableOpacity
            style={eyeButton}
            onPress={() => {
              setHidden(!hidden);
            }}
          >
            <FontAwesome5 name="eye" size={25} color="#FF7649" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigateToForgot();
          }}
        >
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submit}>
          <Feather name="arrow-right" size={50} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.text}>Or use</Text>

        <View style={styles.socialWrapper}>
          <TouchableOpacity style={styles.social}>
            <FontAwesome5 name="facebook" size={40} color="#FF4E4B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <FontAwesome5 name="google" size={40} color="#FF4E4B" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigateToSignup();
          }}
        >
          <Text style={styles.text}>
            Create <Text style={styles.textHeavy}>new account</Text>
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
