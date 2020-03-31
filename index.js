module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'browser': true
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'import'
  ],
  'extends': [
    'plugin:react/recommended',
    'plugin:import/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'standard'
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'ignoreRestSiblings': true,
        'argsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none'
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': true
      }
    ],
    '@typescript-eslint/no-empty-function': [
      'error'
    ],
    'no-restricted-imports': ['error', { 'patterns': ['../*'] }],
    'arrow-parens': [
      'error',
      'always'
    ],
    'no-console': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxBOF': 0
      }
    ],
    'no-shadow': 'error',
    'object-shorthand': [
      'error',
      'always'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    'import/no-unresolved': [
      'error',
      {
        'commonjs': true
      }
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ]
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts', '.jsx', '.tsx'],
        'moduleDirectory': ['node_modules', '.']
      }
    }
  },
  'overrides': [
    {
      'files': [
        '**/*.ts',
        '**/*.tsx'
      ],
      'rules': {
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      }
    }
  ]
}
