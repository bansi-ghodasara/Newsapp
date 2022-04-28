import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i am a constructor from news component.");
    this.state = { articles: [], loading: false };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=576125db329244a89c8b8ccccfff8461";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("parseData",parseData);
    this.setState({ articles: parseData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles
            .map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    author={element.author ? element.author : ""}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;
