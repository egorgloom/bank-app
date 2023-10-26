import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICard, ITransactionsHistory } from '../../interfaces/interface'


export const JsonServerSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com'}),
    tagTypes: ['Card', 'History'],
    endpoints: (builder) => ({
        getCard: builder.query<ICard[], string>({
            query: () => '/card',
            providesTags: ['Card'],
        }),
        getHistory: builder.query<ITransactionsHistory[], any>({
            query: () => '/history',
            providesTags: ['History']
        }),
        addNewCard: builder.mutation<ICard, ICard>({
            query: (card) => ({
                url: "/card",
                method: 'POST',
                body: card
            }),
            invalidatesTags: ['Card'],
        }),
        removeCard: builder.mutation<ICard, ICard>({
            query: (card) => ({
                url: `/card/${card.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Card'],
        })
    })
    }
)

export const { useGetCardQuery, useAddNewCardMutation, useRemoveCardMutation, useGetHistoryQuery} = JsonServerSlice