import React from 'react'
import { Box } from '@mui/material'
import { TextExpander } from './components/TextExpander/TextExpander'
import { loremIpsumText } from './common/mock'

function App() {
  return (
    <Box>
      <TextExpander>{loremIpsumText}</TextExpander>
    </Box>
  )
}

export default App
