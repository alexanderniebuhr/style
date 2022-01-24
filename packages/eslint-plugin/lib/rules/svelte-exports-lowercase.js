/**
 * @fileoverview Svelte Exports match HTML Spec
 * @author Alexander Niebuhr
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Svelte Exports match HTML Spec',
      category: 'Fill me in',
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      ExportNamedDeclaration(node) {
        if (context.getFilename().endsWith('.svelte')) {
          context.getDeclaredVariables(node.declaration).forEach((variable) => {
            if (variable.name != variable.name.toLowerCase()) {
              context.report({
                node: variable.identifiers[0],
                message: '{{ identifier }} must be lowercase. Replace with {{ newIdentifier }}',
                data: {
                  identifier: variable.name,
                  newIdentifier: variable.name.toLowerCase(),
                },
              })
            }
          })
        }
      },
    }
  },
}
