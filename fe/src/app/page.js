import styles from "./page.module.css"
import Book from '@/components/book'


export default async function Home() {

  const library = await fetch("http://localhost:3001/api/library").then(res => res.json())
  const books = library.map((book, index) => <Book data={book} key={index}/>)

  return <div className={styles.main}>{books}</div>
}

