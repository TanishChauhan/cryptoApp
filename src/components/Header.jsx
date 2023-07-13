import React from 'react';
import {Button,HStack} from "@chakra-ui/react";
import ColorModeSwitcher from '../ColorModeSwitcher';
// import { chakra } from '@chakra-ui/react';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={"blackAlpha.900"}>
        <Button variant ={'unstyled'} color={'white'}>
            <Link to="/" >Home</Link>
        </Button>
        <Button variant ={'unstyled'} color={'white'}>
            <Link to="/exchanges" >Exchanges</Link>
        </Button>
        <Button variant ={'unstyled'} color={'white'}>
            <Link to="/coin" >Coins</Link>
        </Button>
        
        <ColorModeSwitcher/>
    </HStack>
    
  )
}

export default Header