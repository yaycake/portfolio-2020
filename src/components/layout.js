import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MenuToggle from "./MenuToggle"
import MobileMenu from "./MobileMenu"
import SocialMenu from "./SocialMenu"

import styles from "./layout.module.scss"

const Layout = (props) => {
  const {location, title, children} = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const projectPath = `${__PATH_PREFIX__}/projects/`
  let header; 

  const [showMenu, setMenu] = useState(false); 

  useEffect(() => {
    setMenu(false);
    document.getElementsByTagName('body')[0].classList.remove(styles.noscroll)
  }, [])

  const clickMenuHandler = () => {
    if (showMenu == true){
      setMenu(false)
      
    } else {
      setMenu(true)
      document.getElementsByTagName('body')[0].classList.add(styles.noscroll)
    }
    // document.getElementsByTagName('body')[0].classList.toggle(styles.noscroll);
    console.log(`showMenu: ${showMenu}`)
  };

//  if (showMenu) {
//    console.log("Stop scroll!")
//    document.getElementsByTagName('body')[0].
//    console.log(document.getElementsByTagName('body')[0])
//  } else { 
//    console.log("Scroll!")
//   //  document.getElementsByTagName('body')[0].style.overflow('auto')
//  }

  // const clickMenuHandler = () => {

  // }


  if (location.pathname === rootPath || location.pathname === projectPath) {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          // marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={location.pathname === projectPath ? `/projects/` : `/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          // fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/projects/`}
        >
          {title}
        </Link>
      </h3>
    )
  };

  return (
    <Wrapper>
        <MobileMenu showMenu = {showMenu} clicked={clickMenuHandler}></MobileMenu>
        <div
          className= {styles.layout_wrapper}
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            // maxWidth: rhythm(24),
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {/* <header>{header}</header> */}
          <Header showMenu = {showMenu}>
            <MenuToggle showMenu = {showMenu} clicked={clickMenuHandler}></MenuToggle>
          </Header>
          
          <SocialMenu></SocialMenu>
          <main className={styles.main_wrapper}>{children}</main>
        </div>
        <Footer>
        </Footer>
      </Wrapper>
  )
}

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     const projectPath = `${__PATH_PREFIX__}/projects/`
//     let header

//     if (location.pathname === rootPath || location.pathname === projectPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={location.pathname === projectPath ? `/projects/` : `/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             // fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/projects/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <Wrapper>
//         <div
//           className= {styles.layout_wrapper}
//           style={{
//             marginLeft: `auto`,
//             marginRight: `auto`,
//             // maxWidth: rhythm(24),
//             padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//           }}
//         >
//           {/* <header>{header}</header> */}
//           <Header></Header>
//           <SocialMenu></SocialMenu>
         
//           <main className={styles.main_wrapper}>{children}</main>
//         </div>
//         <Footer>
//         </Footer>
//       </Wrapper>
//     )
//   }
// }

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative
`

// const Footer = styled.footer`
//   text-align: center;
//   margin: 24px;
// `

export default Layout
