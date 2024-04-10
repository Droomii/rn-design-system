// created by droomii in 2024/04/10
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const buttonStyle = StyleSheet.create({
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

const sizeStyle = StyleSheet.create({
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

const textStyle = StyleSheet.create({
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

const Button = (props: Props) => {
  const { variant = 'primary', size = 'md', children, ...attr } = props;

  return (
    <TouchableOpacity
      style={[
        buttonStyle.common,
        buttonStyle[variant],
        attr.disabled && buttonStyle.disabled,
        sizeStyle[size],
      ]}
      activeOpacity={0.8}
      {...attr}>
      <Text style={[textStyle[variant], attr.disabled && textStyle.disabled]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
