/**
 * @description  : babel-plugin-log-shiny
 * @date         : 2022-12-27 18:10:01
 * @author       : yokiizx
 */
import { declare } from '@babel/helper-plugin-utils';

export default declare((api) => {

  return {
    name: 'log-shiny',
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (t.isMemberExpression(node.callee)) {
          if (node.callee.object.name === 'console') {
            const defaultPrefix = '⭐️⭐️⭐️ ===>';
            const { prefix } = options;
            const prefixNode = t.stringLiteral(prefix || defaultPrefix);
            node.arguments.unshift(prefixNode);
          }
        }
      }
    }
  };
});
