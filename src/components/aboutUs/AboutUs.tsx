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
          <p>
            Идея: Услуга, оказывающая помощь в поиске шаурмы, неважно, где ты
            находишься, а важно, что при помощи нашего стартап-проекта вы всегда
            сможете вкусно покушать, выбрав лучший вариант, как в плане
            качества, так и в плане экономии времени
          </p>
          <h1>Анализ конкурентов</h1>
          <ul className="competitor">
            <li>
              1. Где шаурма? Это наш главный и единственный конкурент. Создатель
              приложения является Dodo engineering
            </li>
            <li>Плюсы данного конкурента:</li>
            <li>1. Имеется мобильное приложение.</li>
            <li>
              2. Более расширенный поиск мест для питания, за счет использования
              множества api геоданных.
            </li>
            <li>
              3. В приложении есть оценивание мест питания, фотографии и тд.
            </li>

            <li>Минусы данного конкурента:</li>
            <li>
              1. Нет веб сайта, чтобы воспользоваться их услугами надо скачивать
              приложение.
            </li>
            <li>2. Нет построения маршрута.</li>
          </ul>
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
                <p>Make yandex map</p>
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
                <p className="title">Developer</p>
                <p>Make "About us"</p>
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
          <div className="column">
            <div className="card">
              <img
                src={require("./img/alex.jpeg")}
                alt="Mike"
                className="img"
              />
              <div className="container">
                <h2>Alexsey Mokeev</h2>
                <p className="title">Developer</p>
                <p>Make navigation bar</p>
                <p>mike@example.com</p>
                <p>
                  <button
                    className="button"
                    onClick={() => this.openInNewTab("https://t.me/iveekom")}
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
