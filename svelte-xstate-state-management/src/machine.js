import { Machine, assign, interpret } from 'xstate'

const fetchPokemon = (name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())

const searchMachine = Machine({
  id: 'search',
  initial: 'idle',
  context: {
    pokemon: undefined,
    searchValue: '',
  },
  states: {
    idle: {
      on: {
        CONFIRM: {
          target: 'searching',
          actions: 'setSearchValue',
        },
        CANCEL: 'canceled',
      },
    },
    searching: {
      invoke: {
        id: 'getPokemon',
        src: 'getPokemon',
        onDone: {
          target: 'found',
          actions: 'setPokemon',
        },
        onError: 'error',
      },
    },
    error: {
      type: 'final',
    },
    found: {
      type: 'final',
      data: {
        pokemon: context => context.pokemon
      },
    },
    canceled: {
      type: 'final',
    },
  },
}, {
  actions: {
    setSearchValue: assign({
      searchValue: (_context, event) => event.searchValue,
    }),
    setPokemon: assign({
      pokemon: (_context, event) => event.data,
    }),
  },
  services: {
    getPokemon: (context) => fetchPokemon(context.searchValue),
  },
})

export const pokemonMachine = Machine({
  id: 'pokemon',
  initial: 'home',
  context: {
    addedPokemon: JSON.parse(localStorage.getItem('addedPokemon')) || [],
  },
  states: {
    home: {
      initial: 'default',
      states: {
        default: {
          on: {
            ADD_MODAL: 'addModal',
            REMOVE_MODAL: 'removeModal',
          },
        },
        addModal: {
          invoke: {
            id: 'search',
            src: 'searchMachine',
            autoForward: true,
            onDone: {
              target: 'default',
              actions: ['addPokemon', 'saveContext'],
            },
          },
        },
        removeModal: {
          on: {
            CANCEL: 'default',
            CONFIRM: {
              target: 'default',
              actions: ['removePokemon', 'saveContext'],
            },
          },
        },
      },
    },
  },
}, {
  actions: {
    addPokemon: assign({
      addedPokemon: (context, event) => event.data?.pokemon &&
        !context.addedPokemon.find(pokemon => pokemon.id === event.data.pokemon.id) ?
        [...context.addedPokemon, event.data.pokemon] :
        context.addedPokemon,
    }),
    removePokemon: assign({
      addedPokemon: (context, event) => context.addedPokemon.filter(value => !event.ids.includes(value.id))
    }),
    saveContext: (context) => localStorage.setItem('addedPokemon', JSON.stringify(context.addedPokemon)),
  },
  services: {
    searchMachine,
  },
})

export const pokemonService = interpret(pokemonMachine).start()
