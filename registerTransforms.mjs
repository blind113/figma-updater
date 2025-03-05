import StyleDictionary from 'style-dictionary';

// Função para transformar sombras em formato CSS
const shadowTransform = {
  name: 'shadow/css',  // Nome do transformador
  type: 'value',        // Tipo de transformação
  matcher: (token) => token?.type === 'boxShadow',  // Verifica se o tipo do token é 'boxShadow'
  transformer: (token) => {  // Função de transformação
    if (!token.value || typeof token.value !== 'object') return '';  // Verifica se o valor do token é um objeto válido
    const { x, y, blur, spread, color } = token.value;  // Extração das propriedades da sombra
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;  // Retorna o valor no formato CSS
  }
};

// Registra o transformador de sombra
StyleDictionary.registerTransform(shadowTransform);
