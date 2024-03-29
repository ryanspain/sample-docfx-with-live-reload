// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { breakWord } from './helper'

test('break-text', () => {
  expect(breakWord('Other APIs')).toEqual(['Other APIs'])
  expect(breakWord('System.CodeDom')).toEqual(['System.', 'Code', 'Dom'])
  expect(breakWord('System.Collections.Dictionary<string, object>')).toEqual(['System.', 'Collections.', 'Dictionary<', 'string,', ' object>'])
  expect(breakWord('https://github.com/dotnet/docfx')).toEqual(['https://github.', 'com/', 'dotnet/', 'docfx'])
})
