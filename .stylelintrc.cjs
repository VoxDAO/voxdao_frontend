module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-tailwindcss/scss",
    "stylelint-config-tailwindcss",
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
};
