import React from "react";
import { Popular, New } from "../App";

export default function WithTextMark({ Component, props }) {
  const content = <Component {...props} />;
  if (props.views >= 1000) {
    return <Popular>{content}</Popular>;
  }
  if (props.views < 100) {
    return <New>{content}</New>;
  }
}
