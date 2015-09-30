function buildTag(tag, innerHtml) {
  return "<" + tag + ">" + innerHtml + "</" + tag + ">"
}

module.exports = {
  p: function(innerHtml)  {
    return buildTag("p", innerHtml)
  },
  h1: function(innerHtml)  {
    return buildTag("h1", innerHtml)
  }
}
