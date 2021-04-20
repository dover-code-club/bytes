import React from "react";
import { storageKey, Box, SimpleGrid, Grid} from "@chakra-ui/react"
import { Image, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import UserStory from "./UserStory";
export default class Stories extends React.Component {
    getStories(){
        let Storieses = [];
        for (let i = 0; i < 10; ++i) {
            Storieses.push(<UserStory />);
        }
        console.log(Storieses);
        return Storieses;
    }
    render(){
        return (
            <Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        {this.getStories()}</Grid>
            </Box>
        )
    }
}


