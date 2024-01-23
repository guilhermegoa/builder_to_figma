import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  Textbox,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { CloseHandler, CreateFigmaHandler } from './types/eventHandler.type'

function Plugin() {
  const [key, setKey] = useState('')
  const handleCreateRectanglesButtonClick = useCallback(
    function () {
      if (key !== null) {
        emit<CreateFigmaHandler>('CREATE_FIGMA', key)
      }
    },
    [key]
  )
  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])
  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <Text>
        <Muted>Figma to Builder</Muted>
      </Text>
      <VerticalSpace space="small" />
      <Textbox
        onValueInput={setKey}
        value={key}
        variant="border"
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Create
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
