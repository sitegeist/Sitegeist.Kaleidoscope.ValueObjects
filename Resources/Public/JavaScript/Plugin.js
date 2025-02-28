/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPropValid; });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/monet/dist/monet.js":
/*!*************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/monet/dist/monet.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Monet.js 0.9.3
 *
 * (c) 2012-2021 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */
(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof self !== "undefined" ? self : this, function() {
    "use strict";
    function assignImp(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key) && source[key] !== undefined) {
                target[key] = source[key];
            }
        }
        return target;
    }
    var assign = isFunction(Object.assign) ? Object.assign : assignImp;
    var Monet = {
        apply2: apply2,
        assign: assign,
        compose: compose,
        curry: curry(swap(curry), [])([]),
        idFunction: idFunction,
        isFunction: isFunction,
        noop: noop,
        swap: swap
    };
    var TYPE_KEY = "@@type";
    var LIB_NAME = "monet.js";
    var TYPES_NAMES = {
        Identity: "Identity",
        Maybe: "Maybe",
        Either: "Either",
        Validation: "Validation",
        List: "List",
        NEL: "NEL",
        IO: "IO",
        MonadT: "MonadT",
        Reader: "Reader",
        Free: "Free"
    };
    function setType(target, typeName) {
        target[TYPE_KEY] = LIB_NAME + "/" + typeName;
    }
    function isInstance(typeName) {
        return function(target) {
            return (target[TYPE_KEY] || target.constructor[TYPE_KEY]) === LIB_NAME + "/" + typeName;
        };
    }
    function isOfType(typeName) {
        return function(target) {
            var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];
            return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;
        };
    }
    function isNothing(value) {
        return value == null;
    }
    function isEmpty(value) {
        if (isNothing(value) || value === "") {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === "object") {
            return Object.keys(value).length === 0;
        }
        return false;
    }
    function noop() {}
    function getArgs(args) {
        return Array.prototype.slice.call(args);
    }
    function curry(fn, args) {
        return function() {
            var args1 = args.concat(getArgs(arguments));
            return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);
        };
    }
    function compose(f, g) {
        return function(x) {
            return f(g(x));
        };
    }
    function isFunction(f) {
        return Boolean(f && f.constructor && f.call && f.apply);
    }
    function idFunction(value) {
        return value;
    }
    function trueFunction() {
        return true;
    }
    function areEqual(a, b) {
        if (a === b || a !== a && b !== b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        if (isFunction(a.equals) && isFunction(b.equals)) {
            return a.equals(b);
        }
        return false;
    }
    function equals(a) {
        return function(b) {
            return areEqual(a, b);
        };
    }
    function falseFunction() {
        return false;
    }
    function swap(f) {
        return function(a, b) {
            return f(b, a);
        };
    }
    function apply2(a1, a2, f) {
        return a2.ap(a1.map(curry(f, [])));
    }
    function listEquals(list1, list2) {
        var a = list1;
        var b = list2;
        while (!a.isNil && !b.isNil) {
            if (!equals(a.head())(b.head())) {
                return false;
            }
            a = a.tail();
            b = b.tail();
        }
        return a.isNil && b.isNil;
    }
    function listMapC(fn, l) {
        return l.isNil ? Return(l) : Suspend(function() {
            return listMapC(fn, l.tail());
        }).map(curry(cons, [])(fn(l.head())));
    }
    function listMap(fn, l) {
        return listMapC(fn, l).run();
    }
    function listFilter(list, fn) {
        return list.foldRight(Nil)(function(a, acc) {
            return fn(a) ? cons(a, acc) : acc;
        });
    }
    function listFindC(l, fn) {
        if (l.isNil) {
            return Return(None());
        }
        var h = l.head();
        return fn(h) ? Return(Some(h)) : Suspend(function() {
            return listFindC(l.tail(), fn);
        });
    }
    function listFind(l, fn) {
        return listFindC(l, fn).run();
    }
    function listContainsC(l, val) {
        if (l.isNil) {
            return Return(false);
        }
        var h = l.head();
        return areEqual(h, val) ? Return(true) : Suspend(function() {
            return listContainsC(l.tail(), val);
        });
    }
    function listContains(l, val) {
        return listContainsC(l, val).run();
    }
    function cons(head, tail) {
        return tail.cons(head);
    }
    function List() {
        switch (arguments.length) {
          case 0:
            return new List.fn.init();

          case 1:
            return new List.fn.init(arguments[0]);

          default:
            return new List.fn.init(arguments[0], arguments[1]);
        }
    }
    Monet.List = List;
    var listForEach = function(effectFn, l) {
        if (!l.isNil) {
            effectFn(l.head());
            listForEach(effectFn, l.tail());
        }
    };
    var foldLeft = function(fn, acc, list) {
        function fL(innerAcc, innerList) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fL(fn(innerAcc, innerList.head()), innerList.tail());
            });
        }
        return fL(acc, list).run();
    };
    var foldRight = function(fn, list, acc) {
        function fR(innerList, innerAcc) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fR(innerList.tail(), innerAcc);
            }).map(function(accumulated) {
                return fn(innerList.head(), accumulated);
            });
        }
        return fR(list, acc).run();
    };
    var append = function(self, other) {
        function appendFree(listA, listB) {
            return listA.isNil ? Return(listB) : Suspend(function() {
                return appendFree(listA.tail(), listB).map(function(list) {
                    return list.cons(listA.head());
                });
            });
        }
        return appendFree(self, other).run();
    };
    var sequence = function(list, type) {
        return list.foldRight(type.of(Nil))(type.map2(cons));
    };
    var sequenceValidation = function(list) {
        return list.foldLeft(Success(Nil))(function(acc, a) {
            return acc.ap(a.map(function(v) {
                return function(t) {
                    return cons(v, t);
                };
            }));
        }).map(listReverse);
    };
    var listReverse = function(list) {
        return list.foldLeft(Nil)(swap(cons));
    };
    var listAp = function(list1, list2) {
        return list1.bind(function(x) {
            return list2.map(function(f) {
                return f(x);
            });
        });
    };
    var Nil;
    List.fn = List.prototype = {
        init: function() {
            var head = arguments[0];
            var tail = arguments[1];
            if (arguments.length === 0) {
                this.isNil = true;
                this.size_ = 0;
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = tail || Nil;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.List);
        },
        of: function(value) {
            return new List(value);
        },
        size: function() {
            return this.size_;
        },
        equals: function(other) {
            return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);
        },
        cons: function(head) {
            return List(head, this);
        },
        snoc: function(element) {
            return this.concat(List(element));
        },
        map: function(fn) {
            return listMap(fn, this);
        },
        toArray: function() {
            return foldLeft(function(acc, e) {
                acc.push(e);
                return acc;
            }, [], this);
        },
        toSet: function() {
            return new Set(this);
        },
        foldLeft: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldLeft(fn, initialValue, self);
            };
        },
        foldRight: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldRight(fn, self, initialValue);
            };
        },
        append: function(list2) {
            return append(this, list2);
        },
        filter: function(fn) {
            return listFilter(this, fn);
        },
        find: function(fn) {
            return listFind(this, fn);
        },
        flatten: function() {
            return foldRight(append, this, Nil);
        },
        flattenMaybe: function() {
            return this.flatMap(Maybe.toList);
        },
        reverse: function() {
            return listReverse(this);
        },
        bind: function(fn) {
            return this.map(fn).flatten();
        },
        forEach: function(effectFn) {
            listForEach(effectFn, this);
        },
        contains: function(val) {
            return listContains(this, val);
        },
        sequenceMaybe: function() {
            return sequence(this, Maybe);
        },
        sequenceValidation: function() {
            return sequenceValidation(this);
        },
        sequenceEither: function() {
            return sequence(this, Either);
        },
        sequenceIO: function() {
            return sequence(this, IO);
        },
        sequenceReader: function() {
            return sequence(this, Reader);
        },
        sequence: function(monadType) {
            return sequence(this, monadType);
        },
        head: function() {
            return this.head_;
        },
        headMaybe: function() {
            return this.isNil ? None() : Some(this.head_);
        },
        lookup: function(i) {
            return this.isNil || i >= this.size() ? None() : Maybe.fromNull(this.toArray()[i]);
        },
        nth: function(i) {
            return this.isNil || i >= this.size() ? undefined : this.toArray()[i];
        },
        tail: function() {
            return this.isNil ? Nil : this.tail_;
        },
        tails: function() {
            return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);
        },
        ap: function(list) {
            return listAp(this, list);
        },
        apTo: function(listWithValues) {
            return listAp(listWithValues, this);
        },
        isNEL: falseFunction,
        toString: function() {
            return this.isNil ? "Nil" : "List(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    List.fn.init.prototype = List.fn;
    setType(List, TYPES_NAMES.List);
    setType(List.fn.init, TYPES_NAMES.List);
    List.isInstance = isInstance(TYPES_NAMES.List);
    List.isOfType = isOfType(TYPES_NAMES.List);
    List.prototype.empty = function() {
        return Nil;
    };
    List.fromArray = function(array) {
        return array.reduceRight(function(acc, next) {
            return acc.cons(next);
        }, Nil);
    };
    List.from = function(iterable) {
        return List.fromArray(Array.from(iterable));
    };
    List.of = function(a) {
        return new List(a, Nil);
    };
    List.prototype.each = List.prototype.forEach;
    Nil = Monet.Nil = new List.fn.init();
    function emptyNELError(head) {
        return new Error("Cannot create an empty Non-Empty List. Passed head is " + head + ".");
    }
    function NEL(head, tail) {
        if (isNothing(head)) {
            throw emptyNELError(head);
        }
        return new NEL.fn.init(head, tail);
    }
    Monet.NEL = Monet.NonEmptyList = NEL;
    NEL.of = function(a) {
        return NEL(a, Nil);
    };
    NEL.fn = NEL.prototype = {
        init: function(head, tail) {
            if (isNothing(head)) {
                throw emptyNELError(head);
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = isNothing(tail) ? Nil : tail;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.NEL);
        },
        equals: function(other) {
            return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);
        },
        cons: function(head) {
            return NEL(head, this.toList());
        },
        snoc: function(element) {
            return this.concat(NEL(element));
        },
        map: function(fn) {
            return NEL(fn(this.head_), listMap(fn, this.tail_));
        },
        bind: function(fn) {
            var p = fn(this.head_);
            if (!p.isNEL()) {
                throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");
            }
            var list = this.tail().foldLeft(Nil.snoc(p.head()).append(p.tail()))(function(acc, e) {
                var list2 = fn(e).toList();
                return acc.snoc(list2.head()).append(list2.tail());
            });
            return new NEL(list.head(), list.tail());
        },
        head: function() {
            return this.head_;
        },
        lookup: function(i) {
            return i >= this.size() ? None() : Maybe.fromNull(this.toArray()[i]);
        },
        nth: function(i) {
            return i >= this.size() ? undefined : this.toArray()[i];
        },
        tail: function() {
            return this.tail_;
        },
        tails: function() {
            var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();
            return NEL(listsOfNels.head(), listsOfNels.tail());
        },
        toList: function() {
            return List(this.head_, this.tail_);
        },
        reverse: function() {
            if (this.tail().isNil) {
                return this;
            }
            var reversedTail = this.tail().reverse();
            return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        reduceLeft: function(fn) {
            return this.tail().foldLeft(this.head())(fn);
        },
        filter: function(fn) {
            return listFilter(this.toList(), fn);
        },
        find: function(fn) {
            return listFind(this.toList(), fn);
        },
        flatten: function() {
            return foldRight(append, this.toList().map(function(l) {
                return l.isNEL() ? l.toList() : l;
            }), Nil);
        },
        flattenMaybe: function() {
            return this.toList().flatMap(Maybe.toList);
        },
        contains: function(val) {
            return listContains(this.toList(), val);
        },
        append: function(list2) {
            return NEL.fromList(this.toList().append(list2.toList())).some();
        },
        cobind: function(fn) {
            return this.cojoin().map(fn);
        },
        size: function() {
            return this.size_;
        },
        forEach: function(fn) {
            return this.toList().forEach(fn);
        },
        isNEL: trueFunction,
        toString: function() {
            return "NEL(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    NEL.fromList = function(list) {
        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));
    };
    NEL.fromArray = function(array) {
        return NEL.fromList(List.fromArray(array));
    };
    NEL.from = function(iterable) {
        return NEL.fromList(List.from(iterable));
    };
    NEL.fn.init.prototype = NEL.fn;
    setType(NEL, TYPES_NAMES.NEL);
    setType(NEL.fn.init, TYPES_NAMES.NEL);
    NEL.isInstance = isInstance(TYPES_NAMES.NEL);
    NEL.isOfType = isOfType(TYPES_NAMES.NEL);
    NEL.prototype.toArray = List.prototype.toArray;
    NEL.prototype.toSet = List.prototype.toSet;
    NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;
    NEL.prototype.cojoin = NEL.prototype.tails;
    NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;
    NEL.prototype.ap = List.prototype.ap;
    NEL.prototype.apTo = List.prototype.apTo;
    var Maybe = Monet.Maybe = {};
    Maybe.fromFalsy = function(val) {
        return !val ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromNull = function(val) {
        return isNothing(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromUndefined = function(val) {
        return val === undefined ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromEmpty = function(val) {
        return isEmpty(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.of = function(a) {
        return Some(a);
    };
    var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {
        return new Maybe.fn.init(true, val);
    };
    var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {
        return new Maybe.fn.init(false, null);
    };
    Maybe.toList = function(maybe) {
        return maybe.toList();
    };
    Maybe.fn = Maybe.prototype = {
        init: function(isValue, val) {
            this.isValue = isValue;
            if (isValue && isNothing(val)) {
                throw new Error("Can not create Some with illegal value: " + val + ".");
            }
            this.val = val;
            setType(this, TYPES_NAMES.Maybe);
        },
        isSome: function() {
            return this.isValue;
        },
        isNone: function() {
            return !this.isSome();
        },
        bind: function(bindFn) {
            return this.isValue ? bindFn(this.val) : this;
        },
        some: function() {
            if (this.isValue) {
                return this.val;
            }
            throw new Error("Cannot call .some() on a None.");
        },
        orSome: function(otherValue) {
            return this.isValue ? this.val : otherValue;
        },
        orLazy: function(getOtherValue) {
            return this.cata(getOtherValue, idFunction);
        },
        orNull: function() {
            return this.orSome(null);
        },
        orUndefined: function() {
            return this.orSome(undefined);
        },
        orElse: function(maybe) {
            return this.catchMap(function() {
                return maybe;
            });
        },
        ap: function(maybeWithFunction) {
            var value = this.val;
            return this.isValue ? maybeWithFunction.map(function(fn) {
                return fn(value);
            }) : this;
        },
        apTo: function(maybeWithValue) {
            return maybeWithValue.ap(this);
        },
        equals: function(other) {
            return Maybe.isOfType(other) && this.cata(function() {
                return other.isNone();
            }, function(val) {
                return other.fold(false)(equals(val));
            });
        },
        toArray: function() {
            return this.map(function(val) {
                return [ val ];
            }).orLazy(function() {
                return [];
            });
        },
        toSet: function() {
            return new Set(this);
        },
        toList: function() {
            return this.map(List).orLazy(function() {
                return Nil;
            });
        },
        toEither: function(failVal) {
            return this.isSome() ? Right(this.val) : Left(failVal);
        },
        toValidation: function(failVal) {
            return this.isSome() ? Success(this.val) : Fail(failVal);
        },
        fold: function(defaultValue) {
            var self = this;
            return function(fn) {
                return self.isSome() ? fn(self.val) : defaultValue;
            };
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        cata: function(none, some) {
            return this.isSome() ? some(this.val) : none();
        },
        catchMap: function(fn) {
            return this.isSome() ? this : fn();
        },
        filter: function(fn) {
            var self = this;
            return self.flatMap(function(a) {
                return fn(a) ? self : None();
            });
        },
        orNoneIf: function(bool) {
            return bool ? None() : this;
        },
        contains: function(val) {
            return this.isSome() ? areEqual(this.val, val) : false;
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        orElseRun: function(fn) {
            this.cata(fn, noop);
        },
        toString: function() {
            return this.isSome() ? "Just(" + this.val + ")" : "Nothing";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;
    Maybe.prototype.just = Maybe.prototype.some;
    Maybe.prototype.isJust = Maybe.prototype.isSome;
    Maybe.prototype.isNothing = Maybe.prototype.isNone;
    Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;
    Maybe.fn.init.prototype = Maybe.fn;
    setType(Maybe, TYPES_NAMES.Maybe);
    setType(Maybe.fn.init, TYPES_NAMES.Maybe);
    Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);
    Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);
    var Validation = Monet.Validation = {};
    var Success = Validation.Success = Validation.success = Monet.Success = function(val) {
        return new Validation.fn.init(val, true);
    };
    var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {
        return new Validation.fn.init(error, false);
    };
    Validation.of = function(v) {
        return Success(v);
    };
    Validation.fn = Validation.prototype = {
        init: function(val, success) {
            this.val = val;
            this.isSuccessValue = success;
            setType(this, TYPES_NAMES.Validation);
        },
        success: function() {
            if (this.isSuccess()) {
                return this.val;
            }
            throw new Error("Cannot call success() on a Fail.");
        },
        isSuccess: function() {
            return this.isSuccessValue;
        },
        isFail: function() {
            return !this.isSuccessValue;
        },
        fail: function() {
            if (this.isSuccess()) {
                throw new Error("Cannot call fail() on a Success.");
            }
            return this.val;
        },
        bind: function(fn) {
            return this.isSuccess() ? fn(this.val) : this;
        },
        ap: function(validationWithFn) {
            var value = this.val;
            return this.isSuccess() ? validationWithFn.map(function(fn) {
                return fn(value);
            }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;
        },
        apTo: function(validationWithValue) {
            return validationWithValue.ap(this);
        },
        acc: function() {
            var x = function() {
                return x;
            };
            return this.isSuccessValue ? Validation.success(x) : this;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(fail, success) {
            return this.isSuccessValue ? success(this.val) : fail(this.val);
        },
        catchMap: function(fn) {
            return this.isSuccess() ? this : fn(this.val);
        },
        swap: function() {
            return this.isSuccess() ? Fail(this.val) : Success(this.val);
        },
        failMap: function(fn) {
            return this.isFail() ? Fail(fn(this.val)) : this;
        },
        bimap: function(fail, success) {
            return this.isSuccessValue ? this.map(success) : this.failMap(fail);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachFail: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Validation.isOfType(other) && this.cata(function(fail) {
                return other.cata(equals(fail), falseFunction);
            }, function(success) {
                return other.cata(falseFunction, equals(success));
            });
        },
        toMaybe: function() {
            return this.isSuccess() ? Some(this.val) : None();
        },
        toEither: function() {
            return (this.isSuccess() ? Right : Left)(this.val);
        },
        toString: function() {
            return (this.isSuccess() ? "Success(" : "Fail(") + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Validation.prototype.fold = Validation.prototype.cata;
    Validation.fn.init.prototype = Validation.fn;
    setType(Validation, TYPES_NAMES.Validation);
    setType(Validation.fn.init, TYPES_NAMES.Validation);
    Validation.isInstance = isInstance(TYPES_NAMES.Validation);
    Validation.isOfType = isOfType(TYPES_NAMES.Validation);
    var Semigroup = Monet.Semigroup = {
        append: function(a, b) {
            if (isFunction(a.concat)) {
                return a.concat(b);
            }
            throw new Error("Couldn't find a semigroup appender in the environment, " + "please specify your own append function");
        }
    };
    var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {
        return new MonadT.fn.init(monad);
    };
    MonadT.of = function(m) {
        return MonadT(m);
    };
    MonadT.fn = MonadT.prototype = {
        init: function(monad) {
            this.monad = monad;
            setType(Validation, TYPES_NAMES.MonadT);
        },
        map: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.map(fn);
            }));
        },
        bind: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.flatMap(fn);
            }));
        },
        ap: function(monadWithFn) {
            return MonadT(this.monad.flatMap(function(v) {
                return monadWithFn.perform().map(function(v2) {
                    return v.ap(v2);
                });
            }));
        },
        perform: function() {
            return this.monad;
        }
    };
    MonadT.fn.init.prototype = MonadT.fn;
    var IO = Monet.IO = Monet.io = function(effectFn) {
        return new IO.fn.init(effectFn);
    };
    IO.of = function(a) {
        return IO(function() {
            return a;
        });
    };
    IO.fn = IO.prototype = {
        init: function(effectFn) {
            if (!isFunction(effectFn)) {
                throw new Error("IO requires a function.");
            }
            this.effectFn = effectFn;
            setType(this, TYPES_NAMES.IO);
        },
        map: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn());
            });
        },
        bind: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn()).run();
            });
        },
        ap: function(ioWithFn) {
            var self = this;
            return ioWithFn.map(function(fn) {
                return fn(self.effectFn());
            });
        },
        apTo: function(ioWithValue) {
            return ioWithValue.ap(this);
        },
        run: function() {
            return this.effectFn();
        }
    };
    IO.fn.init.prototype = IO.fn;
    setType(IO, TYPES_NAMES.IO);
    setType(IO.fn.init, TYPES_NAMES.IO);
    IO.isInstance = isInstance(TYPES_NAMES.IO);
    IO.isOfType = isOfType(TYPES_NAMES.IO);
    IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;
    var Either = Monet.Either = {};
    Either.of = function(a) {
        return Right(a);
    };
    Either.fromTry = function(fn) {
        try {
            return Either.right(fn());
        } catch (e) {
            return Either.left(e);
        }
    };
    Either.fromPromise = function(promise) {
        return promise.then(Either.Right, Either.Left);
    };
    var Right = Either.Right = Either.right = Monet.Right = function(val) {
        return new Either.fn.init(val, true);
    };
    var Left = Either.Left = Either.left = Monet.Left = function(val) {
        return new Either.fn.init(val, false);
    };
    Either.fn = Either.prototype = {
        init: function(val, isRightValue) {
            this.isRightValue = isRightValue;
            this.value = val;
            setType(this, TYPES_NAMES.Either);
        },
        bind: function(fn) {
            return this.isRightValue ? fn(this.value) : this;
        },
        ap: function(eitherWithFn) {
            var self = this;
            return this.isRightValue ? eitherWithFn.map(function(fn) {
                return fn(self.value);
            }) : this;
        },
        apTo: function(eitherWithValue) {
            return eitherWithValue.ap(this);
        },
        leftMap: function(fn) {
            return this.isLeft() ? Left(fn(this.value)) : this;
        },
        isRight: function() {
            return this.isRightValue;
        },
        isLeft: function() {
            return !this.isRight();
        },
        right: function() {
            if (this.isRightValue) {
                return this.value;
            }
            throw new Error("Cannot call right() on a Left.");
        },
        left: function() {
            if (this.isRightValue) {
                throw new Error("Cannot call left() on a Right.");
            }
            return this.value;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(leftFn, rightFn) {
            return this.isRightValue ? rightFn(this.value) : leftFn(this.value);
        },
        catchMap: function(fn) {
            return this.isRight() ? this : fn(this.value);
        },
        swap: function() {
            return this.isRight() ? Left(this.value) : Right(this.value);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachLeft: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Either.isOfType(other) && this.cata(function(left) {
                return other.cata(equals(left), falseFunction);
            }, function(right) {
                return other.cata(falseFunction, equals(right));
            });
        },
        bimap: function(leftFn, rightFn) {
            return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);
        },
        toMaybe: function() {
            return this.isRight() ? Some(this.value) : None();
        },
        toValidation: function() {
            return this.isRight() ? Success(this.value) : Fail(this.value);
        },
        toString: function() {
            return this.cata(function(left) {
                return "Left(" + left + ")";
            }, function(right) {
                return "Right(" + right + ")";
            });
        },
        toPromise: function() {
            return this.cata(function(left) {
                return Promise.reject(left);
            }, function(right) {
                return Promise.resolve(right);
            });
        },
        inspect: function() {
            return this.toString();
        }
    };
    Either.prototype.fold = Either.prototype.cata;
    Either.fn.init.prototype = Either.fn;
    setType(Either, TYPES_NAMES.Either);
    setType(Either.fn.init, TYPES_NAMES.Either);
    Either.isInstance = isInstance(TYPES_NAMES.Either);
    Either.isOfType = isOfType(TYPES_NAMES.Either);
    var Reader = Monet.Reader = function(fn) {
        return new Reader.fn.init(fn);
    };
    Reader.of = function(x) {
        return Reader(function(_) {
            return x;
        });
    };
    Reader.ask = function() {
        return Reader(idFunction);
    };
    Reader.fn = Reader.prototype = {
        init: function(fn) {
            this.f = fn;
            setType(this, TYPES_NAMES.Reader);
        },
        run: function(config) {
            return this.f(config);
        },
        bind: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config)).run(config);
            });
        },
        ap: function(readerWithFn) {
            var self = this;
            return readerWithFn.bind(function(fn) {
                return Reader(function(config) {
                    return fn(self.run(config));
                });
            });
        },
        apTo: function(readerWithValue) {
            return readerWithValue.ap(this);
        },
        map: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config));
            });
        },
        local: function(fn) {
            var self = this;
            return Reader(function(c) {
                return self.run(fn(c));
            });
        }
    };
    Reader.fn.init.prototype = Reader.fn;
    setType(Reader, TYPES_NAMES.Reader);
    setType(Reader.fn.init, TYPES_NAMES.Reader);
    Reader.isInstance = isInstance(TYPES_NAMES.Reader);
    Reader.isOfType = isOfType(TYPES_NAMES.Reader);
    var Free = Monet.Free = {};
    var Suspend = Free.Suspend = Monet.Suspend = function(functor) {
        return new Free.fn.init(functor, true);
    };
    var Return = Free.Return = Monet.Return = function(val) {
        return new Free.fn.init(val, false);
    };
    Free.of = function(a) {
        return Return(a);
    };
    Free.liftF = function(functor) {
        return isFunction(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));
    };
    Free.fn = Free.prototype = {
        init: function(val, isSuspend) {
            this.isSuspend = isSuspend;
            if (isSuspend) {
                this.functor = val;
            } else {
                this.val = val;
            }
            setType(this, TYPES_NAMES.Free);
        },
        run: function() {
            return this.go(function(f) {
                return f();
            });
        },
        bind: function(fn) {
            return this.isSuspend ? isFunction(this.functor) ? Suspend(compose(function(free) {
                return free.bind(fn);
            }, this.functor)) : Suspend(this.functor.map(function(free) {
                return free.bind(fn);
            })) : fn(this.val);
        },
        ap: function(ff) {
            return this.bind(function(x) {
                return ff.map(function(f) {
                    return f(x);
                });
            });
        },
        apTo: function(f) {
            return f.ap(this);
        },
        resume: function() {
            return this.isSuspend ? Left(this.functor) : Right(this.val);
        },
        go1: function(f) {
            function go2(t) {
                return t.resume().cata(function(functor) {
                    return go2(f(functor));
                }, idFunction);
            }
            return go2(this);
        },
        go: function(f) {
            var result = this.resume();
            while (result.isLeft()) {
                var next = f(result.left());
                result = next.resume();
            }
            return result.right();
        }
    };
    Free.fn.init.prototype = Free.fn;
    setType(Free, TYPES_NAMES.Free);
    setType(Free.fn.init, TYPES_NAMES.Free);
    Free.isInstance = isInstance(TYPES_NAMES.Free);
    Free.isOfType = isOfType(TYPES_NAMES.Free);
    function Identity(a) {
        return new Identity.fn.init(a);
    }
    Monet.Identity = Identity;
    Identity.of = function(a) {
        return new Identity(a);
    };
    Identity.fn = Identity.prototype = {
        init: function(val) {
            this.val = val;
            setType(this, TYPES_NAMES.Identity);
        },
        bind: function(fn) {
            return fn(this.val);
        },
        get: function() {
            return this.val;
        },
        forEach: function(fn) {
            fn(this.val);
        },
        equals: function(other) {
            return Identity.isOfType(other) && equals(this.get())(other.get());
        },
        contains: function(val) {
            return areEqual(this.val, val);
        },
        toString: function() {
            return "Identity(" + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        },
        ap: function(applyWithFunction) {
            var value = this.val;
            return applyWithFunction.map(function(fn) {
                return fn(value);
            });
        },
        apTo: function(identityWithValue) {
            return identityWithValue.ap(this);
        },
        toArray: function() {
            return [ this.get() ];
        },
        toList: function() {
            return List(this.get(), Nil);
        },
        toSet: function() {
            return new Set(this);
        }
    };
    Identity.fn.init.prototype = Identity.fn;
    setType(Identity, TYPES_NAMES.Identity);
    setType(Identity.fn.init, TYPES_NAMES.Identity);
    Identity.isInstance = isInstance(TYPES_NAMES.Identity);
    Identity.isOfType = isOfType(TYPES_NAMES.Identity);
    function addFantasyLandAliases(type) {
        [ "equals", "map", "ap", "chain" ].filter(function(method) {
            return isFunction(type.prototype[method]);
        }).forEach(function(method) {
            type.prototype["fantasy-land/" + method] = type.prototype[method];
        });
    }
    function addAliases(type) {
        type.prototype.flatMap = type.prototype.chain = type.prototype.bind;
        type.pure = type.unit = type.of;
        type.prototype.of = type.of;
        if (isFunction(type.prototype.append)) {
            type.prototype.concat = type.prototype.append;
        }
        type.prototype.point = type.prototype.pure = type.prototype.unit = type.prototype.of;
    }
    function addFilterNot(type) {
        if (isFunction(type.prototype.filter)) {
            type.prototype.filterNot = function(fn) {
                return this.filter(function(a) {
                    return !fn(a);
                });
            };
        }
    }
    function addMonadOps(type) {
        type.prototype.join = function() {
            return this.flatMap(idFunction);
        };
        type.map2 = function(fn) {
            return function(ma, mb) {
                return ma.flatMap(function(a) {
                    return mb.map(function(b) {
                        return fn(a, b);
                    });
                });
            };
        };
    }
    function addFunctorOps(type) {
        if (!isFunction(type.prototype.map)) {
            type.prototype.map = function(fn) {
                return this.bind(compose(this.of, fn));
            };
        }
    }
    function addApplicativeOps(type) {
        type.prototype.takeLeft = function(m) {
            return apply2(this, m, function(a, b) {
                return a;
            });
        };
        type.prototype.takeRight = function(m) {
            return apply2(this, m, function(a, b) {
                return b;
            });
        };
    }
    function addCollectionPredicates(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.every = type.prototype.forall = function(fn) {
                return this.toArray().every(fn);
            };
            type.prototype.exists = function(fn) {
                return this.toArray().some(fn);
            };
        }
    }
    function makeIterable(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype[Symbol.iterator] = function() {
                return this.toArray()[Symbol.iterator]();
            };
        }
    }
    function addToOperator(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.to = function(ctor) {
                return ctor(this);
            };
        }
    }
    function decorate(type) {
        addAliases(type);
        addFilterNot(type);
        addMonadOps(type);
        addFunctorOps(type);
        addApplicativeOps(type);
        addCollectionPredicates(type);
        addFantasyLandAliases(type);
        makeIterable(type);
        addToOperator(type);
    }
    decorate(MonadT);
    decorate(Either);
    decorate(Maybe);
    decorate(IO);
    decorate(NEL);
    decorate(List);
    decorate(Validation);
    decorate(Reader);
    decorate(Free);
    decorate(Identity);
    return Monet;
});

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/process/browser.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/react-is/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/shallowequal/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/shallowequal/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "../../node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return Me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "../../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",A="5.3.11",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&(void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development")),P={},O= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},B=function(e){return x.get(e)},z=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e)},M="style["+N+'][data-styled-version="5.3.11"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:undefined},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.11");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=B(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return!1}return!0}var re=te("5.3.11"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),de=(le.Consumer,new X),he=ae();function pe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ce)||de}function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(le)||he}function me(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(le.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(_(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]||r.startsWith("--")?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}finally{console.error=r}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];ke(t)&&ke(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var Me=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Ge=Me.Consumer;function Le(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?y({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Me.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,l=t.componentId,d=void 0===l?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.11"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,h=t.displayName,p=void 0===h?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):h,v=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||d,g=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,N=t.shouldForwardProp;o&&e.shouldForwardProp&&(N=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var A,C=new oe(n,v,o?e.componentStyle:void 0),I=C.isStatic&&0===c.length,P=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,d=e.styledComponentId,h=e.target,p=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),a)||w,t,o),m=p[0],v=p[1],g=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return true&&!t&&r&&r(i),i}(i,r,m, true?e.warnTooManyClasses:undefined),S=n,b=v.$as||t.$as||v.as||t.as||h,_=xe(b),N=v!==t?y({},t,{},v):t,A={};for(var C in N)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?A.as=N[C]:(l?l(C,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],b):!_||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(C))&&(A[C]=N[C]));return t.style&&v.style!==t.style&&(A.style=y({},t.style,{},v.style)),A.className=Array.prototype.concat(c,d,g!==d?g:null,t.className,v.className).filter(Boolean).join(" "),A.ref=S,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(b,A)}(A,e,t,I)};return P.displayName=p,(A=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(P)).attrs=g,A.componentStyle=C,A.displayName=p,A.shouldForwardProp=N,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=v,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:g,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t}}), true&&(Pe(p,v),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(p,v)),Object.defineProperty(A,"toString",{value:function(){return"."+A.styledComponentId}}),i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),X.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(_e(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&X.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function d(e){var t=pe(),n=fe(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),d=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(d,e,t,o,n),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){if(!t.server)return h(d,e,t,o,n),function(){return u.removeStyles(d,t)}}),[d,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=y({},t,{theme:Oe(t,r,d.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(d)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Y();return"<style "+[n&&'nonce="'+n+'"',N+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[N]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",y({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new X({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return D(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+b(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,y({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Me)},Ze={StyleSheet:X,masterSheet:de}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/ControlBar.js":
/*!******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/ControlBar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlBar = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    gap: 4px;\n    justify-content: space-between;\n    margin-top: 6px;\n"], ["\n    display: flex;\n    gap: 4px;\n    justify-content: space-between;\n    margin-top: 6px;\n"])));
var ControlBar = function ControlBar(_a) {
    var onOpenImageSelector = _a.onOpenImageSelector,
        onOpenImageCropper = _a.onOpenImageCropper,
        onDelete = _a.onDelete,
        cropEnabled = _a.cropEnabled,
        selectedImageIdentifier = _a.selectedImageIdentifier;
    return react_1.default.createElement(Container, null, react_1.default.createElement("div", null, react_1.default.createElement(react_ui_components_1.IconButton, { icon: "camera", size: "small", style: "lighter", onClick: onOpenImageSelector }), cropEnabled && react_1.default.createElement(react_ui_components_1.IconButton, { icon: "crop", size: "small", style: "lighter", onClick: onOpenImageCropper, disabled: !selectedImageIdentifier })), react_1.default.createElement(react_ui_components_1.IconButton, { icon: "times", size: "small", style: "lighter", onClick: onDelete, disabled: !selectedImageIdentifier }));
};
exports.ControlBar = ControlBar;
var templateObject_1;
//# sourceMappingURL=ControlBar.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/editorContainer.js":
/*!***********************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/editorContainer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorContainer = void 0;
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.EditorContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin-top: 24px;\n"], ["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    margin-top: 24px;\n"])));
var templateObject_1;
//# sourceMappingURL=editorContainer.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/metaDataInput.js":
/*!*********************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/metaDataInput.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataInput = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));
var debounce_1 = __webpack_require__(/*! ../utils/debounce */ "../asset-with-metadata-editor/lib/utils/debounce.js");
var TextContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n"], ["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n"])));
var debounceAlt = (0, debounce_1.debounce)(300);
var debounceTitle = (0, debounce_1.debounce)(300);
var MetaDataInput = function MetaDataInput(_a) {
    var title = _a.title,
        alt = _a.alt,
        onTitleChange = _a.onTitleChange,
        onAltChange = _a.onAltChange,
        selectedImageIdentifier = _a.selectedImageIdentifier;
    var _b = __read((0, react_1.useState)(''), 2),
        altValue = _b[0],
        setAltValue = _b[1];
    var _c = __read((0, react_1.useState)(''), 2),
        titleValue = _c[0],
        setTitleValue = _c[1];
    (0, react_1.useEffect)(function () {
        setAltValue(alt !== null && alt !== void 0 ? alt : '');
        setTitleValue(title !== null && title !== void 0 ? title : '');
    }, [title, alt]);
    var handleTitleChange = function handleTitleChange(value) {
        if (title === value) return;
        setTitleValue(value);
        debounceTitle(function () {
            onTitleChange(value);
        });
    };
    var handleAltChange = function handleAltChange(value) {
        if (alt === value) return;
        setAltValue(value);
        debounceAlt(function () {
            onAltChange(value);
        });
    };
    return react_1.default.createElement(TextContainer, null, react_1.default.createElement(react_ui_components_1.Label, { htmlFor: "title" }, "Title", react_1.default.createElement(react_ui_components_1.TextInput, { type: "text", id: "title", value: titleValue, onChange: handleTitleChange, disabled: !selectedImageIdentifier })), react_1.default.createElement(react_ui_components_1.Label, { htmlFor: "alt" }, "Alt", react_1.default.createElement(react_ui_components_1.TextInput, { type: "text", id: "alt", value: altValue, onChange: handleAltChange, disabled: !selectedImageIdentifier })));
};
exports.MetaDataInput = MetaDataInput;
var templateObject_1;
//# sourceMappingURL=metaDataInput.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/preview.js":
/*!***************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/preview.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));
var thumbnail_1 = __webpack_require__(/*! ../utils/thumbnail */ "../asset-with-metadata-editor/lib/utils/thumbnail.js");
var IconContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    height: 100%;\n    display: ", ";\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    opacity: 0.7;\n"], ["\n    position: relative;\n    height: 100%;\n    display: ", ";\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    opacity: 0.7;\n"])), function (_a) {
    var show = _a.show;
    return show ? 'flex' : 'none';
});
var CropArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    overflow: hidden;\n    transition: var(--transition-Default) ease-out;\n"], ["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    overflow: hidden;\n    transition: var(--transition-Default) ease-out;\n"])));
var ImageContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    height: ", ";\n    background-color: #141414;\n    border: 1px dashed #323232;\n    border-radius: 2px;\n    padding: 1px;\n    overflow: hidden;\n    transition: var(--transition-Default) ease-out;\n"], ["\n    position: relative;\n    width: 100%;\n    height: ", ";\n    background-color: #141414;\n    border: 1px dashed #323232;\n    border-radius: 2px;\n    padding: 1px;\n    overflow: hidden;\n    transition: var(--transition-Default) ease-out;\n"])), function (_a) {
    var small = _a.small;
    return small ? '72px' : '216px';
});
var Overlay = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    transition: var(--transition-Default) ease-out;\n    border-radius: 2px;\n    cursor: pointer;\n\n    ", "\n"], ["\n    transition: var(--transition-Default) ease-out;\n    border-radius: 2px;\n    cursor: pointer;\n\n    ", "\n"])), function (_a) {
    var hover = _a.hover;
    return hover && "\n        &:hover {\n            height: 100%;\n            width: 100%;\n            background-color: var(--colors-PrimaryBlue);\n        }\n        &:hover ".concat(CropArea, " {\n            opacity: 0.7;\n        }\n\n        &:hover ").concat(ImageContainer, " {\n            background-color: var(--colors-PrimaryBlue);\n        }\n        &:hover ").concat(IconContainer, " {\n            display: flex;\n        }\n    ");
});
var StyledImage = styled_components_1.default.img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    background-color: #fff;\n    background-size: 10px 10px;\n    background-position:\n        0 0,\n        25px 25px;\n    background-image: linear-gradient(\n            45deg,\n            #cccccc 25%,\n            transparent 25%,\n            transparent 75%,\n            #cccccc 75%,\n            #cccccc\n        ),\n        linear-gradient(45deg, #cccccc 25%, transparent 25%, transparent 75%, #cccccc 75%, #cccccc);\n"], ["\n    position: absolute;\n    background-color: #fff;\n    background-size: 10px 10px;\n    background-position:\n        0 0,\n        25px 25px;\n    background-image: linear-gradient(\n            45deg,\n            #cccccc 25%,\n            transparent 25%,\n            transparent 75%,\n            #cccccc 75%,\n            #cccccc\n        ),\n        linear-gradient(45deg, #cccccc 25%, transparent 25%, transparent 75%, #cccccc 75%, #cccccc);\n"])));
var Preview = function Preview(_a) {
    var image = _a.image,
        onClick = _a.onClick,
        small = _a.small;
    var thumbnail = image ? thumbnail_1.Thumbnail.fromImageData(image, small ? 83 : 273, small ? 72 : 216) : null;
    return react_1.default.createElement(Overlay, { onClick: onClick, hover: Boolean(onClick) }, react_1.default.createElement(ImageContainer, { small: small }, react_1.default.createElement(IconContainer, { show: !thumbnail }, react_1.default.createElement(react_ui_components_1.Icon, { icon: "camera", size: small ? '3xl' : '5x', mask: ['fas', 'circle'], transform: "shrink-8" })), thumbnail && react_1.default.createElement(CropArea, { style: thumbnail.styles.cropArea }, react_1.default.createElement(StyledImage, { style: thumbnail.styles.thumbnail, src: thumbnail.uri, alt: "Preview" }))));
};
exports.Preview = Preview;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=preview.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/previewGrid.js":
/*!*******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/previewGrid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewGrid = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js"));
var preview_1 = __webpack_require__(/*! ./preview */ "../asset-with-metadata-editor/lib/components/preview.js");
var Grid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 4px;\n    width: 100%;\n"], ["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 4px;\n    width: 100%;\n"])));
var GridItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    border: 1px solid ", ";\n"], ["\n    width: 100%;\n    height: 100%;\n    border: 1px solid ", ";\n"])), function (_a) {
    var selected = _a.selected;
    return selected ? 'var(--colors-PrimaryBlue)' : 'transparent';
});
var PreviewGrid = function PreviewGrid(_a) {
    var images = _a.images,
        selectedImageIdentifier = _a.selectedImageIdentifier,
        onSelect = _a.onSelect,
        onEmptyPreviewClick = _a.onEmptyPreviewClick;
    return react_1.default.createElement(Grid, null, images.length === 0 && react_1.default.createElement(preview_1.Preview, { small: true, onClick: onEmptyPreviewClick }), images.map(function (image) {
        return react_1.default.createElement(GridItem, { key: image.object.__identity, selected: selectedImageIdentifier === image.object.__identity, onClick: function onClick() {
                return onSelect(image.object.__identity);
            } }, react_1.default.createElement(preview_1.Preview, { image: image, small: true }));
    }));
};
exports.PreviewGrid = PreviewGrid;
var templateObject_1, templateObject_2;
//# sourceMappingURL=previewGrid.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/editors/collectionEditor.js":
/*!*********************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/editors/collectionEditor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionEditor = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var ControlBar_1 = __webpack_require__(/*! ../components/ControlBar */ "../asset-with-metadata-editor/lib/components/ControlBar.js");
var editorContainer_1 = __webpack_require__(/*! ../components/editorContainer */ "../asset-with-metadata-editor/lib/components/editorContainer.js");
var metaDataInput_1 = __webpack_require__(/*! ../components/metaDataInput */ "../asset-with-metadata-editor/lib/components/metaDataInput.js");
var previewGrid_1 = __webpack_require__(/*! ../components/previewGrid */ "../asset-with-metadata-editor/lib/components/previewGrid.js");
var useImageMetaDataCollection_1 = __webpack_require__(/*! ../hooks/useImageMetaDataCollection */ "../asset-with-metadata-editor/lib/hooks/useImageMetaDataCollection.js");
var constants_1 = __webpack_require__(/*! ../utils/constants */ "../asset-with-metadata-editor/lib/utils/constants.js");
var getCropAdjustments_1 = __webpack_require__(/*! ../utils/getCropAdjustments */ "../asset-with-metadata-editor/lib/utils/getCropAdjustments.js");
var image_1 = __webpack_require__(/*! ../utils/image */ "../asset-with-metadata-editor/lib/utils/image.js");
var CollectionEditor = function CollectionEditor(_a) {
    var _b, _c;
    var _d = _a.value,
        valueExtern = _d === void 0 ? [] : _d,
        globalRegistry = _a.neos.globalRegistry,
        renderSecondaryInspector = _a.renderSecondaryInspector,
        editorOptions = _a.options,
        commit = _a.commit;
    var imagesIdentifiers = (0, react_1.useMemo)(function () {
        return valueExtern.map(function (v) {
            return v.asset.__identifier;
        });
    }, [valueExtern]);
    var imageMetadataCollection = (0, useImageMetaDataCollection_1.useImageMetadataCollection)(imagesIdentifiers);
    var valueRef = (0, react_1.useRef)(valueExtern);
    var _e = __read((0, react_1.useState)((_b = valueExtern[0]) === null || _b === void 0 ? void 0 : _b.asset.__identifier), 2),
        selectedImageIdentifier = _e[0],
        setSelectedImageIdentifier = _e[1];
    var selectedImage = valueExtern.find(function (v) {
        return v.asset.__identifier === selectedImageIdentifier;
    });
    (0, react_1.useEffect)(function () {
        valueRef.current = valueExtern;
    }, [valueExtern]);
    var getImageMetadata = (0, react_1.useCallback)(function (assetIdentifier) {
        return imageMetadataCollection.find(function (image) {
            return image.object.__identity === assetIdentifier;
        });
    }, [imageMetadataCollection]);
    var handleDelete = function handleDelete() {
        var _a;
        if (!selectedImageIdentifier) return;
        var filteredValues = valueExtern.filter(function (v) {
            return v.asset.__identifier !== selectedImageIdentifier;
        });
        commit(filteredValues);
        setSelectedImageIdentifier((_a = filteredValues[0]) === null || _a === void 0 ? void 0 : _a.asset.__identifier);
    };
    var handleAltChange = function handleAltChange(alt) {
        if (!selectedImageIdentifier) return;
        var updatedImages = valueExtern.map(function (image) {
            if (image.asset.__identifier !== selectedImageIdentifier) return image;
            return __assign(__assign({}, image), { alt: alt });
        });
        commit(updatedImages);
    };
    var handleTitleChange = function handleTitleChange(title) {
        if (!selectedImageIdentifier) return;
        var updatedImages = valueExtern.map(function (image) {
            if (image.asset.__identifier !== selectedImageIdentifier) return image;
            return __assign(__assign({}, image), { title: title });
        });
        commit(updatedImages);
    };
    var handleMediaSelection = function handleMediaSelection(assetIdentifier) {
        commit(__spreadArray(__spreadArray([], __read(valueRef.current), false), [{
            asset: { __identifier: assetIdentifier, __flow_object_type: constants_1.MEDIA_TYPE_IMAGE },
            title: '',
            alt: ''
        }], false));
    };
    var handleMediaCrop = function handleMediaCrop(cropArea) {
        if (!selectedImageIdentifier) return;
        var imageMetadata = getImageMetadata(selectedImageIdentifier);
        if (!imageMetadata) return;
        var _a = (0, getCropAdjustments_1.getCropAdjustments)(imageMetadata, cropArea),
            changed = _a.changed,
            cropAdjustments = _a.cropAdjustments;
        if (!changed) return;
        commit(valueExtern, cropAdjustments);
    };
    var handleOpenMediaSelection = function handleOpenMediaSelection() {
        var _a;
        var MediaSelectionScreen = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen').component;
        var constraints = __assign(__assign({}, editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints), { mediaTypes: ((_a = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints) === null || _a === void 0 ? void 0 : _a.mediaTypes) || ['image/*'] });
        renderSecondaryInspector('IMAGE_SELECT_MEDIA', function () {
            return react_1.default.createElement(MediaSelectionScreen, { type: "images", constraints: constraints, onComplete: handleMediaSelection });
        });
    };
    var handleOpenImageCropper = function handleOpenImageCropper() {
        var ImageCropper = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/ImageCropper').component;
        var image = getImageMetadata(selectedImageIdentifier);
        if (!image) return;
        renderSecondaryInspector('IMAGE_CROP', function () {
            var _a, _b, _c;
            return react_1.default.createElement(ImageCropper, { sourceImage: image_1.Image.fromImageData(image), options: {
                    crop: __assign(__assign({}, editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop), { aspectRatio: __assign(__assign({}, (_a = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop) === null || _a === void 0 ? void 0 : _a.aspectRatio), { options: ((_c = (_b = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop) === null || _b === void 0 ? void 0 : _b.aspectRatio) === null || _c === void 0 ? void 0 : _c.options) || {} }) })
                }, onComplete: handleMediaCrop });
        });
    };
    var images = (0, react_1.useMemo)(function () {
        return valueExtern.map(function (v) {
            return getImageMetadata(v.asset.__identifier);
        }).filter(Boolean);
    }, [valueExtern, getImageMetadata]);
    return react_1.default.createElement(editorContainer_1.EditorContainer, null, react_1.default.createElement(previewGrid_1.PreviewGrid, { images: images, selectedImageIdentifier: selectedImageIdentifier, onSelect: setSelectedImageIdentifier, onEmptyPreviewClick: handleOpenMediaSelection }), react_1.default.createElement(metaDataInput_1.MetaDataInput, { alt: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.alt, title: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.title, selectedImageIdentifier: selectedImageIdentifier, onAltChange: handleAltChange, onTitleChange: handleTitleChange }), react_1.default.createElement(ControlBar_1.ControlBar, { cropEnabled: Boolean((_c = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.features) === null || _c === void 0 ? void 0 : _c.crop), selectedImageIdentifier: selectedImageIdentifier, onOpenImageSelector: handleOpenMediaSelection, onOpenImageCropper: handleOpenImageCropper, onDelete: handleDelete }));
};
exports.CollectionEditor = CollectionEditor;
//# sourceMappingURL=collectionEditor.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/editors/editor.js":
/*!***********************************************************!*\
  !*** ../asset-with-metadata-editor/lib/editors/editor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var ControlBar_1 = __webpack_require__(/*! ../components/ControlBar */ "../asset-with-metadata-editor/lib/components/ControlBar.js");
var editorContainer_1 = __webpack_require__(/*! ../components/editorContainer */ "../asset-with-metadata-editor/lib/components/editorContainer.js");
var metaDataInput_1 = __webpack_require__(/*! ../components/metaDataInput */ "../asset-with-metadata-editor/lib/components/metaDataInput.js");
var preview_1 = __webpack_require__(/*! ../components/preview */ "../asset-with-metadata-editor/lib/components/preview.js");
var useImageMetadata_1 = __webpack_require__(/*! ../hooks/useImageMetadata */ "../asset-with-metadata-editor/lib/hooks/useImageMetadata.js");
var constants_1 = __webpack_require__(/*! ../utils/constants */ "../asset-with-metadata-editor/lib/utils/constants.js");
var getCropAdjustments_1 = __webpack_require__(/*! ../utils/getCropAdjustments */ "../asset-with-metadata-editor/lib/utils/getCropAdjustments.js");
var image_1 = __webpack_require__(/*! ../utils/image */ "../asset-with-metadata-editor/lib/utils/image.js");
var Editor = function Editor(_a) {
    var _b;
    var valueExtern = _a.value,
        globalRegistry = _a.neos.globalRegistry,
        renderSecondaryInspector = _a.renderSecondaryInspector,
        editorOptions = _a.options,
        hooks = _a.hooks,
        commit = _a.commit;
    var imageMetadata = (0, useImageMetadata_1.useImageMetadata)(valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.asset.__identifier);
    var valueRef = (0, react_1.useRef)(valueExtern);
    (0, react_1.useEffect)(function () {
        var _a, _b, _c;
        if ((valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.asset.__identifier) !== ((_b = (_a = valueRef.current) === null || _a === void 0 ? void 0 : _a.asset) === null || _b === void 0 ? void 0 : _b.__identifier) && ((_c = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop) === null || _c === void 0 ? void 0 : _c.aspectRatio.forceCrop)) {
            handleOpenImageCropper();
        }
        valueRef.current = valueExtern;
    }, [valueExtern]);
    var getImageMeta = function getImageMeta() {
        if (!hooks) return imageMetadata;
        var croppedImage = hooks[constants_1.HOOK_BEFORE_SAVE];
        if (!croppedImage) return imageMetadata;
        return croppedImage;
    };
    var handleCloseSecondaryScreen = function handleCloseSecondaryScreen() {
        renderSecondaryInspector(undefined, undefined);
    };
    var handleMediaSelection = function handleMediaSelection(assetIdentifier) {
        commit({
            asset: { __identifier: assetIdentifier, __flow_object_type: constants_1.MEDIA_TYPE_IMAGE },
            title: '',
            alt: ''
        });
        handleCloseSecondaryScreen();
    };
    var handleMediaCrop = function handleMediaCrop(cropArea) {
        if (!imageMetadata) return;
        var _a = (0, getCropAdjustments_1.getCropAdjustments)(imageMetadata, cropArea),
            changed = _a.changed,
            cropAdjustments = _a.cropAdjustments;
        if (!changed) return;
        commit(valueExtern, cropAdjustments);
    };
    var handleOpenMediaSelection = function handleOpenMediaSelection() {
        var _a;
        var MediaSelectionScreen = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen').component;
        var constraints = __assign(__assign({}, editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints), { mediaTypes: ((_a = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints) === null || _a === void 0 ? void 0 : _a.mediaTypes) || ['image/*'] });
        renderSecondaryInspector('IMAGE_SELECT_MEDIA', function () {
            return react_1.default.createElement(MediaSelectionScreen, { type: "images", constraints: constraints, onComplete: handleMediaSelection });
        });
    };
    var handleOpenImageCropper = function handleOpenImageCropper() {
        var ImageCropper = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/ImageCropper').component;
        var image = getImageMeta();
        console.log('image', image);
        if (!image) return;
        renderSecondaryInspector('IMAGE_CROP', function () {
            var _a, _b, _c;
            return react_1.default.createElement(ImageCropper, { sourceImage: image_1.Image.fromImageData(image), options: {
                    crop: __assign(__assign({}, editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop), { aspectRatio: __assign(__assign({}, (_a = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop) === null || _a === void 0 ? void 0 : _a.aspectRatio), { options: ((_c = (_b = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.crop) === null || _b === void 0 ? void 0 : _b.aspectRatio) === null || _c === void 0 ? void 0 : _c.options) || {} }) })
                }, onComplete: handleMediaCrop });
        });
    };
    return react_1.default.createElement(editorContainer_1.EditorContainer, null, react_1.default.createElement(preview_1.Preview, { image: valueExtern && getImageMeta(), onClick: handleOpenMediaSelection }), react_1.default.createElement(metaDataInput_1.MetaDataInput, { alt: valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.alt, title: valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.title, selectedImageIdentifier: valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.asset.__identifier, onAltChange: function onAltChange(alt) {
            return valueExtern && commit(__assign(__assign({}, valueExtern), { alt: alt }), hooks);
        }, onTitleChange: function onTitleChange(title) {
            return valueExtern && commit(__assign(__assign({}, valueExtern), { title: title }), hooks);
        } }), react_1.default.createElement(ControlBar_1.ControlBar, { onOpenImageSelector: handleOpenMediaSelection, onOpenImageCropper: handleOpenImageCropper, onDelete: function onDelete() {
            return commit();
        }, cropEnabled: Boolean((_b = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.features) === null || _b === void 0 ? void 0 : _b.crop), selectedImageIdentifier: valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.asset.__identifier }));
};
exports.Editor = Editor;
//# sourceMappingURL=editor.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/hooks/useImageMetaDataCollection.js":
/*!*****************************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/hooks/useImageMetaDataCollection.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageMetadataCollection = void 0;
var react_1 = __webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
var getImageMetaData_1 = __webpack_require__(/*! ../utils/getImageMetaData */ "../asset-with-metadata-editor/lib/utils/getImageMetaData.js");
var metadataCache = new Map();
var useImageMetadataCollection = function useImageMetadataCollection(assetIdentifiers) {
    var _a = __read((0, react_1.useState)([]), 2),
        imageMetadata = _a[0],
        setImageMetadata = _a[1];
    (0, react_1.useEffect)(function () {
        if (assetIdentifiers.length === 0) return;
        var cachedMetadata = assetIdentifiers.filter(function (assetIdentifier) {
            return metadataCache.has(assetIdentifier);
        }).map(function (assetIdentifier) {
            return metadataCache.get(assetIdentifier);
        });
        var uncachedMetadataIdentifiers = assetIdentifiers.filter(function (assetIdentifier) {
            return !metadataCache.has(assetIdentifier);
        });
        var imageMetadataPromises = uncachedMetadataIdentifiers.map(function (assetIdentifier) {
            return (0, getImageMetaData_1.getImageMetaData)(assetIdentifier);
        });
        var fn = function fn() {
            return __awaiter(void 0, void 0, void 0, function () {
                var image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4, Promise.all(imageMetadataPromises)];
                        case 1:
                            image = _a.sent();
                            image.forEach(function (metadata) {
                                return metadataCache.set(metadata.object.__identity, metadata);
                            });
                            setImageMetadata(__spreadArray(__spreadArray([], __read(cachedMetadata), false), __read(image), false));
                            return [2];
                    }
                });
            });
        };
        fn();
    }, [assetIdentifiers]);
    return imageMetadata;
};
exports.useImageMetadataCollection = useImageMetadataCollection;
//# sourceMappingURL=useImageMetaDataCollection.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/hooks/useImageMetadata.js":
/*!*******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/hooks/useImageMetadata.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageMetadata = void 0;
var react_1 = __webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
var getImageMetaData_1 = __webpack_require__(/*! ../utils/getImageMetaData */ "../asset-with-metadata-editor/lib/utils/getImageMetaData.js");
var useImageMetadata = function useImageMetadata(assetIdentifier) {
    var _a = __read((0, react_1.useState)(), 2),
        imageMetadata = _a[0],
        setImageMetadata = _a[1];
    (0, react_1.useEffect)(function () {
        if (!assetIdentifier) return;
        var fn = function fn() {
            return __awaiter(void 0, void 0, void 0, function () {
                var image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4, (0, getImageMetaData_1.getImageMetaData)(assetIdentifier)];
                        case 1:
                            image = _a.sent();
                            setImageMetadata(image);
                            return [2];
                    }
                });
            });
        };
        fn();
    }, [assetIdentifier]);
    return imageMetadata;
};
exports.useImageMetadata = useImageMetadata;
//# sourceMappingURL=useImageMetadata.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/index.js":
/*!**************************************************!*\
  !*** ../asset-with-metadata-editor/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAssetWithMetadataEditor = void 0;
var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var collectionEditor_1 = __webpack_require__(/*! ./editors/collectionEditor */ "../asset-with-metadata-editor/lib/editors/collectionEditor.js");
var editor_1 = __webpack_require__(/*! ./editors/editor */ "../asset-with-metadata-editor/lib/editors/editor.js");
var backend_1 = __webpack_require__(/*! ./neos-bridge/backend */ "../asset-with-metadata-editor/lib/neos-bridge/backend.js");
var constants_1 = __webpack_require__(/*! ./utils/constants */ "../asset-with-metadata-editor/lib/utils/constants.js");
function registerAssetWithMetadataEditor(globalRegistry) {
    var _this = this;
    var _a;
    var inspectorRegistry = globalRegistry.get('inspector');
    var saveHooksRegistry = (_a = globalRegistry.get('inspector')) === null || _a === void 0 ? void 0 : _a.get('saveHooks');
    var createImageVariant = (0, backend_1.endpoints)().createImageVariant;
    if (!inspectorRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }
    var editorsRegistry = inspectorRegistry.get('editors');
    if (!editorsRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector editors registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }
    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor', {
        component: function component(props) {
            console.log('Editor Props', props);
            return React.createElement(editor_1.Editor, __assign({}, props));
        }
    });
    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataCollectionEditor', {
        component: function component(props) {
            console.log('Editor Props', props);
            return React.createElement(collectionEditor_1.CollectionEditor, __assign({}, props));
        }
    });
    saveHooksRegistry === null || saveHooksRegistry === void 0 ? void 0 : saveHooksRegistry.set(constants_1.HOOK_BEFORE_SAVE, function (value, options) {
        return __awaiter(_this, void 0, void 0, function () {
            var _a, __identity, adjustments, imageVariant;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options.object, __identity = _a.__identity, adjustments = _a.adjustments;
                        if (!__identity) throw new Error('Received malformed originalImageUuid.');
                        if (!adjustments) throw new Error('Received malformed adjustments.');
                        return [4, createImageVariant(__identity, adjustments)];
                    case 1:
                        imageVariant = _b.sent();
                        return [2, __assign(__assign({}, value), { asset: {
                                __identifier: imageVariant.__identity,
                                __flow_object_type: imageVariant.__type
                            } })];
                }
            });
        });
    });
}
exports.registerAssetWithMetadataEditor = registerAssetWithMetadataEditor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/neos-bridge/backend.js":
/*!****************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/neos-bridge/backend.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
var neos_ui_backend_connector_1 = __importDefault(__webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js"));
var endpoints = function endpoints() {
    return neos_ui_backend_connector_1.default.get().endpoints;
};
exports.endpoints = endpoints;
//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/constants.js":
/*!************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/constants.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.HOOK_BEFORE_SAVE = exports.MEDIA_TYPE_IMAGE = void 0;
exports.MEDIA_TYPE_IMAGE = 'Neos\\Media\\Domain\\Model\\Image';
exports.HOOK_BEFORE_SAVE = 'Neos.UI:Hook.BeforeSave.CreateImageVariantWithMetadata';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/debounce.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var debounce = function debounce(timer) {
    var timeoutId = null;
    return function (fn) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            fn();
        }, timer);
    };
};
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/getCropAdjustments.js":
/*!*********************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/getCropAdjustments.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCropAdjustments = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "../asset-with-metadata-editor/lib/utils/constants.js");
var getCropAdjustments = function getCropAdjustments(imageMetadata, cropArea) {
    var _a;
    var _b, _c, _d;
    if (!imageMetadata) return {
        changed: false,
        cropAdjustments: null
    };
    var imageWidth = imageMetadata.originalDimensions.width;
    var imageHeight = imageMetadata.originalDimensions.height;
    var currentCropAdjustments = (_c = (_b = imageMetadata === null || imageMetadata === void 0 ? void 0 : imageMetadata.object) === null || _b === void 0 ? void 0 : _b.adjustments) === null || _c === void 0 ? void 0 : _c['Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment'];
    var nextCropAdjustments = {
        x: Math.round(cropArea.x / 100 * imageWidth),
        y: Math.round(cropArea.y / 100 * imageHeight),
        width: Math.round(cropArea.width / 100 * imageWidth),
        height: Math.round(cropArea.height / 100 * imageHeight)
    };
    var cropAdjustmentsHaveChanged = !currentCropAdjustments || currentCropAdjustments.x !== nextCropAdjustments.x || currentCropAdjustments.y !== nextCropAdjustments.y || currentCropAdjustments.width !== nextCropAdjustments.width || currentCropAdjustments.height !== nextCropAdjustments.height;
    if (!cropAdjustmentsHaveChanged) return {
        changed: false,
        cropAdjustments: nextCropAdjustments
    };
    var nextImage = __assign(__assign({}, imageMetadata), { object: __assign(__assign({}, imageMetadata.object), { adjustments: __assign(__assign({}, (_d = imageMetadata.object) === null || _d === void 0 ? void 0 : _d.adjustments), { 'Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment': nextCropAdjustments }) }) });
    return {
        changed: true,
        cropAdjustments: (_a = {}, _a[constants_1.HOOK_BEFORE_SAVE] = nextImage, _a)
    };
};
exports.getCropAdjustments = getCropAdjustments;
//# sourceMappingURL=getCropAdjustments.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/getImageMetaData.js":
/*!*******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/getImageMetaData.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageMetaData = void 0;
var backend_1 = __webpack_require__(/*! ../neos-bridge/backend */ "../asset-with-metadata-editor/lib/neos-bridge/backend.js");
var getImageMetaData = function getImageMetaData(assetIdentifier) {
    return __awaiter(void 0, void 0, void 0, function () {
        var loadImageMetadata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loadImageMetadata = (0, backend_1.endpoints)().loadImageMetadata;
                    return [4, loadImageMetadata(assetIdentifier)];
                case 1:
                    return [2, _a.sent()];
            }
        });
    });
};
exports.getImageMetaData = getImageMetaData;
//# sourceMappingURL=getImageMetaData.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/image.js":
/*!********************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/image.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var monet_1 = __webpack_require__(/*! monet */ "../../node_modules/monet/dist/monet.js");
var extractOriginalDimensions = function extractOriginalDimensions(image) {
    var _a, _b;
    return {
        width: (_a = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _a === void 0 ? void 0 : _a.width,
        height: (_b = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _b === void 0 ? void 0 : _b.height
    };
};
var extractPreviewDimensions = function extractPreviewDimensions(image) {
    var _a, _b;
    return {
        width: (_a = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _a === void 0 ? void 0 : _a.width,
        height: (_b = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _b === void 0 ? void 0 : _b.height
    };
};
var Image = function () {
    function Image(image) {
        this.image = image;
    }
    Object.defineProperty(Image.prototype, "previewUri", {
        get: function get() {
            var image = this.image;
            return image === null || image === void 0 ? void 0 : image.previewImageResourceUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewScalingFactor", {
        get: function get() {
            var _a, _b;
            var image = this.image;
            return ((_a = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _a === void 0 ? void 0 : _a.width) / ((_b = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _b === void 0 ? void 0 : _b.width);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "dimensions", {
        get: function get() {
            var image = this.image;
            return extractOriginalDimensions(image);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "aspectRatio", {
        get: function get() {
            var _a = this.dimensions,
                width = _a.width,
                height = _a.height;
            return width / height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewDimensions", {
        get: function get() {
            var image = this.image;
            return extractPreviewDimensions(image);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "cropAdjustment", {
        get: function get() {
            var _a, _b, _c;
            var image = this.image;
            return monet_1.Maybe.fromNull((_c = (_b = (_a = image === null || image === void 0 ? void 0 : image.object) === null || _a === void 0 ? void 0 : _a.adjustments) === null || _b === void 0 ? void 0 : _b['Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment']) !== null && _c !== void 0 ? _c : null);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "cropAspectRatio", {
        get: function get() {
            return this.cropAdjustment.map(function (c) {
                return c.width / c.height;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewCropAdjustment", {
        get: function get() {
            var _a = this,
                cropAdjustment = _a.cropAdjustment,
                previewScalingFactor = _a.previewScalingFactor;
            return cropAdjustment.map(function (cropAdjustment) {
                return Object.fromEntries(Object.entries(cropAdjustment).map(function (_a) {
                    var _b = __read(_a, 2),
                        key = _b[0],
                        value = _b[1];
                    return [key, value * previewScalingFactor];
                }));
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "resizeAdjustment", {
        get: function get() {
            var _a, _b, _c;
            var image = this.image;
            return monet_1.Maybe.fromNull((_c = (_b = (_a = image === null || image === void 0 ? void 0 : image.object) === null || _a === void 0 ? void 0 : _a.adjustments) === null || _b === void 0 ? void 0 : _b['Neos\\Media\\Domain\\Model\\Adjustment\\ResizeImageAdjustment']) !== null && _c !== void 0 ? _c : null);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewResizeAdjustment", {
        get: function get() {
            var _a = this,
                resizeAdjustment = _a.resizeAdjustment,
                previewScalingFactor = _a.previewScalingFactor;
            return resizeAdjustment.map(function (resizeAdjustment) {
                return Object.fromEntries(Object.entries(resizeAdjustment).map(function (_a) {
                    var _b = __read(_a, 2),
                        key = _b[0],
                        value = _b[1];
                    return [key, value * previewScalingFactor];
                }));
            });
        },
        enumerable: false,
        configurable: true
    });
    Image.fromImageData = function (imageData) {
        return new Image(imageData);
    };
    return Image;
}();
exports.Image = Image;
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/thumbnail.js":
/*!************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/thumbnail.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumbnail = void 0;
var image_1 = __webpack_require__(/*! ./image */ "../asset-with-metadata-editor/lib/utils/image.js");
var DEFAULT_OFFSET = { x: 0, y: 0 };
var Thumbnail = function () {
    function Thumbnail(image, width, height) {
        this.image = new image_1.Image(image);
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Thumbnail.prototype, "uri", {
        get: function get() {
            var previewUri = this.image.previewUri;
            return previewUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thumbnail.prototype, "scalingFactor", {
        get: function get() {
            var image = this.image;
            var _a = image.previewCropAdjustment.orSome(image.previewDimensions),
                width = _a.width,
                height = _a.height;
            var byWidth = this.width / width;
            var byHeight = this.height / height;
            return Math.min(byWidth, byHeight);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thumbnail.prototype, "dimensions", {
        get: function get() {
            var _a = this,
                image = _a.image,
                scalingFactor = _a.scalingFactor;
            var _b = image.previewDimensions,
                width = _b.width,
                height = _b.height;
            return {
                width: width * scalingFactor,
                height: height * scalingFactor
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thumbnail.prototype, "cropDimensions", {
        get: function get() {
            var _a = this,
                image = _a.image,
                scalingFactor = _a.scalingFactor;
            var _b = image.previewCropAdjustment.orSome(image.previewDimensions),
                width = _b.width,
                height = _b.height;
            return {
                width: width * scalingFactor,
                height: height * scalingFactor
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thumbnail.prototype, "styles", {
        get: function get() {
            var _a = this,
                dimensions = _a.dimensions,
                cropDimensions = _a.cropDimensions,
                scalingFactor = _a.scalingFactor;
            var _b = this.image.previewCropAdjustment.orSome(DEFAULT_OFFSET),
                x = _b.x,
                y = _b.y;
            return {
                thumbnail: {
                    width: "".concat(dimensions.width, "px"),
                    height: "".concat(dimensions.height, "px"),
                    left: "-".concat(x * scalingFactor, "px"),
                    top: "-".concat(y * scalingFactor, "px")
                },
                cropArea: {
                    width: "".concat(cropDimensions.width, "px"),
                    height: "".concat(cropDimensions.height, "px")
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Thumbnail.fromImageData = function (imageData, width, height) {
        return new Thumbnail(imageData, width, height);
    };
    return Thumbnail;
}();
exports.Thumbnail = Thumbnail;
//# sourceMappingURL=thumbnail.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _kaleidoscopeValueobjectsAssetWithMetadataEditor = __webpack_require__(/*! @sitegeist/kaleidoscope-valueobjects-asset-with-metadata-editor */ "../asset-with-metadata-editor/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('@sitegeist/kaleidoscope-valueobjects-plugin', {}, function (globalRegistry) {
    (0, _kaleidoscopeValueobjectsAssetWithMetadataEditor.registerAssetWithMetadataEditor)(globalRegistry);
});

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map