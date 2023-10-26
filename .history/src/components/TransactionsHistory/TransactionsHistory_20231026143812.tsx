import { FC, useEffect, useRef, useState } from 'react';

import styles from './TransactionsHistory.module.scss';

import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';

import BtnWithText from '../UI/BtnWithText/BtnWithText';
import BtnDashed from '../UI/BtnCircle/BtnCircle';
import Loading from '../UI/Loading/Loading';
import NothingFound from '../UI/NothingFound/NothingFound';

import UserHistory from '../UserHistory/UserHistory';

import { format } from 'date-fns'

import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { ITransactionsHistory } from './../../interfaces/interface';

import { JsonServerApiService } from '../API/apiHistory';
import { useGetHistoryQuery } from '../API/JsonServer';





const TransactionsHistory: FC<ITransactionsHistory> = () => {

    const [open, setOpen] = useState<boolean>(false);

   


    const [transactions, setTransactions] = useState<ITransactionsHistory[]>([]);

    const [sortedTransactions, setSortedTransactions] = useState<any>(transactions);

    const [state, setState] = useState<any>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    },])

    const [formatDate, setFormatDate] = useState<any>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const {data} = useGetHistoryQuery(transactions)

    console.log(transactions)

    // const [isLoading, setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        setFormatDate((prev: any) => {
            return {
                ...prev,
                startDate: format(state[0].startDate, 'dd/MM/yyyy'),
                endDate: format(state[0].endDate, 'dd/MM/yyyy'),
            }
        })
    }, [state])

    // useEffect(() => {
    //     fetchHistory()
    // }, [])

    // async function fetchHistory() {
    //     setIsLoading(true);
    //     const history = await JsonServerApiService.getHistory()
    //     setTransactions(history)
    //     setSortedTransactions(history)
    //     setIsLoading(false)
    // }




    const calendarRef = useRef<any>();

    const handleSelection = (date: any) => {
        let filtered = data?.filter((elem) => {
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
                {/* {isLoading ?
                    <Loading title='Loading...' />
                    :
                    <>
                        {!sortedTransactions.length ? 
                        <NothingFound title='Not found' /> 
                        :
                            <>{sortedTransactions.map((elem: any) => 
                            <UserHistory key={elem.id} {...elem} />)}</>

                        }
                    </>} */}


            </div>

        </div>
    );
};

export default TransactionsHistory;