import globals from "globals"
import js from "@eslint/js"
import eslint from "@eslint/js"
import stylisticJs from "@stylistic/eslint-plugin-js"

export default [
    js.configs.recommended,
    eslint.configs.recommended,
    {
        ignores: [ "dist/*", "coverage/*"]
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
            //parser: tseslintParser,
        },
        plugins: {
            "@stylistic/js": stylisticJs
        },
        rules: {
            quotes: [ 2, "double" ],
            semi: [ 2, "always" ]
        },
        files: [
            "**/*.js"
        ],
    /*
        "parserOptions": {
            "ecmaVersion": 12,
            "sourceType": "module"
        },
        "rules": {
            "semi": [ "error", "always" ],
            "quotes": [ "error", "double" ]
        }
        */
    }
]
