import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 56,
    padding: 16,
    backgroundColor: '#1f1e25',
    borderRadius: 10,
    color: '#fff',
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: 48,
    height: 48,
    marginTop: 8,
    backgroundColor: '#31cf67',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})