define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.dim,f=(b.data,b.$index,c.$escape),g="";return g+="<!--\r\n数据例子：\r\nvar demoData = {\r\n    measureId: '',\r\n    reocrdSize: '',\r\n    topType: '',\r\n    indList: [\r\n    ],\r\n    topTypeList: {\r\n        desc: bottom,\r\n        asc: top,\r\n        none: none\r\n    }\r\n};\r\n-->\r\n<div class=\"axis-setting\">\r\n    <div class=\"axis-setting-title\">请选择需要设定为副轴的指标</div>\r\n    <div class=\"axis-setting-dim\">\r\n        ",d(e,function(a){g+="\r\n            <div>",g+=f(a.caption),g+='\r\n                <input\r\n                type="checkbox"\r\n                class="axis-setting-checkbox"\r\n                name ="',g+=f(a.caption),g+='"\r\n                ',"1"===a.axis&&(g+='\r\n                checked="checked"\r\n                '),g+="\r\n                />\r\n            </div>\r\n        "}),g+="\r\n    </div>\r\n</div>\r\n"}return{render:b}});