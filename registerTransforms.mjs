import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  matcher: (token) => token.type === 'boxShadow',
  transformer: (token) => {
    if (!token.value || typeof token.value !== 'object') return '';

    const { x, y, blur, spread, color } = token.value;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
});
