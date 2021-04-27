// Copyright Vladislav Tupikin. 2021. All Rights Reserved.
// Copyright node-modules and other contributors. 2015. All Rights Reserved.
// Node module: nodejs-user-agent
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// @ts-ignore
import * as osName from 'os-name';

const userAgent = `Node.js/${process.version.slice(1)} (${osName()}; ${process.arch})`;

/**
 * Creates User Agent for Node.js.
 * @param {string} [name] Name of library.
 * @param {string} [version] Version of library.
 * @return {string} User-Agent
 */
export function ua(name?: string, version?: string): string {
  if (arguments.length !== 2) {
    return userAgent;
  }

  return `${name}/${version} ${userAgent}`;
}
