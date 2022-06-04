import React, {useState} from 'react'
import {motion} from "framer-motion"
import styled from "styled-components"
function Toggle({children, title}) {
    const [toggle, setToggle] = useState(false)
  return (
    <ToggleContainer layout onClick={() => setToggle(!toggle)}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle && children}
        <div className="faq-line"></div>
    </ToggleContainer>
  )
}

const ToggleContainer = styled(motion.div)`
    cursor: pointer;
    padding: 3rem 0rem;
`

export default Toggle