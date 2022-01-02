/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
  localStorage.setItem(
    "fcWebHash",
    "e3b6dacd3da8b5336a86f1b3bd81447debf5f7946372e2fca27fe10f722618c9"
  )
  const fc = document.createElement("script")
  fc.type = "text/javascript"
  fc.async = true
  fc.src =
    "https://app.fullcall.com/api/static/core/e3b6dacd3da8b5336a86f1b3bd81447debf5f7946372e2fca27fe10f722618c9"
  const s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(fc, s)
}
