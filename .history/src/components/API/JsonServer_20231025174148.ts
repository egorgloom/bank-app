import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICard } from '../../interfaces/interface'


export const JsonServerSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com'}),
    tagTypes: ['Card'],
    endpoints: (builder) => ({
        getCard: builder.query<ICard[], string>({
            query: () => '/card',
            providesTags: ['Card'],
        }),
        addNewCard: builder.mutation<ICard, ICard>({ //Возможно типы указаны не правильно
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
            })
        })
    })

    }
)

export const { useGetCardQuery, useAddNewCardMutation} = JsonServerSlice