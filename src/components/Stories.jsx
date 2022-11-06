import React from "react";
import Title from "../utils/Title";
import { HeartIcon, ClockIcon,HashtagIcon } from "@heroicons/react/24/solid";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div>
          <Splide>
            {news?.map((value, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div>
                  <div>
                    <img src={value.img} alt={`img/story/${i}`} className="" />
                    <div>
                      <div>
                        <HeartIcon className="icon-style" />{" "}
                        <span>{value.like}</span>
                      </div>
                      <div>
                        <ClockIcon className="icon-style" />{" "}
                        <span>{value.time}</span>
                      </div>
                      <div>
                        <HashtagIcon className="icon-style" />{" "}
                        <span>{value.time}</span>
                      </div>
                    </div>
                    <div>
                        <h1>{value.title}</h1>
                        <p>{value.text}</p>
                    </div>
                    <div>
                        <a href={value.url}>{value.btn}</a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
