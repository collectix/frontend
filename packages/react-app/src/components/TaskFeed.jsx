import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style.css";
import React, { useEffect, useState } from "react";
import { Button, Card, List } from "antd";
import { Grid } from "@mui/material";
import collector1 from "../img/collector1.png";
import Twitter from "../img/Twitter.svg";
import Telegram from "../img/Telegram.svg";
import LinkedIN from "../img/LinkedIN.svg";
import Facebook from "../img/Facebook.svg";
import Discord from "../img/Discord.svg";
import Reddit from "../img/Reddit.svg";
import Reddit1 from "../img/Reddit (1).svg";

export default class TaskFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: "1",
          title: "I will buy NFT",
          categories: "Politics, Abstract, Humor",
          body:
            "Lorem ipsum dolor" +
            " sit amet, consectetur adipiscing elit. Vestibulum iaculis quam metus, ac venenatis erat mattis et." +
            " Curabitur fringilla dignissim elementum.",
          author: "Ally Smith",
          collection: "main",
          published: "12.03.2021",
          deadline: "01.02.2022",
          proposed: "30",
          hashtags: "#sdf, $sgg #yyy",
          reward: "5 Eth",
        },
        {
          id: "1",
          title: "I will buy NFT",
          categories: "Politics, Abstract, Humor",
          body:
            "Lorem ipsum dolor" +
            " sit amet, consectetur adipiscing elit. Vestibulum iaculis quam metus, ac venenatis erat mattis et." +
            " Curabitur fringilla dignissim elementum.",
          author: "Ally Smith",
          collection: "main",
          published: "12.03.2021",
          deadline: "01.02.2022",
          proposed: "30",
          hashtags: "#sdf, $sgg #yyy",
          reward: "5 Eth",
        },
        {
          id: "1",
          title: "I will buy NFT",
          categories: "Politics, Abstract, Humor",
          body:
            "Lorem ipsum dolor" +
            " sit amet, consectetur adipiscing elit. Vestibulum iaculis quam metus, ac venenatis erat mattis et." +
            " Curabitur fringilla dignissim elementum.",
          author: "Ally Smith",
          collection: "main",
          published: "12.03.2021",
          deadline: "01.02.2022",
          proposed: "30",
          hashtags: "#sdf, $sgg #yyy",
          reward: "5 Eth",
        },
      ],
    };
  }

  componentDidMount() {
    axios
      .get("http://collectix.store:3334/api/tasks")
      .then(function (response) {
        this.setState({ tasks: response });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <List
        dataSource={this.state.tasks}
        style={{ justifyContent: "center", width: "80vw" }}
        renderItem={item => {
          const id = item.id;
          return (
            <List.Item
              key={id + "_" + item.uri + "_" + item.owner}
              style={{ width: "80vw", textAlign: "center", margin: "auto", justifyContent: "center" }}
            >
              <li className="collectors__item" style={{ textAlign: "center" }}>
                <div className="tasks__item--wrapper">
                  <div className="collectors__item-header">
                    <div className="collectors__name-block">
                      <a className="collectors__name">{item.title}</a>
                    </div>
                  </div>
                  <ul className="collectors__params clear-list">
                    <li className="collectors__params-item">
                      <span className="collectors__name-param">Categories </span>
                      <span className="collectors__value-param">{item.categories}</span>
                    </li>
                  </ul>
                  <p className="collectors__text">
                    {item.body}
                  </p>
                  <ul className="collectors__params clear-list">
                    <li className="collectors__params-item">
                      <span className="collectors__name-param">Hashtags </span>
                      <span className="collectors__value-param">{item.hashtags}</span>
                    </li>
                  </ul>
                  <button className="collectors__button main-button">Tasks: 5</button>
                </div>
              </li>
            </List.Item>
          );
        }}
      />
    );
  }
}
