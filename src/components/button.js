import React from "react"

import styles from "./button.module.scss"

const Button = props => (
  <button className={styles.button__wrapper} props={props}>{props.children}</button>
)

// const ButtonWrapper = styled.button`
//   display: block;
//   border: none;
//   text-align: center;
//   box-sizing: border-box;
//   text-decoration: none;
//   padding: 10px 30px;
//   cursor: pointer;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   height:3rem;

//   background: ${props => props.props.background || "black"};
//   color: ${props => props.props.color || "rgb(255, 255, 255)"};
//   font-size: ${props => props.props.fontSize || "15px"};
//   font-weight: ${props => props.props.fontWeight || "600"};
//   border-radius: ${props => props.props.radius || "6px"};
//   margin-top: ${props => props.props.marginTop};
//   margin-bottom: ${props => props.props.marginBottom};

//   &:hover {
    
//       background-color: $dark-highlight
  
//   }
// `

export default Button
