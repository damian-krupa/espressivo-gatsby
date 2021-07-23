/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onInitialClientRender = () => {
  localStorage.setItem("fcWebHash", "004e7dcdf427d3fe5357686a01ac212cb56c49c7601dd236fe5e462122b87c37");
  const fc = document.createElement('script');
  fc.type="text/javascript";
  fc.async=true;
  fc.src = "https://app.fullcall.com/api/static/core/004e7dcdf427d3fe5357686a01ac212cb56c49c7601dd236fe5e462122b87c37";
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(fc,s);
}
