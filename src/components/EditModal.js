import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useToast
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

const EditModal = ({ isOpen, onClose, currentLetter, setCurrentLetter }) => {
    const toast = useToast();

    const updateLetterInfo = (e) => {
        if (e.target.id === 'sender_name') {
            setCurrentLetter({ ...currentLetter, sender: e.target.value });
        } else if (e.target.id === 'recipient_name') {
            setCurrentLetter({ ...currentLetter, recipient: e.target.value });
        } else {
            setCurrentLetter({ ...currentLetter, message: e.target.value });
        }
    };

    const handleSaveLetter = () => {
        onClose();
        toast({
            title: 'Succesfully edited letter.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }

    return (
    <>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'sm', md: 'md'}}
        scrollBehavior='inside'
        isCentered
        >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Edit Letter</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form>
                <FormControl py='15px'>
                    <FormLabel htmlFor='sender_name'>Sender's Name</FormLabel>
                    <Input id='sender_name' type='text' value={currentLetter.sender} onChange={updateLetterInfo} />
                </FormControl>
                <FormControl py='15px'>
                    <FormLabel htmlFor='recipient_name'>Recipient's Name</FormLabel>
                    <Input id='recipient_name' type='text' value={currentLetter.recipient} onChange={updateLetterInfo} />
                </FormControl>
                <FormControl py='15px'>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea id='message' minH='200px' value={currentLetter.message} onChange={updateLetterInfo} />
                </FormControl>
            </form>
            </ModalBody>
            <ModalFooter>
            <Button leftIcon={<CheckIcon />} colorScheme='blue' mr={3} onClick={handleSaveLetter}>
                Save
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
    )
}

export default EditModal