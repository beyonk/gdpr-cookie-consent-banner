import recommended from '@beyonk/eslint-config/recommended'
import vitest from '@beyonk/eslint-config/vitest'
import svelte from '@beyonk/eslint-config/svelte'
import svelteConfig from './svelte.config.js'

export default [
  ...recommended,
  ...vitest,
  ...svelte(svelteConfig),
  {
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: 'module'
    }
  },
  {
    ignores: [
      'dist'
    ]
  }
]
