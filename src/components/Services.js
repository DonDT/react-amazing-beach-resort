import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free coocktails",
        info:
          "Every eveing during live music performance, guests are offered free drinks of their chosen made by the very best bar attendants"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Most beautiful scenery, loscious mountains, plains and values, safe environment and expert guidance"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Where ever you intend to travel or visit we have transportation available on the go 24/7"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Our home made beer is brewed with such delicacy and engineered for excellent experience, you would love it  "
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
