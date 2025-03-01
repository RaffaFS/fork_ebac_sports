export const ADD_TO_CART = 'ADD_TO_CART'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_PRODUTOS = 'SET_PRODUTOS'

export const adicionarAoCarrinho = (produto: any) => ({
    type: ADD_TO_CART,
    payload: produto
})

export const favoritar = (produto: any) => ({
    type: TOGGLE_FAVORITE,
    payload: produto
})

export const setProdutos = (produtos: any[]) => ({
    type: SET_PRODUTOS,
    payload: produtos
})
