import { useState } from "react";
import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import background from "../../../assets/background.jpeg";
import logo from "../../../assets/logo.png";
import person from "../../../assets/person.png";
import { Form } from "../Form/Form";

export function Home() {
  const [tela, setTela] = useState(true);

  const alterarTela = () => {
    setTela((valueOld) => !valueOld);
  };

  return (
    <View style={styles.container}>
      {tela ? (
        <>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.background}
          >
            <View style={styles.containerLogo}>
              <Image source={logo} resizeMode="contain" style={styles.logo} />
            </View>

            <View style={[styles.containerModel, { marginHorizontal: 5 }]}>
              <View
                style={{ flex: 1, width: "100%", justifyContent: "center" }}
              >
                <TouchableOpacity
                  onPress={alterarTela}
                  style={styles.containerBtn}
                  accessible={true}
                  accessibilityLabel={"Activate bat signal"}
                >
                  <Text style={styles.text}>Activate bat signal</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerPerson}>
                <Image
                  source={person}
                  resizeMode="contain"
                  style={styles.person}
                />
              </View>
            </View>
          </ImageBackground>
        </>
      ) : (
        <>{<Form />}</>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 1,
  },
  background: {
    flex: 1,
    width: "100%",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    width: "90%",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  containerModel: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#17151E",
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100,
    marginBottom: 1,
  },
  containerBtn: {
    color: "red",
    width: "100%",
  },
  text: {
    fontSize: 45,
    color: "#FFF",
    textAlign: "center",
    alignSelf: "center",

    textShadowColor: "rgba(255, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  containerPerson: {
    width: "50%",
    height: "50%",
    alignSelf: "flex-end",
  },
  person: {
    width: "100%",
    height: "100%",
  },
});
