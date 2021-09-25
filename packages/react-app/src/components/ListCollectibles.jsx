import React, { useEffect, useState } from "react";
import { Button, Card, List } from "antd";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style.css";
import collector1 from "../img/collector1.png";
import Twitter from "../img/Twitter.svg";
import Telegram from "../img/Telegram.svg";
import LinkedIN from "../img/LinkedIN.svg";
import Facebook from "../img/Facebook.svg";
import Discord from "../img/Discord.svg";
import Reddit from "../img/Reddit.svg";
import Reddit1 from "../img/Reddit (1).svg";

export default function ListCollectibles(props) {
  const categories = axios
    .get("http://collectix.store:3334/api/categories")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  let collectibles = [];

  console.log(categories);
  if (props.yourCollectibles === undefined) {
  } else {
    collectibles = props.yourCollectibles;
  }

  console.log("SASSSAAAAAAAAA", collectibles);

  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3}}
      dataSource={collectibles}
      className="collectors__list clear-list"
      style={{ margin: "auto", textAlign: "center", alignItems: "center" }}
      renderItem={item => {
        const id = item.id.toNumber();
        return (
          <List.Item key={id + "_" + item.uri + "_" + item.owner}>
            {/*
            <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
              <Grid item>
                <Card title={<div>{item.name}</div>}>
                  <div>
                    <img src={item.image} style={{ maxWidth: 150 }} />
                  </div>
                </Card>
              </Grid>
              <Grid item style={{ position: "relative" }}>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="body3" style={{ position: "absolute", bottom: -100, left: 0 }}>
                  Social networks
                </Typography>
              </Grid>
              <Grid item>
                <div>
                  <Typography variant="body3" style={{ display: "block" }}>
                    Stats
                  </Typography>
                  <Button>
                    <Link
                      onClick={() => {
                        setRoute("/tasks");
                      }}
                      to="/tasks"
                    >
                      Tasks
                    </Link>
                  </Button>
                </div>
              </Grid>
            </Grid>
            */}
            <li className="collectors__item">
              <div className="collectors__item--wrapper">
                <div className="collectors__item-header">
                  <img src={collector1} alt="" />
                  <div className="collectors__name-block">
                    <a className="collectors__name">Ally Smith</a>
                    <button className="collectors__button main-button">Tasks: 5</button>
                  </div>
                </div>
                <ul className="collectors__params clear-list">
                  <li className="collectors__params-item">
                    <span className="collectors__name-param">Rating:</span>
                    <span className="collectors__value-param">12</span>
                  </li>
                  <li className="collectors__params-item">
                    <span className="collectors__name-param">Сollections:</span>
                    <span className="collectors__value-param">7</span>
                  </li>
                  <li className="collectors__params-item">
                    <span className="collectors__name-param">NFTs on sale:</span>
                    <span className="collectors__value-param">3</span>
                  </li>
                </ul>
                <p className="collectors__text">
                  Public message from collector. His words very important. He wants tell for us something, that we need
                  to know. May be advertisment, may be other information, that must be promoted.
                </p>
                <div className="collectors__social social">
                  <ul className="social__list clear-list">
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Twitter} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Telegram} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={LinkedIN} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Facebook} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Discord} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Reddit} />
                      </a>
                    </li>
                    <li className="social__item">
                      <a className="social__link" href="">
                        <img src={Reddit1} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </List.Item>
        );
      }}
    />
  );
}
