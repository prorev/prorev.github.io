"prefixer": "postcss --use autoprefixer *.css -d build/",
    "jso": "javascript-obfuscator quizu.js --rotateUnicodeArray=false",
    "lint": "jshint **.js",
    "all" : "npm run jso && npm run lint"