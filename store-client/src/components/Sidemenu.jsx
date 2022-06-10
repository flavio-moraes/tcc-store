import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';


const MenuOpenButton = styled.div`
    width: 32px;
    cursor: pointer;
`;

const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 260px;
    background-color: #EEE;
    transition: all 0.35s ease-out;
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:hover{
        background-color: #BBB;
        transition: all 0.5s ease;
    }
`;

const Sidemenu = () => {
    const [isSidemenu, setSidemenu] = useState(false);
    const open = (isSidemenu) => {
        return setSidemenu(!isSidemenu);
    }
    const domNode = useRef();
    const updateState = (e) => {
        if (domNode.current.contains(e.target)) {
            return;
        }
        setSidemenu(false);
    }
    useEffect(() => {
        document.addEventListener('mousedown', updateState);
        return () => {
            document.removeEventListener('mousedown', updateState);
        }
    }, []);

  return (
    <div>
        <MenuOpenButton ref={domNode} onClick={() => {open(isSidemenu)}}>X</MenuOpenButton>
        <MenuContainer style={{left: isSidemenu ? '0' : '-265px'}}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
            <MenuItem>Item 5</MenuItem>
        </MenuContainer>
    </div>
  )
}

export default Sidemenu