import React from "react";
import "./App.css";

import { Input, Textarea, Flex, Spacer, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter } from "@chakra-ui/react";


export default class Upload extends React.Component {
    constructor() {
        super();
        this.fileInputRef = React.createRef();
    }

    render() {
        // Upload expects a prop "isOpen", make a button pass "True" into the prop or something idk, {this.props.isOpen}
        // You also need to figure out how to make the modal close lol {this.props.onClose}
        // You also need to figure out how to make a post happen lol {this.props.onPost}
        return( 
            
            <Modal isOpen={this.props.isOpen} size="xl"> 
            <ModalOverlay/>
            
            <ModalContent>
                    <ModalHeader>Upload post</ModalHeader>
                    
                    <ModalBody>

                        <Input placeholder="Your Title" marginBottom="1vw"></Input>
                        <Textarea placeholder = "Your Text" resize="Vertical" height="8vw"/>
                        <Input type="file" ref={this.fileInputRef} onChange={()=> {console.log("hi")}} hidden></Input>
                        <Button marginTop="1vw"onClick={() => this.fileInputRef.current.click()}>Upload File</Button>

                    </ModalBody>
                    
                    <ModalFooter>
                        <Flex width="100%">
                        <Button colorScheme="red" onClick={this.props.onClose}>Cancel</Button> 
                        <Spacer/>
                        <Button colorScheme="blue" onClick={this.props.onPost}>Post</Button>
                        </Flex> 
                    </ModalFooter>

            </ModalContent>
            </Modal>

        );
    }
}
