(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{622:function(e,r,t){"use strict";var n=t(2265),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,l={},s=null,u=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:a,type:e,key:s,ref:u,props:l,_owner:o.current}}r.Fragment=l,r.jsx=s,r.jsxs=s},7437:function(e,r,t){"use strict";e.exports=t(622)},3018:function(e,r,t){"use strict";var n=t(1289);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,l,i){if(i!==n){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:l,resetWarningCache:a};return t.PropTypes=t,t}},4275:function(e,r,t){e.exports=t(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3253:function(e,r,t){"use strict";var n=t(2265),a=t(4275),l=t.n(a),i=["color","size","title"];function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,n.forwardRef)(function(e,r){var t=e.color,a=e.size,l=e.title,c=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,i);return n.createElement("svg",o({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:t},c),l?n.createElement("title",null,l):null,n.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"}))});c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),title:l().string},c.defaultProps={color:"currentColor",size:"1em",title:null},r.Z=c},734:function(e){var r;r=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),r=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function t(t,n){if("string"!=typeof t)throw Error("slugify: string argument expected");var a=r[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},l=void 0===n.replacement?"-":n.replacement,i=void 0===n.trim||n.trim,o=t.normalize().split("").reduce(function(r,t){var i=a[t];return void 0===i&&(i=e[t]),void 0===i&&(i=t),i===l&&(i=" "),r+i.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return n.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),i&&(o=o.trim()),o=o.replace(/\s+/g,l),n.lower&&(o=o.toLowerCase()),o}return t.extend=function(r){Object.assign(e,r)},t},e.exports=r(),e.exports.default=r()},5910:function(e,r,t){"use strict";var n,a,l,i,o=t(2265);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let s=["children","options"];(n=l||(l={})).blockQuote="0",n.breakLine="1",n.breakThematic="2",n.codeBlock="3",n.codeFenced="4",n.codeInline="5",n.footnote="6",n.footnoteReference="7",n.gfmTask="8",n.heading="9",n.headingSetext="10",n.htmlBlock="11",n.htmlComment="12",n.htmlSelfClosing="13",n.image="14",n.link="15",n.linkAngleBraceStyleDetector="16",n.linkBareUrlDetector="17",n.linkMailtoDetector="18",n.newlineCoalescer="19",n.orderedList="20",n.paragraph="21",n.ref="22",n.refImage="23",n.refLink="24",n.table="25",n.tableSeparator="26",n.text="27",n.textBolded="28",n.textEmphasized="29",n.textEscaped="30",n.textMarked="31",n.textStrikethroughed="32",n.unorderedList="33",(a=i||(i={}))[a.MAX=0]="MAX",a[a.HIGH=1]="HIGH",a[a.MED=2]="MED",a[a.LOW=3]="LOW",a[a.MIN=4]="MIN";let u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,r)=>(e[r.toLowerCase()]=r,e),{for:"htmlFor"}),p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},d=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,y=/\n{2,}$/,m=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,k=/^ {2,}\n/,O=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,E=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,A=/\r\n?/g,S=/^\[\^([^\]]+)](:.*)\n/,w=/^\[\^([^\]]+)]/,T=/\f/g,C=/^\s*?\[(x|\s)\]/,z=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,_=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,I=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,U=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,j=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,L=/^<!--[\s\S]*?(?:-->)/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,N=/^\{.*\}$/,P=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Y=/^<([^ >]+@[^ >]+)>/,H=/^<([^ >]+:\/[^ >]+)>/,D=/-([a-z])?/gi,M=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,W=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,B=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,J=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,F=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,K=/ *$/,X=/^ *:-+: *$/,Q=/^ *:-+ *$/,ee=/^ *-+: *$/,er=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,et=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,en=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ea=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,el=/^\\([^0-9A-Za-z\s])/,ei=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,eo=/^\n+/,ec=/^([ \t]*)/,es=/\\([^\\])/g,eu=/ *\n+$/,ep=/(?:^|\n)( *)$/,ed="(?:\\d+\\.)",ef="(?:[*+-])";function eh(e){return"( *)("+(1===e?ed:ef)+") +"}let ey=eh(1),em=eh(2);function eg(e){return RegExp("^"+(1===e?ey:em))}let ek=eg(1),eO=eg(2);function ev(e){return RegExp("^"+(1===e?ey:em)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ed:ef)+" )[^\\n]*)*(\\n|$)","gm")}let eE=ev(1),ex=ev(2);function eb(e){let r=1===e?ed:ef;return RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}let eA=eb(1),eS=eb(2);function ew(e,r){let t=1===r,n=t?eA:eS,a=t?eE:ex,l=t?ek:eO;return{match(e,r,t){let a=ep.exec(t);return a&&(r.list||!r.inline&&!r.simple)?n.exec(e=a[1]+e):null},order:1,parse(e,r,n){let i=t?+e[2]:void 0,o=e[0].replace(y,"\n").match(a),c=!1;return{items:o.map(function(e,t){let a;let i=l.exec(e)[0].length,s=RegExp("^ {1,"+i+"}","gm"),u=e.replace(s,"").replace(l,""),p=t===o.length-1,d=-1!==u.indexOf("\n\n")||p&&c;c=d;let f=n.inline,h=n.list;n.list=!0,d?(n.inline=!1,a=u.replace(eu,"\n\n")):(n.inline=!0,a=u.replace(eu,""));let y=r(a,n);return n.inline=f,n.list=h,y}),ordered:t,start:i}},render:(r,t,n)=>e(r.ordered?"ol":"ul",{key:n.key,start:"20"===r.type?r.start:void 0},r.items.map(function(r,a){return e("li",{key:a},t(r,n))}))}}let eT=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eC=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ez=[m,v,E,z,I,_,L,M,eE,eA,ex,eS],e_=[...ez,/^[^\n]+(?:  \n|\n{2,})/,U,R];function eI(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eU(e){return ee.test(e)?"right":X.test(e)?"center":Q.test(e)?"left":null}function ej(e,r,t){let n=t.inTable;t.inTable=!0;let a=r(e.trim(),t);t.inTable=n;let l=[[]];return a.forEach(function(e,r){"26"===e.type?0!==r&&r!==a.length-1&&l.push([]):("27"!==e.type||null!=a[r+1]&&"26"!==a[r+1].type||(e.text=e.text.replace(K,"")),l[l.length-1].push(e))}),l}function eL(e,r,t){t.inline=!0;let n=ej(e[1],r,t),a=e[2].replace(V,"").split("|").map(eU),l=e[3].trim().split("\n").map(function(e){return ej(e,r,t)});return t.inline=!1,{align:a,cells:l,header:n,type:"25"}}function e$(e,r){return null==e.align[r]?{}:{textAlign:e.align[r]}}function eR(e){return function(r,t){return t.inline?e.exec(r):null}}function eN(e){return function(r,t){return t.inline||t.simple?e.exec(r):null}}function eP(e){return function(r,t){return t.inline||t.simple?null:e.exec(r)}}function eY(e){return function(r){return e.exec(r)}}function eH(e,r,t){if(r.inline||r.simple||t&&!t.endsWith("\n"))return null;let n="";e.split("\n").every(e=>!ez.some(r=>r.test(e))&&(n+=e+"\n",e.trim()));let a=n.trimEnd();return""==a?null:[n,a]}function eD(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function eM(e){return e.replace(es,"$1")}function eW(e,r,t){let n=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;let l=e(r,t);return t.inline=n,t.simple=a,l}function eZ(e,r,t){return t.inline=!1,e(r,t)}let eB=(e,r,t)=>({children:eW(r,e[1],t)});function eG(){return{}}function eJ(){return null}function eF(e,r,t){let n=e,a=r.split(".");for(;a.length&&void 0!==(n=n[a[0]]);)a.shift();return n||t}r.ZP=e=>{let{children:r,options:t}=e,n=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r.indexOf(t=l[n])>=0||(a[t]=e[t]);return a}(e,s);return o.cloneElement(function(e,r={}){var t,n;let a;r.overrides=r.overrides||{},r.slugify=r.slugify||eI,r.namedCodesToUnicode=r.namedCodesToUnicode?c({},p,r.namedCodesToUnicode):p;let l=r.createElement||o.createElement;function i(e,t,...n){let a=eF(r.overrides,`${e}.props`,{});return l(function(e,r){let t=eF(r,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:eF(r,`${e}.component`,e):e}(e,r.overrides),c({},t,a,{className:function(...e){return e.filter(Boolean).join(" ")}(null==t?void 0:t.className,a.className)||void 0}),...n)}function s(e){let t,n=!1;r.forceInline?n=!0:r.forceBlock||(n=!1===J.test(e));let a=ee(Q(n?e:`${e.trimEnd().replace(eo,"")}

`,{inline:n}));for(;"string"==typeof a[a.length-1]&&!a[a.length-1].trim();)a.pop();if(null===r.wrapper)return a;let l=r.wrapper||(n?"span":"div");if(a.length>1||r.forceWrapper)t=a;else{if(1===a.length)return"string"==typeof(t=a[0])?i("span",{key:"outer"},t):t;t=null}return o.createElement(l,{key:"outer"},t)}function y(e){let r=e.match(f);return r?r.reduce(function(e,r,t){let n=r.indexOf("=");if(-1!==n){var a,l;let i=(-1!==(a=r.slice(0,n)).indexOf("-")&&null===a.match($)&&(a=a.replace(D,function(e,r){return r.toUpperCase()})),a).trim(),c=function(e){let r=e[0];return('"'===r||"'"===r)&&e.length>=2&&e[e.length-1]===r?e.slice(1,-1):e}(r.slice(n+1).trim()),p=u[i]||i,d=e[p]=(l=c,"style"===i?l.split(/;\s?/).reduce(function(e,r){let t=r.slice(0,r.indexOf(":"));return e[t.replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=r.slice(t.length+1).trim(),e},{}):"href"===i||"src"===i?eD(l):(l.match(N)&&(l=l.slice(1,l.length-1)),"true"===l||"false"!==l&&l));"string"==typeof d&&(U.test(d)||R.test(d))&&(e[p]=o.cloneElement(s(d.trim()),{key:t}))}else"style"!==r&&(e[u[r]||r]=!0);return e},{}):null}let V=[],K={},X={0:{match:eP(m),order:1,parse:(e,r,t)=>({children:r(e[0].replace(g,""),t)}),render:(e,r,t)=>i("blockquote",{key:t.key},r(e.children,t))},1:{match:eY(k),order:1,parse:eG,render:(e,r,t)=>i("br",{key:t.key})},2:{match:eP(O),order:1,parse:eG,render:(e,r,t)=>i("hr",{key:t.key})},3:{match:eP(E),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,r,t)=>i("pre",{key:t.key},i("code",c({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},4:{match:eP(v),order:0,parse:e=>({attrs:y(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"})},5:{match:eN(x),order:3,parse:e=>({text:e[2]}),render:(e,r,t)=>i("code",{key:t.key},e.text)},6:{match:eP(S),order:0,parse:e=>(V.push({footnote:e[2],identifier:e[1]}),{}),render:eJ},7:{match:eR(w),order:1,parse:e=>({target:`#${r.slugify(e[1])}`,text:e[1]}),render:(e,r,t)=>i("a",{key:t.key,href:eD(e.target)},i("sup",{key:t.key},e.text))},8:{match:eR(C),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,r,t)=>i("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})},9:{match:eP(r.enforceAtxHeadings?_:z),order:1,parse:(e,t,n)=>({children:eW(t,e[2],n),id:r.slugify(e[2]),level:e[1].length}),render:(e,r,t)=>i(`h${e.level}`,{id:e.id,key:t.key},r(e.children,t))},10:{match:eP(I),order:0,parse:(e,r,t)=>({children:eW(r,e[1],t),level:"="===e[2]?1:2,type:"9"})},11:{match:eY(U),order:1,parse(e,r,t){let[,n]=e[3].match(ec),a=RegExp(`^${n}`,"gm"),l=e[3].replace(a,""),i=e_.some(e=>e.test(l))?eZ:eW,o=e[1].toLowerCase(),c=-1!==d.indexOf(o),s={attrs:y(e[2]),noInnerParse:c,tag:c?o:e[1]};return t.inAnchor=t.inAnchor||"a"===o,c?s.text=e[3]:s.children=i(r,l,t),t.inAnchor=!1,s},render:(e,r,t)=>i(e.tag,c({key:t.key},e.attrs),e.text||r(e.children,t))},13:{match:eY(R),order:1,parse:e=>({attrs:y(e[2]||""),tag:e[1]}),render:(e,r,t)=>i(e.tag,c({},e.attrs,{key:t.key}))},12:{match:eY(L),order:1,parse:()=>({}),render:eJ},14:{match:eN(eC),order:1,parse:e=>({alt:e[1],target:eM(e[2]),title:e[3]}),render:(e,r,t)=>i("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:eD(e.target)})},15:{match:eR(eT),order:3,parse:(e,r,t)=>({children:function(e,r,t){let n=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;let l=e(r,t);return t.inline=n,t.simple=a,l}(r,e[1],t),target:eM(e[2]),title:e[3]}),render:(e,r,t)=>i("a",{key:t.key,href:eD(e.target),title:e.title},r(e.children,t))},16:{match:eR(H),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],type:"15"})},17:{match:(e,r)=>r.inAnchor?null:eR(P)(e,r),order:0,parse:e=>({children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"})},18:{match:eR(Y),order:0,parse(e){let r=e[1],t=e[1];return h.test(t)||(t="mailto:"+t),{children:[{text:r.replace("mailto:",""),type:"27"}],target:t,type:"15"}}},20:ew(i,1),33:ew(i,2),19:{match:eP(b),order:3,parse:eG,render:()=>"\n"},21:{match:eH,order:3,parse:eB,render:(e,r,t)=>i("p",{key:t.key},r(e.children,t))},22:{match:eR(W),order:0,parse:e=>(K[e[1]]={target:e[2],title:e[4]},{}),render:eJ},23:{match:eN(Z),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,t)=>i("img",{key:t.key,alt:e.alt,src:eD(K[e.ref].target),title:K[e.ref].title})},24:{match:eR(B),order:0,parse:(e,r,t)=>({children:r(e[1],t),fallbackChildren:r(e[0].replace(G,"\\$1"),t),ref:e[2]}),render:(e,r,t)=>K[e.ref]?i("a",{key:t.key,href:eD(K[e.ref].target),title:K[e.ref].title},r(e.children,t)):i("span",{key:t.key},r(e.fallbackChildren,t))},25:{match:eP(M),order:1,parse:eL,render:(e,r,t)=>i("table",{key:t.key},i("thead",null,i("tr",null,e.header.map(function(n,a){return i("th",{key:a,style:e$(e,a)},r(n,t))}))),i("tbody",null,e.cells.map(function(n,a){return i("tr",{key:a},n.map(function(n,a){return i("td",{key:a,style:e$(e,a)},r(n,t))}))})))},26:{match:function(e,r){return r.inTable?(r.inline=!0,q.exec(e)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:eY(ei),order:4,parse:e=>({text:e[0].replace(j,(e,t)=>r.namedCodesToUnicode[t]?r.namedCodesToUnicode[t]:e)}),render:e=>e.text},28:{match:eN(er),order:2,parse:(e,r,t)=>({children:r(e[2],t)}),render:(e,r,t)=>i("strong",{key:t.key},r(e.children,t))},29:{match:eN(et),order:3,parse:(e,r,t)=>({children:r(e[2],t)}),render:(e,r,t)=>i("em",{key:t.key},r(e.children,t))},30:{match:eN(el),order:1,parse:e=>({text:e[1],type:"27"})},31:{match:eN(en),order:3,parse:eB,render:(e,r,t)=>i("mark",{key:t.key},r(e.children,t))},32:{match:eN(ea),order:3,parse:eB,render:(e,r,t)=>i("del",{key:t.key},r(e.children,t))}};!0===r.disableParsingRawHTML&&(delete X[11],delete X[13]);let Q=((a=Object.keys(X)).sort(function(e,r){let t=X[e].order,n=X[r].order;return t!==n?t-n:1}),function(e,r){return function e(r,t){let n=[],l="";for(;r;){let i=0;for(;i<a.length;){let o=a[i],c=X[o],s=c.match(r,t,l);if(s){let a=s[0];r=r.substring(a.length);let i=c.parse(s,e,t);null==i.type&&(i.type=o),n.push(i),l=a;break}i++}}return n}(e.replace(A,"\n").replace(T,"").replace(F,"    "),r)}),ee=(n=r.renderRule,t=function(e,r,t){let a=X[e.type].render;return n?n(()=>a(e,r,t),e,r,t):a(e,r,t)},function e(r,n={}){if(Array.isArray(r)){let t=n.key,a=[],l=!1;for(let t=0;t<r.length;t++){n.key=t;let i=e(r[t],n),o="string"==typeof i;o&&l?a[a.length-1]+=i:null!==i&&a.push(i),l=o}return n.key=t,a}return t(r,e,n)}),es=s(e);return V.length?i("div",null,es,i("footer",{key:"footer"},V.map(function(e){return i("div",{id:r.slugify(e.identifier),key:e.identifier},e.identifier,ee(Q(e.footnote,{inline:!0})))}))):es}(r,t),n)}}}]);