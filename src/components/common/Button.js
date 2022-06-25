import styled from "styled-components";

const Button = styled.button`
 color: white;
 background:#f8049c;
 font-weight: bold;
 padding: 8px;
 border-radius: 4px;
 box-shadow: none;
 border: none;
 font-size: 1em;
 display: block;
 width: 100%;
 &:disabled{
   color: #666;
   background: #666;
 }
`;
export { Button };