import { FC, useEffect, useRef, useState } from 'react';

import styles from './TransactionsHistory.module.scss';


import { HiOutlineCalendarDays } from 'react-icons/hi2';

import { IoMdArrowDropright } from 'react-icons/io';

import BtnWithText from '../UI/BtnWithText/BtnWithText';
import BtnDashed from '../UI/BtnCircle/BtnCircle';

import { format } from 'date-fns'
// import axios from 'axios';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range'


import { ITransactionsHistory } from './../../interfaces/interface';

import {JsonServerApiService} from '../API/apiHistory';
import UserHistory from '../UserHistory/UserHistory';
import Card from '../Card/Card';


const TransactionsHistory: FC<ITransactionsHistory> = () => {

    const [open, setOpen] = useState<boolean>(false);

    const [transactions, setTransactions] = useState<ITransactionsHistory[]>([]);

    const [sortedTransactions, setSortedTransactions] = useState<ITransactionsHistory[]>([]); // результаты поиска

    const [state, setState] = useState<any>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    },])
    const [formatDate, setFormatDate] = useState<any>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const [isLoading, setIsLoaing] = useState<boolean>(false)

    useEffect(() => {
        setFormatDate((prev: any) => {
            return {
                ...prev,
                startDate: format(state[0].startDate, 'dd/MM/yyyy'),
                endDate: format(state[0].endDate, 'dd/MM/yyyy'),
            }
        })
    }, [state])

    // сделать запрос через try catch и как отдельная функция асинхронная

    useEffect(() => {

        fetchHistory()
    }, [])

    async function fetchHistory() {
        const history = await JsonServerApiService.getHistory()
        setTransactions(history)
        setSortedTransactions(history)
        
    }


    // handle click outside
    const calendarRef = useRef<any>();

    const handleSelection = (date: any) => {
        let filtered = transactions.filter((elem) => {
            let transDate = new Date(elem.date)
            return (
                transDate >= date.selection.startDate &&
                transDate <= date.selection.endDate
            )
        })

        setSortedTransactions(filtered);
        setState([date.selection])
    }


    useEffect(() => {
        const handler = (e: { target: any; }) => {
            if (!calendarRef?.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })




    return (
        <div className={styles.transactionContainer}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Transactions History</span>
                <div className={styles.btnBlock}>
                    <BtnWithText
                        icon={<HiOutlineCalendarDays />}
                        title={`${formatDate.startDate}-${formatDate.endDate}`}
                        color='lightGray'
                        onClick={() => {
                            setOpen(!open)
                        }} 
                    />
                    <div className={styles.container}>
                        <div className={styles.elementContainer} ref={calendarRef}>
                            <div className={`dropdown ${open ? 'active' : 'inactive'}`}>
                                <DateRange
                                    className={styles.calendarStyle}
                                    onChange={handleSelection}
                                    ranges={state}
                                    editableDateInputs={false}
                                    showMonthAndYearPickers={false}
                                    showDateDisplay={false}
                                    rangeColors={['rgb(110,70,143)', 'rgb(110,70,143)', '#000000']}
                                    direction='horizontal'
                                />
                            </div>
                        </div>
                    </div>
                    <BtnDashed color='purple' icon={<IoMdArrowDropright />} />
                </div>
            </div>
            <div className={styles.blockHistory}>
                {isLoading ? 
                <div>
                    <Card />
                </div> : 
                <>
                                    {sortedTransactions.map((elem) => {
                    return (
                        <UserHistory key={elem.id} {...elem} />
                    )
                })}
                    </>}
            </div>

        </div>
    );
};

export default TransactionsHistory;