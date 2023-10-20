
import { useState } from 'react';

export const useFetching = (callback: () => any) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);


    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback()

        } catch (error: any) {

            setError(error.message)

        } finally {
            setIsLoading(false)
        }
    }
}