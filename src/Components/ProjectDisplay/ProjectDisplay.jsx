import React, {useEffect} from "react";
import "./ProjectDisplay.css"
import githubIcon from "../../assets/Icons/github.svg"
import linkIcon from "../../assets/Icons/link.svg"
import {register} from 'swiper/element/bundle'
register()

export default function ProjectDisplay({info}) {
  const {name, date, repo_link, deployed_link, screenshots, desc, bullets, tech} = info
  let specList, imgList;
  if (name) {
    specList = bullets.map((bul, i) => <li key={i}>{bul}</li>)
    imgList = screenshots.map((image, i) => {
      return (
        <swiper-slide key={i}>
          <img className="swiper-image" src={image} />
        </swiper-slide>
      )
    })
  }

  // useEffect(() => {
  //   const swiperEl = document.querySelector('swiper-container');
  //   const swiperParams = {
  //     breakpoints: {
  //       1000: {
  //         slidesPerView: 3,
  //       },
  //       700: {
  //         slidesPerView: 2,
  //       }
  //     }
  //   };
  //   Object.assign(swiperEl, swiperParams);
  //   swiperEl.initialize();
  // }, [])

  return (
    <div className="project-display">
      {!name ? <p className="proj-placeholder">Select a project!</p> : 
      <>
        <swiper-container
          grab-cursor="true"
          navigation="true"
          loop="true"
        >
          {imgList}
        </swiper-container>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{desc}</p>
        <ul className="spec-list">
          {specList}
        </ul>
        <div className="proj-linkbox">
          <a className="proj-link" target="_blank" href={repo_link}>
            <img className="proj-link-icon" src={githubIcon} />
            Github Repo
          </a>
          <a className="proj-link" target="_blank" href={deployed_link}>
            <img className="proj-link-icon" src={linkIcon} /> 
            Live Demo
          </a>
        </div>
      </>
      }
    </div>
  )
}
