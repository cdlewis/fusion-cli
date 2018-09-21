/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */

/*
Hack to stop from complaining.
*/

const {createPlugin, RoutePrefixToken} = require('fusion-core');

module.exports = createPlugin({
  deps: {
    routePrefix: RoutePrefixToken,
  },
  provides: () => {},
});
