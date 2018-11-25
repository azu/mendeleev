/* eslint-disable */
import { css } from "styled-components";
const cosmiconfig = require('cosmiconfig')

const responsive = (property, resolution) => {
  // TODO Here I want to get config
  return css`
    @media (max-width: ${resolution}px) {
      ${property};
    }
  `;
}

export default responsive;
