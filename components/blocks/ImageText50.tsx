import * as React from "react";
import styles from "./ImageText50.module.scss";

const getTemplateClass = (template: string) => styles[`image_text_50--${template}`];
const getCustomClass = (custom: string) => styles[`image_text_50--${custom}`];

export const ImageText50 = ({data, parentField}) => {
    return (
        <div className={`${styles.image_text_50} ${getTemplateClass(data.template)} ${getCustomClass(data.custom)}`}>
            <div className={styles.text}>

                <h3 
                data-tinafield={`${parentField}.tagline`}
                className={styles.featured__subheadline}>{data.tagline}
                </h3>

                <h2 
                data-tinafield={`${parentField}.headline`}
                className={styles.featured__headline}>
                {data.headline}
                </h2>

                {(
                    (data.text || []).length > 0 ? <p data-tinafield={`${parentField}.text`}>{data.text}</p> : null
                )}

                {(
                    (data.btn_label || []).length > 0 ? 
                    <a href={data.btn_link} data-tinafield={`${parentField}.btn_label`} className={styles.btn}>{data.btn_label}</a> :
                    null
                )}
            </div>
            <div className={styles.image}>
                <img src={data.image} alt={data.image_alt} />
            </div>
        </div>
    );
};