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
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    height: 48,
    padding: 16,
    marginRight: 12,
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
    backgroundColor: '#31cf67',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
})