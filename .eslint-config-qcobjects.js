require('qcobjects');
require('qcobjects-sdk');
var qc_globals = {};
global.ClassesList.map(c=>qc_globals[c.classFactory.__definition.__classType]="readonly");
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "globals": Object.assign(qc_globals,{
      "global": "readonly",
      "logger": "readonly",
      "VO": "readonly",
      "i18n_messages": "readonly",
      "i18n_messages_es": "readonly",
      "_DOMCreateElement": "readonly",
      "NotificationComponent": "readonly",
      "TransitionEffect": "readonly",
      "Effect": "readonly",
      "Tag": "readonly",
      "_super_": "readonly",
      "isBrowser": "readonly",
      "CONFIG": "readonly",
      "Controller": "readonly",
      "View": "readonly",
      "Model": "readonly",
      "Component": "readonly",
      "Import": "readonly",
      "Ready": "readonly",
      "Package": "readonly",
      "Class": "readonly",
      "JSONService": "readonly",
      "New": "readonly",
      "ClassFactory": "readonly",
      "serviceLoader": "readonly",
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "ComponentURI":"readonly",
      "_DataStringify":"readonly",
      "Timer":"readonly",
      "SourceCSS":"readonly",
      "SourceJS":"readonly",
      "RegisterWidget":"readonly",
      "RegisterWidgets":"readonly"
    }),
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
}
