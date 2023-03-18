import React, { useEffect, useState } from "react";
import { Flex, Heading, Box, Grid, Divider, Skeleton } from "@chakra-ui/react";
import style from "./SearchPageComp.module.css";
import CardCom from "../../CommonComponents/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import PlayListAction from "../../../Redux/SpotifyPlayList/PlayListAction";

function SearchPageComp({ artist, heading, setPlaySong }) {
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.playListReducer.songs;
  });

  useEffect(() => {
    dispatch(PlayListAction("Shreya Ghoshal"));
  }, [useSelector, dispatch, artist]);

  console.log("data", data);
  return data?.length > 0 ? (
    <Box className={style.SpotifyPlaylist} pb="140px">
      <Flex
        justify={"space-between"}
        mt={["42px", "42px", "42px", "60px", "60px"]}
      >
        <Heading>Browse all</Heading>
      </Flex>
      <Grid
        className={style.listContainer}
        flexWrap="wrap"
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
          "repeat(6, 1fr)",
        ]}
        gap="20px"
      >
        {data.map((ele) => {
          return <CardCom prop={ele} setPlaySong={setPlaySong} />;
        })}
      </Grid>

      <Divider mt={"50px"} mb={"50px"} />
    </Box>
  ) : (
    <Grid
      flexWrap="wrap"
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap="20px"
      bg="#121212"
    >
      {[...new Array(20)].map((ele) => {
        return (
          <Box>
            <Skeleton height="300px" startColor="#000000" endColor="#434343" />
          </Box>
        );
      })}
    </Grid>
  );
}

export default SearchPageComp;
