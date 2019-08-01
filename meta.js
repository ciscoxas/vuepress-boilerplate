module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      message: 'Project description',
      default: 'A VuePress project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
  },
  skipInterpolation: ['src/**/*.vue', 'src/.vuepress/templates/*.html']
}
