import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import logo from "../../../assets/logo.png";

import { styles } from "./FormStyles";

export function Form() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerLogo}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Bat Sinal</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inline}>
            <Text style={styles.label}>Nome: </Text>
            <TextInput style={styles.input} placeholder="Nome" />
          </View>

          <View style={styles.inline}>
            <Text style={styles.label}>Telefone: </Text>
            <TextInput
              style={styles.input}
              placeholder="(XX) X XXXX-XXXX"
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inline}>
            <Text style={styles.label}>Localização: </Text>
            <TextInput style={styles.input} placeholder="localização" />
          </View>

          <View style={styles.inline}>
            <Text style={styles.label}>Observação:</Text>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={styles.input}
            />
          </View>

          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Acionar pedido de ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
