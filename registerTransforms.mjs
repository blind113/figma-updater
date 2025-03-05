import StyleDictionary from 'style-dictionary';

// Registrando corretamente a transformação para sombras
StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  matcher: function (token) {
    return token?.type === 'boxShadow';
  },
  transformer: function (token) {
    if (!token.value || typeof token.value !== 'object') return '';

    const { x, y, blur, spread, color } = token.value;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
});
