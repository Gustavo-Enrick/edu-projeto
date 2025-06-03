import { FontAwesome } from '@expo/vector-icons';

function IconFontAwesome({ name, size = 30, color = "black" }) {
  return <FontAwesome name={name} size={size} color={color} />;
}

export default IconFontAwesome;
