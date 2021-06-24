const keystone = require('keystone');

const { Types } = keystone.Field;

const Realizacoes = new keystone.List('Realizacoes', {singular: 'Realizacao',
plural: 'Realizacoes'} );

Realizacoes.add({
  date: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  description: {
    type: Types.Text,
    index: true,
  },
  
  
});

Realizacoes.register();