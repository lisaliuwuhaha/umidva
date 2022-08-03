import React, { memo, useEffect, useState, useContext } from "react";
import Player from "aliplayer-react";
import { modalContext } from "@/utils/modalContext";
import { newVod } from "@/services/articleshare";
import { PlayerWrapper } from "./style";
console.log(Player)
export default memo(function PlayerHandle(props) {
  const { vid, direction, coverUrl } = props;
  const {showPagePopup } = useContext(modalContext);
  const [instance, setInstance] = useState(null);
  const [playauth, setPlayauth] = useState("");
  const [CoverURL, setCoverURL] = useState("");
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    console.log(process)
    newVod({ vid }, false)
      .then((res) => {
        setPlayauth(res.data.PlayAuth);
        setCoverURL(res.data.VideoMeta.CoverURL);
      })
      .catch((err) => {
        showPagePopup({
          text: "视频加载出错",
          type: "",
          _time: Math.random(),
        });
        setFlag(false);
      });
  }, []);
  // direction->2是竖屏:宽高比6.13:9.6;横屏16:9
  const config = {
    width: direction == 2 ? "61.3vw" : "calc(100vw - 3rem)",
    height: direction == 2 ? "96vw" : "calc(56.25vw - 1.6875rem)",
    autoplay: false,
    vid,
    playauth,
    cover: coverUrl ? coverUrl : CoverURL,
    skinLayout: [
      { name: "bigPlayButton", align: "blabs", x: 11, y: 6 },
      {
        name: "H5Loading",
        align: "cc",
      },
      { name: "errorDisplay", align: "tlabs", x: 0, y: 0 },
      { name: "infoDisplay" },
      { name: "tooltip", align: "blabs", x: 0, y: 56 },
      { name: "thumbnail" },
      {
        name: "controlBar",
        align: "blabs",
        x: 0,
        y: 0,
        children: [
          { name: "progress", align: "blabs", x: 0, y: 44 },
          { name: "playButton", align: "tl", x: 15, y: 12 },
          { name: "timeDisplay", align: "tl", x: 10, y: 7 },
          { name: "fullScreenButton", align: "tr", x: 10, y: 12 },
          // {name:"subtitle", align:"tr",x:15, y:12},
          // {name:"setting", align:"tr",x:15, y:12},
          { name: "volume", align: "tr", x: 5, y: 10 },
        ],
      },
    ],
    // encryptType:1, //当播放私有加密流时需要设置。
  };

  return (
    <PlayerWrapper>
      {flag ? (
        <Player
          config={config}
          onGetInstance={(instance) => setInstance(instance)}
        />
      ) : (
        <div id="playerno" className="playerwh u-f-ajc">
          <i className="iconfont">&#xe607;</i> 视频播放错误
        </div>
      )}
    </PlayerWrapper>
  );
});
