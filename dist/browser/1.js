var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/console-table-printer/dist/src/utils/colored-console-line.js
var require_colored_console_line = __commonJS({
  "node_modules/console-table-printer/dist/src/utils/colored-console-line.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_COLOR_MAP = void 0;
    exports.DEFAULT_COLOR_MAP = {
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
      cyan: "\x1B[36m",
      white: "\x1B[37m",
      crimson: "\x1B[38m",
      white_bold: "\x1B[01m",
      reset: "\x1B[0m"
    };
    var ColoredConsoleLine = class {
      constructor(colorMap = exports.DEFAULT_COLOR_MAP) {
        this.text = "";
        this.colorMap = colorMap;
      }
      addCharsWithColor(color, text) {
        const colorAnsi = this.colorMap[color];
        this.text += colorAnsi !== void 0 ? `${colorAnsi}${text}${this.colorMap.reset}` : text;
      }
      renderConsole() {
        return this.text;
      }
    };
    exports.default = ColoredConsoleLine;
  }
});

// node_modules/console-table-printer/dist/src/utils/table-constants.js
var require_table_constants = __commonJS({
  "node_modules/console-table-printer/dist/src/utils/table-constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_HEADER_ALIGNMENT = exports.DEFAULT_ROW_ALIGNMENT = exports.DEFAULT_HEADER_FONT_COLOR = exports.DEFAULT_ROW_FONT_COLOR = exports.COLORS = exports.ALIGNMENTS = exports.DEFAULT_TABLE_STYLE = exports.DEFAULT_ROW_SEPARATOR = exports.DEFAULT_COLUMN_LEN = void 0;
    exports.DEFAULT_COLUMN_LEN = 20;
    exports.DEFAULT_ROW_SEPARATOR = false;
    exports.DEFAULT_TABLE_STYLE = {
      headerTop: {
        left: "\u250C",
        mid: "\u252C",
        right: "\u2510",
        other: "\u2500"
      },
      headerBottom: {
        left: "\u251C",
        mid: "\u253C",
        right: "\u2524",
        other: "\u2500"
      },
      tableBottom: {
        left: "\u2514",
        mid: "\u2534",
        right: "\u2518",
        other: "\u2500"
      },
      vertical: "\u2502",
      rowSeparator: {
        left: "\u251C",
        mid: "\u253C",
        right: "\u2524",
        other: "\u2500"
      }
    };
    exports.ALIGNMENTS = ["right", "left", "center"];
    exports.COLORS = [
      "red",
      "green",
      "yellow",
      "white",
      "blue",
      "magenta",
      "cyan",
      "crimson",
      "white_bold",
      "reset"
    ];
    exports.DEFAULT_ROW_FONT_COLOR = "white";
    exports.DEFAULT_HEADER_FONT_COLOR = "white_bold";
    exports.DEFAULT_ROW_ALIGNMENT = "right";
    exports.DEFAULT_HEADER_ALIGNMENT = "center";
  }
});

// node_modules/console-table-printer/dist/src/internalTable/input-converter.js
var require_input_converter = __commonJS({
  "node_modules/console-table-printer/dist/src/internalTable/input-converter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rawColumnToInternalColumn = exports.objIfExists = void 0;
    var table_constants_1 = require_table_constants();
    var objIfExists = (key, val) => {
      if (!val) {
        return {};
      }
      return {
        [key]: val
      };
    };
    exports.objIfExists = objIfExists;
    var rawColumnToInternalColumn = (column) => Object.assign(Object.assign(Object.assign(Object.assign({ name: column.name, title: column.title || column.name }, (0, exports.objIfExists)("color", column.color)), (0, exports.objIfExists)("maxLen", column.maxLen)), (0, exports.objIfExists)("minLen", column.minLen)), { alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT });
    exports.rawColumnToInternalColumn = rawColumnToInternalColumn;
  }
});

// node_modules/simple-wcswidth/dist/src/non-spacing-chars.js
var require_non_spacing_chars = __commonJS({
  "node_modules/simple-wcswidth/dist/src/non-spacing-chars.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var combining = [
      { first: 768, last: 879 },
      { first: 1155, last: 1158 },
      { first: 1160, last: 1161 },
      { first: 1425, last: 1469 },
      { first: 1471, last: 1471 },
      { first: 1473, last: 1474 },
      { first: 1476, last: 1477 },
      { first: 1479, last: 1479 },
      { first: 1536, last: 1539 },
      { first: 1552, last: 1557 },
      { first: 1611, last: 1630 },
      { first: 1648, last: 1648 },
      { first: 1750, last: 1764 },
      { first: 1767, last: 1768 },
      { first: 1770, last: 1773 },
      { first: 1807, last: 1807 },
      { first: 1809, last: 1809 },
      { first: 1840, last: 1866 },
      { first: 1958, last: 1968 },
      { first: 2027, last: 2035 },
      { first: 2305, last: 2306 },
      { first: 2364, last: 2364 },
      { first: 2369, last: 2376 },
      { first: 2381, last: 2381 },
      { first: 2385, last: 2388 },
      { first: 2402, last: 2403 },
      { first: 2433, last: 2433 },
      { first: 2492, last: 2492 },
      { first: 2497, last: 2500 },
      { first: 2509, last: 2509 },
      { first: 2530, last: 2531 },
      { first: 2561, last: 2562 },
      { first: 2620, last: 2620 },
      { first: 2625, last: 2626 },
      { first: 2631, last: 2632 },
      { first: 2635, last: 2637 },
      { first: 2672, last: 2673 },
      { first: 2689, last: 2690 },
      { first: 2748, last: 2748 },
      { first: 2753, last: 2757 },
      { first: 2759, last: 2760 },
      { first: 2765, last: 2765 },
      { first: 2786, last: 2787 },
      { first: 2817, last: 2817 },
      { first: 2876, last: 2876 },
      { first: 2879, last: 2879 },
      { first: 2881, last: 2883 },
      { first: 2893, last: 2893 },
      { first: 2902, last: 2902 },
      { first: 2946, last: 2946 },
      { first: 3008, last: 3008 },
      { first: 3021, last: 3021 },
      { first: 3134, last: 3136 },
      { first: 3142, last: 3144 },
      { first: 3146, last: 3149 },
      { first: 3157, last: 3158 },
      { first: 3260, last: 3260 },
      { first: 3263, last: 3263 },
      { first: 3270, last: 3270 },
      { first: 3276, last: 3277 },
      { first: 3298, last: 3299 },
      { first: 3393, last: 3395 },
      { first: 3405, last: 3405 },
      { first: 3530, last: 3530 },
      { first: 3538, last: 3540 },
      { first: 3542, last: 3542 },
      { first: 3633, last: 3633 },
      { first: 3636, last: 3642 },
      { first: 3655, last: 3662 },
      { first: 3761, last: 3761 },
      { first: 3764, last: 3769 },
      { first: 3771, last: 3772 },
      { first: 3784, last: 3789 },
      { first: 3864, last: 3865 },
      { first: 3893, last: 3893 },
      { first: 3895, last: 3895 },
      { first: 3897, last: 3897 },
      { first: 3953, last: 3966 },
      { first: 3968, last: 3972 },
      { first: 3974, last: 3975 },
      { first: 3984, last: 3991 },
      { first: 3993, last: 4028 },
      { first: 4038, last: 4038 },
      { first: 4141, last: 4144 },
      { first: 4146, last: 4146 },
      { first: 4150, last: 4151 },
      { first: 4153, last: 4153 },
      { first: 4184, last: 4185 },
      { first: 4448, last: 4607 },
      { first: 4959, last: 4959 },
      { first: 5906, last: 5908 },
      { first: 5938, last: 5940 },
      { first: 5970, last: 5971 },
      { first: 6002, last: 6003 },
      { first: 6068, last: 6069 },
      { first: 6071, last: 6077 },
      { first: 6086, last: 6086 },
      { first: 6089, last: 6099 },
      { first: 6109, last: 6109 },
      { first: 6155, last: 6157 },
      { first: 6313, last: 6313 },
      { first: 6432, last: 6434 },
      { first: 6439, last: 6440 },
      { first: 6450, last: 6450 },
      { first: 6457, last: 6459 },
      { first: 6679, last: 6680 },
      { first: 6912, last: 6915 },
      { first: 6964, last: 6964 },
      { first: 6966, last: 6970 },
      { first: 6972, last: 6972 },
      { first: 6978, last: 6978 },
      { first: 7019, last: 7027 },
      { first: 7616, last: 7626 },
      { first: 7678, last: 7679 },
      { first: 8203, last: 8207 },
      { first: 8234, last: 8238 },
      { first: 8288, last: 8291 },
      { first: 8298, last: 8303 },
      { first: 8400, last: 8431 },
      { first: 12330, last: 12335 },
      { first: 12441, last: 12442 },
      { first: 43014, last: 43014 },
      { first: 43019, last: 43019 },
      { first: 43045, last: 43046 },
      { first: 64286, last: 64286 },
      { first: 65024, last: 65039 },
      { first: 65056, last: 65059 },
      { first: 65279, last: 65279 },
      { first: 65529, last: 65531 },
      { first: 68097, last: 68099 },
      { first: 68101, last: 68102 },
      { first: 68108, last: 68111 },
      { first: 68152, last: 68154 },
      { first: 68159, last: 68159 },
      { first: 119143, last: 119145 },
      { first: 119155, last: 119170 },
      { first: 119173, last: 119179 },
      { first: 119210, last: 119213 },
      { first: 119362, last: 119364 },
      { first: 917505, last: 917505 },
      { first: 917536, last: 917631 },
      { first: 917760, last: 917999 }
    ];
    exports.default = combining;
  }
});

// node_modules/simple-wcswidth/dist/src/binary-search.js
var require_binary_search = __commonJS({
  "node_modules/simple-wcswidth/dist/src/binary-search.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bisearch = (ucs, table, tableSize) => {
      let min = 0;
      let mid;
      let max = tableSize;
      if (ucs < table[0].first || ucs > table[max].last)
        return 0;
      while (max >= min) {
        mid = Math.floor((min + max) / 2);
        if (ucs > table[mid].last) {
          min = mid + 1;
        } else if (ucs < table[mid].first) {
          max = mid - 1;
        } else {
          return 1;
        }
      }
      return 0;
    };
    exports.default = bisearch;
  }
});

// node_modules/simple-wcswidth/dist/src/wcwidth.js
var require_wcwidth = __commonJS({
  "node_modules/simple-wcswidth/dist/src/wcwidth.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var non_spacing_chars_1 = __importDefault(require_non_spacing_chars());
    var binary_search_1 = __importDefault(require_binary_search());
    var mk_wcwidth = (ucs) => {
      if (ucs === 0) {
        return 0;
      }
      if (ucs < 32 || ucs >= 127 && ucs < 160) {
        return -1;
      }
      if (binary_search_1.default(ucs, non_spacing_chars_1.default, non_spacing_chars_1.default.length - 1)) {
        return 0;
      }
      return 1 + Number(ucs >= 4352 && (ucs <= 4447 || ucs === 9001 || ucs === 9002 || ucs >= 11904 && ucs <= 42191 && ucs !== 12351 || ucs >= 44032 && ucs <= 55203 || ucs >= 63744 && ucs <= 64255 || ucs >= 65040 && ucs <= 65049 || ucs >= 65072 && ucs <= 65135 || ucs >= 65280 && ucs <= 65376 || ucs >= 65504 && ucs <= 65510 || ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141));
    };
    exports.default = mk_wcwidth;
  }
});

// node_modules/simple-wcswidth/dist/src/wcswidth.js
var require_wcswidth = __commonJS({
  "node_modules/simple-wcswidth/dist/src/wcswidth.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var wcwidth_1 = __importDefault(require_wcwidth());
    var mk_wcswidth = (pwcs) => {
      let width = 0;
      for (let i5 = 0; i5 < pwcs.length; i5++) {
        const charCode = pwcs.charCodeAt(i5);
        const w2 = wcwidth_1.default(charCode);
        if (w2 < 0) {
          return -1;
        }
        width += w2;
      }
      return width;
    };
    exports.default = mk_wcswidth;
  }
});

// node_modules/simple-wcswidth/dist/index.js
var require_dist = __commonJS({
  "node_modules/simple-wcswidth/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wcswidth = exports.wcwidth = void 0;
    var wcswidth_1 = __importDefault(require_wcswidth());
    exports.wcswidth = wcswidth_1.default;
    var wcwidth_1 = __importDefault(require_wcwidth());
    exports.wcwidth = wcwidth_1.default;
  }
});

// node_modules/console-table-printer/dist/src/utils/console-utils.js
var require_console_utils = __commonJS({
  "node_modules/console-table-printer/dist/src/utils/console-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var simple_wcswidth_1 = require_dist();
    var colorRegex = /\x1b\[\d{1,3}m/g;
    var stripAnsi = (str) => str.replace(colorRegex, "");
    var findWidthInConsole = (str) => (0, simple_wcswidth_1.wcswidth)(stripAnsi(str));
    exports.default = findWidthInConsole;
  }
});

// node_modules/console-table-printer/dist/src/utils/string-utils.js
var require_string_utils = __commonJS({
  "node_modules/console-table-printer/dist/src/utils/string-utils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.biggestWordInSentence = exports.limitWidth = exports.textWithPadding = void 0;
    var console_utils_1 = __importDefault(require_console_utils());
    var textWithPadding = (text, alignment, columnLen) => {
      const curTextSize = (0, console_utils_1.default)(text);
      const leftPadding = Math.floor((columnLen - curTextSize) / 2);
      const rightPadding = columnLen - leftPadding - curTextSize;
      switch (alignment) {
        case "left":
          return text.concat(" ".repeat(columnLen - curTextSize));
        case "center":
          return " ".repeat(leftPadding).concat(text).concat(" ".repeat(rightPadding));
        case "right":
        default:
          return " ".repeat(columnLen - curTextSize).concat(text);
      }
    };
    exports.textWithPadding = textWithPadding;
    var limitWidth = (inpStr, width) => {
      const ret = [];
      const spaceSeparatedStrings = inpStr.split(" ");
      let now = [];
      let cnt = 0;
      spaceSeparatedStrings.forEach((strWithoutSpace) => {
        const consoleWidth = (0, console_utils_1.default)(strWithoutSpace);
        if (cnt + consoleWidth <= width) {
          cnt += consoleWidth + 1;
          now.push(strWithoutSpace);
        } else {
          ret.push(now.join(" "));
          now = [strWithoutSpace];
          cnt = consoleWidth + 1;
        }
      });
      ret.push(now.join(" "));
      return ret;
    };
    exports.limitWidth = limitWidth;
    var biggestWordInSentence = (inpStr) => inpStr.split(" ").reduce((a3, b2) => Math.max(a3, (0, console_utils_1.default)(b2)), 0);
    exports.biggestWordInSentence = biggestWordInSentence;
  }
});

// node_modules/console-table-printer/dist/src/utils/table-helpers.js
var require_table_helpers = __commonJS({
  "node_modules/console-table-printer/dist/src/utils/table-helpers.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWidthLimitedColumnsArray = exports.createHeaderAsRow = exports.renderTableHorizontalBorders = exports.findLenOfColumn = exports.createRow = exports.createColumFromComputedColumn = exports.createColumFromOnlyName = exports.createTableHorizontalBorders = exports.convertRawRowOptionsToStandard = exports.cellText = void 0;
    var input_converter_1 = require_input_converter();
    var console_utils_1 = __importDefault(require_console_utils());
    var string_utils_1 = require_string_utils();
    var table_constants_1 = require_table_constants();
    var max = (a3, b2) => Math.max(a3, b2);
    var cellText = (text) => text === void 0 || text === null ? "" : `${text}`;
    exports.cellText = cellText;
    var convertRawRowOptionsToStandard = (options) => {
      if (options) {
        return {
          color: options.color,
          separator: options.separator || table_constants_1.DEFAULT_ROW_SEPARATOR
        };
      }
      return void 0;
    };
    exports.convertRawRowOptionsToStandard = convertRawRowOptionsToStandard;
    var createTableHorizontalBorders = ({ left, mid, right, other }, column_lengths) => {
      let ret = left;
      column_lengths.forEach((len) => {
        ret += other.repeat(len + 2);
        ret += mid;
      });
      ret = ret.slice(0, -mid.length);
      ret += right;
      return ret;
    };
    exports.createTableHorizontalBorders = createTableHorizontalBorders;
    var createColumFromOnlyName = (name) => ({
      name,
      title: name
    });
    exports.createColumFromOnlyName = createColumFromOnlyName;
    var createColumFromComputedColumn = (column) => Object.assign(Object.assign(Object.assign(Object.assign({ name: column.name, title: column.title || column.name }, (0, input_converter_1.objIfExists)("color", column.color)), (0, input_converter_1.objIfExists)("maxLen", column.maxLen)), (0, input_converter_1.objIfExists)("minLen", column.minLen)), { alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT });
    exports.createColumFromComputedColumn = createColumFromComputedColumn;
    var createRow = (color, text, separator) => ({
      color,
      separator,
      text
    });
    exports.createRow = createRow;
    var findLenOfColumn = (column, rows) => {
      const columnId = column.name;
      const columnTitle = column.title;
      let length = max(0, (column === null || column === void 0 ? void 0 : column.minLen) || 0);
      if (column.maxLen) {
        length = max(length, max(column.maxLen, (0, string_utils_1.biggestWordInSentence)(columnTitle)));
        length = rows.reduce((acc, row) => max(acc, (0, string_utils_1.biggestWordInSentence)((0, exports.cellText)(row.text[columnId]))), length);
        return length;
      }
      length = max(length, (0, console_utils_1.default)(columnTitle));
      rows.forEach((row) => {
        length = max(length, (0, console_utils_1.default)((0, exports.cellText)(row.text[columnId])));
      });
      return length;
    };
    exports.findLenOfColumn = findLenOfColumn;
    var renderTableHorizontalBorders = (style, column_lengths) => {
      const str = (0, exports.createTableHorizontalBorders)(style, column_lengths);
      return str;
    };
    exports.renderTableHorizontalBorders = renderTableHorizontalBorders;
    var createHeaderAsRow = (createRowFn, columns) => {
      const headerColor = table_constants_1.DEFAULT_HEADER_FONT_COLOR;
      const row = createRowFn(headerColor, {}, false);
      columns.forEach((column) => {
        row.text[column.name] = column.title;
      });
      return row;
    };
    exports.createHeaderAsRow = createHeaderAsRow;
    var getWidthLimitedColumnsArray = (columns, row) => {
      const ret = {};
      columns.forEach((column) => {
        ret[column.name] = (0, string_utils_1.limitWidth)((0, exports.cellText)(row.text[column.name]), column.length || table_constants_1.DEFAULT_COLUMN_LEN);
      });
      return ret;
    };
    exports.getWidthLimitedColumnsArray = getWidthLimitedColumnsArray;
  }
});

// node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js
var require_table_pre_processors = __commonJS({
  "node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preProcessRows = exports.preProcessColumns = void 0;
    var table_helpers_1 = require_table_helpers();
    var createComputedColumnsIfNecessary = (table) => {
      if (table.computedColumns.length) {
        table.computedColumns.forEach((computedColumn) => {
          table.addColumn(computedColumn);
          table.rows.forEach((row) => {
            row.text[computedColumn.name] = computedColumn.function(row.text);
          });
        });
      }
    };
    var disableColumnsIfNecessary = (table) => {
      if (table.enabledColumns.length) {
        table.columns = table.columns.filter((col) => table.enabledColumns.includes(col.name));
      }
    };
    var enableColumnsIfNecessary = (table) => {
      if (table.disabledColumns.length) {
        table.columns = table.columns.filter((col) => !table.disabledColumns.includes(col.name));
      }
    };
    var findColumnWidth = (table) => {
      table.columns.forEach((column) => {
        column.length = (0, table_helpers_1.findLenOfColumn)(column, table.rows);
      });
    };
    var preProcessColumns = (table) => {
      createComputedColumnsIfNecessary(table);
      enableColumnsIfNecessary(table);
      disableColumnsIfNecessary(table);
      findColumnWidth(table);
    };
    exports.preProcessColumns = preProcessColumns;
    var preProcessRows = (table) => {
      const newRows = table.rows.filter((r6) => table.filterFunction(r6.text)).sort((r1, r22) => table.sortFunction(r1.text, r22.text));
      table.rows = newRows;
    };
    exports.preProcessRows = preProcessRows;
  }
});

// node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js
var require_internal_table_printer = __commonJS({
  "node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.printSimpleTable = exports.renderSimpleTable = exports.renderTable = void 0;
    var colored_console_line_1 = __importDefault(require_colored_console_line());
    var string_utils_1 = require_string_utils();
    var table_constants_1 = require_table_constants();
    var table_helpers_1 = require_table_helpers();
    var internal_table_1 = __importDefault(require_internal_table());
    var table_pre_processors_1 = require_table_pre_processors();
    var renderOneLine = (tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap) => {
      const line = new colored_console_line_1.default(colorMap);
      line.addCharsWithColor(table_constants_1.DEFAULT_ROW_FONT_COLOR, tableStyle.vertical);
      columns.forEach((column) => {
        const thisLineHasText = currentLineIndex < widthLimitedColumnsArray[column.name].length;
        const textForThisLine = thisLineHasText ? (0, table_helpers_1.cellText)(widthLimitedColumnsArray[column.name][currentLineIndex]) : "";
        line.addCharsWithColor(table_constants_1.DEFAULT_ROW_FONT_COLOR, " ");
        line.addCharsWithColor(isHeader && table_constants_1.DEFAULT_HEADER_FONT_COLOR || column.color || row.color, (0, string_utils_1.textWithPadding)(textForThisLine, column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT, column.length || table_constants_1.DEFAULT_COLUMN_LEN));
        line.addCharsWithColor(table_constants_1.DEFAULT_ROW_FONT_COLOR, ` ${tableStyle.vertical}`);
      });
      return line.renderConsole();
    };
    var renderWidthLimitedLines = (tableStyle, columns, row, colorMap, isHeader) => {
      const widthLimitedColumnsArray = (0, table_helpers_1.getWidthLimitedColumnsArray)(columns, row);
      const totalLines = Object.values(widthLimitedColumnsArray).reduce((a3, b2) => Math.max(a3, b2.length), 0);
      const ret = [];
      for (let currentLineIndex = 0; currentLineIndex < totalLines; currentLineIndex += 1) {
        const singleLine = renderOneLine(tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap);
        ret.push(singleLine);
      }
      return ret;
    };
    var renderRow = (table, row) => {
      let ret = [];
      ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap));
      return ret;
    };
    var renderTableTitle = (table) => {
      const ret = [];
      if (table.title === void 0) {
        return ret;
      }
      const getTableWidth = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue + 2 + 1;
        return table.columns.map((m2) => m2.length || table_constants_1.DEFAULT_COLUMN_LEN).reduce(reducer, 1);
      };
      const titleWithPadding = (0, string_utils_1.textWithPadding)(table.title, table_constants_1.DEFAULT_HEADER_ALIGNMENT, getTableWidth());
      const styledText = new colored_console_line_1.default(table.colorMap);
      styledText.addCharsWithColor(table_constants_1.DEFAULT_HEADER_FONT_COLOR, titleWithPadding);
      ret.push(styledText.renderConsole());
      return ret;
    };
    var renderTableHeaders = (table) => {
      let ret = [];
      ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerTop, table.columns.map((m2) => m2.length || table_constants_1.DEFAULT_COLUMN_LEN)));
      const row = (0, table_helpers_1.createHeaderAsRow)(table_helpers_1.createRow, table.columns);
      ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap, true));
      ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerBottom, table.columns.map((m2) => m2.length || table_constants_1.DEFAULT_COLUMN_LEN)));
      return ret;
    };
    var renderTableEnding = (table) => {
      const ret = [];
      ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.tableBottom, table.columns.map((m2) => m2.length || table_constants_1.DEFAULT_COLUMN_LEN)));
      return ret;
    };
    var renderRowSeparator = (table, row) => {
      const ret = [];
      const lastRowIndex = table.rows.length - 1;
      const currentRowIndex = table.rows.indexOf(row);
      if (currentRowIndex !== lastRowIndex && row.separator) {
        ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.rowSeparator, table.columns.map((m2) => m2.length || table_constants_1.DEFAULT_COLUMN_LEN)));
      }
      return ret;
    };
    var renderTable = (table) => {
      (0, table_pre_processors_1.preProcessColumns)(table);
      (0, table_pre_processors_1.preProcessRows)(table);
      const ret = [];
      renderTableTitle(table).forEach((row) => ret.push(row));
      renderTableHeaders(table).forEach((row) => ret.push(row));
      table.rows.forEach((row) => {
        renderRow(table, row).forEach((row_) => ret.push(row_));
        renderRowSeparator(table, row).forEach((row_) => ret.push(row_));
      });
      renderTableEnding(table).forEach((row) => ret.push(row));
      return ret.join("\n");
    };
    exports.renderTable = renderTable;
    var renderSimpleTable = (rows) => {
      const table = new internal_table_1.default();
      table.addRows(rows);
      return (0, exports.renderTable)(table);
    };
    exports.renderSimpleTable = renderSimpleTable;
    var printSimpleTable = (rows) => {
      console.log((0, exports.renderSimpleTable)(rows));
    };
    exports.printSimpleTable = printSimpleTable;
  }
});

// node_modules/console-table-printer/dist/src/internalTable/internal-table.js
var require_internal_table = __commonJS({
  "node_modules/console-table-printer/dist/src/internalTable/internal-table.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var colored_console_line_1 = require_colored_console_line();
    var table_constants_1 = require_table_constants();
    var table_helpers_1 = require_table_helpers();
    var input_converter_1 = require_input_converter();
    var internal_table_printer_1 = require_internal_table_printer();
    var DEFAULT_ROW_SORT_FUNC = () => 0;
    var DEFAULT_ROW_FILTER_FUNC = () => true;
    var TableInternal = class {
      constructor(options) {
        this.rows = [];
        this.columns = [];
        this.title = void 0;
        this.tableStyle = table_constants_1.DEFAULT_TABLE_STYLE;
        this.filterFunction = DEFAULT_ROW_FILTER_FUNC;
        this.sortFunction = DEFAULT_ROW_SORT_FUNC;
        this.enabledColumns = [];
        this.disabledColumns = [];
        this.computedColumns = [];
        this.rowSeparator = table_constants_1.DEFAULT_ROW_SEPARATOR;
        this.colorMap = colored_console_line_1.DEFAULT_COLOR_MAP;
        if (options instanceof Array) {
          this.initSimple(options);
        } else if (typeof options === "object") {
          this.initDetailed(options);
        }
      }
      initSimple(columns) {
        this.columns = columns.map((column) => ({
          name: column,
          title: column,
          alignment: table_constants_1.DEFAULT_ROW_ALIGNMENT
        }));
      }
      initDetailed(options) {
        var _a;
        this.title = (options === null || options === void 0 ? void 0 : options.title) || this.title;
        this.tableStyle = (options === null || options === void 0 ? void 0 : options.style) || this.tableStyle;
        this.sortFunction = (options === null || options === void 0 ? void 0 : options.sort) || this.sortFunction;
        this.filterFunction = (options === null || options === void 0 ? void 0 : options.filter) || this.filterFunction;
        this.enabledColumns = (options === null || options === void 0 ? void 0 : options.enabledColumns) || this.enabledColumns;
        this.disabledColumns = (options === null || options === void 0 ? void 0 : options.disabledColumns) || this.disabledColumns;
        this.computedColumns = (options === null || options === void 0 ? void 0 : options.computedColumns) || this.computedColumns;
        this.columns = ((_a = options === null || options === void 0 ? void 0 : options.columns) === null || _a === void 0 ? void 0 : _a.map(input_converter_1.rawColumnToInternalColumn)) || this.columns;
        this.rowSeparator = (options === null || options === void 0 ? void 0 : options.rowSeparator) || this.rowSeparator;
        if (options === null || options === void 0 ? void 0 : options.colorMap) {
          this.colorMap = Object.assign(Object.assign({}, this.colorMap), options.colorMap);
        }
        if (options.rows !== void 0) {
          this.addRows(options.rows);
        }
      }
      createColumnFromRow(text) {
        const colNames = this.columns.map((col) => col.name);
        Object.keys(text).forEach((key) => {
          if (!colNames.includes(key)) {
            this.columns.push((0, table_helpers_1.createColumFromOnlyName)(key));
          }
        });
      }
      addColumn(textOrObj) {
        if (typeof textOrObj === "string") {
          this.columns.push((0, table_helpers_1.createColumFromOnlyName)(textOrObj));
        } else {
          this.columns.push((0, table_helpers_1.createColumFromComputedColumn)(textOrObj));
        }
      }
      addColumns(toBeInsertedColumns) {
        toBeInsertedColumns.forEach((toBeInsertedColumn) => {
          this.addColumn(toBeInsertedColumn);
        });
      }
      addRow(text, options) {
        this.createColumnFromRow(text);
        this.rows.push((0, table_helpers_1.createRow)((options === null || options === void 0 ? void 0 : options.color) || table_constants_1.DEFAULT_ROW_FONT_COLOR, text, (options === null || options === void 0 ? void 0 : options.separator) !== void 0 ? options === null || options === void 0 ? void 0 : options.separator : this.rowSeparator));
      }
      addRows(toBeInsertedRows, options) {
        toBeInsertedRows.forEach((toBeInsertedRow) => {
          this.addRow(toBeInsertedRow, options);
        });
      }
      renderTable() {
        return (0, internal_table_printer_1.renderTable)(this);
      }
    };
    exports.default = TableInternal;
  }
});

// node_modules/console-table-printer/dist/src/console-table-printer.js
var require_console_table_printer = __commonJS({
  "node_modules/console-table-printer/dist/src/console-table-printer.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var internal_table_1 = __importDefault(require_internal_table());
    var table_helpers_1 = require_table_helpers();
    var Table2 = class {
      constructor(options) {
        this.table = new internal_table_1.default(options);
      }
      addColumn(column) {
        this.table.addColumn(column);
        return this;
      }
      addColumns(columns) {
        this.table.addColumns(columns);
        return this;
      }
      addRow(text, rowOptions) {
        this.table.addRow(text, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
      }
      addRows(toBeInsertedRows, rowOptions) {
        this.table.addRows(toBeInsertedRows, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
      }
      printTable() {
        const tableRendered = this.table.renderTable();
        console.log(tableRendered);
      }
      render() {
        return this.table.renderTable();
      }
    };
    exports.default = Table2;
  }
});

// node_modules/console-table-printer/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/console-table-printer/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderTable = exports.printTable = exports.Table = void 0;
    var console_table_printer_1 = __importDefault(require_console_table_printer());
    exports.Table = console_table_printer_1.default;
    var internal_table_printer_1 = require_internal_table_printer();
    Object.defineProperty(exports, "printTable", { enumerable: true, get: function() {
      return internal_table_printer_1.printSimpleTable;
    } });
    Object.defineProperty(exports, "renderTable", { enumerable: true, get: function() {
      return internal_table_printer_1.renderSimpleTable;
    } });
  }
});

// domain/Todo.js
var Todo = class {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }
  set id(value) {
    this.__id = value;
  }
  get id() {
    return this.__id;
  }
  complete() {
    this.completed = true;
  }
  pending() {
    this.completed = false;
  }
  toJSON() {
    return {
      id: this.__id,
      text: this.text,
      completed: this.completed
    };
  }
  static fromJSON(obj) {
    const todo = new Todo(obj.text);
    todo.id = obj.id;
    todo.completed = obj.completed;
    return todo;
  }
};

// application/Application.js
var Application = class {
  constructor(adapters) {
    this.__logger = adapters.logger;
    this.__store = adapters.store;
  }
  addTodo(text) {
    const todo = this.__createTodo(text);
    try {
      const todoObject = this.__store.save(todo.toJSON());
      const newItem = Todo.fromJSON(todoObject);
      return newItem;
    } catch (error) {
      this.__logger.log("[ERROR]: There was a problem while adding a new todo" + error);
    }
  }
  __createTodo(text) {
    return new Todo(text);
  }
  markTodoAsCompleted(id) {
    const todo = this.__getTodo(id);
    todo.complete();
    this.__store.update(todo.id, todo.toJSON());
  }
  markTodoAsPending(id) {
    const todo = this.__getTodo(id);
    todo.pending();
    this.__store.update(todo.id, todo.toJSON());
  }
  __getTodo(id) {
    const todoObject = this.__store.get(id);
    return Todo.fromJSON(todoObject);
  }
  deleteTodo(id) {
    this.__store.delete(id);
  }
  getCompleted() {
    const list = this.__store.list();
    return list.filter((item) => item.completed).map(Todo.fromJSON);
  }
  getPending() {
    const list = this.__store.list();
    return list.filter((item) => !item.completed).map(Todo.fromJSON);
  }
  getAll() {
    const list = this.__store.list();
    return list.map(Todo.fromJSON);
  }
  logList() {
    this.log(JSON.stringify(this.getAll()));
  }
  log(text) {
    this.__logger.log(text);
  }
  logTable(items, columns) {
    this.__logger.table(items.map((item) => item.toJSON()), columns);
  }
};

// node_modules/log-symbols/browser.js
var logSymbols = {
  info: "\u2139\uFE0F",
  success: "\u2705",
  warning: "\u26A0\uFE0F",
  error: "\u274C\uFE0F"
};
var browser_default = logSymbols;

// adapters/ConsoleLogger.js
var import_console_table_printer = __toESM(require_dist2(), 1);

// node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  const styles2 = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  styles2.color.gray = styles2.color.blackBright;
  styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
  styles2.color.grey = styles2.color.blackBright;
  styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
  for (const [groupName, group] of Object.entries(styles2)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles2[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles2[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles2, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles2, "codes", {
    value: codes,
    enumerable: false
  });
  styles2.color.close = "\x1B[39m";
  styles2.bgColor.close = "\x1B[49m";
  styles2.color.ansi = wrapAnsi16();
  styles2.color.ansi256 = wrapAnsi256();
  styles2.color.ansi16m = wrapAnsi16m();
  styles2.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles2, {
    rgbToAnsi256: {
      value: (red, green, blue) => {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value: (hex) => {
        const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let { colorString } = matches.groups;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value: (code) => {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles2.ansi256ToAnsi(styles2.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles2.ansi256ToAnsi(styles2.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles2;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/chalk/source/vendor/supports-color/browser.js
var isBlinkBasedBrowser = /\b(Chrome|Chromium)\//.test(navigator.userAgent);
var colorSupport = isBlinkBasedBrowser ? {
  level: 1,
  hasBasic: true,
  has256: false,
  has16m: false
} : false;
var supportsColor = {
  stdout: colorSupport,
  stderr: colorSupport
};
var browser_default2 = supportsColor;

// node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = browser_default2;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// adapters/ConsoleLogger.js
var ConsoleLoggerAdapter = class {
  constructor() {
    this.__logger = console;
    this.__logger.table = (rows, columns) => {
      const table = new import_console_table_printer.Table({
        columns: columns.map((name) => ({ name, alignment: "left" }))
      });
      table.addRows(rows);
      table.printTable();
    };
  }
  log(text) {
    this.__logger.log(text);
  }
  table(items, columns) {
    const parsedItems = this.__parseItems(items, columns);
    this.__logger.table(parsedItems, columns);
  }
  __parseItems(items, columns) {
    const parsedItems = items.map((item) => {
      Object.keys(item).forEach((key) => {
        if (!columns.includes(key))
          delete item[key];
        if (typeof item[key] === "boolean") {
          item[key] = item[key] ? source_default.green(browser_default.success) : source_default.red(browser_default.error);
        }
      });
      return item;
    });
    return parsedItems;
  }
};

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i5 = 0; i5 < 256; ++i5) {
  byteToHex.push((i5 + 256).toString(16).substr(1));
}
var i5;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// adapters/UUIDGenerator.js
var UUIDGeneratorAdapter = class {
  constructor() {
    this.__id = v4_default;
  }
  generate() {
    return this.__id();
  }
};

// adapters/SessionStorageStore.js
var SessionStorageStoreAdapter = class {
  constructor(sessionStorageKey, idGenerator) {
    this.__store = sessionStorage;
    this.__sessionStorageKey = sessionStorageKey;
    this.__idGenerator = idGenerator;
  }
  save(item) {
    const list = this.list();
    const newItem = { ...item, id: this.__idGenerator.generate() };
    this.__store.setItem(this.__sessionStorageKey, JSON.stringify([...list, newItem]));
    return newItem;
  }
  get(id) {
    return this.list().find((item) => item.id === id);
  }
  update(id, data = {}) {
    const item = this.get(id);
    const updatedItem = { ...item, ...data };
    const newList = this.list().map((item2) => item2.id === id ? updatedItem : item2);
    this.__saveList(newList);
    return updatedItem;
  }
  list() {
    return JSON.parse(this.__store.getItem(this.__sessionStorageKey)) || [];
  }
  delete(id) {
    const newList = this.list().filter((item) => item.id !== id);
    this.__saveList(newList);
  }
  __saveList(list) {
    this.__store.setItem(this.__sessionStorageKey, JSON.stringify(list));
  }
};

// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = /* @__PURE__ */ new Map();
var s = class {
  constructor(t4, n7) {
    if (this._$cssResult$ = true, n7 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4;
  }
  get styleSheet() {
    let e7 = n.get(this.cssText);
    return t && e7 === void 0 && (n.set(this.cssText, e7 = new CSSStyleSheet()), e7.replaceSync(this.cssText)), e7;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e);
var r = (t4, ...n7) => {
  const o8 = t4.length === 1 ? t4[0] : n7.reduce((e7, n8, s5) => e7 + ((t5) => {
    if (t5._$cssResult$ === true)
      return t5.cssText;
    if (typeof t5 == "number")
      return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n8) + t4[s5 + 1], t4[0]);
  return new s(o8, e);
};
var i = (e7, n7) => {
  t ? e7.adoptedStyleSheets = n7.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n7.forEach((t4) => {
    const n8 = document.createElement("style"), s5 = window.litNonce;
    s5 !== void 0 && n8.setAttribute("nonce", s5), n8.textContent = t4.cssText, e7.appendChild(n8);
  });
};
var S = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e7 = "";
  for (const n7 of t5.cssRules)
    e7 += n7.cssText;
  return o(e7);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.trustedTypes;
var r2 = e2 ? e2.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o2 = { toAttribute(t4, i5) {
  switch (i5) {
    case Boolean:
      t4 = t4 ? r2 : null;
      break;
    case Object:
    case Array:
      t4 = t4 == null ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, i5) {
  let s5 = t4;
  switch (i5) {
    case Boolean:
      s5 = t4 !== null;
      break;
    case Number:
      s5 = t4 === null ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t4);
      } catch (t5) {
        s5 = null;
      }
  }
  return s5;
} };
var n2 = (t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4);
var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
var a = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t4) {
    var i5;
    (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t4);
  }
  static get observedAttributes() {
    this.finalize();
    const t4 = [];
    return this.elementProperties.forEach((i5, s5) => {
      const e7 = this._$Eh(s5, i5);
      e7 !== void 0 && (this._$Eu.set(e7, s5), t4.push(e7));
    }), t4;
  }
  static createProperty(t4, i5 = l) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t4, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t4)) {
      const s5 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e7 = this.getPropertyDescriptor(t4, s5, i5);
      e7 !== void 0 && Object.defineProperty(this.prototype, t4, e7);
    }
  }
  static getPropertyDescriptor(t4, i5, s5) {
    return { get() {
      return this[i5];
    }, set(e7) {
      const r6 = this[t4];
      this[i5] = e7, this.requestUpdate(t4, r6, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t4 = Object.getPrototypeOf(this);
    if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t5 = this.properties, i5 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
      for (const s5 of i5)
        this.createProperty(s5, t5[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s5 = [];
    if (Array.isArray(i5)) {
      const e7 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e7)
        s5.unshift(S(i6));
    } else
      i5 !== void 0 && s5.push(S(i5));
    return s5;
  }
  static _$Eh(t4, i5) {
    const s5 = i5.attribute;
    return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
  }
  o() {
    var t4;
    this._$Ep = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
  }
  addController(t4) {
    var i5, s5;
    ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s5 = t4.hostConnected) === null || s5 === void 0 || s5.call(t4));
  }
  removeController(t4) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t4) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t4, i5) => {
      this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t4;
    const s5 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t4;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
      var i5;
      return (i5 = t5.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
    });
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    var t4;
    (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
      var i5;
      return (i5 = t5.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
    });
  }
  attributeChangedCallback(t4, i5, s5) {
    this._$AK(t4, s5);
  }
  _$ES(t4, i5, s5 = l) {
    var e7, r6;
    const h5 = this.constructor._$Eh(t4, s5);
    if (h5 !== void 0 && s5.reflect === true) {
      const n7 = ((r6 = (e7 = s5.converter) === null || e7 === void 0 ? void 0 : e7.toAttribute) !== null && r6 !== void 0 ? r6 : o2.toAttribute)(i5, s5.type);
      this._$Ei = t4, n7 == null ? this.removeAttribute(h5) : this.setAttribute(h5, n7), this._$Ei = null;
    }
  }
  _$AK(t4, i5) {
    var s5, e7, r6;
    const h5 = this.constructor, n7 = h5._$Eu.get(t4);
    if (n7 !== void 0 && this._$Ei !== n7) {
      const t5 = h5.getPropertyOptions(n7), l5 = t5.converter, a3 = (r6 = (e7 = (s5 = l5) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e7 !== void 0 ? e7 : typeof l5 == "function" ? l5 : null) !== null && r6 !== void 0 ? r6 : o2.fromAttribute;
      this._$Ei = n7, this[n7] = a3(i5, t5.type), this._$Ei = null;
    }
  }
  requestUpdate(t4, i5, s5) {
    let e7 = true;
    t4 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || n2)(this[t4], i5) ? (this._$AL.has(t4) || this._$AL.set(t4, i5), s5.reflect === true && this._$Ei !== t4 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t4, s5))) : e7 = false), !this.isUpdatePending && e7 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return t4 != null && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t4;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t5, i6) => this[i6] = t5), this._$Et = void 0);
    let i5 = false;
    const s5 = this._$AL;
    try {
      i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
        var i6;
        return (i6 = t5.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t5);
      }), this.update(s5)) : this._$EU();
    } catch (t5) {
      throw i5 = false, this._$EU(), t5;
    }
    i5 && this._$AE(s5);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t5) => {
      var i6;
      return (i6 = t5.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t5);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$EC !== void 0 && (this._$EC.forEach((t5, i5) => this._$ES(i5, this[i5], t5)), this._$EC = void 0), this._$EU();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.3.2");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l2 = document;
var h2 = (t4 = "") => l2.createComment(t4);
var r3 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
var d = Array.isArray;
var u = (t4) => {
  var i5;
  return d(t4) || typeof ((i5 = t4) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea|title)$/i;
var p = (t4) => (i5, ...s5) => ({ _$litType$: t4, strings: i5, values: s5 });
var $ = p(1);
var y = p(2);
var b = Symbol.for("lit-noChange");
var w = Symbol.for("lit-nothing");
var T = /* @__PURE__ */ new WeakMap();
var x = (t4, i5, s5) => {
  var e7, o8;
  const n7 = (e7 = s5 == null ? void 0 : s5.renderBefore) !== null && e7 !== void 0 ? e7 : i5;
  let l5 = n7._$litPart$;
  if (l5 === void 0) {
    const t5 = (o8 = s5 == null ? void 0 : s5.renderBefore) !== null && o8 !== void 0 ? o8 : null;
    n7._$litPart$ = l5 = new N(i5.insertBefore(h2(), t5), t5, void 0, s5 != null ? s5 : {});
  }
  return l5._$AI(t4), l5;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t4, i5) => {
  const o8 = t4.length - 1, l5 = [];
  let h5, r6 = i5 === 2 ? "<svg>" : "", d3 = c;
  for (let i6 = 0; i6 < o8; i6++) {
    const s5 = t4[i6];
    let o9, u3, p2 = -1, $2 = 0;
    for (; $2 < s5.length && (d3.lastIndex = $2, u3 = d3.exec(s5), u3 !== null); )
      $2 = d3.lastIndex, d3 === c ? u3[1] === "!--" ? d3 = v : u3[1] !== void 0 ? d3 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h5 = RegExp("</" + u3[2], "g")), d3 = f) : u3[3] !== void 0 && (d3 = f) : d3 === f ? u3[0] === ">" ? (d3 = h5 != null ? h5 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d3.lastIndex - u3[2].length, o9 = u3[1], d3 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d3 === m || d3 === _ ? d3 = f : d3 === v || d3 === a2 ? d3 = c : (d3 = f, h5 = void 0);
    const y2 = d3 === f && t4[i6 + 1].startsWith("/>") ? " " : "";
    r6 += d3 === c ? s5 + n3 : p2 >= 0 ? (l5.push(o9), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (p2 === -2 ? (l5.push(void 0), i6) : y2);
  }
  const u2 = r6 + (t4[o8] || "<?>") + (i5 === 2 ? "</svg>" : "");
  if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s3 !== void 0 ? s3.createHTML(u2) : u2, l5];
};
var E = class {
  constructor({ strings: t4, _$litType$: s5 }, n7) {
    let l5;
    this.parts = [];
    let r6 = 0, d3 = 0;
    const u2 = t4.length - 1, c2 = this.parts, [v2, a3] = C(t4, s5);
    if (this.el = E.createElement(v2, n7), A.currentNode = this.el.content, s5 === 2) {
      const t5 = this.el.content, i5 = t5.firstChild;
      i5.remove(), t5.append(...i5.childNodes);
    }
    for (; (l5 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l5.nodeType === 1) {
        if (l5.hasAttributes()) {
          const t5 = [];
          for (const i5 of l5.getAttributeNames())
            if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
              const s6 = a3[d3++];
              if (t5.push(i5), s6 !== void 0) {
                const t6 = l5.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s6);
                c2.push({ type: 1, index: r6, name: i6[2], strings: t6, ctor: i6[1] === "." ? M : i6[1] === "?" ? H : i6[1] === "@" ? I : S2 });
              } else
                c2.push({ type: 6, index: r6 });
            }
          for (const i5 of t5)
            l5.removeAttribute(i5);
        }
        if (g.test(l5.tagName)) {
          const t5 = l5.textContent.split(e3), s6 = t5.length - 1;
          if (s6 > 0) {
            l5.textContent = i2 ? i2.emptyScript : "";
            for (let i5 = 0; i5 < s6; i5++)
              l5.append(t5[i5], h2()), A.nextNode(), c2.push({ type: 2, index: ++r6 });
            l5.append(t5[s6], h2());
          }
        }
      } else if (l5.nodeType === 8)
        if (l5.data === o3)
          c2.push({ type: 2, index: r6 });
        else {
          let t5 = -1;
          for (; (t5 = l5.data.indexOf(e3, t5 + 1)) !== -1; )
            c2.push({ type: 7, index: r6 }), t5 += e3.length - 1;
        }
      r6++;
    }
  }
  static createElement(t4, i5) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t4, s5;
  }
};
function P(t4, i5, s5 = t4, e7) {
  var o8, n7, l5, h5;
  if (i5 === b)
    return i5;
  let d3 = e7 !== void 0 ? (o8 = s5._$Cl) === null || o8 === void 0 ? void 0 : o8[e7] : s5._$Cu;
  const u2 = r3(i5) ? void 0 : i5._$litDirective$;
  return (d3 == null ? void 0 : d3.constructor) !== u2 && ((n7 = d3 == null ? void 0 : d3._$AO) === null || n7 === void 0 || n7.call(d3, false), u2 === void 0 ? d3 = void 0 : (d3 = new u2(t4), d3._$AT(t4, s5, e7)), e7 !== void 0 ? ((l5 = (h5 = s5)._$Cl) !== null && l5 !== void 0 ? l5 : h5._$Cl = [])[e7] = d3 : s5._$Cu = d3), d3 !== void 0 && (i5 = P(t4, d3._$AS(t4, i5.values), d3, e7)), i5;
}
var V = class {
  constructor(t4, i5) {
    this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t4) {
    var i5;
    const { el: { content: s5 }, parts: e7 } = this._$AD, o8 = ((i5 = t4 == null ? void 0 : t4.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s5, true);
    A.currentNode = o8;
    let n7 = A.nextNode(), h5 = 0, r6 = 0, d3 = e7[0];
    for (; d3 !== void 0; ) {
      if (h5 === d3.index) {
        let i6;
        d3.type === 2 ? i6 = new N(n7, n7.nextSibling, this, t4) : d3.type === 1 ? i6 = new d3.ctor(n7, d3.name, d3.strings, this, t4) : d3.type === 6 && (i6 = new L(n7, this, t4)), this.v.push(i6), d3 = e7[++r6];
      }
      h5 !== (d3 == null ? void 0 : d3.index) && (n7 = A.nextNode(), h5++);
    }
    return o8;
  }
  m(t4) {
    let i5 = 0;
    for (const s5 of this.v)
      s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t4, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t4[i5])), i5++;
  }
};
var N = class {
  constructor(t4, i5, s5, e7) {
    var o8;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s5, this.options = e7, this._$Cg = (o8 = e7 == null ? void 0 : e7.isConnected) === null || o8 === void 0 || o8;
  }
  get _$AU() {
    var t4, i5;
    return (i5 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i5 = this._$AM;
    return i5 !== void 0 && t4.nodeType === 11 && (t4 = i5.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i5 = this) {
    t4 = P(this, t4, i5), r3(t4) ? t4 === w || t4 == null || t4 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t4 !== this._$AH && t4 !== b && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : u(t4) ? this.S(t4) : this.$(t4);
  }
  M(t4, i5 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t4, i5);
  }
  k(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.M(t4));
  }
  $(t4) {
    this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(l2.createTextNode(t4)), this._$AH = t4;
  }
  T(t4) {
    var i5;
    const { values: s5, _$litType$: e7 } = t4, o8 = typeof e7 == "number" ? this._$AC(t4) : (e7.el === void 0 && (e7.el = E.createElement(e7.h, this.options)), e7);
    if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o8)
      this._$AH.m(s5);
    else {
      const t5 = new V(o8, this), i6 = t5.p(this.options);
      t5.m(s5), this.k(i6), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i5 = T.get(t4.strings);
    return i5 === void 0 && T.set(t4.strings, i5 = new E(t4)), i5;
  }
  S(t4) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s5, e7 = 0;
    for (const o8 of t4)
      e7 === i5.length ? i5.push(s5 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s5 = i5[e7], s5._$AI(o8), e7++;
    e7 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e7), i5.length = e7);
  }
  _$AR(t4 = this._$AA.nextSibling, i5) {
    var s5;
    for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i5); t4 && t4 !== this._$AB; ) {
      const i6 = t4.nextSibling;
      t4.remove(), t4 = i6;
    }
  }
  setConnected(t4) {
    var i5;
    this._$AM === void 0 && (this._$Cg = t4, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t4));
  }
};
var S2 = class {
  constructor(t4, i5, s5, e7, o8) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e7, this.options = o8, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4, i5 = this, s5, e7) {
    const o8 = this.strings;
    let n7 = false;
    if (o8 === void 0)
      t4 = P(this, t4, i5, 0), n7 = !r3(t4) || t4 !== this._$AH && t4 !== b, n7 && (this._$AH = t4);
    else {
      const e8 = t4;
      let l5, h5;
      for (t4 = o8[0], l5 = 0; l5 < o8.length - 1; l5++)
        h5 = P(this, e8[s5 + l5], i5, l5), h5 === b && (h5 = this._$AH[l5]), n7 || (n7 = !r3(h5) || h5 !== this._$AH[l5]), h5 === w ? t4 = w : t4 !== w && (t4 += (h5 != null ? h5 : "") + o8[l5 + 1]), this._$AH[l5] = h5;
    }
    n7 && !e7 && this.C(t4);
  }
  C(t4) {
    t4 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t4) {
    this.element[this.name] = t4 === w ? void 0 : t4;
  }
};
var k = i2 ? i2.emptyScript : "";
var H = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t4) {
    t4 && t4 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
};
var I = class extends S2 {
  constructor(t4, i5, s5, e7, o8) {
    super(t4, i5, s5, e7, o8), this.type = 5;
  }
  _$AI(t4, i5 = this) {
    var s5;
    if ((t4 = (s5 = P(this, t4, i5, 0)) !== null && s5 !== void 0 ? s5 : w) === b)
      return;
    const e7 = this._$AH, o8 = t4 === w && e7 !== w || t4.capture !== e7.capture || t4.once !== e7.once || t4.passive !== e7.passive, n7 = t4 !== w && (e7 === w || o8);
    o8 && this.element.removeEventListener(this.name, this, e7), n7 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    var i5, s5;
    typeof this._$AH == "function" ? this._$AH.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var L = class {
  constructor(t4, i5, s5) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    P(this, t4);
  }
};
var R = { L: "$lit$", P: e3, V: o3, I: 1, N: C, R: V, j: u, D: P, H: N, F: S2, O: H, W: I, B: M, Z: L };
var z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.2.5");

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t4, e7;
    const i5 = super.createRenderRoot();
    return (t4 = (e7 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e7.renderBefore = i5.firstChild), i5;
  }
  update(t4) {
    const i5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = x(i5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t4;
    super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
  }
  disconnectedCallback() {
    var t4;
    super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.2.0");

// node_modules/lit-html/directive-helpers.js
var { H: i3 } = R;
var r4 = (o8) => o8.strings === void 0;

// node_modules/lit-html/directive.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e4 = (t4) => (...e7) => ({ _$litDirective$: t4, values: e7 });
var i4 = class {
  constructor(t4) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t4, e7, i5) {
    this._$Ct = t4, this._$AM = e7, this._$Ci = i5;
  }
  _$AS(t4, e7) {
    return this.update(t4, e7);
  }
  update(t4, e7) {
    return this.render(...e7);
  }
};

// node_modules/lit-html/async-directive.js
var e5 = (i5, t4) => {
  var s5, o8;
  const n7 = i5._$AN;
  if (n7 === void 0)
    return false;
  for (const i6 of n7)
    (o8 = (s5 = i6)._$AO) === null || o8 === void 0 || o8.call(s5, t4, false), e5(i6, t4);
  return true;
};
var o5 = (i5) => {
  let t4, s5;
  do {
    if ((t4 = i5._$AM) === void 0)
      break;
    s5 = t4._$AN, s5.delete(i5), i5 = t4;
  } while ((s5 == null ? void 0 : s5.size) === 0);
};
var n5 = (i5) => {
  for (let t4; t4 = i5._$AM; i5 = t4) {
    let s5 = t4._$AN;
    if (s5 === void 0)
      t4._$AN = s5 = /* @__PURE__ */ new Set();
    else if (s5.has(i5))
      break;
    s5.add(i5), l4(t4);
  }
};
function r5(i5) {
  this._$AN !== void 0 ? (o5(this), this._$AM = i5, n5(this)) : this._$AM = i5;
}
function h3(i5, t4 = false, s5 = 0) {
  const n7 = this._$AH, r6 = this._$AN;
  if (r6 !== void 0 && r6.size !== 0)
    if (t4)
      if (Array.isArray(n7))
        for (let i6 = s5; i6 < n7.length; i6++)
          e5(n7[i6], false), o5(n7[i6]);
      else
        n7 != null && (e5(n7, false), o5(n7));
    else
      e5(this, i5);
}
var l4 = (i5) => {
  var t4, e7, o8, n7;
  i5.type == t3.CHILD && ((t4 = (o8 = i5)._$AP) !== null && t4 !== void 0 || (o8._$AP = h3), (e7 = (n7 = i5)._$AQ) !== null && e7 !== void 0 || (n7._$AQ = r5));
};
var d2 = class extends i4 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i5, t4, s5) {
    super._$AT(i5, t4, s5), n5(this), this.isConnected = i5._$AU;
  }
  _$AO(i5, t4 = true) {
    var s5, n7;
    i5 !== this.isConnected && (this.isConnected = i5, i5 ? (s5 = this.reconnected) === null || s5 === void 0 || s5.call(this) : (n7 = this.disconnected) === null || n7 === void 0 || n7.call(this)), t4 && (e5(this, i5), o5(this));
  }
  setValue(t4) {
    if (r4(this._$Ct))
      this._$Ct._$AI(t4, this);
    else {
      const i5 = [...this._$Ct._$AH];
      i5[this._$Ci] = t4, this._$Ct._$AI(i5, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var e6 = () => new o6();
var o6 = class {
};
var h4 = /* @__PURE__ */ new WeakMap();
var n6 = e4(class extends d2 {
  render(t4) {
    return w;
  }
  update(t4, [s5]) {
    var e7;
    const o8 = s5 !== this.U;
    return o8 && this.U !== void 0 && this.ot(void 0), (o8 || this.rt !== this.lt) && (this.U = s5, this.ht = (e7 = t4.options) === null || e7 === void 0 ? void 0 : e7.host, this.ot(this.lt = t4.element)), w;
  }
  ot(i5) {
    var t4;
    if (typeof this.U == "function") {
      const s5 = (t4 = this.ht) !== null && t4 !== void 0 ? t4 : globalThis;
      let e7 = h4.get(s5);
      e7 === void 0 && (e7 = /* @__PURE__ */ new WeakMap(), h4.set(s5, e7)), e7.get(this.U) !== void 0 && this.U.call(this.ht, void 0), e7.set(this.U, i5), i5 !== void 0 && this.U.call(this.ht, i5);
    } else
      this.U.value = i5;
  }
  get rt() {
    var i5, t4, s5;
    return typeof this.U == "function" ? (t4 = h4.get((i5 = this.ht) !== null && i5 !== void 0 ? i5 : globalThis)) === null || t4 === void 0 ? void 0 : t4.get(this.U) : (s5 = this.U) === null || s5 === void 0 ? void 0 : s5.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});

// node_modules/lit-html/directives/class-map.js
var o7 = e4(class extends i4 {
  constructor(t4) {
    var i5;
    if (super(t4), t4.type !== t3.ATTRIBUTE || t4.name !== "class" || ((i5 = t4.strings) === null || i5 === void 0 ? void 0 : i5.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t4) {
    return " " + Object.keys(t4).filter((i5) => t4[i5]).join(" ") + " ";
  }
  update(i5, [s5]) {
    var r6, o8;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i5.strings !== void 0 && (this.st = new Set(i5.strings.join(" ").split(/\s/).filter((t4) => t4 !== "")));
      for (const t4 in s5)
        s5[t4] && !((r6 = this.st) === null || r6 === void 0 ? void 0 : r6.has(t4)) && this.et.add(t4);
      return this.render(s5);
    }
    const e7 = i5.element.classList;
    this.et.forEach((t4) => {
      t4 in s5 || (e7.remove(t4), this.et.delete(t4));
    });
    for (const t4 in s5) {
      const i6 = !!s5[t4];
      i6 === this.et.has(t4) || ((o8 = this.st) === null || o8 === void 0 ? void 0 : o8.has(t4)) || (i6 ? (e7.add(t4), this.et.add(t4)) : (e7.remove(t4), this.et.delete(t4)));
    }
    return b;
  }
});

// framework/browser/app.js
var application = new Application({
  logger: new ConsoleLoggerAdapter(),
  store: new SessionStorageStoreAdapter("todos", new UUIDGeneratorAdapter())
});
var FILTER_NONE = "none";
var FILTER_PENDING = "pending";
var FILTER_COMPLETED = "completed";
var TodoApp = class extends s4 {
  static get properties() {
    return {
      filter: { type: String, attribute: false }
    };
  }
  constructor() {
    super();
    this.filter = FILTER_NONE;
  }
  static get styles() {
    return r`
      button {
        border-radius: 2px;
        border: 1px solid #b7b7b7;
      }

      button.selected {
        border-color: #7ac665;
      }
    `;
  }
  render() {
    return $`<h1>Todo App</h1>
      <add-todo-form
        @todo:add=${(event) => this.__addTodo(event.detail)}
      ></add-todo-form>
      <h2>List</h2>
      <div>
        <button
          class=${o7({ selected: this.filter === FILTER_NONE })}
          @click=${() => this.filter = FILTER_NONE}
        >
          All
        </button>
        <button
          class=${o7({ selected: this.filter === FILTER_PENDING })}
          @click=${() => this.filter = FILTER_PENDING}
        >
          Pending
        </button>
        <button
          class=${o7({ selected: this.filter === FILTER_COMPLETED })}
          @click=${() => this.filter = FILTER_COMPLETED}
        >
          Completed
        </button>
      </div>
      <todo-list
        .filter=${this.__filter}
        .rows=${this.__getListItems()}
        @todo:complete=${(event) => this.__completeTodo(event.detail)}
        @todo:pending=${(event) => this.__pendingTodo(event.detail)}
      ></todo-list>`;
  }
  __getListItems() {
    switch (this.filter) {
      case FILTER_COMPLETED:
        return application.getCompleted();
        break;
      case FILTER_PENDING:
        return application.getPending();
      default:
        return application.getAll();
        break;
    }
  }
  __addTodo(text) {
    application.addTodo(text);
    this.requestUpdate();
  }
  __completeTodo(id) {
    application.markTodoAsCompleted(id);
    this.requestUpdate();
  }
  __pendingTodo(id) {
    application.markTodoAsPending(id);
    this.requestUpdate();
  }
};
var AddTodoForm = class extends s4 {
  constructor() {
    super();
    this.__form = e6();
    this.__text = e6();
  }
  render() {
    return $`
      <form id="create-todo" ${n6(this.__form)}>
        <input type="text" name="text" ${n6(this.__text)} />
        <button @click=${this.__createTodo.bind(this)}>Add Todo</button>
      </form>
    `;
  }
  __createTodo(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("todo:add", { detail: this.__text.value.value }));
    this.__form.value.reset();
  }
};
var TodoList = class extends s4 {
  static get properties() {
    return {
      rows: { type: Array }
    };
  }
  static get styles() {
    return r`
      tr.row {
        text-align: center;
      }
      tr.completed {
        color: #bdbdbd;
      }
    `;
  }
  render() {
    return $`
      <table>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Completed</th>
          <th></th>
        </tr>
        ${this.__renderRows()}
      </table>
    `;
  }
  __renderRows() {
    return this.rows.map(({ id, text, completed }) => $`<tr class="row ${o7({ completed })}">
          <td>${id}</td>
          <td>${text}</td>
          <td>${completed ? "Yes" : "No"}</td>
          <td>
            <button
              @click=${completed ? () => this.dispatchEvent(new CustomEvent("todo:pending", { detail: id })) : () => this.dispatchEvent(new CustomEvent("todo:complete", { detail: id }))}
            >
              ${completed ? "Mark as pending" : "Mark as completed"}
            </button>
          </td>
        </tr>`);
  }
};
customElements.define("todo-app", TodoApp);
customElements.define("add-todo-form", AddTodoForm);
customElements.define("todo-list", TodoList);
document.getElementById("app").replaceWith(document.createElement("todo-app"));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=1.js.map
