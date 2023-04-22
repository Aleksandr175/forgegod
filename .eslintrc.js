module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
};
