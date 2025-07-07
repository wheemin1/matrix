export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          mergeLonghand: true,
          colormin: true,
          reduceIdents: false,
          mergeRules: true,
          discardDuplicates: true,
          discardEmpty: true
        }]
      }
    } : {})
  },
}
