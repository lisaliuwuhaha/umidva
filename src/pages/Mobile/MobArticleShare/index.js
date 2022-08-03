import React, { memo, useEffect, useState,useContext} from "react";
import {modalContext} from "@/utils/modalContext";
import { banXoom } from "@/utils/util";
import ShareHF from "@/components/mobile/ShareHF";
import ArticleShareTemp from "./articleshare";
import NewsShareTemp from "./newsshare";
import ImnewsShareTemp from "./imnewsshare";
import { getdate } from "@/services/articleshare";

export default memo(function MobArticleShare() {
  const { getQueryString } = useContext(modalContext);
  const face = !!getQueryString("face")
    ? getQueryString("face")
    : "/resource/hxlogo-grey.png";
  const username = decodeURI(getQueryString("name"));
  const id = getQueryString("id");
  const newsid = getQueryString("newsid");
  const imnewsid = getQueryString("imnewsid");
  const [curtime, setCurtime] = useState("");

  useEffect(() => {
    banXoom();
    getdate()
      .then((res) => {
        setCurtime(res.datetime);
      })
      .catch((err) => {
        console.log("请求出错");
      });
  }, []);

  return (
    <>
      <ShareHF face={face} username={username} dec="内容" />
      {!!id && <ArticleShareTemp id={id} curtime={curtime} />}
      {!!newsid && <NewsShareTemp id={newsid} curtime={curtime} />}
      {!!imnewsid && <ImnewsShareTemp id={imnewsid} curtime={curtime} />}
    </>
  );
});
