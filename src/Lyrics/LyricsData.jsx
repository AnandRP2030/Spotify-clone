import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const LyricsData = () => {
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const htmlData = useSelector((state) => state.htmlData);
  const ids = useSelector((state) => state.id);

  function getData() {
    // const fetch = require("node-fetch");
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/chart/albums/",
      params: { per_page: "10", page: "1" },
      headers: {
        "X-RapidAPI-Key": "642dd678camsh7050427eda21061p16063bjsn2163a20f419f",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const idArray = response.data.chart_items.map((ele) => {
          return ele.item.id;
        });
        dispatch({
          type: "FETCH_ID",
          payload: idArray,
        });
        dispatch({
          type: "FETCH_DATA",
          payload: response.data.chart_items,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const data = useSelector((state) => state.data);
  ids?.forEach((element) => {
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
      params: { id: `${element}` },
      headers: {
        "X-RapidAPI-Key": "642dd678camsh7050427eda21061p16063bjsn2163a20f419f",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const Data = response.data.lyrics.lyrics.body.html;
        dispatch({
          type: "HTML_DATA",
          payload: Data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  console.log(htmlData);
  console.log(ids);
  console.log(data);

  return <div dangerouslySetInnerHTML={{ __html: htmlData[1] }}></div>;
};
export default LyricsData;
