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

  const [showMenu, setMenu] = useState(false); 

  useEffect(() => {
    setMenu(false);
  }, [])

  console.log(showMenu)

  const clickMenuHandler = () => {
    if (showMenu == true){
      setMenu(false)
      document.getElementsByTagName('body')[0].classList.remove(styles.noscroll)
    } else {
      setMenu(true)
      document.getElementsByTagName('body')[0].classList.add(styles.noscroll)
    }
  };

  const keyMenuHandler = (e) => {
    if (e.keyCode == 13){
      clickMenuHandler()
    }
  }

  return (
    <Wrapper>
        <MobileMenu showMenu = {showMenu} clicked={clickMenuHandler} keyed = {keyMenuHandler}></MobileMenu>
        <div
          className= {styles.layout_wrapper}
          style={{ marginLeft: `auto`, marginRight: `auto` }}>
          <Header showMenu = {showMenu}>
            <MenuToggle showMenu = {showMenu} clicked={clickMenuHandler} keyed={keyMenuHandler}></MenuToggle>
          </Header>
          <SocialMenu></SocialMenu>
          <main className={styles.main_wrapper}>{children}</main>
        </div>
        <Footer>
        </Footer>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative
`
export default Layout
