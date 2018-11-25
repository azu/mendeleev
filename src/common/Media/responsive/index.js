import { css } from "styled-components";
import getConfig from '../helpers/getConfig'

const responsive = (property, resolution) => {
  console.log(getConfig())
  return css`
    @media (max-width: ${resolution}px) {
      ${property};
    }
  `;
}



export default responsive;
