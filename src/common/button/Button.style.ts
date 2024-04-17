import { StyleSheet } from 'react-native';

const button = StyleSheet.create({
  common: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#6535de',
  },
  secondary: {
    backgroundColor: '#dedede',
  },
  disabled: {
    backgroundColor: '#bebebe',
  },
});

const size = StyleSheet.create({
  sm: {
    height: 24,
  },
  md: {
    height: 32,
  },
  lg: {
    height: 40,
  },
  xl: {
    height: 48,
  },
});

const text = StyleSheet.create({
  primary: {
    color: 'white',
  },
  secondary: {
    color: '#1e1e1e',
  },
  disabled: {
    color: '#f3f3f3',
  },
});

const pressed = StyleSheet.create({
  primary: {
    backgroundColor: '#6b3dd9',
  },
  secondary: {
    backgroundColor: '#9f9f9f',
  },
  disabled: {
    backgroundColor: '#a1a1a1',
  },
});

export default { button, size, text, pressed };
