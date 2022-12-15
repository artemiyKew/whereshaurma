import React, { Component } from "react";
import "./AboutUs.css";
export default class AboutUs extends Component {
  openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  render() {
    return (
      <div className="body">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src={require("./img/me.jpeg")}
                alt="Artemiy"
                className="img"
              />
              <div className="container">
                <h2>Artemiy Savinov</h2>
                <p className="title">CEO & Founder</p>
                <p>Make yandex map and serach shaurma</p>
                <p>flartemiy@gmail.com</p>
                <p>
                  <button
                    className="button"
                    onClick={() =>
                      this.openInNewTab("https://t.me/prozrachnost")
                    }
                  >
                    Contact me
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={require("./img/akim.jpg")} alt="Mike" className="img" />
              <div className="container">
                <h2>Akim Yashin</h2>
                <p className="title">Second Developer</p>
                <p>Make navigation bar and this page "About us"</p>
                <p>mike@example.com</p>
                <p>
                  <button
                    className="button"
                    onClick={() =>
                      this.openInNewTab("https://t.me/infoshopfish")
                    }
                  >
                    Contact me
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
