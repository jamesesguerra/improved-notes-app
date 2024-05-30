import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useToast
  } from '@chakra-ui/react'

import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import letterService from '../actions/letters';

const LetterModal = (props) => {

  const {
    currentLetter,
    isOpen,
    onClose,
    onEditOpen,
    letters,
    setLetters
  } = props;

  const toast = useToast();

  const handleEdit = () => {
    onClose();
    onEditOpen();
  };

  const handleDelete = () => {
    letterService
    .remove(currentLetter.id)
    .then(() => {
      setLetters(letters.filter(letter => letter.id !== currentLetter.id));
      onClose();
      toast({
        title: 'Letter deleted.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    })
  };

  return (
    <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: 'sm', md: 'md'}}
          scrollBehavior='inside'
          isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody py='20px' bg='gray.50' mt='15px' mx='20px' rounded='xl'>
              <Text textAlign='right'>{currentLetter.date}</Text>
              <Text pb='20px'>Dear {currentLetter.senderName},</Text>
              <Text pb='20px'>{currentLetter.message}</Text>
              <Text pb='10px' textAlign='right'>Yours,</Text>
              <Text textAlign='right'>{currentLetter.recipientName}</Text>
            </ModalBody>
            <ModalFooter>
            <Button leftIcon={<EditIcon />} variant='ghost' mr={3} onClick={handleEdit}>
                Edit
            </Button>
            <Button leftIcon={<DeleteIcon />} colorScheme='red' onClick={handleDelete}>Delete</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default LetterModal