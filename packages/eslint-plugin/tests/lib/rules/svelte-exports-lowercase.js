/**
 * @fileoverview Svelte Exports match HTML Spec
 * @author Alexander Niebuhr
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/svelte-exports-lowercase'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('svelte-exports-lowercase', rule, {
  valid: [
    {
      code: 'export let islowercase = ""',
    },
  ],

  invalid: [
    {
      code: 'export let isCamel = ""',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
})
