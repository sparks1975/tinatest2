import * as React from "react";
import styles from "./Features.module.scss";

export const Feature = ({ featuresColor, data, tinaField }) => {
  return (
    <div
      data-tinafield={`${tinaField}`}
      className={styles.feature}
    >
        <div className={styles.image}>
            <img src={data.image} alt={data.image_alt} />
        </div>
        
      {data.title && (
        <h3
          data-tinafield={`${tinaField}.title`}
          className=""
        >
          {data.title}
        </h3>
      )}
      {data.text && (
        <p
          data-tinafield={`${tinaField}.text`}
          className=""
        >
          {data.text}
        </p>
      )}
    </div>
  );
};

export const Features = ({ data, parentField }) => {
  return (
      <div
        className={styles.features}
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
              <Feature
                tinaField={`${parentField}.items.${i}`}
                key={i}
                data={block}
                featuresColor={data.color}
              />
            );
          })}
      </div>
  );
};