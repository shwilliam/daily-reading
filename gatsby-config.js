require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `ONEGRAPH`,
        fieldName: `oneGraph`,
        url: `https://serve.onegraph.com/dynamic?app_id=${process.env.ONEGRAPH_KEY}`
      }
    }
  ]
}
