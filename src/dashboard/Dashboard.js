import React from "react";

import { 
	Avatar, Heading, HStack, VStack, Button,
	  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Box,
  Text,
	 } from "@chakra-ui/react";


/*
render() {
        return <Dashboard name = "someones name" followers = "0" followed = "20" about = "Hi i am a person who does not like cheese but i do like cookies i don't know if you noticed"/>;
    }
*/

export default class Dashboard extends React.Component { 

	constructor() {
		super();
		this.state = {
			isOpen : false,
			avatar : "https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg",
			save : "",
		}
		}

	onClose = () => {
		this.setState({isOpen: false});
		this.setState({avatar : this.state.save});
	}

	onSave = () => {
		this.setState({isOpen: false})
	}

	changeIcon = () => {
		this.setState({isOpen: true});
		this.setState({save: this.state.avatar});

		
	};

    render() {
        return (
        	<VStack spacing = {4} bg="#EEEEEE">
        	<Box borderWidth = "1px" borderRadius = "lg" margin = "10px" padding = "20px" bg="white" shadow ="md">
        	<HStack spacing = {4}>

        	<VStack>
        	<Avatar bg = "#EEEEEE" size = "2xl" name = {this.props.name} src = {this.state.avatar}
        	/>
        	<Button size = "xs" onClick = {this.changeIcon}>Change</Button> 
        	

		<Drawer
        		isOpen={this.state.isOpen}
        		placement="left"
        		onClose={this.onClose}
      		>
        		<DrawerOverlay>
         		 <DrawerContent>
            		<DrawerCloseButton />
            			<DrawerHeader>Input image address</DrawerHeader>

            			<DrawerBody>
             	 <Input placeholder="Type here" onChange = {event => this.setState({avatar: event.currentTarget.value})}/>
           		 </DrawerBody>

           		 <DrawerFooter>
              	<Button onClick={this.onClose}>
                Cancel
              	</Button>
            	  <Button color="grey" onClick={this.onSave}>Save</Button>
           	 		</DrawerFooter>
         		 </DrawerContent>
       			</DrawerOverlay>
     		 </Drawer>



        	</VStack>

        	<VStack align = "left">
        	<Heading size = "3xl"> {this.props.name} </Heading>
            <Heading size = "lg"> {this.props.followers} Follower(s) | {this.props.followed} Followed</Heading>
            <Text>{this.props.about}</Text>

</VStack>
        </HStack>
        </Box>
        <Box borderWidth = "1px" borderRadius = "lg" shadow = "md" margin = "10px" padding = "10px" bg="white">
       <VStack>

        <Heading size = "xl">Posts</Heading>


        </VStack>
        </Box>
        </VStack>

        );
    }
}
