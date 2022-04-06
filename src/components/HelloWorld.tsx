import React from "react";
import styles from "./HelloWorld.scss";

const HelloWorld: React.FC<{}> = () => {
  return <div className={styles.blue}>Hello World</div>;
};

export default HelloWorld;
