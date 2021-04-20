import React from "react";
import { Image } from "@chakra-ui/react"
import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
export default class UserStory extends React.Component {
    render() {
        return(
            <Button colorScheme="teal" size="md" variant="ghost">
                <Image src={this.props.src} alt="user69"boxSize="60px" onClick={this.props.onClick}/>
            </Button>)
    }
}
