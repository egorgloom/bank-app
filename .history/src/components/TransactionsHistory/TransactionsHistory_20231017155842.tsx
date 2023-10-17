import { FC, useEffect, useRef, useState } from 'react';

import styles from './TransactionsHistory.module.scss';


import { HiOutlineCalendarDays } from 'react-icons/hi2';

import { IoMdArrowDropright } from 'react-icons/io';

import BtnWithText from '../UI/BtnWithText/BtnWithText';
import BtnDashed from '../UI/BtnCircle/BtnCircle';

import { format } from 'date-fns'
import axios from 'axios';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range'
import UserHistory from '../UserHistory/UserHistory';

import { ITransactionsHistory } from './../../interfaces/interface';








// https://server-shop-co.onrender.com/history




const TransactionsHistory: FC<ITransactionsHistory> = () => {

    const [open, setOpen] = useState<boolean>(false);

    const [transactions, setTransactions] = useState<ITransactionsHistory[]>([]);

    const [sortedTransactions, setSortedTransactions] = useState<ITransactionsHistory[]>([]); // результаты поиска

    const [state, setState] = useState<any>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    },])

    // handle date formatting
    const [formatDate, setFormatDate] = useState<any>({
        startDate: new Date(),
        endDate: new Date(),
    });




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
        axios
            .get<ITransactionsHistory[]>('https://server-shop-co.onrender.com/history')
            .then((res) => {
                setTransactions(res.data)
                setSortedTransactions(res.data)
            })
    }, [])

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
        setSortedTransactions(filtered)
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
                        title='Select Date Range'
                        color='lightGray'
                        onClick={() => {
                            setOpen(!open)
                        }} />
                    <div className={styles.container}>
                        <div className={styles.elementContainer} ref={calendarRef}>
                            <div className={`dropdown ${open ? 'active' : 'inactive'}`}>
                                <DateRange
                                    className={styles.calendarStyle}
                                    // onChange={(item) => setState([item.selection])}
                                    onChange={handleSelection}
                                    ranges={state}
                                    // showSelectionPreview={false}
                                    editableDateInputs={false}
                                    showMonthAndYearPickers={false}
                                    showDateDisplay={false}
                                    rangeColors={['#4C988E', '#4C988E', '#000000']}
                                    direction='horizontal'
                                />
                            </div>
                        </div>



                    </div>
                    <BtnDashed color='purple' icon={<IoMdArrowDropright />} />

                </div>
            </div>
            <div className={styles.blockHistory}>
                <div>
                    {sortedTransactions.map((elem) => {
                        let date = new Date(elem.date)
                        return (
                            // <div key={elem.id}>{`${date}`}</div>
                            <UserHistory id={elem.id} key={elem.id} elem={elem}/>
                        )
                    })}</div>
            </div>

        </div>
    );
};

export default TransactionsHistory;