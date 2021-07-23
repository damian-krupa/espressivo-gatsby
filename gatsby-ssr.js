/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({
                          setPostBodyComponents,
                        }) => {
  setPostBodyComponents([
    <script type="text/javascript" async src="https://app.fullcall.com/api/static/core/004e7dcdf427d3fe5357686a01ac212cb56c49c7601dd236fe5e462122b87c37" />
  ])
}
