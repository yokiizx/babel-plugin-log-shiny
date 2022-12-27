/**
 * @description  : babel-plugin-log-shiny
 * @date         : 2022-12-27 18:10:01
 * @author       : yokiizx
 */
export default function ({ types: t }, options) {
  return {
    name: 'log-shiny',
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (t.isMemberExpression(node.callee)) {
          if (node.callee.object.name === 'console') {
            node.arguments.unshift(t.Identifier("'⭐️⭐️⭐️ ==>'"));
          }
        }
      }
    }
  };
}
