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
    Textarea,
    useToast
} from '@chakra-ui/react';

import letterService from '../actions/letters';

const Form = ({ letters, setLetters }) => {
    const toast = useToast();

    const [letterInfo, setLetterInfo] = useState({
        senderName: '',
        recipientName: '',
        message: ''
    });

    const infoState = [
        letterInfo.senderName === '',
        letterInfo.recipientName === '',
        letterInfo.message === ''
    ];

    const updateLetterInfo = (e) => {
        if (e.target.id === 'sender_name') {
            setLetterInfo({ ...letterInfo, senderName: e.target.value });
        } else if (e.target.id === 'recipient_name') {
            setLetterInfo({ ...letterInfo, recipientName: e.target.value });
        } else {
            setLetterInfo({ ...letterInfo, message: e.target.value });
        }
    };

    const handleSubmit = () => {
        if (!infoState.includes(true)) {
            letterService
            .create(letterInfo)
            .then(newLetterInfo => setLetters([...letters, newLetterInfo]))
            .then(() => {
                toast({
                    title: 'Letter sent.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            })
        } else {
            toast({
                title: 'Please provide all information.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
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
                    <FormControl py='15px'>
                        <FormLabel htmlFor='sender_name'>Sender's Name</FormLabel>
                        <Input id='sender_name' type='text' onChange={updateLetterInfo} />
                    </FormControl>
                    <FormControl py='15px'>
                        <FormLabel htmlFor='recipient_name'>Recipient's Name</FormLabel>
                        <Input id='recipient_name' type='text' onChange={updateLetterInfo} />
                    </FormControl>
                    <FormControl py='15px'>
                        <FormLabel htmlFor='message'>Message</FormLabel>
                        <Textarea id='message' minH='200px' onChange={updateLetterInfo} />
                    </FormControl>
                    <Center>
                        <Button
                            colorScheme='teal'
                            w='100%'
                            onClick={handleSubmit}
                            mb='25px'
                        >
                            Send Letter
                        </Button>
                    </Center>
                </form>
            </Box>
        </Container>
    )
}

export default Form