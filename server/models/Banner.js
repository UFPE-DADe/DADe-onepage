const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
  nocreate: true,
  nodelete: true,
});

Banner.add({
  texto_branco: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  texto_amarelo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
  },
  link_botao_participe: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
});

Banner.register();