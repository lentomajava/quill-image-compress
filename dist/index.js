!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={321:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ConsoleLogger=void 0;var n=function(){function e(e,t){this.debug=e,this.suppressErrorLogging=t}return e.prototype.prefixString=function(){return"</> quill-image-compress: "},Object.defineProperty(e.prototype,"log",{get:function(){return this.debug?console.log.bind(console,this.prefixString()):function(){}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"error",{get:function(){return this.suppressErrorLogging?function(){}:console.error.bind(console,this.prefixString())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"warn",{get:function(){return this.suppressErrorLogging?function(){}:console.warn.bind(console,this.prefixString())},enumerable:!1,configurable:!0}),e}();t.ConsoleLogger=n},337:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.downscaleImage=function(e,t,i,o,a,l,s,u){return n(this,void 0,void 0,(function(){var n,c,f,g,p,d,h,m;return r(this,(function(r){switch(r.label){case 0:return n=t.split(";")[0].split(":")[1],a=a||"image/jpeg",u=u||.7,(c=new Image).src=t,[4,new Promise((function(e){c.onload=function(){e()}}))];case 1:return r.sent(),f=function(e,t,n,r){if(n&&r&&e<=n&&t<=r)return[e,t];if(n&&e>n){var i=n,o=Math.floor(t/e*i);if(r&&o>r){var a=r;return[Math.floor(e/t*a),a]}return[i,o]}if(r&&t>r){o=r;return[i=Math.floor(e/t*o),o]}return[t,e]}(c.width,c.height,i,o),g=f[0],p=f[1],(d=document.createElement("canvas")).width=g,d.height=p,h=d.getContext("2d"),"image/jpeg"===a&&(h.fillStyle="#FFFFFF",h.fillRect(0,0,c.width,c.height)),(null==s?void 0:s.includes(n))?[2,t]:((null==l?void 0:l.includes(n))&&(a=n),h.drawImage(c,0,0,g,p),m=d.toDataURL(a,u),e.log("downscaling image...",{args:{dataUrl:t,maxWidth:i,maxHeight:o,imageType:a,ignoreImageTypes:s,keepImageTypes:l,imageQuality:u},newHeight:p,newWidth:g}),[2,m])}}))}))}},922:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.file2b64=function(e){return n(this,void 0,void 0,(function(){var t,n;return r(this,(function(r){return t=new FileReader,n=new Promise((function(e,n){t.addEventListener("load",(function(){var r,i=null===(r=t.result)||void 0===r?void 0:r.toString();i?e(i):n("could not convert file to base64")}),!1)})),t.readAsDataURL(e),[2,n]}))}))}},156:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.imageCompressor=void 0;var i=r(n(423));t.imageCompressor=i.default,t.default=i.default},457:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.warnAboutOptions=function(e,t){e.maxWidth=e.maxWidth||1e3,e.maxHeight=e.maxHeight||1e3,e.maxWidth&&"number"!=typeof e.maxWidth&&(t.warn("[config error] 'maxWidth' is required to be a \"number\" (in pixels), \nreceived: ".concat(e.maxWidth,"\n-> using default 1000")),e.maxWidth=1e3);e.maxHeight&&"number"!=typeof e.maxHeight&&(t.warn("[config error] 'maxHeight' is required to be a \"number\" (in pixels), \nreceived: ".concat(e.maxHeight,"\n-> using default 1000")),e.maxHeight=1e3);e.quality&&"number"!=typeof e.quality&&(t.warn("quill.imageCompressor: [config error] 'quality' is required to be a \"number\", \nreceived: ".concat(e.quality,"\n-> using default 0.7")),e.quality=.7);!e.imageType||"string"==typeof e.imageType&&e.imageType.startsWith("image/")||(t.warn('quill.imageCompressor: [config error] \'imageType\' is required be in the form of "image/png" or "image/jpeg" etc ..., \nreceived: '.concat(e.imageType,"\n-> using default image/jpeg")),e.imageType="image/jpeg");e.keepImageTypes||(e.keepImageTypes=[]);e.keepImageTypes&&!Array.isArray(e.keepImageTypes)&&(t.warn("quill.imageCompressor: [config error] 'keepImageTypes' is required to be a \"array\", received: ".concat(e.keepImageTypes," -> using default []")),e.keepImageTypes=[]);e.ignoreImageTypes||(e.ignoreImageTypes=[]);e.ignoreImageTypes&&!Array.isArray(e.ignoreImageTypes)&&(t.warn("quill.imageCompressor: [config error] 'ignoreImageTypes' is required to be a \"array\", received: ".concat(e.ignoreImageTypes," -> using default []")),e.ignoreImageTypes=[]);e.handleOnPaste&&"boolean"!=typeof e.handleOnPaste&&(t.warn("quill.imageCompressor: [config error] 'handlePaste' is required to be a \"boolean\", received: ".concat(e.ignoreImageTypes," -> using default true")),e.handleOnPaste=!0);e.insertIntoEditor&&"function"!=typeof e.insertIntoEditor&&(t.warn("quill.imageCompressor: [config error] 'insertIntoEditor' is required to be a \"function\", received: ".concat(e.insertIntoEditor," -> using default undefined")),e.insertIntoEditor=void 0)}},423:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.imageCompressor=void 0;var o=n(379),a=n(457),l=n(922),s=n(337),u=n(321),c=function(){function e(t,n){var l=this;this.quill=t,this.options=n||{};var s=!!n.debug,c=!!n.suppressErrorLogging;this.Logger=new u.ConsoleLogger(s,c),(0,a.warnAboutOptions)(n,this.Logger);this.imageDrop=new o.ImageDrop(t,(function(t){return r(l,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return this.Logger.log("onImageDrop",{dataUrl:t}),[4,this.downscaleImageFromUrl(t)];case 1:return n=r.sent(),this.insertToEditor(n,e.b64toBlob(n)),[2]}}))}))}),this.Logger,!1!==this.options.handleOnPaste),this.Logger.log("fileChanged",{options:n,quill:t,debug:s});var f=this.quill.getModule("toolbar");f?f.addHandler("image",(function(){return l.selectLocalImage()})):this.Logger.error("Quill toolbar module not found! need { toolbar: // options } in Quill.modules for image icon to sit in")}return e.b64toBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.slice(5).split(";")[0],r=new ArrayBuffer(t.length),i=new Uint8Array(r),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return new Blob([r],{type:n})},e.prototype.selectLocalImage=function(e){var t=this;this.range=this.quill.getSelection(),this.fileHolder=document.createElement("input"),this.fileHolder.setAttribute("type","file"),this.fileHolder.setAttribute("accept","image/*"),this.fileHolder.setAttribute("style","visibility:hidden"),this.fileHolder.onchange=function(){return t.fileChanged().then((function(){return e&&e()}))},document.body.appendChild(this.fileHolder),this.fileHolder.click(),window.requestAnimationFrame((function(){t.fileHolder&&document.body.removeChild(t.fileHolder)}))},e.prototype.fileChanged=function(t){return r(this,void 0,void 0,(function(){var n,r,o,a,s;return i(this,(function(i){switch(i.label){case 0:return(n=t||(null===(s=this.fileHolder)||void 0===s?void 0:s.files))&&n.length?(r=n[0],this.Logger.log("fileChanged",{file:r}),r?[4,(0,l.file2b64)(r)]:[2]):[2];case 1:return o=i.sent(),[4,this.downscaleImageFromUrl(o)];case 2:return a=i.sent(),this.insertToEditor(a,e.b64toBlob(a)),[2]}}))}))},e.prototype.downscaleImageFromUrl=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,(0,s.downscaleImage)(this.Logger,e,this.options.maxWidth,this.options.maxHeight,this.options.imageType,this.options.keepImageTypes,this.options.ignoreImageTypes,this.options.quality)];case 1:return t=n.sent(),this.Logger.log("downscaleImageFromUrl",{dataUrl:e,dataUrlCompressed:t}),[2,t]}}))}))},e.prototype.insertToEditor=function(e,t){if(this.options.insertIntoEditor)this.options.insertIntoEditor(e,t,this.quill);else{this.Logger.log("insertToEditor",{url:e}),this.range=this.quill.getSelection();var n=this.range;if(!n)return;this.logFileSize(e),this.quill.insertEmbed(n.index,"image","".concat(e),"user"),n.index++,this.quill.setSelection(n,"api")}},e.prototype.logFileSize=function(e){var t=(Math.round(3*(e.length-22)/4)/1024).toFixed(0);this.Logger.log("estimated img size: "+t+" kb")},e}();t.imageCompressor=c,window.imageCompressor=c,t.default=c},379:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImageDrop=void 0;var o=n(922),a=function(){function e(e,t,n,r){var i=this;this.quill=e,this.onNewDataUrl=t,this.logger=n,this.handleOnPaste=r,this.localDrag=!1,this.quill.root.addEventListener("dragstart",(function(e){return i.handleDragStart(e)}),!1),this.quill.root.addEventListener("dragend",(function(e){return i.handleDragEnd(e)}),!1),this.quill.root.addEventListener("drop",(function(e){return i.handleDrop(e)}),!0),this.handleOnPaste&&this.quill.root.addEventListener("paste",(function(e){return i.handlePaste(e)}),!0)}return e.prototype.handleDragStart=function(e){this.localDrag=!0},e.prototype.handleDragEnd=function(e){this.localDrag=!1},e.prototype.handleDrop=function(e){return r(this,void 0,void 0,(function(){var t,n,r,o,a,s,u,c,f,g;return i(this,(function(i){switch(i.label){case 0:return this.localDrag?[2]:(e.preventDefault(),document.caretRangeFromPoint&&(t=document.getSelection(),n=document.caretRangeFromPoint(e.clientX,e.clientY),t&&n&&t.setBaseAndExtent(n.startContainer,n.startOffset,n.startContainer,n.startOffset)),this.logger.log("handleDrop",{evt:e}),r=null===(u=e.dataTransfer)||void 0===u?void 0:u.files,(o=Array.from(r||[]).filter((function(e){return l(e.type)}))).length>0?(e.stopPropagation(),this.logger.log("handleDrop","found files",{evt:e,files:r,imageFiles:o}),[4,this.pasteFilesIntoQuill(o)]):[3,2]);case 1:return i.sent(),[2];case 2:return(null===(c=e.dataTransfer)||void 0===c?void 0:c.items)?(e.stopPropagation(),this.logger.log("handleDrop","found items",{evt:e,files:r,imageFiles:o}),[4,this.handleDataTransferList(null===(f=e.dataTransfer)||void 0===f?void 0:f.items,e)]):[3,4];case 3:return i.sent(),[2];case 4:return a=null===(g=e.dataTransfer)||void 0===g?void 0:g.getData("URL"),this.logger.log("handleDrop","trying getData('URL')",{draggedUrl:a}),a?[4,fetch(a)]:[3,8];case 5:return[4,i.sent().blob()];case 6:return s=i.sent(),this.logger.log("handleDrop","blob from drag event",{evt:e,files:r,imageFiles:o}),[4,this.pasteFilesIntoQuill([s])];case 7:i.sent(),i.label=8;case 8:return[2]}}))}))},e.prototype.handlePaste=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,this.handleDataTransferList(null===(t=e.clipboardData)||void 0===t?void 0:t.items,e)];case 1:return n.sent(),[2]}}))}))},e.prototype.handleDataTransferList=function(e,t){return r(this,void 0,void 0,(function(){var n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return n=Array.from(e||[]),r=n.filter((function(e){return"file"===e.kind&&l(e.type)})),o=n.map((function(e){return{type:e.type,kind:e.kind}})),this.logger.log("handleDataTransferList",{fileTypes:o,imageCount:r.length}),r.length?(t.preventDefault(),t.stopPropagation(),a=r.map((function(e){return e.getAsFile()})),[4,this.pasteFilesIntoQuill(a)]):[2];case 1:return i.sent(),[2]}}))}))},e.prototype.pasteFilesIntoQuill=function(e){return r(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){switch(n.label){case 0:return this.logger.log("    pasteFilesIntoQuill","pasting ".concat(e.length," images...")),[4,Promise.all(e.map((function(e,n){return r(t,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return e?[4,(0,o.file2b64)(e)]:[2];case 1:return t=r.sent(),this.logger.log("    pasteFilesIntoQuill","pasting image (".concat(n,")")),this.onNewDataUrl(t),[2]}}))}))})))];case 1:return n.sent(),this.logger.log("    pasteFilesIntoQuill","done"),[2]}}))}))},e}();function l(e){return!!e.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp)/i)}t.ImageDrop=a}},t={};var n=function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(156);return n})()));