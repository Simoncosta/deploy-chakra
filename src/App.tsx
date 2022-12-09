import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function App() {
  return (
    <div>
      <Alert status='success'>
        <AlertIcon />
        <AlertTitle>Aula Deploy</AlertTitle>
        <AlertDescription>Deploy com Chakra UI</AlertDescription>
      </Alert>
    </div>
  )
}

export default App
