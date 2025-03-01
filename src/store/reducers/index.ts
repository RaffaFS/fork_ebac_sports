import { Produto } from '../../App'

// Definindo o tipo do estado do carrinho
type CarrinhoState = Produto[]

const initialState: CarrinhoState = []

// Ações do carrinho
export const carrinhoReducer = (
  state = initialState,
  action: any
): CarrinhoState => {
  switch (action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      return [...state, action.payload] // Adiciona um produto ao carrinho

    case 'REMOVER_DO_CARRINHO':
      return state.filter((produto) => produto.id !== action.payload.id) // Remove um produto do carrinho

    default:
      return state
  }
}
