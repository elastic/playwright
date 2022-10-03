"use strict";
let __export = (target, all) => {
  for (var name in all)
    target[name] = all[name];
};
let __commonJS = cb => function __require() {
  let fn;
  for (const name in cb) {
    fn = cb[name];
    break;
  }
  const exports = {};
  fn(exports);
  return exports;
};
let __toESM = mod => ({ ...mod, 'default': mod });
let __toCommonJS = mod =>  ({ ...mod, __esModule: true });
// packages/playwright-core/src/server/isomorphic/cssTokenizer.js
var require_cssTokenizer = __commonJS({
  "packages/playwright-core/src/server/isomorphic/cssTokenizer.js"(exports2) {
    "use strict";
    var between = function(num, first, last) {
      return num >= first && num <= last;
    };
    function digit(code) {
      return between(code, 48, 57);
    }
    function hexdigit(code) {
      return digit(code) || between(code, 65, 70) || between(code, 97, 102);
    }
    function uppercaseletter(code) {
      return between(code, 65, 90);
    }
    function lowercaseletter(code) {
      return between(code, 97, 122);
    }
    function letter(code) {
      return uppercaseletter(code) || lowercaseletter(code);
    }
    function nonascii(code) {
      return code >= 128;
    }
    function namestartchar(code) {
      return letter(code) || nonascii(code) || code == 95;
    }
    function namechar(code) {
      return namestartchar(code) || digit(code) || code == 45;
    }
    function nonprintable(code) {
      return between(code, 0, 8) || code == 11 || between(code, 14, 31) || code == 127;
    }
    function newline(code) {
      return code == 10;
    }
    function whitespace(code) {
      return newline(code) || code == 9 || code == 32;
    }
    var maximumallowedcodepoint = 1114111;
    var InvalidCharacterError = function(message) {
      this.message = message;
    };
    InvalidCharacterError.prototype = new Error();
    InvalidCharacterError.prototype.name = "InvalidCharacterError";
    function preprocess(str) {
      var codepoints = [];
      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code == 13 && str.charCodeAt(i + 1) == 10) {
          code = 10;
          i++;
        }
        if (code == 13 || code == 12)
          code = 10;
        if (code == 0)
          code = 65533;
        if (between(code, 55296, 56319) && between(str.charCodeAt(i + 1), 56320, 57343)) {
          var lead = code - 55296;
          var trail = str.charCodeAt(i + 1) - 56320;
          code = Math.pow(2, 16) + lead * Math.pow(2, 10) + trail;
          i++;
        }
        codepoints.push(code);
      }
      return codepoints;
    }
    function stringFromCode(code) {
      if (code <= 65535)
        return String.fromCharCode(code);
      code -= Math.pow(2, 16);
      var lead = Math.floor(code / Math.pow(2, 10)) + 55296;
      var trail = code % Math.pow(2, 10) + 56320;
      return String.fromCharCode(lead) + String.fromCharCode(trail);
    }
    function tokenize2(str) {
      str = preprocess(str);
      var i = -1;
      var tokens = [];
      var code;
      var line = 0;
      var column = 0;
      var lastLineLength = 0;
      var incrLineno = function() {
        line += 1;
        lastLineLength = column;
        column = 0;
      };
      var locStart = { line, column };
      var codepoint = function(i2) {
        if (i2 >= str.length) {
          return -1;
        }
        return str[i2];
      };
      var next = function(num) {
        if (num === void 0)
          num = 1;
        if (num > 3)
          throw "Spec Error: no more than three codepoints of lookahead.";
        return codepoint(i + num);
      };
      var consume = function(num) {
        if (num === void 0)
          num = 1;
        i += num;
        code = codepoint(i);
        if (newline(code))
          incrLineno();
        else
          column += num;
        return true;
      };
      var reconsume = function() {
        i -= 1;
        if (newline(code)) {
          line -= 1;
          column = lastLineLength;
        } else {
          column -= 1;
        }
        locStart.line = line;
        locStart.column = column;
        return true;
      };
      var eof = function(codepoint2) {
        if (codepoint2 === void 0)
          codepoint2 = code;
        return codepoint2 == -1;
      };
      var donothing = function() {
      };
      var parseerror = function() {
        console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + ".");
        return true;
      };
      var consumeAToken = function() {
        consumeComments();
        consume();
        if (whitespace(code)) {
          while (whitespace(next()))
            consume();
          return new WhitespaceToken2();
        } else if (code == 34)
          return consumeAStringToken();
        else if (code == 35) {
          if (namechar(next()) || areAValidEscape(next(1), next(2))) {
            var token = new HashToken2();
            if (wouldStartAnIdentifier(next(1), next(2), next(3)))
              token.type = "id";
            token.value = consumeAName();
            return token;
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 36) {
          if (next() == 61) {
            consume();
            return new SuffixMatchToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 39)
          return consumeAStringToken();
        else if (code == 40)
          return new OpenParenToken();
        else if (code == 41)
          return new CloseParenToken2();
        else if (code == 42) {
          if (next() == 61) {
            consume();
            return new SubstringMatchToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 43) {
          if (startsWithANumber()) {
            reconsume();
            return consumeANumericToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 44)
          return new CommaToken2();
        else if (code == 45) {
          if (startsWithANumber()) {
            reconsume();
            return consumeANumericToken();
          } else if (next(1) == 45 && next(2) == 62) {
            consume(2);
            return new CDCToken2();
          } else if (startsWithAnIdentifier()) {
            reconsume();
            return consumeAnIdentlikeToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 46) {
          if (startsWithANumber()) {
            reconsume();
            return consumeANumericToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 58)
          return new ColonToken2();
        else if (code == 59)
          return new SemicolonToken2();
        else if (code == 60) {
          if (next(1) == 33 && next(2) == 45 && next(3) == 45) {
            consume(3);
            return new CDOToken2();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 64) {
          if (wouldStartAnIdentifier(next(1), next(2), next(3))) {
            return new AtKeywordToken2(consumeAName());
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 91)
          return new OpenSquareToken2();
        else if (code == 92) {
          if (startsWithAValidEscape()) {
            reconsume();
            return consumeAnIdentlikeToken();
          } else {
            parseerror();
            return new DelimToken2(code);
          }
        } else if (code == 93)
          return new CloseSquareToken2();
        else if (code == 94) {
          if (next() == 61) {
            consume();
            return new PrefixMatchToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 123)
          return new OpenCurlyToken2();
        else if (code == 124) {
          if (next() == 61) {
            consume();
            return new DashMatchToken();
          } else if (next() == 124) {
            consume();
            return new ColumnToken2();
          } else {
            return new DelimToken2(code);
          }
        } else if (code == 125)
          return new CloseCurlyToken2();
        else if (code == 126) {
          if (next() == 61) {
            consume();
            return new IncludeMatchToken();
          } else {
            return new DelimToken2(code);
          }
        } else if (digit(code)) {
          reconsume();
          return consumeANumericToken();
        } else if (namestartchar(code)) {
          reconsume();
          return consumeAnIdentlikeToken();
        } else if (eof())
          return new EOFToken2();
        else
          return new DelimToken2(code);
      };
      var consumeComments = function() {
        while (next(1) == 47 && next(2) == 42) {
          consume(2);
          while (true) {
            consume();
            if (code == 42 && next() == 47) {
              consume();
              break;
            } else if (eof()) {
              parseerror();
              return;
            }
          }
        }
      };
      var consumeANumericToken = function() {
        var num = consumeANumber();
        if (wouldStartAnIdentifier(next(1), next(2), next(3))) {
          var token = new DimensionToken();
          token.value = num.value;
          token.repr = num.repr;
          token.type = num.type;
          token.unit = consumeAName();
          return token;
        } else if (next() == 37) {
          consume();
          var token = new PercentageToken2();
          token.value = num.value;
          token.repr = num.repr;
          return token;
        } else {
          var token = new NumberToken2();
          token.value = num.value;
          token.repr = num.repr;
          token.type = num.type;
          return token;
        }
      };
      var consumeAnIdentlikeToken = function() {
        var str2 = consumeAName();
        if (str2.toLowerCase() == "url" && next() == 40) {
          consume();
          while (whitespace(next(1)) && whitespace(next(2)))
            consume();
          if (next() == 34 || next() == 39) {
            return new FunctionToken2(str2);
          } else if (whitespace(next()) && (next(2) == 34 || next(2) == 39)) {
            return new FunctionToken2(str2);
          } else {
            return consumeAURLToken();
          }
        } else if (next() == 40) {
          consume();
          return new FunctionToken2(str2);
        } else {
          return new IdentToken2(str2);
        }
      };
      var consumeAStringToken = function(endingCodePoint) {
        if (endingCodePoint === void 0)
          endingCodePoint = code;
        var string = "";
        while (consume()) {
          if (code == endingCodePoint || eof()) {
            return new StringToken2(string);
          } else if (newline(code)) {
            parseerror();
            reconsume();
            return new BadStringToken2();
          } else if (code == 92) {
            if (eof(next())) {
              donothing();
            } else if (newline(next())) {
              consume();
            } else {
              string += stringFromCode(consumeEscape());
            }
          } else {
            string += stringFromCode(code);
          }
        }
      };
      var consumeAURLToken = function() {
        var token = new URLToken2("");
        while (whitespace(next()))
          consume();
        if (eof(next()))
          return token;
        while (consume()) {
          if (code == 41 || eof()) {
            return token;
          } else if (whitespace(code)) {
            while (whitespace(next()))
              consume();
            if (next() == 41 || eof(next())) {
              consume();
              return token;
            } else {
              consumeTheRemnantsOfABadURL();
              return new BadURLToken2();
            }
          } else if (code == 34 || code == 39 || code == 40 || nonprintable(code)) {
            parseerror();
            consumeTheRemnantsOfABadURL();
            return new BadURLToken2();
          } else if (code == 92) {
            if (startsWithAValidEscape()) {
              token.value += stringFromCode(consumeEscape());
            } else {
              parseerror();
              consumeTheRemnantsOfABadURL();
              return new BadURLToken2();
            }
          } else {
            token.value += stringFromCode(code);
          }
        }
      };
      var consumeEscape = function() {
        consume();
        if (hexdigit(code)) {
          var digits = [code];
          for (var total = 0; total < 5; total++) {
            if (hexdigit(next())) {
              consume();
              digits.push(code);
            } else {
              break;
            }
          }
          if (whitespace(next()))
            consume();
          var value = parseInt(digits.map(function(x) {
            return String.fromCharCode(x);
          }).join(""), 16);
          if (value > maximumallowedcodepoint)
            value = 65533;
          return value;
        } else if (eof()) {
          return 65533;
        } else {
          return code;
        }
      };
      var areAValidEscape = function(c1, c2) {
        if (c1 != 92)
          return false;
        if (newline(c2))
          return false;
        return true;
      };
      var startsWithAValidEscape = function() {
        return areAValidEscape(code, next());
      };
      var wouldStartAnIdentifier = function(c1, c2, c3) {
        if (c1 == 45) {
          return namestartchar(c2) || c2 == 45 || areAValidEscape(c2, c3);
        } else if (namestartchar(c1)) {
          return true;
        } else if (c1 == 92) {
          return areAValidEscape(c1, c2);
        } else {
          return false;
        }
      };
      var startsWithAnIdentifier = function() {
        return wouldStartAnIdentifier(code, next(1), next(2));
      };
      var wouldStartANumber = function(c1, c2, c3) {
        if (c1 == 43 || c1 == 45) {
          if (digit(c2))
            return true;
          if (c2 == 46 && digit(c3))
            return true;
          return false;
        } else if (c1 == 46) {
          if (digit(c2))
            return true;
          return false;
        } else if (digit(c1)) {
          return true;
        } else {
          return false;
        }
      };
      var startsWithANumber = function() {
        return wouldStartANumber(code, next(1), next(2));
      };
      var consumeAName = function() {
        var result = "";
        while (consume()) {
          if (namechar(code)) {
            result += stringFromCode(code);
          } else if (startsWithAValidEscape()) {
            result += stringFromCode(consumeEscape());
          } else {
            reconsume();
            return result;
          }
        }
      };
      var consumeANumber = function() {
        var repr = [];
        var type = "integer";
        if (next() == 43 || next() == 45) {
          consume();
          repr += stringFromCode(code);
        }
        while (digit(next())) {
          consume();
          repr += stringFromCode(code);
        }
        if (next(1) == 46 && digit(next(2))) {
          consume();
          repr += stringFromCode(code);
          consume();
          repr += stringFromCode(code);
          type = "number";
          while (digit(next())) {
            consume();
            repr += stringFromCode(code);
          }
        }
        var c1 = next(1), c2 = next(2), c3 = next(3);
        if ((c1 == 69 || c1 == 101) && digit(c2)) {
          consume();
          repr += stringFromCode(code);
          consume();
          repr += stringFromCode(code);
          type = "number";
          while (digit(next())) {
            consume();
            repr += stringFromCode(code);
          }
        } else if ((c1 == 69 || c1 == 101) && (c2 == 43 || c2 == 45) && digit(c3)) {
          consume();
          repr += stringFromCode(code);
          consume();
          repr += stringFromCode(code);
          consume();
          repr += stringFromCode(code);
          type = "number";
          while (digit(next())) {
            consume();
            repr += stringFromCode(code);
          }
        }
        var value = convertAStringToANumber(repr);
        return { type, value, repr };
      };
      var convertAStringToANumber = function(string) {
        return +string;
      };
      var consumeTheRemnantsOfABadURL = function() {
        while (consume()) {
          if (code == 41 || eof()) {
            return;
          } else if (startsWithAValidEscape()) {
            consumeEscape();
            donothing();
          } else {
            donothing();
          }
        }
      };
      var iterationCount = 0;
      while (!eof(next())) {
        tokens.push(consumeAToken());
        iterationCount++;
        if (iterationCount > str.length * 2)
          return "I'm infinite-looping!";
      }
      return tokens;
    }
    function CSSParserToken() {
      throw "Abstract Base Class";
    }
    CSSParserToken.prototype.toJSON = function() {
      return { token: this.tokenType };
    };
    CSSParserToken.prototype.toString = function() {
      return this.tokenType;
    };
    CSSParserToken.prototype.toSource = function() {
      return "" + this;
    };
    function BadStringToken2() {
      return this;
    }
    BadStringToken2.prototype = Object.create(CSSParserToken.prototype);
    BadStringToken2.prototype.tokenType = "BADSTRING";
    function BadURLToken2() {
      return this;
    }
    BadURLToken2.prototype = Object.create(CSSParserToken.prototype);
    BadURLToken2.prototype.tokenType = "BADURL";
    function WhitespaceToken2() {
      return this;
    }
    WhitespaceToken2.prototype = Object.create(CSSParserToken.prototype);
    WhitespaceToken2.prototype.tokenType = "WHITESPACE";
    WhitespaceToken2.prototype.toString = function() {
      return "WS";
    };
    WhitespaceToken2.prototype.toSource = function() {
      return " ";
    };
    function CDOToken2() {
      return this;
    }
    CDOToken2.prototype = Object.create(CSSParserToken.prototype);
    CDOToken2.prototype.tokenType = "CDO";
    CDOToken2.prototype.toSource = function() {
      return "<!--";
    };
    function CDCToken2() {
      return this;
    }
    CDCToken2.prototype = Object.create(CSSParserToken.prototype);
    CDCToken2.prototype.tokenType = "CDC";
    CDCToken2.prototype.toSource = function() {
      return "-->";
    };
    function ColonToken2() {
      return this;
    }
    ColonToken2.prototype = Object.create(CSSParserToken.prototype);
    ColonToken2.prototype.tokenType = ":";
    function SemicolonToken2() {
      return this;
    }
    SemicolonToken2.prototype = Object.create(CSSParserToken.prototype);
    SemicolonToken2.prototype.tokenType = ";";
    function CommaToken2() {
      return this;
    }
    CommaToken2.prototype = Object.create(CSSParserToken.prototype);
    CommaToken2.prototype.tokenType = ",";
    function GroupingToken() {
      throw "Abstract Base Class";
    }
    GroupingToken.prototype = Object.create(CSSParserToken.prototype);
    function OpenCurlyToken2() {
      this.value = "{";
      this.mirror = "}";
      return this;
    }
    OpenCurlyToken2.prototype = Object.create(GroupingToken.prototype);
    OpenCurlyToken2.prototype.tokenType = "{";
    function CloseCurlyToken2() {
      this.value = "}";
      this.mirror = "{";
      return this;
    }
    CloseCurlyToken2.prototype = Object.create(GroupingToken.prototype);
    CloseCurlyToken2.prototype.tokenType = "}";
    function OpenSquareToken2() {
      this.value = "[";
      this.mirror = "]";
      return this;
    }
    OpenSquareToken2.prototype = Object.create(GroupingToken.prototype);
    OpenSquareToken2.prototype.tokenType = "[";
    function CloseSquareToken2() {
      this.value = "]";
      this.mirror = "[";
      return this;
    }
    CloseSquareToken2.prototype = Object.create(GroupingToken.prototype);
    CloseSquareToken2.prototype.tokenType = "]";
    function OpenParenToken() {
      this.value = "(";
      this.mirror = ")";
      return this;
    }
    OpenParenToken.prototype = Object.create(GroupingToken.prototype);
    OpenParenToken.prototype.tokenType = "(";
    function CloseParenToken2() {
      this.value = ")";
      this.mirror = "(";
      return this;
    }
    CloseParenToken2.prototype = Object.create(GroupingToken.prototype);
    CloseParenToken2.prototype.tokenType = ")";
    function IncludeMatchToken() {
      return this;
    }
    IncludeMatchToken.prototype = Object.create(CSSParserToken.prototype);
    IncludeMatchToken.prototype.tokenType = "~=";
    function DashMatchToken() {
      return this;
    }
    DashMatchToken.prototype = Object.create(CSSParserToken.prototype);
    DashMatchToken.prototype.tokenType = "|=";
    function PrefixMatchToken() {
      return this;
    }
    PrefixMatchToken.prototype = Object.create(CSSParserToken.prototype);
    PrefixMatchToken.prototype.tokenType = "^=";
    function SuffixMatchToken() {
      return this;
    }
    SuffixMatchToken.prototype = Object.create(CSSParserToken.prototype);
    SuffixMatchToken.prototype.tokenType = "$=";
    function SubstringMatchToken() {
      return this;
    }
    SubstringMatchToken.prototype = Object.create(CSSParserToken.prototype);
    SubstringMatchToken.prototype.tokenType = "*=";
    function ColumnToken2() {
      return this;
    }
    ColumnToken2.prototype = Object.create(CSSParserToken.prototype);
    ColumnToken2.prototype.tokenType = "||";
    function EOFToken2() {
      return this;
    }
    EOFToken2.prototype = Object.create(CSSParserToken.prototype);
    EOFToken2.prototype.tokenType = "EOF";
    EOFToken2.prototype.toSource = function() {
      return "";
    };
    function DelimToken2(code) {
      this.value = stringFromCode(code);
      return this;
    }
    DelimToken2.prototype = Object.create(CSSParserToken.prototype);
    DelimToken2.prototype.tokenType = "DELIM";
    DelimToken2.prototype.toString = function() {
      return "DELIM(" + this.value + ")";
    };
    DelimToken2.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      return json;
    };
    DelimToken2.prototype.toSource = function() {
      if (this.value == "\\")
        return "\\\n";
      else
        return this.value;
    };
    function StringValuedToken() {
      throw "Abstract Base Class";
    }
    StringValuedToken.prototype = Object.create(CSSParserToken.prototype);
    StringValuedToken.prototype.ASCIIMatch = function(str) {
      return this.value.toLowerCase() == str.toLowerCase();
    };
    StringValuedToken.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      return json;
    };
    function IdentToken2(val) {
      this.value = val;
    }
    IdentToken2.prototype = Object.create(StringValuedToken.prototype);
    IdentToken2.prototype.tokenType = "IDENT";
    IdentToken2.prototype.toString = function() {
      return "IDENT(" + this.value + ")";
    };
    IdentToken2.prototype.toSource = function() {
      return escapeIdent(this.value);
    };
    function FunctionToken2(val) {
      this.value = val;
      this.mirror = ")";
    }
    FunctionToken2.prototype = Object.create(StringValuedToken.prototype);
    FunctionToken2.prototype.tokenType = "FUNCTION";
    FunctionToken2.prototype.toString = function() {
      return "FUNCTION(" + this.value + ")";
    };
    FunctionToken2.prototype.toSource = function() {
      return escapeIdent(this.value) + "(";
    };
    function AtKeywordToken2(val) {
      this.value = val;
    }
    AtKeywordToken2.prototype = Object.create(StringValuedToken.prototype);
    AtKeywordToken2.prototype.tokenType = "AT-KEYWORD";
    AtKeywordToken2.prototype.toString = function() {
      return "AT(" + this.value + ")";
    };
    AtKeywordToken2.prototype.toSource = function() {
      return "@" + escapeIdent(this.value);
    };
    function HashToken2(val) {
      this.value = val;
      this.type = "unrestricted";
    }
    HashToken2.prototype = Object.create(StringValuedToken.prototype);
    HashToken2.prototype.tokenType = "HASH";
    HashToken2.prototype.toString = function() {
      return "HASH(" + this.value + ")";
    };
    HashToken2.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      json.type = this.type;
      return json;
    };
    HashToken2.prototype.toSource = function() {
      if (this.type == "id") {
        return "#" + escapeIdent(this.value);
      } else {
        return "#" + escapeHash(this.value);
      }
    };
    function StringToken2(val) {
      this.value = val;
    }
    StringToken2.prototype = Object.create(StringValuedToken.prototype);
    StringToken2.prototype.tokenType = "STRING";
    StringToken2.prototype.toString = function() {
      return '"' + escapeString(this.value) + '"';
    };
    function URLToken2(val) {
      this.value = val;
    }
    URLToken2.prototype = Object.create(StringValuedToken.prototype);
    URLToken2.prototype.tokenType = "URL";
    URLToken2.prototype.toString = function() {
      return "URL(" + this.value + ")";
    };
    URLToken2.prototype.toSource = function() {
      return 'url("' + escapeString(this.value) + '")';
    };
    function NumberToken2() {
      this.value = null;
      this.type = "integer";
      this.repr = "";
    }
    NumberToken2.prototype = Object.create(CSSParserToken.prototype);
    NumberToken2.prototype.tokenType = "NUMBER";
    NumberToken2.prototype.toString = function() {
      if (this.type == "integer")
        return "INT(" + this.value + ")";
      return "NUMBER(" + this.value + ")";
    };
    NumberToken2.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      json.type = this.type;
      json.repr = this.repr;
      return json;
    };
    NumberToken2.prototype.toSource = function() {
      return this.repr;
    };
    function PercentageToken2() {
      this.value = null;
      this.repr = "";
    }
    PercentageToken2.prototype = Object.create(CSSParserToken.prototype);
    PercentageToken2.prototype.tokenType = "PERCENTAGE";
    PercentageToken2.prototype.toString = function() {
      return "PERCENTAGE(" + this.value + ")";
    };
    PercentageToken2.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      json.repr = this.repr;
      return json;
    };
    PercentageToken2.prototype.toSource = function() {
      return this.repr + "%";
    };
    function DimensionToken() {
      this.value = null;
      this.type = "integer";
      this.repr = "";
      this.unit = "";
    }
    DimensionToken.prototype = Object.create(CSSParserToken.prototype);
    DimensionToken.prototype.tokenType = "DIMENSION";
    DimensionToken.prototype.toString = function() {
      return "DIM(" + this.value + "," + this.unit + ")";
    };
    DimensionToken.prototype.toJSON = function() {
      var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
      json.value = this.value;
      json.type = this.type;
      json.repr = this.repr;
      json.unit = this.unit;
      return json;
    };
    DimensionToken.prototype.toSource = function() {
      var source = this.repr;
      var unit = escapeIdent(this.unit);
      if (unit[0].toLowerCase() == "e" && (unit[1] == "-" || between(unit.charCodeAt(1), 48, 57))) {
        unit = "\\65 " + unit.slice(1, unit.length);
      }
      return source + unit;
    };
    function escapeIdent(string) {
      string = "" + string;
      var result = "";
      var firstcode = string.charCodeAt(0);
      for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if (code == 0) {
          throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        }
        if (between(code, 1, 31) || code == 127 || i == 0 && between(code, 48, 57) || i == 1 && between(code, 48, 57) && firstcode == 45) {
          result += "\\" + code.toString(16) + " ";
        } else if (code >= 128 || code == 45 || code == 95 || between(code, 48, 57) || between(code, 65, 90) || between(code, 97, 122)) {
          result += string[i];
        } else {
          result += "\\" + string[i];
        }
      }
      return result;
    }
    function escapeHash(string) {
      string = "" + string;
      var result = "";
      var firstcode = string.charCodeAt(0);
      for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if (code == 0) {
          throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        }
        if (code >= 128 || code == 45 || code == 95 || between(code, 48, 57) || between(code, 65, 90) || between(code, 97, 122)) {
          result += string[i];
        } else {
          result += "\\" + code.toString(16) + " ";
        }
      }
      return result;
    }
    function escapeString(string) {
      string = "" + string;
      var result = "";
      for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if (code == 0) {
          throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        }
        if (between(code, 1, 31) || code == 127) {
          result += "\\" + code.toString(16) + " ";
        } else if (code == 34 || code == 92) {
          result += "\\" + string[i];
        } else {
          result += string[i];
        }
      }
      return result;
    }
    exports2.tokenize = tokenize2;
    exports2.IdentToken = IdentToken2;
    exports2.FunctionToken = FunctionToken2;
    exports2.AtKeywordToken = AtKeywordToken2;
    exports2.HashToken = HashToken2;
    exports2.StringToken = StringToken2;
    exports2.BadStringToken = BadStringToken2;
    exports2.URLToken = URLToken2;
    exports2.BadURLToken = BadURLToken2;
    exports2.DelimToken = DelimToken2;
    exports2.NumberToken = NumberToken2;
    exports2.PercentageToken = PercentageToken2;
    exports2.DimensionToken = DimensionToken;
    exports2.IncludeMatchToken = IncludeMatchToken;
    exports2.DashMatchToken = DashMatchToken;
    exports2.PrefixMatchToken = PrefixMatchToken;
    exports2.SuffixMatchToken = SuffixMatchToken;
    exports2.SubstringMatchToken = SubstringMatchToken;
    exports2.ColumnToken = ColumnToken2;
    exports2.WhitespaceToken = WhitespaceToken2;
    exports2.CDOToken = CDOToken2;
    exports2.CDCToken = CDCToken2;
    exports2.ColonToken = ColonToken2;
    exports2.SemicolonToken = SemicolonToken2;
    exports2.CommaToken = CommaToken2;
    exports2.OpenParenToken = OpenParenToken;
    exports2.CloseParenToken = CloseParenToken2;
    exports2.OpenSquareToken = OpenSquareToken2;
    exports2.CloseSquareToken = CloseSquareToken2;
    exports2.OpenCurlyToken = OpenCurlyToken2;
    exports2.CloseCurlyToken = CloseCurlyToken2;
    exports2.EOFToken = EOFToken2;
    exports2.CSSParserToken = CSSParserToken;
    exports2.GroupingToken = GroupingToken;
  }
});

// packages/playwright-core/src/server/injected/selectorUtils.ts
function shouldSkipForTextMatching(element) {
  return element.nodeName === "SCRIPT" || element.nodeName === "NOSCRIPT" || element.nodeName === "STYLE" || document.head && document.head.contains(element);
}
function elementText(cache, root) {
  let value = cache.get(root);
  if (value === void 0) {
    value = { full: "", immediate: [] };
    if (!shouldSkipForTextMatching(root)) {
      let currentImmediate = "";
      if (root instanceof HTMLInputElement && (root.type === "submit" || root.type === "button")) {
        value = { full: root.value, immediate: [root.value] };
      } else {
        for (let child = root.firstChild; child; child = child.nextSibling) {
          if (child.nodeType === Node.TEXT_NODE) {
            value.full += child.nodeValue || "";
            currentImmediate += child.nodeValue || "";
          } else {
            if (currentImmediate)
              value.immediate.push(currentImmediate);
            currentImmediate = "";
            if (child.nodeType === Node.ELEMENT_NODE)
              value.full += elementText(cache, child).full;
          }
        }
        if (currentImmediate)
          value.immediate.push(currentImmediate);
        if (root.shadowRoot)
          value.full += elementText(cache, root.shadowRoot).full;
      }
    }
    cache.set(root, value);
  }
  return value;
}

// packages/playwright-core/src/server/injected/selectorGenerator.ts
var cacheAllowText = /* @__PURE__ */ new Map();
var cacheDisallowText = /* @__PURE__ */ new Map();
var kNthScore = 1e3;
function querySelector(injectedScript, selector, ownerDocument) {
  try {
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      elements: injectedScript.querySelectorAll(parsedSelector, ownerDocument)
    };
  } catch (e) {
    return {
      selector,
      elements: []
    };
  }
}
function generateSelector(injectedScript, targetElement, strict) {
  injectedScript._evaluator.begin();
  try {
    targetElement = targetElement.closest("button,select,input,[role=button],[role=checkbox],[role=radio]") || targetElement;
    const targetTokens = generateSelectorFor(injectedScript, targetElement, strict);
    const bestTokens = targetTokens || cssFallback(injectedScript, targetElement, strict);
    const selector = joinTokens(bestTokens);
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      elements: injectedScript.querySelectorAll(parsedSelector, targetElement.ownerDocument)
    };
  } finally {
    cacheAllowText.clear();
    cacheDisallowText.clear();
    injectedScript._evaluator.end();
  }
}
function filterRegexTokens(textCandidates) {
  return textCandidates.filter((c) => c[0].selector[0] !== "/");
}
function generateSelectorFor(injectedScript, targetElement, strict) {
  if (targetElement.ownerDocument.documentElement === targetElement)
    return [{ engine: "css", selector: "html", score: 1 }];
  const calculate = (element, allowText) => {
    const allowNthMatch = element === targetElement;
    let textCandidates = allowText ? buildTextCandidates(injectedScript, element, element === targetElement).map((token) => [token]) : [];
    if (element !== targetElement) {
      textCandidates = filterRegexTokens(textCandidates);
    }
    const noTextCandidates = buildCandidates(injectedScript, element).map((token) => [token]);
    let result = chooseFirstSelector(injectedScript, targetElement.ownerDocument, element, [...textCandidates, ...noTextCandidates], allowNthMatch, strict);
    textCandidates = filterRegexTokens(textCandidates);
    const checkWithText = (textCandidatesToUse) => {
      const allowParentText = allowText && !textCandidatesToUse.length;
      const candidates = [...textCandidatesToUse, ...noTextCandidates].filter((c) => {
        if (!result)
          return true;
        return combineScores(c) < combineScores(result);
      });
      let bestPossibleInParent = candidates[0];
      if (!bestPossibleInParent)
        return;
      for (let parent = parentElementOrShadowHost(element); parent; parent = parentElementOrShadowHost(parent)) {
        const parentTokens = calculateCached(parent, allowParentText);
        if (!parentTokens)
          continue;
        if (result && combineScores([...parentTokens, ...bestPossibleInParent]) >= combineScores(result))
          continue;
        bestPossibleInParent = chooseFirstSelector(injectedScript, parent, element, candidates, allowNthMatch, strict);
        if (!bestPossibleInParent)
          return;
        const combined = [...parentTokens, ...bestPossibleInParent];
        if (!result || combineScores(combined) < combineScores(result))
          result = combined;
      }
    };
    checkWithText(textCandidates);
    if (element === targetElement && textCandidates.length)
      checkWithText([]);
    return result;
  };
  const calculateCached = (element, allowText) => {
    const cache = allowText ? cacheAllowText : cacheDisallowText;
    let value = cache.get(element);
    if (value === void 0) {
      value = calculate(element, allowText);
      cache.set(element, value);
    }
    return value;
  };
  return calculateCached(targetElement, true);
}
function buildCandidates(injectedScript, element) {
  const candidates = [];
  for (const attribute of ["data-testid", "data-test-id", "data-test"]) {
    if (element.getAttribute(attribute))
      candidates.push({ engine: "css", selector: `[${attribute}=${quoteAttributeValue(element.getAttribute(attribute))}]`, score: 1 });
  }
  if (element.nodeName === "INPUT") {
    const input = element;
    if (input.placeholder)
      candidates.push({ engine: "css", selector: `[placeholder=${quoteAttributeValue(input.placeholder)}]`, score: 10 });
  }
  if (element.getAttribute("aria-label"))
    candidates.push({ engine: "css", selector: `[aria-label=${quoteAttributeValue(element.getAttribute("aria-label"))}]`, score: 10 });
  if (element.getAttribute("alt") && ["APPLET", "AREA", "IMG", "INPUT"].includes(element.nodeName))
    candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[alt=${quoteAttributeValue(element.getAttribute("alt"))}]`, score: 10 });
  if (element.getAttribute("role"))
    candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[role=${quoteAttributeValue(element.getAttribute("role"))}]`, score: 50 });
  if (element.getAttribute("name") && ["BUTTON", "FORM", "FIELDSET", "FRAME", "IFRAME", "INPUT", "KEYGEN", "OBJECT", "OUTPUT", "SELECT", "TEXTAREA", "MAP", "META", "PARAM"].includes(element.nodeName))
    candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[name=${quoteAttributeValue(element.getAttribute("name"))}]`, score: 50 });
  if (["INPUT", "TEXTAREA"].includes(element.nodeName) && element.getAttribute("type") !== "hidden") {
    if (element.getAttribute("type"))
      candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[type=${quoteAttributeValue(element.getAttribute("type"))}]`, score: 50 });
  }
  if (["INPUT", "TEXTAREA", "SELECT"].includes(element.nodeName))
    candidates.push({ engine: "css", selector: cssEscape(element.nodeName.toLowerCase()), score: 50 });
  const idAttr = element.getAttribute("id");
  if (idAttr && !isGuidLike(idAttr))
    candidates.push({ engine: "css", selector: makeSelectorForId(idAttr), score: 100 });
  candidates.push({ engine: "css", selector: cssEscape(element.nodeName.toLowerCase()), score: 200 });
  return candidates;
}
function buildTextCandidates(injectedScript, element, allowHasText) {
  if (element.nodeName === "SELECT")
    return [];
  const text = elementText(injectedScript._evaluator._cacheText, element).full.trim().replace(/\s+/g, " ").substring(0, 80);
  if (!text)
    return [];
  const candidates = [];
  let escaped = text;
  if (text.includes('"') || text.includes(">>") || text[0] === "/")
    escaped = `/.*${escapeForRegex(text)}.*/`;
  candidates.push({ engine: "text", selector: escaped, score: 10 });
  if (allowHasText && escaped === text) {
    let prefix = element.nodeName.toLowerCase();
    if (element.hasAttribute("role"))
      prefix += `[role=${quoteAttributeValue(element.getAttribute("role"))}]`;
    candidates.push({ engine: "css", selector: `${prefix}:has-text("${text}")`, score: 30 });
  }
  return candidates;
}
function parentElementOrShadowHost(element) {
  if (element.parentElement)
    return element.parentElement;
  if (!element.parentNode)
    return null;
  if (element.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE && element.parentNode.host)
    return element.parentNode.host;
  return null;
}
function makeSelectorForId(id) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(id) ? "#" + id : `[id="${cssEscape(id)}"]`;
}
function cssFallback(injectedScript, targetElement, strict) {
  const kFallbackScore = 1e7;
  const root = targetElement.ownerDocument;
  const tokens = [];
  function uniqueCSSSelector(prefix) {
    const path = tokens.slice();
    if (prefix)
      path.unshift(prefix);
    const selector = path.join(" > ");
    const parsedSelector = injectedScript.parseSelector(selector);
    const node = injectedScript.querySelector(parsedSelector, targetElement.ownerDocument, false);
    return node === targetElement ? selector : void 0;
  }
  function makeStrict(selector) {
    const token = { engine: "css", selector, score: kFallbackScore };
    if (!strict)
      return [token];
    const parsedSelector = injectedScript.parseSelector(selector);
    const elements = injectedScript.querySelectorAll(parsedSelector, targetElement.ownerDocument);
    if (elements.length === 1)
      return [token];
    const nth = { engine: "nth", selector: String(elements.indexOf(targetElement)), score: kNthScore };
    return [token, nth];
  }
  for (let element = targetElement; element && element !== root; element = parentElementOrShadowHost(element)) {
    const nodeName = element.nodeName.toLowerCase();
    let bestTokenForLevel = "";
    if (element.id) {
      const token = makeSelectorForId(element.id);
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      bestTokenForLevel = token;
    }
    const parent = element.parentNode;
    const classes = [...element.classList];
    for (let i = 0; i < classes.length; ++i) {
      const token = "." + cssEscape(classes.slice(0, i + 1).join("."));
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      if (!bestTokenForLevel && parent) {
        const sameClassSiblings = parent.querySelectorAll(token);
        if (sameClassSiblings.length === 1)
          bestTokenForLevel = token;
      }
    }
    if (parent) {
      const siblings = [...parent.children];
      const sameTagSiblings = siblings.filter((sibling) => sibling.nodeName.toLowerCase() === nodeName);
      const token = sameTagSiblings.indexOf(element) === 0 ? cssEscape(nodeName) : `${cssEscape(nodeName)}:nth-child(${1 + siblings.indexOf(element)})`;
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      if (!bestTokenForLevel)
        bestTokenForLevel = token;
    } else if (!bestTokenForLevel) {
      bestTokenForLevel = nodeName;
    }
    tokens.unshift(bestTokenForLevel);
  }
  return makeStrict(uniqueCSSSelector());
}
function escapeForRegex(text) {
  return text.replace(/[.*+?^>${}()|[\]\\]/g, "\\$&");
}
function quoteAttributeValue(text) {
  return `"${cssEscape(text).replace(/\\ /g, " ")}"`;
}
function joinTokens(tokens) {
  const parts = [];
  let lastEngine = "";
  for (const { engine, selector } of tokens) {
    if (parts.length && (lastEngine !== "css" || engine !== "css" || selector.startsWith(":nth-match(")))
      parts.push(">>");
    lastEngine = engine;
    if (engine === "css")
      parts.push(selector);
    else
      parts.push(`${engine}=${selector}`);
  }
  return parts.join(" ");
}
function combineScores(tokens) {
  let score = 0;
  for (let i = 0; i < tokens.length; i++)
    score += tokens[i].score * (tokens.length - i);
  return score;
}
function chooseFirstSelector(injectedScript, scope, targetElement, selectors, allowNthMatch, strict) {
  const joined = selectors.map((tokens) => ({ tokens, score: combineScores(tokens) }));
  joined.sort((a, b) => a.score - b.score);
  let bestWithIndex = null;
  for (const { tokens } of joined) {
    const parsedSelector = injectedScript.parseSelector(joinTokens(tokens));
    const result = injectedScript.querySelectorAll(parsedSelector, scope);
    const isStrictEnough = !strict || result.length === 1;
    const index = result.indexOf(targetElement);
    if (index === 0 && isStrictEnough) {
      return tokens;
    }
    if (!allowNthMatch || bestWithIndex || index === -1 || result.length > 5)
      continue;
    const nth = { engine: "nth", selector: String(index), score: kNthScore };
    bestWithIndex = [...tokens, nth];
  }
  return bestWithIndex;
}
function isGuidLike(id) {
  let lastCharacterType;
  let transitionCount = 0;
  for (let i = 0; i < id.length; ++i) {
    const c = id[i];
    let characterType;
    if (c === "-" || c === "_")
      continue;
    if (c >= "a" && c <= "z")
      characterType = "lower";
    else if (c >= "A" && c <= "Z")
      characterType = "upper";
    else if (c >= "0" && c <= "9")
      characterType = "digit";
    else
      characterType = "other";
    if (characterType === "lower" && lastCharacterType === "upper") {
      lastCharacterType = characterType;
      continue;
    }
    if (lastCharacterType && lastCharacterType !== characterType)
      ++transitionCount;
    lastCharacterType = characterType;
  }
  return transitionCount >= id.length / 4;
}
function cssEscape(s) {
  let result = "";
  for (let i = 0; i < s.length; i++)
    result += cssEscapeOne(s, i);
  return result;
}
function cssEscapeOne(s, i) {
  const c = s.charCodeAt(i);
  if (c === 0)
    return "\uFFFD";
  if (c >= 1 && c <= 31 || c >= 48 && c <= 57 && (i === 0 || i === 1 && s.charCodeAt(0) === 45))
    return "\\" + c.toString(16) + " ";
  if (i === 0 && c === 45 && s.length === 1)
    return "\\" + s.charAt(i);
  if (c >= 128 || c === 45 || c === 95 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122)
    return s.charAt(i);
  return "\\" + s.charAt(i);
}

// packages/playwright-core/src/server/isomorphic/cssParser.ts
var css = __toESM(require_cssTokenizer());

// packages/playwright-core/src/server/isomorphic/selectorParser.ts
function stringifySelector(selector) {
  if (typeof selector === "string")
    return selector;
  return selector.parts.map((p, i) => {
    const prefix = p.name === "css" ? "" : p.name + "=";
    return `${i === selector.capture ? "*" : ""}${prefix}${p.source}`;
  }).join(" >> ");
}

// packages/playwright-core/src/server/injected/highlight.ts
var Highlight = class {
  constructor(injectedScript) {
    this._highlightEntries = [];
    this._injectedScript = injectedScript;
    this._isUnderTest = injectedScript.isUnderTest;
    this._glassPaneElement = document.createElement("x-pw-glass");
    this._glassPaneElement.style.position = "fixed";
    this._glassPaneElement.style.top = "0";
    this._glassPaneElement.style.right = "0";
    this._glassPaneElement.style.bottom = "0";
    this._glassPaneElement.style.left = "0";
    this._glassPaneElement.style.zIndex = "2147483647";
    this._glassPaneElement.style.pointerEvents = "none";
    this._glassPaneElement.style.display = "flex";
    this._actionPointElement = document.createElement("x-pw-action-point");
    this._actionPointElement.setAttribute("hidden", "true");
    this._glassPaneShadow = this._glassPaneElement.attachShadow({ mode: "closed" });
    this._glassPaneShadow.appendChild(this._actionPointElement);
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        x-pw-tooltip {
          align-items: center;
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 2px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 3.6px 3.7px,
                      rgba(0, 0, 0, 0.15) 0px 12.1px 12.3px,
                      rgba(0, 0, 0, 0.1) 0px -2px 4px,
                      rgba(0, 0, 0, 0.15) 0px -12.1px 24px,
                      rgba(0, 0, 0, 0.25) 0px 54px 55px;
          color: rgb(204, 204, 204);
          display: none;
          font-family: 'Dank Mono', 'Operator Mono', Inconsolata, 'Fira Mono',
                      'SF Mono', Monaco, 'Droid Sans Mono', 'Source Code Pro', monospace;
          font-size: 12.8px;
          font-weight: normal;
          left: 0;
          line-height: 1.5;
          max-width: 600px;
          padding: 3.2px 5.12px 3.2px;
          position: absolute;
          top: 0;
        }
        x-pw-action-point {
          position: absolute;
          width: 20px;
          height: 20px;
          background: red;
          border-radius: 10px;
          pointer-events: none;
          margin: -10px 0 0 -10px;
          z-index: 2;
        }
        *[hidden] {
          display: none !important;
        }
    `;
    this._glassPaneShadow.appendChild(styleElement);
  }
  install() {
    document.documentElement.appendChild(this._glassPaneElement);
  }
  runHighlightOnRaf(selector) {
    if (this._rafRequest)
      cancelAnimationFrame(this._rafRequest);
    this.updateHighlight(this._injectedScript.querySelectorAll(selector, document.documentElement), stringifySelector(selector), false);
    this._rafRequest = requestAnimationFrame(() => this.runHighlightOnRaf(selector));
  }
  uninstall() {
    if (this._rafRequest)
      cancelAnimationFrame(this._rafRequest);
    this._glassPaneElement.remove();
  }
  isInstalled() {
    return this._glassPaneElement.parentElement === document.documentElement && !this._glassPaneElement.nextElementSibling;
  }
  showActionPoint(x, y) {
    this._actionPointElement.style.top = y + "px";
    this._actionPointElement.style.left = x + "px";
    this._actionPointElement.hidden = false;
    if (this._isUnderTest)
      console.error("Action point for test: " + JSON.stringify({ x, y }));
  }
  hideActionPoint() {
    this._actionPointElement.hidden = true;
  }
  clearHighlight() {
    var _a, _b;
    for (const entry of this._highlightEntries) {
      (_a = entry.highlightElement) == null ? void 0 : _a.remove();
      (_b = entry.tooltipElement) == null ? void 0 : _b.remove();
    }
    this._highlightEntries = [];
  }
  updateHighlight(elements, selector, isRecording) {
    let color;
    if (isRecording)
      color = "#dc6f6f7f";
    else
      color = elements.length > 1 ? "#f6b26b7f" : "#6fa8dc7f";
    this._innerUpdateHighlight(elements, { color, tooltipText: selector });
  }
  maskElements(elements) {
    this._innerUpdateHighlight(elements, { color: "#F0F" });
  }
  _innerUpdateHighlight(elements, options) {
    if (this._highlightIsUpToDate(elements))
      return;
    this.clearHighlight();
    for (let i = 0; i < elements.length; ++i) {
      const highlightElement = this._createHighlightElement();
      this._glassPaneShadow.appendChild(highlightElement);
      let tooltipElement;
      if (options.tooltipText) {
        tooltipElement = document.createElement("x-pw-tooltip");
        this._glassPaneShadow.appendChild(tooltipElement);
        const suffix = elements.length > 1 ? ` [${i + 1} of ${elements.length}]` : "";
        tooltipElement.textContent = options.tooltipText + suffix;
        tooltipElement.style.top = "0";
        tooltipElement.style.left = "0";
        tooltipElement.style.display = "flex";
        if (this._isUnderTest)
          console.error("Highlight text for test: " + JSON.stringify(tooltipElement.textContent));
      }
      this._highlightEntries.push({ targetElement: elements[i], tooltipElement, highlightElement });
    }
    for (const entry of this._highlightEntries) {
      entry.box = entry.targetElement.getBoundingClientRect();
      if (!entry.tooltipElement)
        continue;
      const tooltipWidth = entry.tooltipElement.offsetWidth;
      const tooltipHeight = entry.tooltipElement.offsetHeight;
      const totalWidth = this._glassPaneElement.offsetWidth;
      const totalHeight = this._glassPaneElement.offsetHeight;
      let anchorLeft = entry.box.left;
      if (anchorLeft + tooltipWidth > totalWidth - 5)
        anchorLeft = totalWidth - tooltipWidth - 5;
      let anchorTop = entry.box.bottom + 5;
      if (anchorTop + tooltipHeight > totalHeight - 5) {
        if (entry.box.top > tooltipHeight + 5) {
          anchorTop = entry.box.top - tooltipHeight - 5;
        } else {
          anchorTop = totalHeight - 5 - tooltipHeight;
        }
      }
      entry.tooltipTop = anchorTop;
      entry.tooltipLeft = anchorLeft;
    }
    for (const entry of this._highlightEntries) {
      if (entry.tooltipElement) {
        entry.tooltipElement.style.top = entry.tooltipTop + "px";
        entry.tooltipElement.style.left = entry.tooltipLeft + "px";
      }
      const box = entry.box;
      entry.highlightElement.style.backgroundColor = options.color;
      entry.highlightElement.style.left = box.x + "px";
      entry.highlightElement.style.top = box.y + "px";
      entry.highlightElement.style.width = box.width + "px";
      entry.highlightElement.style.height = box.height + "px";
      entry.highlightElement.style.display = "block";
      if (this._isUnderTest)
        console.error("Highlight box for test: " + JSON.stringify({ x: box.x, y: box.y, width: box.width, height: box.height }));
    }
  }
  _highlightIsUpToDate(elements) {
    if (elements.length !== this._highlightEntries.length)
      return false;
    for (let i = 0; i < this._highlightEntries.length; ++i) {
      if (elements[i] !== this._highlightEntries[i].targetElement)
        return false;
      const oldBox = this._highlightEntries[i].box;
      if (!oldBox)
        return false;
      const box = elements[i].getBoundingClientRect();
      if (box.top !== oldBox.top || box.right !== oldBox.right || box.bottom !== oldBox.bottom || box.left !== oldBox.left)
        return false;
    }
    return true;
  }
  _createHighlightElement() {
    const highlightElement = document.createElement("x-pw-highlight");
    highlightElement.style.position = "absolute";
    highlightElement.style.top = "0";
    highlightElement.style.left = "0";
    highlightElement.style.width = "0";
    highlightElement.style.height = "0";
    highlightElement.style.boxSizing = "border-box";
    return highlightElement;
  }
};

// packages/playwright-core/src/server/injected/recorder.ts
var Recorder = class {
  constructor(injectedScript) {
    this._performingAction = false;
    this._listeners = [];
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._activeModel = null;
    this._expectProgrammaticKeyUp = false;
    this._mode = "none";
    this._injectedScript = injectedScript;
    this._highlight = new Highlight(injectedScript);
    this._refreshListenersIfNeeded();
    injectedScript.onGlobalListenersRemoved.add(() => this._refreshListenersIfNeeded());
    globalThis.__pw_refreshOverlay = () => {
      this._pollRecorderMode().catch((e) => console.log(e));
    };
    globalThis.__pw_refreshOverlay();
    if (injectedScript.isUnderTest)
      console.error("Recorder script ready for test");
  }
  _refreshListenersIfNeeded() {
    if (this._highlight.isInstalled())
      return;
    removeEventListeners(this._listeners);
    this._listeners = [
      addEventListener(document, "click", (event) => this._onClick(event), true),
      addEventListener(document, "auxclick", (event) => this._onClick(event), true),
      addEventListener(document, "input", (event) => this._onInput(event), true),
      addEventListener(document, "keydown", (event) => this._onKeyDown(event), true),
      addEventListener(document, "keyup", (event) => this._onKeyUp(event), true),
      addEventListener(document, "mousedown", (event) => this._onMouseDown(event), true),
      addEventListener(document, "mouseup", (event) => this._onMouseUp(event), true),
      addEventListener(document, "mousemove", (event) => this._onMouseMove(event), true),
      addEventListener(document, "mouseleave", (event) => this._onMouseLeave(event), true),
      addEventListener(document, "focus", () => this._onFocus(), true),
      addEventListener(document, "scroll", () => {
        this._hoveredModel = null;
        this._highlight.hideActionPoint();
        this._updateHighlight();
      }, true)
    ];
    this._highlight.install();
  }
  async _pollRecorderMode() {
    var _a;
    const pollPeriod = 1e3;
    if (this._pollRecorderModeTimer)
      clearTimeout(this._pollRecorderModeTimer);
    const state = await globalThis.__pw_recorderState().catch((e) => null);
    if (!state) {
      this._pollRecorderModeTimer = setTimeout(() => this._pollRecorderMode(), pollPeriod);
      return;
    }
    const { mode, actionPoint, actionSelector } = state;
    if (mode !== this._mode) {
      this._mode = mode;
      this._clearHighlight();
    }
    if (actionPoint && this._actionPoint && actionPoint.x === this._actionPoint.x && actionPoint.y === this._actionPoint.y) {
    } else if (!actionPoint && !this._actionPoint) {
    } else {
      if (actionPoint)
        this._highlight.showActionPoint(actionPoint.x, actionPoint.y);
      else
        this._highlight.hideActionPoint();
      this._actionPoint = actionPoint;
    }
    if (this._actionSelector && !((_a = this._hoveredModel) == null ? void 0 : _a.elements.length))
      this._actionSelector = void 0;
    if (actionSelector !== this._actionSelector) {
      this._hoveredModel = actionSelector ? querySelector(this._injectedScript, actionSelector, document) : null;
      this._updateHighlight();
      this._actionSelector = actionSelector;
    }
    this._pollRecorderModeTimer = setTimeout(() => this._pollRecorderMode(), pollPeriod);
  }
  _clearHighlight() {
    this._hoveredModel = null;
    this._activeModel = null;
    this._updateHighlight();
  }
  _actionInProgress(event) {
    if (this._performingAction)
      return true;
    consumeEvent(event);
    return false;
  }
  _consumedDueToNoModel(event, model) {
    if (model)
      return false;
    consumeEvent(event);
    return true;
  }
  _consumedDueWrongTarget(event) {
    if (this._activeModel && this._activeModel.elements[0] === this._deepEventTarget(event))
      return false;
    consumeEvent(event);
    return true;
  }
  _onClick(event) {
    if (this._mode === "inspecting")
      globalThis.__pw_recorderSetSelector(this._hoveredModel ? this._hoveredModel.selector : "");
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (this._actionInProgress(event))
      return;
    if (this._consumedDueToNoModel(event, this._hoveredModel))
      return;
    const checkbox = asCheckbox(this._deepEventTarget(event));
    if (checkbox) {
      this._performAction({
        name: checkbox.checked ? "check" : "uncheck",
        selector: this._hoveredModel.selector,
        signals: []
      });
      return;
    }
    this._performAction({
      name: "click",
      selector: this._hoveredModel.selector,
      position: positionForEvent(event),
      signals: [],
      button: buttonForEvent(event),
      modifiers: modifiersForEvent(event),
      clickCount: event.detail
    });
  }
  _shouldIgnoreMouseEvent(event) {
    const target = this._deepEventTarget(event);
    if (this._mode === "none")
      return true;
    if (this._mode === "inspecting") {
      consumeEvent(event);
      return true;
    }
    const nodeName = target.nodeName;
    if (nodeName === "SELECT")
      return true;
    if (nodeName === "INPUT" && ["date"].includes(target.type))
      return true;
    return false;
  }
  _onMouseDown(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
    this._activeModel = this._hoveredModel;
  }
  _onMouseUp(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
  }
  _onMouseMove(event) {
    if (this._mode === "none")
      return;
    const target = this._deepEventTarget(event);
    if (this._hoveredElement === target)
      return;
    this._hoveredElement = target;
    this._updateModelForHoveredElement();
  }
  _onMouseLeave(event) {
    if (this._deepEventTarget(event).nodeType === Node.DOCUMENT_NODE) {
      this._hoveredElement = null;
      this._updateModelForHoveredElement();
    }
  }
  _onFocus() {
    const activeElement = this._deepActiveElement(document);
    const result = activeElement ? generateSelector(this._injectedScript, activeElement, true) : null;
    this._activeModel = result && result.selector ? result : null;
    if (this._injectedScript.isUnderTest)
      console.error("Highlight updated for test: " + (result ? result.selector : null));
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement) {
      this._hoveredModel = null;
      this._updateHighlight();
      return;
    }
    const hoveredElement = this._hoveredElement;
    const { selector, elements } = generateSelector(this._injectedScript, hoveredElement, true);
    if (this._hoveredModel && this._hoveredModel.selector === selector || this._hoveredElement !== hoveredElement)
      return;
    this._hoveredModel = selector ? { selector, elements } : null;
    this._updateHighlight();
    if (this._injectedScript.isUnderTest)
      console.error("Highlight updated for test: " + selector);
  }
  _updateHighlight() {
    const elements = this._hoveredModel ? this._hoveredModel.elements : [];
    const selector = this._hoveredModel ? this._hoveredModel.selector : "";
    this._highlight.updateHighlight(elements, selector, this._mode === "recording");
  }
  _onInput(event) {
    if (this._mode !== "recording")
      return true;
    const target = this._deepEventTarget(event);
    if (["INPUT", "TEXTAREA"].includes(target.nodeName)) {
      const inputElement = target;
      const elementType = (inputElement.type || "").toLowerCase();
      if (["checkbox", "radio"].includes(elementType)) {
        return;
      }
      if (elementType === "file") {
        globalThis.__pw_recorderRecordAction({
          name: "setInputFiles",
          selector: this._activeModel.selector,
          signals: [],
          files: [...inputElement.files || []].map((file) => file.name)
        });
        return;
      }
      if (this._consumedDueWrongTarget(event))
        return;
      globalThis.__pw_recorderRecordAction({
        name: "fill",
        selector: this._activeModel.selector,
        signals: [],
        text: inputElement.value
      });
    }
    if (target.nodeName === "SELECT") {
      const selectElement = target;
      if (this._actionInProgress(event))
        return;
      this._performAction({
        name: "select",
        selector: this._hoveredModel.selector,
        options: [...selectElement.selectedOptions].map((option) => option.value),
        signals: []
      });
    }
  }
  _shouldGenerateKeyPressFor(event) {
    if (["Backspace", "Delete", "AltGraph"].includes(event.key))
      return false;
    if (event.key === "@" && event.code === "KeyL")
      return false;
    if (navigator.platform.includes("Mac")) {
      if (event.key === "v" && event.metaKey)
        return false;
    } else {
      if (event.key === "v" && event.ctrlKey)
        return false;
      if (event.key === "Insert" && event.shiftKey)
        return false;
    }
    if (["Shift", "Control", "Meta", "Alt", "Process"].includes(event.key))
      return false;
    const hasModifier = event.ctrlKey || event.altKey || event.metaKey;
    if (event.key.length === 1 && !hasModifier)
      return !!asCheckbox(this._deepEventTarget(event));
    return true;
  }
  _onKeyDown(event) {
    if (this._mode === "inspecting") {
      consumeEvent(event);
      return;
    }
    if (this._mode !== "recording")
      return;
    if (!this._shouldGenerateKeyPressFor(event))
      return;
    if (this._actionInProgress(event)) {
      this._expectProgrammaticKeyUp = true;
      return;
    }
    if (this._consumedDueWrongTarget(event))
      return;
    if (event.key === " ") {
      const checkbox = asCheckbox(this._deepEventTarget(event));
      if (checkbox) {
        this._performAction({
          name: checkbox.checked ? "uncheck" : "check",
          selector: this._activeModel.selector,
          signals: []
        });
        return;
      }
    }
    this._performAction({
      name: "press",
      selector: this._activeModel.selector,
      signals: [],
      key: event.key,
      modifiers: modifiersForEvent(event)
    });
  }
  _onKeyUp(event) {
    if (this._mode === "none")
      return;
    if (!this._shouldGenerateKeyPressFor(event))
      return;
    if (!this._expectProgrammaticKeyUp) {
      consumeEvent(event);
      return;
    }
    this._expectProgrammaticKeyUp = false;
  }
  async _performAction(action) {
    this._clearHighlight();
    this._performingAction = true;
    await globalThis.__pw_recorderPerformAction(action).catch(() => {
    });
    this._performingAction = false;
    this._updateModelForHoveredElement();
    this._onFocus();
    if (this._injectedScript.isUnderTest) {
      console.error("Action performed for test: " + JSON.stringify({
        hovered: this._hoveredModel ? this._hoveredModel.selector : null,
        active: this._activeModel ? this._activeModel.selector : null
      }));
    }
  }
  _deepEventTarget(event) {
    return event.composedPath()[0];
  }
  _deepActiveElement(document2) {
    let activeElement = document2.activeElement;
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
  }
};
function modifiersForEvent(event) {
  return (event.altKey ? 1 : 0) | (event.ctrlKey ? 2 : 0) | (event.metaKey ? 4 : 0) | (event.shiftKey ? 8 : 0);
}
function buttonForEvent(event) {
  switch (event.which) {
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "left";
}
function positionForEvent(event) {
  const targetElement = event.target;
  if (targetElement.nodeName !== "CANVAS")
    return;
  return {
    x: event.offsetX,
    y: event.offsetY
  };
}
function consumeEvent(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}
function asCheckbox(node) {
  if (!node || node.nodeName !== "INPUT")
    return null;
  const inputElement = node;
  return ["checkbox", "radio"].includes(inputElement.type) ? inputElement : null;
}
function addEventListener(target, eventName, listener, useCapture) {
  target.addEventListener(eventName, listener, useCapture);
  const remove = () => {
    target.removeEventListener(eventName, listener, useCapture);
  };
  return remove;
}
function removeEventListeners(listeners) {
  for (const listener of listeners)
    listener();
  listeners.splice(0, listeners.length);
}
module.exports = Recorder;
