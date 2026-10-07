import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert(
        "Login Required",
        "Please enter your username and password."
      );
      return;
    }

    setLoading(true);

    // Backend login will be connected here later
    setTimeout(() => {
      setLoading(false);

      Alert.alert(
        "Login",
        "Login UI is working. Backend authentication will be connected next."
      );
    }, 1000);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.keyboard}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo / Header */}
            <View style={styles.header}>
              <View style={styles.logoCircle}>
                <Ionicons
                  name="school-outline"
                  size={45}
                  color="#ffffff"
                />
              </View>

              <Text style={styles.appName}>
                Hi-Tech Study Zone
              </Text>

              <Text style={styles.tagline}>
                Learn • Explore • Achieve
              </Text>
            </View>

            {/* Login Card */}
            <View style={styles.loginCard}>
              <Text style={styles.loginTitle}>
                Welcome Back
              </Text>

              <Text style={styles.loginSubtitle}>
                Login to continue to your account
              </Text>

              {/* Username */}
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-outline"
                  size={22}
                  color="#667085"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#98A2B3"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>

              {/* Password */}
              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="#667085"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#98A2B3"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />

                <TouchableOpacity
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  <Ionicons
                    name={
                      showPassword
                        ? "eye-outline"
                        : "eye-off-outline"
                    }
                    size={22}
                    color="#667085"
                  />
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator
                    size="small"
                    color="#ffffff"
                  />
                ) : (
                  <>
                    <Text style={styles.loginButtonText}>
                      LOGIN
                    </Text>

                    <Ionicons
                      name="arrow-forward"
                      size={21}
                      color="#ffffff"
                    />
                  </>
                )}
              </TouchableOpacity>

              <Text style={styles.roleText}>
                Admin and Student login
              </Text>
            </View>

            {/* Bottom information */}
            <View style={styles.footer}>
              <Ionicons
                name="shield-checkmark-outline"
                size={17}
                color="#ffffff"
              />

              <Text style={styles.footerText}>
                Secure Login
              </Text>

              <Text style={styles.dot}>•</Text>

              <Ionicons
                name="wifi-outline"
                size={17}
                color="#ffffff"
              />

              <Text style={styles.footerText}>
                Connected
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(5, 15, 35, 0.72)",
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
  },

  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "rgba(0, 122, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },

  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  tagline: {
    fontSize: 15,
    color: "#D0D5DD",
    marginTop: 7,
    letterSpacing: 1,
  },

  loginCard: {
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },

  loginTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#101828",
    textAlign: "center",
  },

  loginSubtitle: {
    fontSize: 14,
    color: "#667085",
    textAlign: "center",
    marginTop: 7,
    marginBottom: 25,
  },

  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#101828",
  },

  loginButton: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 10,
  },

  roleText: {
    textAlign: "center",
    color: "#667085",
    fontSize: 13,
    marginTop: 18,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  footerText: {
    color: "#FFFFFF",
    fontSize: 13,
    marginLeft: 5,
  },

  dot: {
    color: "#FFFFFF",
    marginHorizontal: 10,
  },
});