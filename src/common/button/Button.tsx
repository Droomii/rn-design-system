// created by droomii in 2024/04/10
import { useState } from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import styles from './Button.style';

interface Props extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ButtonBase = (props: Props) => {
  const {
    variant = 'primary',
    size = 'md',
    children,
    onPressIn,
    ...attr
  } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = (e: GestureResponderEvent) => {
    setIsPressed(true);
    onPressIn?.(e);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button.common,
        styles.button[variant],
        attr.disabled && styles.button.disabled,
        styles.size[size],
        isPressed && styles.pressed[variant],
      ]}
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      {...attr}>
      <Text style={[styles.text[variant], attr.disabled && styles.text.disabled]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const Button = Object.assign(ButtonBase, {
  Primary: (props: Omit<Props, 'variant'>) => (
    <ButtonBase {...props} variant="primary" />
  ),
  Secondary: (props: Omit<Props, 'variant'>) => (
    <ButtonBase {...props} variant="secondary" />
  ),
});

export default Button;
