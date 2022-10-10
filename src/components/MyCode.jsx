import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { blue } from "./CommonComp";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 0;
  padding: 0.5em;
  font-size: 1.6rem;
  overflow: auto;
  height: 80vh;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
}

  &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      border: 0.2rem solid #1e1e1e;
      background-color: ${blue};
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const MyCode = (props) => (
  <Highlight {...defaultProps} theme={theme} code={props.code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default MyCode;
