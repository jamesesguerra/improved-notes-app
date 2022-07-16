import { useState } from 'react';
import {
    Box,
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea
} from '@chakra-ui/react'

const Form = () => {

    const [letterInfo, setLetterInfo] = useState({
        senderName: '',
        recipientName: '',
        message: ''
    });

    const updateLetterInfo = (e) => {
        if (e.target.id === 'sender_name') {
            setLetterInfo({ ...letterInfo, senderName: e.target.value });
        } else if (e.target.id === 'recipient_name') {
            setLetterInfo({ ...letterInfo, recipientName: e.target.value });
        } else {
            setLetterInfo({ ...letterInfo, message: e.target.value });
        }
    };

    return (
        <Container
            bg='white'
            h={{ md: '100vh' }} 
            maxW={{ base: 'container.sm', md: '330px' }}
            position={{ base: 'static', md: 'fixed'}}
            pt='50px'
        >   
            <Box px='15px'>
                <Heading
                    as='h1'
                    size={{ base: '4xl', md: '2xl' }}
                    pb='10px'
                >
                    letters.io
                </Heading>
                <Text fontSize='xl' pb='15px'>lorem ipsum dolor sit amet</Text>
                <form>
                    <FormControl isRequired py='15px'>
                        <FormLabel htmlFor='sender_name'>Sender's Name</FormLabel>
                        <Input id='sender_name' type='text' onChange={updateLetterInfo} />
                    </FormControl>
                    <FormControl isRequired py='15px'>
                        <FormLabel htmlFor='recipient_name'>Recipient's Name</FormLabel>
                        <Input id='recipient_name' type='text' onChange={updateLetterInfo} />
                    </FormControl>
                    <FormControl isRequired py='15px'>
                        <FormLabel htmlFor='message'>Message</FormLabel>
                        <Textarea id='message' minH='200px' onChange={updateLetterInfo} />
                    </FormControl>
                    <Center>
                        <Button
                            colorScheme='teal'
                            w='100%'
                        >
                            Send Message
                        </Button>
                    </Center>
                </form>
            </Box>
        </Container>
    )
}

export default Form