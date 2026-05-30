module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-recommended-vue/scss"],
    ignoreFiles: ["dist/**/*", "coverage/**/*", "node_modules/**/*"],
    rules: {
        "declaration-block-single-line-max-declarations": 1,
        "color-hex-length": "short",
        "selector-class-pattern": null,
    },
};