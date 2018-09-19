import React, { Component } from "react";
import $ from "jquery";
import NewsContent from "./card_content";

class Headline_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      headlineIndex: 1
    };
  }

  componentDidMount() {
    $.ajax({
      type: "get",
      url:
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=5e161d0fb95b487da8bf2daced3e729d",
      data: "json",
      success: response => {
        this.setState({
          headlines: response.articles
        });
        console.log(response.articles);
      }
    });
    this.changeArticles();
  }

  changeArticles() {
    setInterval(() => {
      const Media = this.state.headlines;
      let randomArticle = Math.floor(Media.length * Math.random());
      this.setState({
        headlineIndex: [randomArticle]
      });
    }, 5000);
  }

  render() {
    // const Media = this.state.headlines;
    // let randomArticle = Math.floor(Media.length * Math.random());

    const list = this.state.headlines.map((val, ind) => (
      <NewsContent key={ind} media={val} />
    ));

    return <div>{list[this.state.headlineIndex]}</div>;
  }
}

export default Headline_card;
