import { FlatCompat } from '@eslint/eslintrc';
import vueTs from '@vue/eslint-config-typescript';
import prettier from '@vue/eslint-config-prettier';

const compat = new FlatCompat();

export default [
  ...vueTs(),
  ...compat.config(prettier),
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
