import React from 'react';


import { Box,extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
    },
  })


export default class Idnottoo extends React.Component {
    renderer(){
        return <Box color="pink" textStyle="h1"> 
        Idnottoo 
        </Box>
    }
}