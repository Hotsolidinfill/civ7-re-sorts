// eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": [
                "warn",
                {
                    "varsIgnorePattern": "^_",
                    "argsIgnorePattern": "^_",
                }
            ]
        },
        languageOptions: {
            globals: {
                CategoryType: "readonly",
                Controls: "readonly",
                Locale: "readonly",
                Options: "readonly",
                OptionType: "readonly",
                console: "readonly",
                engine: "readonly",
                localStorage: "readonly",
            }
        }

    }
];
