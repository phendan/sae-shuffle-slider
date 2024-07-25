// @ts-check
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import readableTailwind from 'eslint-plugin-readable-tailwind';

const flatCompat = new FlatCompat();

export default [
    ...fixupConfigRules(flatCompat.extends('next/core-web-vitals')),
    {
        plugins: { '@stylistic': stylistic, '@tailwind': readableTailwind },
        rules: {
            'import/no-anonymous-default-export': 'off',
            '@tailwind/no-unnecessary-whitespace': ['error'],

            // Formatting Options
            '@stylistic/indent': ['error', 4],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/semi-spacing': ['error', { before: false, after: true }],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/max-len': ['error', { code: 87, tabWidth: 4, comments: 80 }],

            // Arrays
            '@stylistic/array-bracket-newline': ['error', 'consistent'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/array-element-newline': ['error', 'consistent'],

            // Objects
            '@stylistic/object-curly-newline': ['error', { consistent: true }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/rest-spread-spacing': ['error', 'never'],

            // Functions
            '@stylistic/wrap-iife': ['error', 'outside'],
            '@stylistic/space-before-function-paren': ['error', {
                anonymous: 'always', named: 'never', asyncArrow: 'always'
            }],
            '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
            '@stylistic/space-before-blocks': ['error'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-paren-newline': ['error', 'consistent'],
            '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
            '@stylistic/yield-star-spacing': ['error', { before: false, after: true }],
            '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

            // Other
            '@stylistic/no-extra-parens': ['error', 'all'],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/computed-property-spacing': ['error', 'never'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/key-spacing': ['error', {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/multiline-ternary': ['error', 'always-multiline'],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: { delimiter: 'comma', requireLast: false },
                singleline: { delimiter: 'comma', requireLast: false }
            }],

            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/no-multi-spaces': ['error'],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/no-whitespace-before-property': ['error'],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
            '@stylistic/no-mixed-spaces-and-tabs': ['error'],
            '@stylistic/no-floating-decimal': ['error'],
            '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
            '@stylistic/operator-linebreak': ['error', 'after'],
            '@stylistic/space-infix-ops': ['error'],
            '@stylistic/space-unary-ops': ['error'],
            '@stylistic/padded-blocks': ['error', 'never'],

            /*
             * '@stylistic/padding-line-between-statements': ['error', {
             *     blankLine: 'always', prev: '*', next: 'return'
             * }],
             */
            '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
            '@stylistic/template-curly-spacing': ['error', 'never'],
            '@stylistic/template-tag-spacing': ['error'],

            // Classes
            '@stylistic/lines-between-class-members': ['error', 'always'],
            '@stylistic/new-parens': ['error', 'always'],

            // Comments
            '@stylistic/lines-around-comment': ['error', {
                beforeBlockComment: true,
                allowBlockStart: true
            }],
            '@stylistic/spaced-comment': ['error', 'always'],
            '@stylistic/multiline-comment-style': ['error', 'starred-block']
        }
    }
];
