import { useState, useEffect } from 'react';
import Letter from './Letter'
import LetterModal from './LetterModal';
import EditModal from './EditModal';
import { Box, Flex, useDisclosure, CircularProgress } from '@chakra-ui/react';

import letterService from '../actions/letters';

const LetterBoard = ({ letters, setLetters }) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        letterService
        .getAll()
        .then(initialLetters => setLetters(initialLetters))
        .then(() => setIsLoading(false));
    }, [setLetters]);

    const { isOpen: isReadOpen, onOpen: onReadOpen, onClose: onReadClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const [currentLetter, setCurrentLetter] = useState({});

    return (
        <Box
            bg='gray.50'
            minH={{ md: '100vh'  }}
            flex='1'
            py='50px'
            pl={{ md: '350px' }}
            pr={{ md: '20px' }}
            px={{ base: '31px'}}
        >   
            <Flex
                justify='space-evenly'
                wrap='wrap'
                gap={6}
            >
                {!isLoading || <CircularProgress isIndeterminate color='teal.500' size={{ base: '80px', md: '120px' }} />}
                {letters.map((letter, index) => {
                    return <Letter 
                        key={index} 
                        senderName={letter.senderName}
                        recipientName={letter.recipientName}
                        message={letter.message}
                        id={letter.id}
                        date={letter.date}
                        onOpen={onReadOpen}
                        setCurrentLetter={setCurrentLetter}
                        />
                })}
            </Flex>
            <LetterModal
                isOpen={isReadOpen} 
                onOpen={onReadOpen}
                onEditOpen={onEditOpen}
                onClose={onReadClose}
                currentLetter={currentLetter}
                letters={letters}
                setLetters={setLetters}
            />
            <EditModal 
                isOpen={isEditOpen} 
                onOpen={onEditOpen}
                onClose={onEditClose}
                currentLetter={currentLetter}
                letters={letters}
                setLetters={setLetters}
                setCurrentLetter={setCurrentLetter}
            />
        </Box>
    )
}

export default LetterBoard