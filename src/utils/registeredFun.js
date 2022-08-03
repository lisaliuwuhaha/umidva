import {
  verify,
  signUp,
  isExistsByUsername,
  login,
  recommendedFromQRCode,
} from "@/services/user";
import { banXoom, getQueryString, validate, getPwRandom } from "@/utils/util";

//验证用户名是重复
const isRepetition = (ishave, username) => {
  let _uname = username ? username : "HX" + getPwRandom(4, 14);
  return isExistsByUsername({ username: _uname }, true)
    .then((res) => {
      return _uname;
    })
    .catch((err) => {
      if (!ishave) {
        return isRepetition(ishave);
      } else {
        throw { message: err.message, type: "isExistsByUsername" };
      }
    });
};
export const registeredFun = ({
  showHint, //用来显示弹窗
  phone,
  code,
  username,
  password,
  referrer = "app", //用户来源
  ishave = false, //用户自己输入的用户名 ? 只是验证 : 需要重复生成用户名进行验证
  isRecommended = false, //是否扫描注册回执推广人信息
  onEnd, //所有请求执行完后要执行的操作
  otherParams, //其他的参数
}) => {
  if (showHint) {
    showHint({
      _time: 101,
      type: "loading",
    });
  }
  let pw = password ? password : getPwRandom();
  //验证验证码
  verify({ code, phone }, true)
    .then((res) => {
      //验证用户名
      return isRepetition(ishave, username);
    })
    .then((name) => {
      console.log("name", name, name.length);
      //注册
      return signUp(
        {
          username: name,
          password: pw,
          phone,
          referrer,
          code,
        },
        true
      ).then((res) => {
        return { username: name, password, pw };
      });
    })
    .then((res) => {
      console.log("回填推广人信息获取到的数据", res);
      //是否需要扫描注册回执推广人信息
      let { r_uid, r_top_uid } = otherParams,
        { username, password } = res;
      if (!r_uid || !r_top_uid) return true;
      return isRecommended
        ? recommendedFromQRCode({ username, r_uid, r_top_uid }, true).then(
          (res) => {
            return { username, password };
          }
        )
        : { username, password };
    })
    .then((res) => {
      let { username, password } = res;
      //登录
      return login({ username, password, device: "mobile" }, true);
    })
    .then((res) => {
      //登录之后的操作
      let { token } = res.data;
      if (onEnd) onEnd(token);
    })
    .catch((err) => {
      console.log(err.message);
      if (showHint) {
        showHint({
          text: err.message || "客户端错误",
          _time: Math.random(),
        });
      }
    });
};
