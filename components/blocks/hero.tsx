import * as React from "react";
import styles from "./Hero.module.scss";
// import type { TinaTemplate } from "tinacms";
// import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Hero = ({data, parentField}) => {
    return (
        <div className={styles.hero}>
          <div className={styles.hero__text}>
            {data.tagline && (
              <h3
                data-tinafield={`${parentField}.tagline`}
                className={styles.featured__subheadline}
              >
                {data.tagline}
              </h3>
            )}
            {data.headline && (
              <h2
                data-tinafield={`${parentField}.headline`}
                className=""
              >
                  {data.headline}
              </h2>
            )}
            {data.text && (
              <p 
                data-tinafield={`${parentField}.text`}
                className={styles.hero__headline}
              >
                {data.text}
              </p>
            )}
          </div>
          <div className={styles.hero__image}>
            {data.image && (
            <div
              data-tinafield={`${parentField}.image`}
              className="hero__image-item"
            >
              <img
                className=""
                alt={data.image.alt}
                src={data.image}
              />
            </div>
          )}
          </div>
        </div>
    );
};