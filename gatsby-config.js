module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `ONEGRAPH`,
        fieldName: `oneGraph`,
        url: `https://serve.onegraph.com/dynamic?app_id=0cb8b267-3cef-40c3-8878-ca010495a0ce`,

      }
    }
  ]
}
