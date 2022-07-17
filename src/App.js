import { useState } from 'react';  
import Form from "./components/Form";
import LetterBoard from "./components/LetterBoard";
import { Flex } from '@chakra-ui/react'

function App() {

  const [letters, setLetters] = useState([]);

  return (
    <div className="App">
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Form letters={letters} setLetters={setLetters} />
        <LetterBoard letters={letters} setLetters={setLetters} />
      </Flex>
    </div>
  );
}

export default App;
