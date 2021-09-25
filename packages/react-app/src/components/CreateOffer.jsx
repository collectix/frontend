import React, { useEffect, useState } from "react";
import { Button, Card, List } from "antd";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ImageUploading from "react-images-uploading";

export default class CreateOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      collections: [
        {
          value: "USD",
          label: "$123123",
        },
        {
          value: "EUR",
          label: "€123123123",
        },
        {
          value: "BTC",
          label: "฿123123123",
        },
        {
          value: "JPY",
          label: "¥123123123",
        },
      ],
      maxNumbers: 69,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRoyalty = this.handleChangeRoyalty.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  componentDidMount() {
    const collections = axios
      .get("http://collectix.store:3334/api/categories")
      .then(function (response) {
        console.log(response);
        this.setState({ collections: response });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  handleChangeRoyalty = event => {
    console.log(event.target.value);
    this.setState({ royalty: event.target.value });
  };

  handleChangeName = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = event => {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  };

  handleSubmit = event => {
    var bodyFormData = new FormData();
    bodyFormData.append("creator", this.props.address);
    bodyFormData.append("name", this.state.name);
    bodyFormData.append("royalty", this.state.royalty);
    bodyFormData.append("description", this.state.description);
    bodyFormData.append("file", this.state.images[0]);
    axios({
      method: "post",
      url: "http://collectix.store:3334/api/lazy-mint",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    console.log(bodyFormData);
    event.preventDefault();
  };

  onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    this.setState({ images: imageList });
  };

  render() {
    return (
      <Grid
        container
        spacing={2}
        style={{ width: "80vw", margin: "10px", marginTop: 32, paddingBottom: 32, textAlign: "left" }}
      >
        <Grid item xs={6}>
          <Typography variant="h4">Create Offer</Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt turpis aliquet felis rhoncus, sed
            mattis ex porttitor. Donec gravida bibendum sapien, sit amet vulputate justo mollis a. Phasellus posuere
            rutrum est vitae maximus. Donec lobortis nisl et viverra imperdiet.{" "}
          </Typography>
          <form onSubmit={this.handleSubmit} style={{ marginTop: "10px" }}>
            <label>
              <TextField
                style={{ display: "block", marginTop: "15px" }}
                label="Name"
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </label>
            <label>
              <TextField
                style={{ display: "block", marginTop: "15px" }}
                label="Description"
                type="text"
                value={this.state.description}
                onChange={this.handleChangeDescription}
              />
            </label>
            <label>
              <TextField
                style={{ display: "block", marginTop: "15px" }}
                label="Royalty"
                type="text"
                value={this.state.royalty}
                onChange={this.handleChangeRoyalty}
              />
            </label>
            <input style={{ display: "block", marginTop: "15px" }} type="submit" value="Отправить" />
          </form>
        </Grid>
        <Grid item xs={6} style={{ marginTop: 100 }}>
          <div className="App">
            <ImageUploading
              value={this.state.images}
              onChange={this.onChange}
              maxNumber={this.state.maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps}>
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button onClick={onImageRemoveAll}>Remove all images</button>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image.data_url} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
        </Grid>
      </Grid>
    );
  }
}
