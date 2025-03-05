import StyleDictionary from 'style-dictionary';

// Garante que a função é definida corretamente
const shadowTransform = {
  name: 'shadow/css',
  type: 'value',
  matcher: (token) => token?.type === 'boxShadow',
  transformer: (token) => {
    if (!token.value || typeof token.value !== 'object') return '';

    const { x, y, blur, spread, color } = token.value;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
};

// Registra a transformação corretamente
StyleDictionary.registerTransform(shadowTransform);
