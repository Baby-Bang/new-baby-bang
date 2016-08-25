module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true,
    "jquery" : true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.0" // React version, default to the latest React stable release
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "prefer-arrow-callback": "error",
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "complexity": [
      "error",
      3
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": 2,
    "semi": [
      "error",
      "always"
    ],
    "max-statements": [
      "error",
      15
    ],
    "react/jsx-uses-vars": [2],
    "react/jsx-uses-react": "error",
    "max-lines": [
      "error",
      {
        "max": 150,
        "skipComments": true
      }
    ],
    "complexity": ["error", {"max" : 6}],
    "no-unused-vars": ["error", { "args": "none" }]
  }
};
