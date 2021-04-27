// Copyright Vladislav Tupikin. 2021. All Rights Reserved.
// Copyright node-modules and other contributors. 2015. All Rights Reserved.
// Node module: nodejs-user-agent
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { ua } from '../src';

describe('nodejs-user-agent', () => {
  it('should got default user agent string', () => {
    const userAgent = ua();

    // 'Node.js/14.16.1 (macOS Big Sur; x64)'
    expect(typeof userAgent).toBe('string');
    expect(/\w+\/\w+/.test(userAgent)).toBeTruthy();
    expect(/^Node\.js\/\d+\.\d+\.\d+ \(\w+ .+; \w+\)$/.test(userAgent)).toBeTruthy();
  });

  it('should got custom user agent string', () => {
    const userAgent = ua('urllib', '0.1.1');

    // 'urllib/0.1.1 Node.js/14.16.1 (macOS Big Sur; x64)'
    expect(typeof userAgent).toBe('string');
    expect(/\w+\/\w+/.test(userAgent)).toBeTruthy();
    expect(/^urllib\/0\.1\.1 Node\.js\/\d+\.\d+\.\d+ \(\w+ .+; \w+\)$/.test(userAgent)).toBeTruthy();
  });
});
