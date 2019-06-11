import React from "react";
import { Slide, Heading } from "spectacle";
import { CodeSandboxSlide } from "../components";

export function UseRef() {
  return [
    <Slide>
      <Heading>DOM Ref</Heading>
    </Slide>,
    <Slide>
      <Heading>useRef</Heading>
    </Slide>,
    <Slide>
      <Heading>usePrevious</Heading>
    </Slide>,
    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/countdown-with-input-and-useprevious-xobu7?fontsize=14&hidenavigation=1&autoresize=1"
        title="Classic useState"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style={{
          width: "92%",
          height: "55rem",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </CodeSandboxSlide>
  ];
}
