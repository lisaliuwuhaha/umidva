// NOTE: 数据类型判断
function letterConvert(letter) {
  return letter.match(/\[object (\S*)\]/)[1].toLowerCase();
}
export const typeJudge = (val) => {
  // NOTE: undefined == null 返回 true
  if (val == null) return val + "";
  return typeof val === "object" || typeof val === "function"
    ? letterConvert(Object.prototype.toString.call(val))
    : typeof val;
};

// NOTE: 对象类
// --- 对象深层取值
export const deepGet = (obj, keys) =>
  keys.reduce(
    (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
    obj
  );

// NOTE:  数组类
// --- 交换数组两个值
export const exchangeArrayItem = (arr, index1, index2) => {
  arr.splice(index1, 1, ...arr.splice(index2, 1, arr[index1]));
  return arr;
};
/** 给指定数组加上指定的 key 值
 * @param {Array} arr 需要遍历的数组
 * @param {Array} keyArr 指定 item 中哪一项值作为 key 值
 * @returns 加上 key 后的新数组
 */
export const handleKey = (arr, keyArr = [], callback = null) => {
  return arr.map((item, index) => ({
    ...item,
    key: !!callback
      ? callback(index)
      : (!!keyArr.length && deepGet(item, keyArr)) || index + 1,
  }));
};

// NOTE: 工具类
// --- 数字格式化：保留指定位数小数
export const toDecimal = (num, digits = 2) => {
  num = num + "";
  digits = Number(digits);
  if (isNaN(num)) return "0." + "0".repeat(digits);
  // 取整数
  if (digits === 0) {
    return num.split(".")[0];
  }
  // 截取小数点后digits位
  if (num.indexOf(".") !== -1) {
    num = num.substring(0, num.indexOf(".") + digits + 1);
  } else {
    num += ".";
  }
  while (digits - num.split(".")[1].length > 0) {
    num += "0";
  }
  return num;
};
/** 获取字符串内的中文
 * @param {String} str 源数据
 * @returns 源数据中的中文
 */
export const getChOfString = (str) => {
  return str.match(/[\u4e00-\u9fa5]/g);
};

// NOTE: 网络路径类
// --- 判断是否是 url 路径
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);

// DOM 操作类
// -- 页面跳转
export const scrollToAnchor = (anchorName, offset) => {
  if (!!anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      window.scrollTo({
        left: 0,
        top: anchorElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }
  // 没有的话，滚动到头部
  else {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
};

/* 防抖函数
 * fn [function] 需要防抖的函数
 * delay [number] 毫秒，防抖期限值
 */
export const debounce = (fn, delay) => {
  let timer = null; //借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer); //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
      timer = setTimeout(fn, delay);
    } else {
      timer = setTimeout(fn, delay); // 进入该分支说明当前并没有在计时，那么就开始一个计时
    }
  };
};

// 业务类
// --- 处理头像，提供default_avatar
// export const handleAvatar = (src = "", defaultAvatar = DEFAULT_AVATAR.src) => {
//   return !!src ? `${bcConfig.IMG_URL}/${src}` : defaultAvatar
// }

/*
 * transformNumber(num,digits)
 * 整数型截取两位小数点展示，浮点数传入的digits截取保留几位小数
 * 参数：num，(string类型) 传入的数字
 * 参数：digits，（number类型）数字的小数位. 默认两位小数 处理整数时不需要用到此参数
 * 返回：返回格式化后的数值.
 */
export const transformNumber = (num, digits = 8) => {
  num = num + "";
  let [int, float] = num.split(".");
  if (!float) return toDecimal(num, 2);
  const floatSum = float
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  if (!!floatSum && int <= 0) {
    return toDecimal(num, digits).replace(/\.?0+$/, "");
  } else {
    return toDecimal(num, 2);
  }
};

//复制
export const copyText = async (str = "") => {
  const area = document.createElement("textarea");
  area.value = str;
  area.setAttribute("readonly", "");
  area.style.position = "absolute";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

//H5页面阻止缩放
export const banXoom = () => {
  if(isBrowser()){
    const meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=375,user-scalable=no");
    document.head.appendChild(meta);
  }
};

//url参数
export const getQueryString = (name) => {
  if(isBrowser()){

    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
      r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return null;
  }
};
// 判断是否为浏览器环境,针对ssr
export const isBrowser=()=>{ 
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement); 
} 
//判断是否为JSON
export const isJSON = (str) => {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};

//验证格式
export const validate = (value, type) => {
  var value = value.trim();
  if (type === "required") {
    return !!value;
  }
  if (type === "phone") {
    return /^1[3456789]\d{9}$/g.test(value);
  }
  if (type === "username") {
    return /^((?!\\|\/)[a-zA-Z0-9]){6,16}$/g.test(value);
  }
  if (type === "usernameForAdmin") {
    return /^(cd-|hz-){1}((?!\\|\/)[a-zA-Z0-9]){6,12}$/g.test(value);
  }
  if (type === "number") {
    return /\d+/g.test(value);
  }
  if (type === "email") {
    return /^(\w|\.|-|_)+@((\w+)\.){1,}?([a-zA-Z]+)$/g.test(value);
  }
  if (type === "code") {
    return /^\d{6}$/g.test(value);
  }
  // 至少6-12个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
  if (type === "password") {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{6,12}$/g.test(value);
  }
  if (type === "admin") {
    return /^(cd-|hz-)/g.test(value);
  }
  //number
  if (type === "-float") {
    return /^(0|(-?)(0\.[0-9]+|[1-9][0-9]+\.[0-9]+|[1-9]\d*))$/g.test(value);
  }
  if (type === "float") {
    return /^(0\.[0-9]+|[1-9][0-9]+\.[0-9]+|[1-9]\d*)$/g.test(value);
  }
  if (type === "decimal2") {
    return /^(\d+|\d+\.\d{1,2})$/g.test(value);
  }
  if (type === "sum5") {
    return /^\d{1,5}(\.|$)/g.test(value);
  }
  //number end
};
//生成随机password或username
//密码6-12 用户名6-16
export const getPwRandom = (_min = 6, _max = 12, type = "password") => {
  let str = "",
    range = _min,
    arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  if (_max) {
    range = Math.round(Math.random() * (_max - _min)) + _min;
  }
  for (let i = 0; i < range; i++) {
    let pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
};
// js将数字转换成万、亿、万亿,并保留至小数点后一位
export const numberFormat = (value) => {
  var k = 10000,
    sizes = ["", "万", "亿", "万亿"],
    i;
  if (value < k) {
    return value;
  } else {
    i = Math.floor(Math.log(value) / Math.log(k));
    return getBit(value / Math.pow(k, i), 1) + sizes[i];
  }
};
export const getBit = (value, bit) => {
  let str = value.toString();
  let strIndex = str.indexOf(".");
  if (strIndex === -1) return str;
  str = str.substring(0, strIndex + bit + 1);
  return str;
};
// 将字符串中的网址找出来换成超链接
export const urlToLink = (str) => {
  let re =
    /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/g;

  str = str.replace(re, function (website) {
    return "<a href='" + website + "' target='_blank'>" + website + "</a>";
  });
  return str;
};
/**
 * 判断是否是官方认证账号
 *
 * @returns `true`或`false`。
 */
export const isOfficialAccount = (uid) => {
  return (
    uid == 3306 ||
    uid == 71081 ||
    uid == 71132 ||
    uid == 265 ||
    uid == 246 ||
    uid == 337 ||
    uid == 74440 ||
    uid == 74441 ||
    uid == 71134 ||
    uid == 84656
  );
};
/**
 * 获取官方认证名称
 *
 * @returns 默认返回 `火象官方认证账号`。可返回 `ALPHA量化交易员`、`认证机构`、`火象官方认证账号`。
 */
export const getOfficialVerifyText = (uid, defaultText = "") => {
  if (uid == 265 || uid == 246 || uid == 337) {
    return "ALPHA量化交易员";
  }

  if (uid == 74440 || uid == 74441 || uid == 71134 || uid == 84656) {
    return "认证机构";
  }

  if (uid == 76043) {
    return "特邀创作者";
  }

  return isOfficialAccount(uid) ? "火象官方认证账号" : defaultText;
};
/**
 * 获取官方认证 logo 类型
 *
 * @returns 默认返回 `1`。`1`：黄色Vip，表示「火象官方认证账号」或「ALPHA量化交易员」；`2`：蓝色Vip，表示「认证机构」。
 */
export const getOfficialVerifyLogo = (uid) => {
  if (uid == 74440 || uid == 74441 || uid == 71134 || uid == 84656) {
    return 2;
  }
  if (
    uid == 3306 ||
    uid == 71081 ||
    uid == 71132 ||
    uid == 265 ||
    uid == 246 ||
    uid == 337
  ) {
    return 1;
  }
};
/**
 * 判断社区内容是否识别链接。被识别的链接将被替换为 `查看链接` 显示，并可以点击打开对应的网页
 *
 * @returns `true`或`false`。
 */
export const communityLinkableAccount = (uid) => {
  return (
    uid == 68499 || uid == 67445 || uid == 3306 || uid == 71081 || uid == 71132
  );
};
