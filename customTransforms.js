const StyleDictionary = require('style-dictionary');

// Função que formata `box-shadow`
StyleDictionary.registerTransform({
  name: 'shadow/css', // Nome do transformador
  type: 'value', // Ele transforma um valor
  matcher: (token) => token.type === 'boxShadow', // Identifica `box-shadow`
  transformer: (token) => {
    if (!token.value || typeof token.value !== 'object') return '';

    const { x, y, blur, spread, color } = token.value;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
});
