export interface IHistory {
    id: number,
    firstName?: string,
    lastName?: string,
    dayWeek?: string,
    month?: string,
    day?: string,
    year?: string,
    time?: string,
    description?: string,
    sum?: number,
    currency?: string,
    date?: void,
    createdAt?: string,
}

export interface IFormAuthorization {
    linkForm?: string,
    titleBtn?: string,
    text?: string,
    linkText?: string,
    title?: string,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void;
}