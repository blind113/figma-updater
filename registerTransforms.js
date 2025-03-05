const StyleDictionary = require('style-dictionary');

// Exemplo de transformador que ajusta tokens de tipo 'dimension' (dimensão)
StyleDictionary.registerTransform({
  name: 'size/pxToRem', // Nome da transformação
  type: 'value', // O tipo da transformação (a transformação afeta o valor)
  matcher: (token) => token.type === 'dimension', // Verifica se o tipo do token é 'dimension'
  transformer: (token) => `${token.value / 16}rem`, // A transformação em si, converte px para rem
});

// Registra um segundo transformador para outro caso específico
StyleDictionary.registerTransform({
  name: 'color/rgbToHex', // Exemplo de transformação para cores
  type: 'value',
  matcher: (token) => token.type === 'color' && token.value.includes('rgb'),
  transformer: (token) => {
    const rgb = token.value.match(/\d+/g);
    return `#${(1 << 24) | (parseInt(rgb[0]) << 16) | (parseInt(rgb[1]) << 8) | parseInt(rgb[2])}`.toString(16).slice(1).toUpperCase();
  },
});

console.log('Transformadores registrados com sucesso!');
