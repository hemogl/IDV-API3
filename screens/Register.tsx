import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CTA_PRIMARY } from "../theme/cta.js";
import { useState } from "react";
import COLORS from "../theme/colors.js";

export default function UserRegister() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.register}>
      <Text style={[TEXTSTYLES.title_1, styles.title]}> REGISTER </Text>

      <View style={styles.input}>
        <TextInput
          style={TEXTSTYLES.input_auth}
          placeholder="Nom"
          placeholderTextColor={COLORS.dark_grey}
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <TextInput
          style={TEXTSTYLES.input_auth}
          placeholder="Prénom"
          placeholderTextColor={COLORS.dark_grey}
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          style={TEXTSTYLES.input_auth}
          placeholder="Email"
          placeholderTextColor={COLORS.dark_grey}
          value={email}
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={TEXTSTYLES.input_auth}
          placeholder="Mot de passe"
          placeholderTextColor={COLORS.dark_grey}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />

        <TextInput
          style={TEXTSTYLES.input_auth}
          placeholder="Téléphone"
          placeholderTextColor={COLORS.dark_grey}
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />

        <TextInput
          style={[TEXTSTYLES.input_auth, styles.input_address]}
          placeholder="Adresse"
          placeholderTextColor={COLORS.dark_grey}
          value={address}
          multiline={true}
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <TouchableOpacity style={CTA_PRIMARY.base}>
        <Text>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  input: {
    flex: 1,
    gap: 8,
    paddingBottom: 50,
  },
  input_address: {
    minHeight: 100,
  },
});
