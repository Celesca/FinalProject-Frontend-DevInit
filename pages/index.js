import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { IoIosJournal, IoIosListBox } from 'react-icons/io';
import Link from 'next/link';
import StaticCalendarComponent from '@/components/StaticCalendar';
import { useEventContext } from '@/contexts/EventContext';
import { useEffect, useState } from 'react';
import { calculateDateDifference } from '@/utils/dateUtils';
import Swal from 'sweetalert2';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { events } = useEventContext();
  const [ numberJournal, setNumberJournal ] = useState(0);
  const [ numberTodo, setNumberTodo ] = useState(0);


  // Alert for the events.
  useEffect(() => {

    const loadJournal = JSON.parse(localStorage.getItem('journal-data')) || 0;
    const loadTodo = JSON.parse(localStorage.getItem('todo-data')) || 0;
    console.log(loadJournal.length)
    setNumberJournal(loadJournal.length);
    setNumberTodo(loadTodo.length);

    events.forEach(event => {
      const today = new Date();
      const eventDate = new Date(event.date);
      const dayDifference = calculateDateDifference(today, eventDate);

      if (dayDifference <= 3) {
        Swal.fire({
          icon: 'warning',
          title: event.title,
          text: `คุณมีกิจกรรม ${event.title} ในอีก ${dayDifference} ข้างหน้า`
        })
      }
    })

  }, []);



  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="container pt-5">
        <h1 className={`${styles.heading_text}`}>Your Calendar</h1>

          <div className="row">
            
              <div className={`col col-12 col-lg-6 py-2 ${styles.static_background}`}>
                <Link href="/calendar" className={`${styles.static_calendar}`}>
                  <StaticCalendarComponent 
                  events={events}
                  staticCalendar={true}
                  />
                </Link>
              </div>
           
            <div className="col col-12 col-lg-6">
              <div className="d-flex flex-column">

                {/* Daily Journal Card */}
                <Link href="journal" className={`${styles.journal_card}`}>
                <div className={`card ${styles.card_info} p-4 mt-5`}>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {numberJournal}
                    <span className="visually-hidden">journal collected</span>
                  </span>
                  <div className="card-body">
                    <h3 className="card-title"><IoIosJournal/> Daily Journal</h3>
                    <p className="card-text">บันทึกทุกสิ่งที่คุณเจอภายในชีวิตประจำวัน เพื่อทบทวนในวันหลัง</p>
                  </div>
                </div>
                </Link>
                
                <Link href="todo" className={`${styles.todo_card}`}>
                <div className={`card ${styles.card_info} p-4 mt-5`}>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {numberTodo}
                    <span className="visually-hidden">todolist collected</span>
                  </span>
                  <div className="card-body">
                    <h3 className="card-title"><IoIosListBox/> To-do List</h3>
                    <p className="card-text">กลัวจะลืมสิ่งที่ต้องทำ? จดไว้กับเราสิ แล้วคุณจะได้ไม่ลืม</p>
                  </div>
                </div>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}