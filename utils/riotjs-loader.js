import path from 'path'
import riot from 'riot'
import loaderUtils from 'loader-utils'


/**
 * Extract script src from html
 *
 * https://github.com/riot/compiler/blob/dev/lib/core.js#L462
 */
const SCRIPT = /<script(\s+[^>]*)?>\n?([^<]*(?:<(?!\/script\s*>)[^<]*)*)<\/script\s*>/gi
const MISC_ATTR = /\s*=\s*("(?:\\[\S\s]|[^"\\]*)*"|'(?:\\[\S\s]|[^'\\]*)*'|\{[^}]+}|\S+)/.source

// Returns the value of any attribute, or the empty string for missing attribute.
function getAttr(str, name) {
  if (str) {
    let re = new RegExp('\\s' + name + MISC_ATTR, 'i')
    let match = str.match(re)
    str = match && match[1]
    if (str) return (/^['"]/).test(str) ? str.slice(1, -1) : str
  }
  return ''
}


module.exports = function(source) {
  let content = source
  let options = loaderUtils.parseQuery(this.query)
  let file = this.resourcePath
  let dir = path.dirname(file)

  if (options.brackets) {
    riot.settings.brackets = options.brackets
    delete options.brackets
  }

  if (this.cacheable) this.cacheable()

  Object.keys(options).forEach(function(key) {
    switch (options[key]) {
      case 'true':
        options[key] = true
        break
      case 'false':
        options[key] = false
        break
      case 'undefined':
        options[key] = undefined
        break
      case 'null':
        options[key] = null
        break
    }
  })

  let src = getAttr((SCRIPT.exec(source) || [])[1], 'src')
  if (src) this.dependency(path.resolve(dir, src))

  try {
    return riot.compile(content, options, file)
  } catch (err) {
    throw err
  }
}
