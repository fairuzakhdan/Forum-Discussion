import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import pluginCypress from 'eslint-plugin-cypress';

export default defineConfig([
  {
    ignores: ['dist/**'],
  },
  daStyle,
  {
    files: ['**/*.cy.js', '**/*.spec.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-force': 'warn',
    },
  },
]);
