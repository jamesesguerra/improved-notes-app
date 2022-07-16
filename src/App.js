import Form from "./components/Form";
import LetterBoard from "./components/LetterBoard";
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Form />
        <LetterBoard />
      </Flex>
    </div>
  );
}

export default App;
