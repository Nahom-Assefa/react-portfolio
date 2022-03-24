import React from "react";
import Adulis from "../../img/Adulis-SC.png";
import photoPort from "../../img/Photo-biz.png";
import foodsDelight from "../../img/Foods-Delight.png";
import pizzaHunt from "../../img/Pizza-hunt.png";
import codeSavior from "../../img/Code-Savior.png";
import mvc from "../../img/MVCSocial.png";
import joyNews from "../../img/Joy-News.png";

function project() {

const projectMenu = [
    {
        name: 'Adulis',
        url: 'https://adulis.herokuapp.com/',
        image: Adulis,
        description: 'A website developed for Adulis Incorporated'
    },
    {
        name: 'PhotoPort',
        url: 'https://nahom-assefa.github.io/photo-port/',
        image: photoPort,
        description: 'A Photography Website for a small business'
    },
    {
        name: 'Recipe App',
        url: 'https://nahom-assefa.github.io/Foods-delight/',
        image: foodsDelight,
        description: 'A project inspired by those who love to cook'
    },
    {
        name: 'Mongo Pizza App',
        url: 'https://pizza4life.herokuapp.com/',
        image: pizzaHunt,
        description: 'Share your love of pizza with this social web application'
    },
    {
        name: 'Joy News',
        url: 'https://joynews.herokuapp.com/',
        image: joyNews,
        description: 'News Site with only positive headlines built with MERN stack'
    },
    {
        name: 'SQL Social Network',
        url: 'https://nahomtechblog.herokuapp.com/',
        image: mvc,
        description: 'CMS style blog site for technology discussion'
    }
]

  return (
    <section id="work">
     {projectMenu.map((proj, i) => (
      <div className="card" key={i}>
        <div className="card-img-cont">
        <img src={proj.image} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{proj.name}</h5>
          <p className="card-text">
          {proj.description}
          </p>
          <a href={proj.url} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
            {proj.name}
          </a>
        </div>
      </div>
     ))}
    </section>
  );
}

export default project;
