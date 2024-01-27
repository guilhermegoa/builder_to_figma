/* eslint-disable max-len */
const flow = {
  flow: {
    onboarding: {
      $contentActions: [
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: 'e22ceb66-9509-4886-b59b-2afa446d11ca',
                type: 'text/plain',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: false,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:624'
        }
      ],
      $conditionOutputs: [
        {
          stateId: '{{redirect@state}}',
          typeOfStateId: 'variable',
          $id: '764953d6-00b0-4409-b8e8-ef9204e80ec5',
          conditions: [
            {
              values: ['false'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'redirect',
              $$hashKey: 'object:644'
            },
            {
              values: ['onboarding'],
              source: 'context',
              comparison: 'equals',
              variable: 'redirect@service',
              $$hashKey: 'object:645'
            },
            {
              $$hashKey: 'object:716',
              values: [],
              source: 'context',
              comparison: 'exists',
              variable: 'redirect@state'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:627'
        },
        {
          stateId: 'welcome',
          typeOfStateId: 'state',
          $connId: 'con_3',
          $id: 'e2485ee4-7cc7-4c1e-8dec-efc7fc187d9b',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:671'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:628'
        }
      ],
      $enteringCustomActions: [],
      $leavingCustomActions: [],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-d2166b74-1ab3-4d5a-be23-0780ca06e986',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: 'onboarding',
      root: true,
      $title: 'Início',
      $position: {
        top: '338px',
        left: '644px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    fallback: {
      $contentActions: [
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: '9c515225-be3f-410e-bda3-3b7473db8b4f',
                type: 'text/plain',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: 'error',
          conditions: [
            {
              source: 'input',
              comparison: 'matches',
              values: ['.*']
            }
          ],
          $id: '8b310979-9a97-43bb-ae2d-c34d86c74657',
          $connId: 'con_8',
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '18fcdb7a-4b3b-4589-a24a-b6e55127c372',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'set "lastInputState"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "function run(name, id, input) {\n    let figmaId = GetFigmaId(name);\n\n    return {\n        figmaId: figmaId,\n        name: name,\n        id: id,\n        service: 'onboarding',\n        input: input\n    }\n}\n\nfunction GetFigmaId(name) {\n    let match = name.match(/\\w\\.\\d\\.\\d\\.\\d/);\n    return match ? match[0] : name;\n}",
            inputVariables: ['state.previous.name', 'state.previous.id', 'input.content'],
            outputVariable: 'lastInputState',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'onboarding',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-49d81fc9-a10f-4d5b-a104-22b0d1250573',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        }
      ],
      id: 'fallback',
      $title: 'Exceções',
      $position: {
        top: '170px',
        left: '1285px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    welcome: {
      $contentActions: [
        {
          action: {
            $id: 'c969d603-3b3a-4e73-a73f-0a0572fe9c8d',
            $typeOfContent: '',
            type: 'SendMessage',
            settings: {
              id: '00000000-0000-0000-0000-000000000000',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '00000000-0000-0000-0000-000000000000',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left',
              editing: false
            }
          },
          $invalid: false,
          $$hashKey: 'object:421'
        },
        {
          action: {
            $id: '5f3388f0-5319-4a84-af34-415fc99752bc',
            $typeOfContent: '',
            type: 'SendMessage',
            settings: {
              id: '00000000-0000-0000-0000-000000000001',
              type: 'text/plain',
              content: 'Olá, tudo bem? 😊\n\nSou a assistente virtual da SIM e estou para te auxiliar. ',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '00000000-0000-0000-0000-000000000001',
                type: 'text/plain',
                content: 'Olá, tudo bem? 😊\n\nSou a assistente virtual da SIM e estou para te auxiliar. '
              },
              editable: true,
              deletable: true,
              position: 'left',
              editing: false
            }
          },
          $invalid: false,
          $$hashKey: 'object:422'
        },
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: 'a0957e64-f84a-4b17-9af2-80c412d8302e',
                type: 'text/plain',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:423'
        }
      ],
      $conditionOutputs: [
        {
          stateId: 'e3beabe0-92bb-4bad-ba78-0b5359db504d',
          typeOfStateId: 'state',
          $connId: 'con_13',
          $id: '4573ad4c-6a42-49f7-9f6b-de131d82cf49',
          conditions: [
            {
              source: 'context',
              comparison: 'exists',
              values: [],
              variable: 'isUserInfoProvided',
              $$hashKey: 'object:446'
            },
            {
              values: ['sim'],
              source: 'context',
              comparison: 'equals',
              variable: 'isUserInfoProvided',
              $$hashKey: 'object:447'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:429'
        },
        {
          stateId: '9e020603-b540-4f56-bd47-17e00b8c8482',
          typeOfStateId: 'state',
          $connId: 'con_18',
          $id: '1e568150-44c4-464e-9ec0-86b6782fea05',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:471'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:430'
        }
      ],
      $enteringCustomActions: [
        {
          $id: 'cf6c3863-c410-442a-b004-ea9384c3964e',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "isUserInfoProvided"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "function run(contactSerialized) {\n  try {\n    const { name, extras } = JSON.parse(contactSerialized)\n    const { cargo, agencia } = extras\n\n    if (name && cargo && agencia) {\n      return 'sim'\n    }\n\n    return 'nao'\n  } catch (err) {\n    return 'nao'\n  }\n}",
            inputVariables: ['contact.serialized'],
            outputVariable: 'isUserInfoProvided',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'e7a00a45-e094-4ad0-9594-a507daba53e6',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao input',
            action: '{{input.content}}'
          },
          conditions: []
        },
        {
          $id: '2310532e-b834-4794-9fcb-d92b0bd2d54a',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: 'b2619ab1-bec3-4747-bedd-41d1b1ba5372',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao retorno validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao retorno validacao',
            action: '{{isUserInfoProvided}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'onboarding',
        $invalid: false,
        typeOfStateId: 'state'
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-b63cb682-314a-4cf7-8dac-3b7a05c4e44c',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-03f14363-afca-4b2e-8e46-2a4edb8872aa',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-799c8214-1314-49b9-8d11-ae4bc5b92d13',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        }
      ],
      id: 'welcome',
      $title: 'S.1.0.0 - Boas Vindas',
      $position: {
        top: '527px',
        left: '644px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    error: {
      $contentActions: [
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: '3359f996-d6ee-4e77-9b42-41e3df08544e',
                type: 'text/plain',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [],
      $enteringCustomActions: [],
      $leavingCustomActions: [
        {
          $id: 'db4fae29-4617-42ec-b3d7-51f1204ff635',
          $typeOfContent: '',
          type: 'Redirect',
          $title: 'Redirect to "cascata"',
          $invalid: false,
          settings: {
            context: {
              type: 'text/plain',
              value: '{{lastInputState}}'
            },
            address: 'cascata'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'onboarding',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-0f16227a-2ecf-4c77-99d6-35b924817b17',
          label: 'Redirect',
          background: '#1EA1FF',
          canChangeBackground: false
        }
      ],
      id: 'error',
      $title: 'Redirect to cascata',
      $position: {
        top: '170px',
        left: '1079px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    'e3beabe0-92bb-4bad-ba78-0b5359db504d': {
      $contentActions: [
        {
          action: {
            $id: 'b911e9c1-228e-4ac8-87d4-fc0825854461',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: 'ef972c17-8c85-4d0f-a7fb-a47a7563cb64',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: 'ef972c17-8c85-4d0f-a7fb-a47a7563cb64',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1263'
        },
        {
          action: {
            $id: '49c88795-b780-496a-8329-eea870fdb17d',
            $typeOfContent: 'select-immediate',
            type: 'SendMessage',
            settings: {
              id: 'b585a8e7-dea0-4a3a-983f-625f4d284c21',
              type: 'application/vnd.lime.select+json',
              content: {
                text: 'Antes de começar o seu atendimento, me confirme as informações abaixo:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b>  🤔\nClique em um dos botões abaixo.',
                scope: 'immediate',
                options: [
                  {
                    text: 'Estão corretas',
                    previewText: 'Estão corretas',
                    value: null,
                    index: 0,
                    type: null
                  },
                  {
                    text: 'Corrigir',
                    previewText: 'Corrigir',
                    value: null,
                    index: 1,
                    type: null
                  }
                ],
                quikReply: false
              },
              metadata: {}
            },
            $cardContent: {
              document: {
                id: 'b585a8e7-dea0-4a3a-983f-625f4d284c21',
                type: 'application/vnd.lime.select+json',
                content: {
                  text: 'Antes de começar o seu atendimento, me confirme as informações abaixo:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b>  🤔\nClique em um dos botões abaixo.',
                  scope: 'immediate',
                  options: [
                    {
                      text: 'Estão corretas',
                      previewText: 'Estão corretas',
                      value: null,
                      index: 0,
                      type: null
                    },
                    {
                      text: 'Corrigir',
                      previewText: 'Corrigir',
                      value: null,
                      index: 1,
                      type: null
                    }
                  ],
                  quikReply: false
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1264'
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: 'c90ba73b-551c-45eb-8248-76b9e8d9bf44',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:1265'
        }
      ],
      $conditionOutputs: [
        {
          stateId: '9b08295c-4e32-42ba-b6d0-3f82412819e2',
          typeOfStateId: 'state',
          $connId: 'con_23',
          $id: '8dbe1a9d-b3c6-43f1-b65b-6a260ded70ea',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1289'
            },
            {
              values: ['Corrigir'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1290'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1272'
        },
        {
          stateId: '7e7e83fe-c462-4e2e-ba78-0cad819f11a5',
          typeOfStateId: 'state',
          $connId: 'con_28',
          $id: '5ce2075b-138d-4309-ac2a-ef79fbed8782',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1312'
            },
            {
              values: ['Estão corretas'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1313'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1273'
        }
      ],
      $enteringCustomActions: [
        {
          $id: 'd0da84c3-bf8a-4c9f-a266-e6152ffac532',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao retorno exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao retorno exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '06c800f8-0dc5-4a95-a49b-79c4a8014c75',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "menu"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'menu'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '55554019-01f0-4321-912a-d4efebbf1fc2',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(input) {\n\ttry {\n\t\tconst matchItens = {\n\t\t\t"^(1)$|^(um)&|primeir[oa]|cor[r]?[eé]t[oa][s]?": "Estão corretas",\n\t\t\t"^(2)$|dois|segund[ao]|cor[r]?i[gj][ie][r]?": "Corrigir",\n\t\t}\n\n\t\tconst match = Object.keys(matchItens).find((key) => input.match(RegExp(key, \'gmi\')))\n\t\tconst selected = matchItens[match];\n\n\t\treturn selected ? selected : "Input inesperado"\n\t} catch (err) {\n\t\treturn "Erro inesperado"\n\t}\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '4e1ce2ab-4c88-41de-83d5-15727ad804f4',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao retorno selecao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao retorno selecao',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '025ca79f-73d5-4997-a8b4-f5870e273913',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao retorno inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao retorno inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['Input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: 'cf675dc7-0f15-4d90-ba0c-32029f90e6aa',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding saudacao retorno detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding saudacao retorno detalhes',
            action: '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: ['Estão corretas', 'Corrigir'],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-44a2187b-bd21-431a-80d3-4e03a8345479',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-cec00a6f-e1c1-48c1-910a-e300c330a2fd',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-275f3b81-e116-4693-a6fd-7eedea9a21dc',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-dd95a43c-de78-4ff9-8135-4dc236662fe1',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-056cf007-8b21-4731-9791-dfe835d52a0f',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: 'e3beabe0-92bb-4bad-ba78-0b5359db504d',
      root: false,
      $title: 'S.1.1.1 - Confirma dados (retorno)',
      $position: {
        top: '1298px',
        left: '643px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '9e020603-b540-4f56-bd47-17e00b8c8482': {
      $contentActions: [
        {
          action: {
            $id: 'af7b520b-471e-422f-9a5a-d944ee1304da',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: 'b4b9e82a-3ff9-4571-bc6d-23b82845243c',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: 'b4b9e82a-3ff9-4571-bc6d-23b82845243c',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: 'b821e1e4-1a2c-4881-9287-b946ca270872',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '7ae63453-f9fb-40fc-a9ce-c27742fd936c',
              type: 'text/plain',
              content: 'Antes de começar o seu atendimento, preciso de algumas informações.',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '7ae63453-f9fb-40fc-a9ce-c27742fd936c',
                type: 'text/plain',
                content: 'Antes de começar o seu atendimento, preciso de algumas informações.'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: 'b75427df-96fe-4493-91a9-86933589d8be',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '48b562dc-f0cf-4bb6-81cb-8a686babe2fe',
          typeOfStateId: 'state',
          $connId: 'con_33',
          $id: '2c326679-3770-4677-a3af-0e3b0bc99b65',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [],
      $leavingCustomActions: [],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-cda40f75-3d33-41fe-9864-eae6102a1089',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        }
      ],
      id: '9e020603-b540-4f56-bd47-17e00b8c8482',
      root: false,
      $title: 'S.1.1.2',
      $position: {
        top: '539px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '48b562dc-f0cf-4bb6-81cb-8a686babe2fe': {
      $contentActions: [
        {
          action: {
            $id: '71e59b52-0b44-4545-b547-8f00c2ce9404',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '1cb8988f-20df-4d60-91f6-2497155a793b',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '1cb8988f-20df-4d60-91f6-2497155a793b',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: '155cb502-5c84-4dd7-9157-5d868e2a7a3e',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '454945f1-8fec-4ea4-9835-a5b707fa1478',
              type: 'text/plain',
              content: '<b>Pergunta 1 de 3</b>\n\nPrimeiro, me informe o seu <b>nome completo.</b>',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '454945f1-8fec-4ea4-9835-a5b707fa1478',
                type: 'text/plain',
                content: '<b>Pergunta 1 de 3</b>\n\nPrimeiro, me informe o seu <b>nome completo.</b>'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '78bc940d-5240-4e9a-9827-9588d45287f4',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '311c5c38-0cce-404e-ab22-0a88c3bc2546',
          typeOfStateId: 'state',
          $connId: 'con_38',
          $id: '078c684b-f5d8-44a4-9619-5e29e21cf88f',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: [],
              source: 'context',
              comparison: 'exists',
              variable: 'processedInput'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '3768b341-e002-4c88-b2e7-c92d3a00ae51',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita nome exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita nome exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '164cdb53-9b5e-49f2-bfe4-c5f5b8144f63',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "nome"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'nome'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '2659e30f-51b4-4b58-8cd8-dc7bab0c9ce7',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(nome) {\n    nome = nome.replace(/(O?\\s*Meu\\s*nome\\s*((completo\\s*)?[ée]h?)?|Nome:?)/gi, \'\');\n    nome = nome.replace(/(\\.)/gi, \' \');\n    nome = nome.replace(/(\\s+)/gi, \' \');\n    nome = nome.trim();\n\n    var split = nome.split(\' \');\n    if (split[1] == undefined || split[1] == null) {\n        return "input inesperado";\n    }\n\n    for (key in split) {\n        if (key < 10) {\n            if (split[key].length < 2) {\n                return "input inesperado";\n            }\n        }\n    }\n    for (var i = 0; i < nome.length - 3; i++) {\n        if (nome[i] == nome[i + 1] && nome[i] == nome[i + 2] && nome[i] == nome[i + 3]) {\n            return "input inesperado";\n        }\n    }\n\n    const WHITE_SPACES = RegExp("(\\\\s+)", "gi");\n    nomeSemEspacos = nome.replace(WHITE_SPACES, "");\n\n    const INVALID_CARACTERES = RegExp("[^a-záéíóúõãüöäëôâêîûç]", "gi");\n    if (!INVALID_CARACTERES.test(nomeSemEspacos))\n        return nome;\n    else return "input inesperado";\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: [],
          continueOnError: true
        },
        {
          $id: '8ce0db43-dde7-4efb-b14c-9325a6fd2e1d',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '5465c91f-cd13-4799-aa25-baf42a5820dd',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "nome"',
          $invalid: false,
          settings: {
            extras: {},
            name: '{{processedInput}}'
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '9e12756f-582a-455b-85d7-b2c874369e1d',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita nome input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita nome input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '147418c7-78b5-4b8d-b2e3-7adaa1b9cc51',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita nome input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita nome input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: 'a2e8ca85-3a7b-41de-a24c-7270ac6c41bf',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita nome validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita nome validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-64a27942-4fe9-4bbb-b43c-e125666d7449',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-c2d47c08-f751-44e2-ba37-5fcbe3946152',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-0ed9a92d-0fc6-44e7-8c1b-f7b710188f82',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-42ba242f-1fb9-4fdc-baf2-30ea23bcded2',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-22a40ed3-c077-40a2-b3f1-cd893bb10fee',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-0e5a7a47-74d4-41da-a000-c1a52bcf162e',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '48b562dc-f0cf-4bb6-81cb-8a686babe2fe',
      root: false,
      $title: 'S.1.1.3 - Informe nome',
      $position: {
        top: '712px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '311c5c38-0cce-404e-ab22-0a88c3bc2546': {
      $contentActions: [
        {
          action: {
            $id: '623f9459-0069-4ba0-8740-762bc5ef7929',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '9fcd8002-0cfb-4c79-9d9e-6d7ba6cc8b4f',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '9fcd8002-0cfb-4c79-9d9e-6d7ba6cc8b4f',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: 'cbcc1a6a-6c21-4bc9-bf38-716d8f6c6a7c',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '0a08936c-22c5-4418-bcd9-49f12b422554',
              type: 'text/plain',
              content: '<b>Pergunta 2 de 3</b>\n\nQual o seu cargo?',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '0a08936c-22c5-4418-bcd9-49f12b422554',
                type: 'text/plain',
                content: '<b>Pergunta 2 de 3</b>\n\nQual o seu cargo?'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '6b6cf3a8-2aa3-4bc4-8c99-87f5cf997d73',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: 'c08c99b7-29da-4cea-8e75-00fa09074f42',
          typeOfStateId: 'state',
          $connId: 'con_43',
          $id: '344597b5-fcef-425a-9e23-439a99c65557',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '207eb0ae-dc86-4a1a-839c-adf44599b5d3',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita cargo exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita cargo exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '62b0418c-eaca-48f4-832a-42949259438a',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "cargo"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'cargo'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'c78d6653-514c-455f-91e3-e91dfac9fca8',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(position) {\n    try {\n        const regex = /[^a-zA-Z0-9\\u00C0-\\u00FF\\s]/g;\n        const regexRepetition = /(.)\\1{4,}/;\n        const regexOnlyNumbers = /^\\d+$/;\n        const regexSair = /sai[r]?|ence[r]?ra[r]?|finaliza[r]?/gi\n\n        if (regex.test(position) || regexRepetition.test(position) || regexOnlyNumbers.test(position) || regexSair.test(position)) {\n            return "input inesperado";\n        } else {\n            return position;\n        }\n    } catch (err) {\n        return \'input inesperado\';\n    }\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: [],
          continueOnError: true
        },
        {
          $id: '5b35c6dd-c4e5-4295-a6c3-f6b28c5f5bdd',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '5874a4f7-1758-404a-ad17-617d200fc419',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "cargo"',
          $invalid: false,
          settings: {
            extras: {
              cargo: '{{processedInput}}'
            }
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '398e8e19-064c-4825-8bd6-668602d05a0e',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita cargo input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita cargo input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '6756a16c-b173-4a68-873c-d547b622e7f8',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita cargo input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita cargo input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: 'c8a53985-7daa-4236-b53a-30d7f549a37f',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita cargo validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita cargo validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-15059f84-43d5-4113-ba17-98fe8e2008d4',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-f8663ca4-8af1-487d-8e40-4af4a627c4f3',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-a6da07f6-952b-44d7-8376-0a17bdd16e5d',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-8155f5b0-8402-4d45-a602-2f4d8f9899e3',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-32837f26-28f5-4fce-b3b8-ebda231e4161',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-d508b654-14f8-43de-ab90-4bdabc2de67b',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '311c5c38-0cce-404e-ab22-0a88c3bc2546',
      root: false,
      $title: 'S.1.1.4 - Informe cargo',
      $position: {
        top: '900px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    'c08c99b7-29da-4cea-8e75-00fa09074f42': {
      $contentActions: [
        {
          action: {
            $id: '863eb27a-ba4a-4a35-96d3-73dbaa92a5f5',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '381f4cf0-2ca0-42d3-a260-16c9b4dc724b',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '381f4cf0-2ca0-42d3-a260-16c9b4dc724b',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: 'fa596d95-9090-41b2-beff-17d866bcd4cf',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '2c72e23c-74d4-4109-a4f7-23acf96de90c',
              type: 'text/plain',
              content: '<b>Pergunta 3 de 3</b>\n\nQual a agência?',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '2c72e23c-74d4-4109-a4f7-23acf96de90c',
                type: 'text/plain',
                content: '<b>Pergunta 3 de 3</b>\n\nQual a agência?'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '595d0668-2564-462e-94a5-1fc82733d3a8',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '2d199cbc-dd1b-4807-8219-8884ef309be1',
          typeOfStateId: 'state',
          $connId: 'con_48',
          $id: '0020d402-4ff2-4152-a488-852883b96619',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: 'fe08cc0b-60d1-4b28-8fae-9495d8459336',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita agencia exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita agencia exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '2132d6a2-d29f-40ac-88e2-e3e05d175a1e',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "agencia geral"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'agencia geral'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'a0f1ee2e-ec1f-4bf0-b653-83c0ab2e490c',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "function run(input) {\n    const regex = new RegExp('\\\\b((\\\\d{4,6})([-_]?\\\\d)?)\\\\b', 'i');\n\n    if (regex.test(input)) {\n        const matchs = input.match(regex);\n        return matchs[2];\n    }\n\n    return 'input inesperado';\n}",
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: 'e626c7f6-98a5-42e1-8e63-f1ba652ee491',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '437ec5e1-badb-4d1b-89a3-b0ff2d4f9328',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "Agencia"',
          $invalid: false,
          settings: {
            extras: {
              agencia: '{{processedInput}}'
            }
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '828f8512-51f5-4643-822d-323f7a859e48',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita agencia input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita agencia input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '959fb890-e68a-4e61-a5c0-db46d83e49d9',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita agencia input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita agencia input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '33d12024-99b3-4b49-b4e1-ead99da0d7e8',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding solicita agencia validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding solicita agencia validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-175cf120-b567-4d08-9061-aab5bc2e5e9d',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-e2c2839a-6af4-4731-a987-da3bc99ca88e',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-6312c988-2ad8-4afa-806f-1fb1ca9410e1',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-7901714a-7adb-426e-86d7-ccdf23282499',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-e5bfec30-3eb2-4ce5-a18b-cff049c5d5c9',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-30d8ce16-1739-4f67-8def-dd4366a3e6d3',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: 'c08c99b7-29da-4cea-8e75-00fa09074f42',
      root: false,
      $title: 'S.1.1.5 - Informe agencia',
      $position: {
        top: '1077px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '2d199cbc-dd1b-4807-8219-8884ef309be1': {
      $contentActions: [
        {
          action: {
            $id: '046e433c-380f-4eff-9816-f1dec736c2cf',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: 'e19a413e-37cf-410b-8e48-73ee580e1f21',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: 'e19a413e-37cf-410b-8e48-73ee580e1f21',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1728'
        },
        {
          action: {
            $id: '68e41b4a-67c0-4119-98f0-264eaa77b019',
            $typeOfContent: 'select-immediate',
            type: 'SendMessage',
            settings: {
              id: '1f7d055f-9e1a-461d-9ae8-71914184aaac',
              type: 'application/vnd.lime.select+json',
              content: {
                text: 'Me confirme as suas informações:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b> 🤔\nClique em um dos botões abaixo.',
                scope: 'immediate',
                options: [
                  {
                    text: 'Estão corretas',
                    previewText: 'Estão corretas',
                    value: null,
                    index: 0,
                    type: null
                  },
                  {
                    text: 'Corrigir',
                    previewText: 'Corrigir',
                    value: null,
                    index: 1,
                    type: null
                  }
                ],
                quikReply: false
              },
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '1f7d055f-9e1a-461d-9ae8-71914184aaac',
                type: 'application/vnd.lime.select+json',
                content: {
                  text: 'Me confirme as suas informações:\n\n<b>Nome:</b> {{contact.name}}\n<b>Cargo:</b> {{contact.extras.cargo}}\n<b>Agência:</b> {{contact.extras.agencia}}\n\n<b>Os dados estão corretos?</b> 🤔\nClique em um dos botões abaixo.',
                  scope: 'immediate',
                  options: [
                    {
                      text: 'Estão corretas',
                      previewText: 'Estão corretas',
                      value: null,
                      index: 0,
                      type: null
                    },
                    {
                      text: 'Corrigir',
                      previewText: 'Corrigir',
                      value: null,
                      index: 1,
                      type: null
                    }
                  ],
                  quikReply: false
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1729'
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '4f44738e-6fae-4378-86f1-776286a89f07',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:1730'
        }
      ],
      $conditionOutputs: [
        {
          stateId: '9b08295c-4e32-42ba-b6d0-3f82412819e2',
          typeOfStateId: 'state',
          $connId: 'con_53',
          $id: '2190780c-e18c-4c1a-bc60-29aeae6d6d07',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1754'
            },
            {
              values: ['Corrigir'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1755'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1737'
        },
        {
          stateId: '7e7e83fe-c462-4e2e-ba78-0cad819f11a5',
          typeOfStateId: 'state',
          $connId: 'con_58',
          $id: 'e413df89-156e-49d9-b280-1afecbaeb5f1',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1777'
            },
            {
              values: ['Estão corretas'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1778'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1738'
        }
      ],
      $enteringCustomActions: [
        {
          $id: '903ca75d-7f9f-414a-acfd-616e82c4b351',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding confirma dados exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding confirma dados exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '5f89862b-9b60-4e7f-b064-f2b081a788e9',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "menu"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'menu'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '46715f75-8fcf-4a52-87ba-8abf2b210042',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run (input) {\n\ttry {\n\t\tconst matchItens = {\n\t\t\t"^(1)$|^(um)|primeir[oa]|cor[r]?[eé]t[oa][s]?": "Estão corretas",\n\t\t\t"^(2)$|dois|segund[ao]|cor[r]?i[gj][ie][r]?": "Corrigir",\n\t\t}\n\n\t\tconst match = Object.keys(matchItens).find((key) => input.match(RegExp(key, \'gmi\')))\n\t\tconst selected = matchItens[match];\n\n\t\treturn selected ? selected : "Input inesperado"\n\t} catch (err) {\n\t\treturn "Erro inesperado"\n\t}\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: 'bce950b1-3471-4a81-9fbf-48277f2267e6',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding confirma dados selecao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding confirma dados selecao',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '1dba2433-d916-4d6d-8f22-918882d933a5',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding confirma dados inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding confirma dados inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '566a3da6-bbcb-417c-b045-8fac740af90f',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding confirma dados detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding confirma dados detalhes',
            action: '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: ['Estão corretas', 'Corrigir'],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-a0882064-771b-47a5-8471-8934a3f749c3',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-5b5a2316-b45e-405d-bb19-4b53188ad67e',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-5d17a900-c958-4f5a-bff4-c7761f0a9d88',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-e8fc65a9-e072-419d-b4db-1f9058786e43',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-3302d97c-64f3-44a3-b95a-0877dde793b7',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '2d199cbc-dd1b-4807-8219-8884ef309be1',
      root: false,
      $title: 'S.1.1.6 - Confirmação de dados',
      $position: {
        top: '1277px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '9b08295c-4e32-42ba-b6d0-3f82412819e2': {
      $contentActions: [
        {
          action: {
            $id: '35f5892e-990b-4d14-92f7-aba62e5dfe5f',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '047521f7-97bd-4928-aa36-0db08c5ce813',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '047521f7-97bd-4928-aa36-0db08c5ce813',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1483'
        },
        {
          action: {
            $id: 'c6a2cb5f-76bb-4bfd-bc5f-432ce77b681c',
            $typeOfContent: 'select',
            type: 'SendMessage',
            settings: {
              id: '53df1e4f-cc04-4936-bcc6-2580c1019936',
              type: 'application/vnd.lime.select+json',
              content: {
                text: 'Qual informação você quer corrigir? \n\nSelecione uma das opções abaixo.',
                options: [
                  {
                    text: 'Nome',
                    previewText: 'Nome',
                    value: null,
                    index: 0,
                    type: null
                  },
                  {
                    text: 'Cargo',
                    previewText: 'Cargo',
                    value: null,
                    index: 1,
                    type: null
                  },
                  {
                    text: 'Agência',
                    previewText: 'Agência',
                    value: null,
                    index: 2,
                    type: null
                  }
                ],
                limitMenu: false
              },
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '53df1e4f-cc04-4936-bcc6-2580c1019936',
                type: 'application/vnd.lime.select+json',
                content: {
                  text: 'Qual informação você quer corrigir? \n\nSelecione uma das opções abaixo.',
                  options: [
                    {
                      text: 'Nome',
                      previewText: 'Nome',
                      value: null,
                      index: 0,
                      type: null
                    },
                    {
                      text: 'Cargo',
                      previewText: 'Cargo',
                      value: null,
                      index: 1,
                      type: null
                    },
                    {
                      text: 'Agência',
                      previewText: 'Agência',
                      value: null,
                      index: 2,
                      type: null
                    }
                  ],
                  limitMenu: false
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:1484'
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: 'a85a9fc1-874c-433b-a50f-919b80dc1c3d',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:1485'
        }
      ],
      $conditionOutputs: [
        {
          stateId: 'fa01404b-76f9-41c7-9eb8-e46d866c800b',
          typeOfStateId: 'state',
          $connId: 'con_63',
          $id: '4084083e-e152-4e1f-9f5b-daad9f345290',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1511'
            },
            {
              values: ['nome'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1512'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1492'
        },
        {
          stateId: 'ca9b0967-5636-4e5f-8eae-5154b5df328e',
          typeOfStateId: 'state',
          $connId: 'con_68',
          $id: '4ea2c67f-0c7b-4772-b7f6-1c95607a096d',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1536'
            },
            {
              values: ['cargo'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1537'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1493'
        },
        {
          stateId: '112a6bd7-dac6-4f60-b0ef-0ef8bdd60b2d',
          typeOfStateId: 'state',
          $connId: 'con_73',
          $id: 'e55133cc-a411-4373-a513-f42477949044',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:1559'
            },
            {
              values: ['agencia'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput',
              $$hashKey: 'object:1560'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:1494'
        }
      ],
      $enteringCustomActions: [
        {
          $id: '20dda466-b32b-439a-b250-70914a19cd4f',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados exibicao',
            action: 'Exibicao'
          },
          conditions: []
        },
        {
          $id: '7e0d691e-09cf-4fbb-b37b-2363f2cbb511',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "menu"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'menu'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '3504a9df-9808-4d07-8e7b-fe8be1cbb844',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(input) {\n\ttry {\n\t\tconst matchItens = {\n\t\t\t"^(1)$|^(um)|primeir[oa]|nome": "nome",\n\t\t\t"^(2)$|dois|segund[ao]|cargo": "cargo",\n\t\t\t"^(3)$|^(tr[eê][s]?)|terceir[oa]|ag[eê]ncia": "agencia"\n\t\t}\n\n\t\tconst match = Object.keys(matchItens).find((key) => input.match(RegExp(key, \'gmi\')))\n\t\tconst selected = matchItens[match];\n\n\t\treturn selected ? selected : "input inesperado"\n\t} catch (err) {\n\t\treturn "input inesperado"\n\t}\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: 'c35c09fc-6d71-4c71-806e-280dab5058b8',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados selecao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados selecao',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: [],
              source: 'context',
              comparison: 'exists',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '7d388c3a-49cc-41b6-bbcf-570dbcb720db',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        }
      ],
      $inputSuggestions: ['Nome', 'Cargo', 'Agência'],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-268bb19c-b284-481a-874e-3ab4bab30080',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-886cedcf-3591-4089-b750-aab5ea8c2967',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-ab093de7-782f-4878-9a90-3a5f7291fe09',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-e6723d84-2911-453f-8269-538120c635a1',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-700b58ac-febd-4c09-a854-a99d49419fc0',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '9b08295c-4e32-42ba-b6d0-3f82412819e2',
      root: false,
      $title: 'S.1.1.8 - Corrigir dados',
      $position: {
        top: '1324px',
        left: '1343px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    'fa01404b-76f9-41c7-9eb8-e46d866c800b': {
      $contentActions: [
        {
          action: {
            $id: '71e59b52-0b44-4545-b547-8f00c2ce9404',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '1cb8988f-20df-4d60-91f6-2497155a793b',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '1cb8988f-20df-4d60-91f6-2497155a793b',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: '155cb502-5c84-4dd7-9157-5d868e2a7a3e',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '454945f1-8fec-4ea4-9835-a5b707fa1478',
              type: 'text/plain',
              content: 'Me informe o seu nome completo.',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '454945f1-8fec-4ea4-9835-a5b707fa1478',
                type: 'text/plain',
                content: 'Me informe o seu nome completo.'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '78bc940d-5240-4e9a-9827-9588d45287f4',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '2d199cbc-dd1b-4807-8219-8884ef309be1',
          typeOfStateId: 'state',
          $connId: 'con_78',
          $id: 'd4bccc98-3306-4f0b-807f-fe4486f1079b',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '164cdb53-9b5e-49f2-bfe4-c5f5b8144f63',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "nome"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'nome'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '2659e30f-51b4-4b58-8cd8-dc7bab0c9ce7',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(nome) {\n    nome = nome.replace(/(O?\\s*Meu\\s*nome\\s*((completo\\s*)?[ée]h?)?|Nome:?)/gi, \'\');\n    nome = nome.replace(/(\\.)/gi, \' \');\n    nome = nome.replace(/(\\s+)/gi, \' \');\n    nome = nome.trim();\n\n    var split = nome.split(\' \');\n    if (split[1] == undefined || split[1] == null) {\n        return "input inesperado";\n    }\n\n    for (key in split) {\n        if (key < 10) {\n            if (split[key].length < 2) {\n                return "input inesperado";\n            }\n        }\n    }\n    for (var i = 0; i < nome.length - 3; i++) {\n        if (nome[i] == nome[i + 1] && nome[i] == nome[i + 2] && nome[i] == nome[i + 3]) {\n            return "input inesperado";\n        }\n    }\n\n    const WHITE_SPACES = RegExp("(\\\\s+)", "gi");\n    nomeSemEspacos = nome.replace(WHITE_SPACES, "");\n\n    const INVALID_CARACTERES = RegExp("[^a-záéíóúõãüöäëôâêîûç]", "gi");\n    if (!INVALID_CARACTERES.test(nomeSemEspacos))\n        return nome;\n    else return "input inesperado";\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: [],
          continueOnError: true
        },
        {
          $id: '50e91975-7ea2-4821-92e4-87e758938f24',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '5465c91f-cd13-4799-aa25-baf42a5820dd',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "nome"',
          $invalid: false,
          settings: {
            extras: {},
            name: '{{processedInput}}'
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '9e12756f-582a-455b-85d7-b2c874369e1d',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige nome input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige nome input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: 'f50ceb71-6997-401c-b1b7-e19a622dcc98',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados detalhes',
            action: '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}}'
          },
          conditions: [
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: 'ee1493b2-8342-4c11-beed-000d72eae527',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige nome input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige nome input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '6a1ee14a-7be2-4e33-a833-1e03afc005ef',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige nome validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige nome validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-62843a4e-60d8-47c9-a237-89140932d4d4',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-7a1cf7b8-2abd-450e-9f52-704af51a5202',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-ccf9cb8e-39f8-4c07-86d8-c602bc906f7c',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-ab39d79c-25b1-47cd-92fe-bdf7c27a6b58',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-41dad968-5ff9-48f4-91d0-3531213ddb1b',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-39b5127a-1a07-42a0-bc2f-82189ce0fa90',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: 'fa01404b-76f9-41c7-9eb8-e46d866c800b',
      root: false,
      $title: 'S.1.1.9 - Informe nome (corrigir)',
      $position: {
        top: '1520px',
        left: '1343px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '112a6bd7-dac6-4f60-b0ef-0ef8bdd60b2d': {
      $contentActions: [
        {
          action: {
            $id: '863eb27a-ba4a-4a35-96d3-73dbaa92a5f5',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '381f4cf0-2ca0-42d3-a260-16c9b4dc724b',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '381f4cf0-2ca0-42d3-a260-16c9b4dc724b',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: 'fa596d95-9090-41b2-beff-17d866bcd4cf',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '2c72e23c-74d4-4109-a4f7-23acf96de90c',
              type: 'text/plain',
              content: 'Qual a agência?',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '2c72e23c-74d4-4109-a4f7-23acf96de90c',
                type: 'text/plain',
                content: 'Qual a agência?'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '595d0668-2564-462e-94a5-1fc82733d3a8',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '2d199cbc-dd1b-4807-8219-8884ef309be1',
          typeOfStateId: 'state',
          $connId: 'con_83',
          $id: '58349b4b-5033-467a-a8c0-2a6ba413ce56',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '2132d6a2-d29f-40ac-88e2-e3e05d175a1e',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "agencia"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'agencia'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'a0f1ee2e-ec1f-4bf0-b653-83c0ab2e490c',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "function run(input) {\n    const regex = new RegExp('\\\\b((\\\\d{4,6})([-_]?\\\\d)?)\\\\b', 'i');\n\n    if (regex.test(input)) {\n        const matchs = input.match(regex);\n        return matchs[2];\n    }\n\n    return 'input inesperado';\n}",
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '8c5d7835-930a-4d76-ba99-f0fba103ec3d',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '437ec5e1-badb-4d1b-89a3-b0ff2d4f9328',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "Agencia"',
          $invalid: false,
          settings: {
            extras: {
              agencia: '{{processedInput}}'
            }
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '828f8512-51f5-4643-822d-323f7a859e48',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige agencia input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige agencia input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '420195e5-3ea6-4e12-a461-f360b7615143',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados detalhes',
            action: '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}}'
          },
          conditions: [
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '50362e97-9cf9-491c-b59c-4d531827ee60',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige agencia input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige agencia input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '54f72965-68f1-446e-9c8f-b6d4c278a4db',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige agencia validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige agencia validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-281bb6ea-aaf0-4547-ba99-0af286c3e0b8',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-b9e936d7-3d63-482f-9549-1f72ed026af3',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-75516c96-c6f1-40fd-9e3a-287de23b37da',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-dbee17f3-9479-47b2-9342-c3bc1cfa2335',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-1e20b3c8-65f4-4316-b7c3-9784060522e4',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-121c1b31-a150-4fd0-b022-6daf34909082',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '112a6bd7-dac6-4f60-b0ef-0ef8bdd60b2d',
      root: false,
      $title: 'S.1.1.11 - Informe agencia (corrigir)',
      $position: {
        top: '1132px',
        left: '1343px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    'ca9b0967-5636-4e5f-8eae-5154b5df328e': {
      $contentActions: [
        {
          action: {
            $id: '623f9459-0069-4ba0-8740-762bc5ef7929',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '9fcd8002-0cfb-4c79-9d9e-6d7ba6cc8b4f',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '9fcd8002-0cfb-4c79-9d9e-6d7ba6cc8b4f',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          action: {
            $id: 'cbcc1a6a-6c21-4bc9-bf38-716d8f6c6a7c',
            $typeOfContent: 'text',
            type: 'SendMessage',
            settings: {
              id: '0a08936c-22c5-4418-bcd9-49f12b422554',
              type: 'text/plain',
              content: 'Qual o seu cargo?',
              metadata: {}
            },
            $cardContent: {
              document: {
                id: '0a08936c-22c5-4418-bcd9-49f12b422554',
                type: 'text/plain',
                content: 'Qual o seu cargo?'
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '6b6cf3a8-2aa3-4bc4-8c99-87f5cf997d73',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [
        {
          stateId: '2d199cbc-dd1b-4807-8219-8884ef309be1',
          typeOfStateId: 'state',
          $connId: 'con_88',
          $id: 'ad7c086c-8753-4255-b2b1-65b48abf7615',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: []
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ],
          $invalid: false
        }
      ],
      $enteringCustomActions: [
        {
          $id: '62b0418c-eaca-48f4-832a-42949259438a',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "cargo"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'cargo'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'c78d6653-514c-455f-91e3-e91dfac9fca8',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(position) {\n    try {\n        const regex = /[^a-zA-Z0-9\\u00C0-\\u00FF\\s]/g;\n        const regexRepetition = /(.)\\1{4,}/;\n        const regexOnlyNumbers = /^\\d+$/;\n\n        if (regex.test(position) || regexRepetition.test(position) || regexOnlyNumbers.test(position)) {\n            return "input inesperado";\n        } else {\n            return position;\n        }\n    } catch (err) {\n        return \'input inesperado\';\n    }\n}',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: [],
          continueOnError: true
        },
        {
          $id: '9c8d1bf8-9f3f-497b-9bf6-120378649cf3',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "userInputIsValid"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(processedInput) {\n\ttry {\n\t\tif (processedInput === 'input inesperado') {\n\t\t\treturn 'nao'\n\t\t}\n\t\treturn 'sim'\n\t} catch (err) {\n\t\treturn 'nao'\n\t}\n}",
            inputVariables: ['processedInput'],
            outputVariable: 'userInputIsValid',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: '5874a4f7-1758-404a-ad17-617d200fc419',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "cargo"',
          $invalid: false,
          settings: {
            extras: {
              cargo: '{{processedInput}}'
            }
          },
          conditions: [
            {
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              values: ['input inesperado']
            }
          ]
        },
        {
          $id: '398e8e19-064c-4825-8bd6-668602d05a0e',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige cargo input"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige cargo input',
            action: '{{processedInput}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            }
          ]
        },
        {
          $id: '00fea1f6-5d97-498a-a860-5a7fac98803b',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige dados detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige dados detalhes',
            action: '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}}'
          },
          conditions: [
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: 'da57f796-70f0-4fb0-802c-dccdfa2e9ab2',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige cargo input inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige cargo input inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '47537762-58f1-481e-bcce-27733e0e2cb0',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding corrige cargo validacao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding corrige cargo validacao',
            action: '{{userInputIsValid}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-e7d0edcd-4395-48fc-8161-5864cfafa202',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-d6b24461-3934-4aad-9114-ac0b93fd1c68',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-8cb1c424-9d48-4dc6-aa4e-cbc0f426a208',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-172a0ffd-b064-4b88-ab14-b8c4d297c81b',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-bca50d29-b7ba-4822-a303-c2c78e3a3662',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-c2e759fd-9cb2-4781-91f4-5ee1b35cdbad',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: 'ca9b0967-5636-4e5f-8eae-5154b5df328e',
      root: false,
      $title: 'S.1.1.10 - Informe cargo (corrigir)',
      $position: {
        top: '1303px',
        left: '1613px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '7e7e83fe-c462-4e2e-ba78-0cad819f11a5': {
      $contentActions: [
        {
          action: {
            $id: '88597617-362c-4509-acf2-c43ce3fdab8e',
            $typeOfContent: 'chat-state',
            type: 'SendMessage',
            settings: {
              id: '97b53447-2df6-4f5f-8d32-f52a2388d2ed',
              type: 'application/vnd.lime.chatstate+json',
              content: {
                state: 'composing',
                interval: 1000
              }
            },
            $cardContent: {
              document: {
                id: '97b53447-2df6-4f5f-8d32-f52a2388d2ed',
                type: 'application/vnd.lime.chatstate+json',
                content: {
                  state: 'composing',
                  interval: 1000
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:3081'
        },
        {
          action: {
            $id: '32ace0d8-c6e4-46ff-99ed-906b8ec56c33',
            $typeOfContent: 'select',
            type: 'SendMessage',
            settings: {
              id: 'e7a2e2ee-89f7-4583-aa2d-a34f80b1f708',
              type: 'application/vnd.lime.select+json',
              content: {
                text: 'Sobre qual assunto você quer falar?\n\nSelecione uma das opções abaixo.',
                options: [
                  {
                    text: 'Gerar boleto',
                    previewText: 'Gerar boleto',
                    value: null,
                    index: 0,
                    type: null
                  },
                  {
                    text: '2º via de contrato',
                    previewText: '2º via de contrato',
                    value: null,
                    index: 1,
                    type: null
                  },
                  {
                    text: 'Erro ao acessar APP',
                    previewText: 'Erro ao acessar APP',
                    value: null,
                    index: 2,
                    type: null
                  },
                  {
                    index: -1,
                    text: 'Status da proposta',
                    previewText: 'Status da proposta',
                    type: null,
                    value: null
                  },
                  {
                    index: -1,
                    text: 'Confirmar pagamento',
                    previewText: 'Confirmar pagamento',
                    type: null,
                    value: null
                  },
                  {
                    index: -1,
                    text: 'Proposta não aprovada',
                    previewText: 'Proposta não aprovada',
                    type: null,
                    value: null
                  },
                  {
                    index: -1,
                    text: 'Outros assuntos',
                    previewText: 'Outros assuntos',
                    type: null,
                    value: null
                  }
                ],
                limitMenu: false
              },
              metadata: {}
            },
            $cardContent: {
              document: {
                id: 'e7a2e2ee-89f7-4583-aa2d-a34f80b1f708',
                type: 'application/vnd.lime.select+json',
                content: {
                  text: 'Sobre qual assunto você quer falar?\n\nSelecione uma das opções abaixo.',
                  options: [
                    {
                      text: 'Gerar boleto',
                      previewText: 'Gerar boleto',
                      value: null,
                      index: 0,
                      type: null
                    },
                    {
                      text: '2º via de contrato',
                      previewText: '2º via de contrato',
                      value: null,
                      index: 1,
                      type: null
                    },
                    {
                      text: 'Erro ao acessar APP',
                      previewText: 'Erro ao acessar APP',
                      value: null,
                      index: 2,
                      type: null
                    },
                    {
                      index: -1,
                      text: 'Status da proposta',
                      previewText: 'Status da proposta',
                      type: null,
                      value: null
                    },
                    {
                      index: -1,
                      text: 'Confirmar pagamento',
                      previewText: 'Confirmar pagamento',
                      type: null,
                      value: null
                    },
                    {
                      index: -1,
                      text: 'Proposta não aprovada',
                      previewText: 'Proposta não aprovada',
                      type: null,
                      value: null
                    },
                    {
                      index: -1,
                      text: 'Outros assuntos',
                      previewText: 'Outros assuntos',
                      type: null,
                      value: null
                    }
                  ],
                  limitMenu: false
                }
              },
              editable: true,
              deletable: true,
              position: 'left'
            }
          },
          $invalid: false,
          $$hashKey: 'object:3082'
        },
        {
          input: {
            bypass: false,
            $cardContent: {
              document: {
                id: '7aaa6dd7-25d9-476a-bb5d-6327149c6fb9',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false,
          $$hashKey: 'object:3083'
        }
      ],
      $conditionOutputs: [
        {
          stateId: '4cef1eb9-9342-46cf-9727-ffaa283fba30',
          typeOfStateId: 'state',
          $connId: 'con_93',
          $id: '49e28b72-8fd0-4e8a-8c99-38a21aa77a17',
          conditions: [
            {
              source: 'input',
              comparison: 'exists',
              values: [],
              $$hashKey: 'object:3103'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'notEquals',
              variable: 'processedInput',
              $$hashKey: 'object:3104'
            }
          ],
          $invalid: false,
          $$hashKey: 'object:3090'
        }
      ],
      $enteringCustomActions: [
        {
          $id: '9a5c3840-501a-4986-96d6-e9ccdf6009b6',
          $typeOfContent: '',
          type: 'SetVariable',
          $title: 'Set "errorType" to "menu"',
          $invalid: false,
          settings: {
            variable: 'errorType',
            value: 'menu'
          },
          conditions: []
        },
        {
          $id: 'da20c9be-b965-46b3-8611-fe43a8404f92',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding menu assuntos exibicao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding menu assuntos exibicao',
            action: 'Exibicao'
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: 'b5abc8b3-4d20-47e5-88b5-d7ee81b3f7d5',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'Process "processedInput"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              'function run(input) {\n\ttry {\n\t\tconst matchItens = {\n\t\t\t"^(1)$|^(um)|primeir[oa]|boleto": "Gerar boleto",\n\t\t\t"^(2)$|dois|segund[ao]|contrato": "2º via de contrato",\n\t\t\t"^(3)$|três|terceir[oa]|erro": "Erro ao acessar APP",\n\t\t\t"^(4)$|quatro|quart[oa]|status": "Status da proposta",\n\t\t\t"^(5)$|cinco|quint[oa]|confirmar pagamento": "Confirmar pagamento",\n\t\t\t"^(6)$|seis|sext[oa]|não aprovada": "Proposta não aprovada",\n\t\t\t"^(7)$|sete|s[ée]tim[oa]|outros": "Outros assuntos",\n\t\t}\n\n\t\tconst match = Object.keys(matchItens).find((key) => input.match(RegExp(key, \'gmi\')))\n\t\tconst selected = matchItens[match];\n\n\t\treturn selected ? selected : "input inesperado"\n\t} catch (err) {\n\t\treturn "input inesperado"\n\t}\n}\n',
            inputVariables: ['input.content'],
            outputVariable: 'processedInput',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        },
        {
          $id: 'be50c39f-fc40-4075-a251-eb448329f756',
          $typeOfContent: '',
          type: 'MergeContact',
          $title: 'Define "assunto"',
          $invalid: false,
          settings: {
            extras: {
              assunto: '{{processedInput}}'
            }
          },
          conditions: []
        },
        {
          $id: '7960cd0c-b769-4a64-b016-1e432f6377af',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding menu assuntos selecao"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding menu assuntos selecao',
            action: '{{processedInput}}'
          },
          conditions: []
        },
        {
          $id: '8d176bb8-5606-4aec-867e-afc15514fcd0',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding menu assuntos inesperado"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding menu assuntos inesperado',
            action: '{{input.content}}'
          },
          conditions: [
            {
              values: [],
              source: 'input',
              comparison: 'exists'
            },
            {
              values: ['input inesperado'],
              source: 'context',
              comparison: 'equals',
              variable: 'processedInput'
            }
          ]
        },
        {
          $id: '1a66a242-a81b-43ba-9d6e-87fe8bb8f07f',
          $typeOfContent: '',
          type: 'TrackEvent',
          $title: 'Tracking "Onboarding menu assuntos detalhes"',
          $invalid: false,
          settings: {
            extras: {},
            category: 'Onboarding menu assuntos detalhes',
            action:
              '{{contact.name}} | {{contact.extras.cargo}} | {{contact.extras.agencia}} | {{processedInput}}'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [
        'Gerar boleto',
        '2º via de contrato',
        'Erro ao acessar APP',
        'Status da proposta',
        'Confirmar pagamento',
        'Proposta não aprovada',
        'Outros assuntos'
      ],
      $defaultOutput: {
        stateId: 'fallback',
        $invalid: false
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-bf740aac-e7f4-4121-bf78-49a780126df7',
          label: 'SetVariable',
          background: '#FF4A1E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-32911fb4-7862-4453-9309-6a77ffba79b7',
          label: 'TrackEvent',
          background: '#61D36F',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-dff385f3-6449-4476-9ea8-38b1e670fa86',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-7b7c2744-4fe2-4573-9e90-091b296f4791',
          label: 'MergeContact',
          background: '#FF1E90',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-fd3b1c4d-22a1-49f6-8392-cd3f7eabde27',
          label: 'SendMessage',
          background: '#EE82EE',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-0313aa6d-1510-4824-acd0-0a854fcd74c3',
          label: 'UserInput',
          background: '#000000',
          canChangeBackground: false
        }
      ],
      id: '7e7e83fe-c462-4e2e-ba78-0cad819f11a5',
      root: false,
      $title: 'S.1.1.7 - Menu de assuntos',
      $position: {
        top: '1498px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    },
    '4cef1eb9-9342-46cf-9727-ffaa283fba30': {
      $contentActions: [
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: '4f64dd53-e0f7-487c-afed-29ad7a67f4b5',
                type: 'text/plain',
                textContent: 'Entrada do usuário',
                content: 'Entrada do usuário'
              },
              editable: false,
              deletable: true,
              position: 'right',
              editing: false
            },
            $invalid: false
          },
          $invalid: false
        }
      ],
      $conditionOutputs: [],
      $enteringCustomActions: [
        {
          $id: '8b9b5c31-82d7-4af8-9a93-5362466572b8',
          $typeOfContent: '',
          type: 'ExecuteScript',
          $title: 'set "lastInputState"',
          $invalid: false,
          settings: {
            function: 'run',
            source:
              "function run(name, id, input) {\n    let figmaId = GetFigmaId(name);\n\n    return {\n        figmaId: figmaId,\n        name: name,\n        id: id,\n        service: 'onboarding',\n        input: input\n    }\n}\n\nfunction GetFigmaId(name) {\n    let match = name.match(/\\w\\.\\d\\.\\d\\.\\d/);\n    return match ? match[0] : name;\n}",
            inputVariables: ['state.previous.name', 'state.previous.id', 'input.content'],
            outputVariable: 'lastInputState',
            LocalTimeZoneEnabled: false
          },
          conditions: []
        }
      ],
      $leavingCustomActions: [
        {
          $id: '8fed8d83-d1e5-4a34-b70d-c22768ae8291',
          $typeOfContent: '',
          type: 'Redirect',
          $title: 'Redirect to "transbordo"',
          $invalid: false,
          settings: {
            context: {
              type: 'text/plain',
              value: '{{processedInput}}'
            },
            address: 'transbordo'
          },
          conditions: []
        }
      ],
      $inputSuggestions: [],
      $defaultOutput: {
        stateId: 'onboarding',
        $invalid: false,
        typeOfStateId: 'state'
      },
      isAiGenerated: false,
      $tags: [
        {
          id: 'blip-tag-4dd0079d-8898-4308-9862-c913590e888a',
          label: 'ExecuteScript',
          background: '#FF961E',
          canChangeBackground: false
        },
        {
          id: 'blip-tag-10d70c0d-d11f-464d-a3f9-d277a581d67d',
          label: 'Redirect',
          background: '#1EA1FF',
          canChangeBackground: false
        }
      ],
      id: '4cef1eb9-9342-46cf-9727-ffaa283fba30',
      root: false,
      $title: 'Redirect to transbordo',
      $position: {
        top: '1695px',
        left: '905px'
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false
    }
  },
  configuration: {
    'builder:minimumIntentScore': '0.5',
    'builder:stateTrack': 'false',
    'builder:#localTimeZone': 'E. South America Standard Time',
    'builder:useTunnelOwnerContext': 'true',
    TraceTargetType: 'Http',
    TraceMode: 'All',
    TraceTarget: 'https://take-api-beholder.cs.blip.ai/api/traces/simdevpponboarding',
    TraceCacheMode: 0
  },
  globalActions: {
    $contentActions: [],
    $conditionOutputs: [],
    $enteringCustomActions: [],
    $leavingCustomActions: [],
    $inputSuggestions: [],
    $defaultOutput: {
      stateId: 'fallback',
      $invalid: false
    },
    isAiGenerated: false,
    $tags: [],
    id: 'global-actions',
    $invalidContentActions: false,
    $invalidOutputs: false,
    $invalidCustomActions: false,
    $invalid: false
  }
}

export default flow
