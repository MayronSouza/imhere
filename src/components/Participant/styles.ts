import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: '#e23c44',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})