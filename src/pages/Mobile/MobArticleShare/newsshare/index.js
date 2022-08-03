import React, { memo, useState, useEffect, useContext } from "react";
import moment from "moment";
import md5 from "js-md5";
import { modalContext } from "@/utils/modalContext";
import { useDocumentTitle } from "@/utils/comFunc";
// import { isJSON } from "@/utils/util";
import { NewsShareWrapper } from "./style";

export default memo(function NewsShareTemp({ id, curtime }) {
  const [newsDetail, setNewsDetail] = useState({});
  const [currentTime, setCurrentTime] = useState("00:00");
  const [allTime, setAllTime] = useState("00:00");
  const [left, setLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const { showPagePopup } = useContext(modalContext);

  const { mainTitle, characterName, issuerDttmStr, voiceUrl, content } =
    newsDetail;
  let t = null;
  useEffect(() => {
    getNewsData(JSON.stringify({ id }));
  }, []);
  useDocumentTitle(mainTitle);

  //获取新闻详情
  const getNewsData = (paras) => {
    const timestamp = moment().format("yyyyMMDDHHmmss");
    const formData = new FormData();
    formData.append("paras", paras);
    formData.append("timestamp", timestamp);
    formData.append("app_key", "orient_weixin_key_20171220");
    formData.append(
      "sign",
      getSign("paras=" + paras + "&timestamp=" + timestamp)
    );
    fetch(
      "https://api-info.qhczy.com:1449/dzqh-app-api/service/key/jingdongNewsService/queryById",
      {
        method: "POST",
        headers: {
          token: "",
          Accept: "application/json; charset=utf-8",
        },
        body: formData,
      }
    )
      .then((res) => {
        let result = res.json();
        result.then((res) => {
          setNewsDetail(res.data);
        });
      })
      .catch((err) => {
        console.log("请求出错", err);
        showPagePopup({
          text: "内容加载出错",
          type: "",
          _time: Math.random(),
        });
      });
  };

  // 生成新闻栏目的请求签名
  const getSign = (paras, apiType) => {
    var arr = paras.split("&");
    //过滤中文
    arr.forEach((obj, idx) => {
      if (obj.indexOf("%25") > 0) {
        arr[idx] = decodeURIComponent(obj);
      }
    });
    var paras = arr.sort();
    var paraStr = "";
    //para1=value1&para2=value2
    paras.forEach((value) => {
      paraStr = paraStr + value + "&";
    });
    paraStr = paraStr.substring(0, paraStr.length - 1);

    return md5("445aa51278ba4d58ac2a9a3e5d210945" + paraStr).toUpperCase();
  };
  const getFormatTime = (currentTime) => {
    let currMin = "" + Math.floor(currentTime / 60);
    currMin = currMin < 10 ? currMin.padStart(2, "0") : currMin;
    let currSecond = "" + Math.floor(currentTime % 60);
    currSecond = currSecond < 10 ? currSecond.padStart(2, "0") : currSecond;
    return currMin + ":" + currSecond;
  };
  // 点击音频进度条
  const progressClick = (e) => {
    const audioId = document.getElementById("audioId");
    const progressId1 = document.getElementById("progressId");
    const progressId = document.getElementsByClassName("progress-x")[0];
    const pwidth = progressId.clientWidth;
    const pleft =
      e.clientX - progressId.offsetLeft > 0
        ? e.clientX - progressId.offsetLeft
        : "0";
    setLeft(pleft);
    audioId.currentTime = (pleft / pwidth) * audioId.duration;
    setCurrentTime(getFormatTime(audioId.currentTime));
    progressId1.value = (audioId.currentTime / audioId.duration) * 100;
  };
  // 点击播放或暂停
  const newplay = (e) => {
    const audioId = document.getElementById("audioId");
    if (audioId.paused) {
      audioId.play();
      setIsPaused(false);
    } else {
      audioId.pause();
      setIsPaused(true);
    }
  };
  return (
    <NewsShareWrapper>
      <div className="news-x">
        <div className="prititle">{mainTitle}</div>
        <div className="subtitle u-f-ac">
          来源: {characterName}
          <span>{moment(issuerDttmStr).from(moment(curtime))}</span>
        </div>

        {!!voiceUrl && (
          <div className="voice-x">
            <audio
              controls
              className="hide"
              id="audioId"
              src={voiceUrl}
              onCanPlay={(e) => {
                setAllTime(getFormatTime(e.target.duration));
                setCurrentTime(getFormatTime(e.target.currentTime));
              }}
              onPlay={(e) => {
                let t = null;
                const progressId = document.getElementById("progressId");
                t = setInterval(() => {
                  setCurrentTime(getFormatTime(e.target.currentTime));
                  let percent = e.target.currentTime / e.target.duration;
                  progressId.value = percent * 100;
                  setLeft(progressId.clientWidth * percent);
                  if (e.target.duration - e.target.currentTime == 0) {
                    clearInterval(t);
                    t = null;
                    e.target.pause();
                    setIsPaused(true);
                    progressId.value = 0;
                    setLeft(0);
                    setCurrentTime("00:00");
                  }
                }, 1000);
              }}
              onPause={(e) => {
                clearInterval(t);
                t = null;
              }}
            ></audio>
            <div className="voice-con u-f-ac u-f-jsb">
              <div className="playTime u-f-ac u-f-jsb" id="playTimeId">
                <span id="playedTime">{currentTime}</span>
                <div className="progress-x" onClick={progressClick}>
                  <progress value="0" max="100" id="progressId"></progress>
                  <div
                    id="controlBtn"
                    draggable="true"
                    style={{ left: left + "px" }}
                    // ondragstart="drag(event)"
                  ></div>
                </div>
                <span id="playAllTime">{allTime}</span>
              </div>
              <p
                id="pauseBtn"
                className="iconfont"
                dangerouslySetInnerHTML={{
                  __html: isPaused ? "&#xe6fd;" : "&#xe6fe;",
                }}
                onClick={newplay}
              ></p>
            </div>
          </div>
        )}
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
        <div className="disclaimer news">
          免责声明：以上内容仅代表作者的个人观点，不代表火象的任何立场，不构成任何操作建议。火象亦无法证实上述内容的真实性、准确性和原创性，在作出任何投资决定前，投资者应更具自身情况考虑投资产品相关的风险因素，对此火象不做任何保证和承诺。
        </div>
      </div>
    </NewsShareWrapper>
  );
});
