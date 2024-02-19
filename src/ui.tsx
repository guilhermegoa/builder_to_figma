/* eslint-disable react/react-in-jsx-scope */
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

import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'

function Plugin(): h.JSX.Element {
  const [key, setKey] = useState('')

  const handleCreateFigmaHandlerButtonClick = useCallback(
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
    <Container space='medium'>
      <VerticalSpace space='large' />
      <Text>
        <Muted>Figma to Builder</Muted>
      </Text>
      <VerticalSpace space='small' />
      <Textbox
        onValueInput={setKey}
        value={key}
        variant='border'
        placeholder='Key c2ltd3BwaG1ncmlPblByZz09'
      />
      <VerticalSpace space='extraLarge' />
      <Columns space='extraSmall'>
        <Button fullWidth onClick={handleCreateFigmaHandlerButtonClick}>
          Create
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space='small' />
    </Container>
  )
}

export default render(Plugin)
