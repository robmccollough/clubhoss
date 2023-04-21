import styles from './book.module.css'

const Book = (props) => {
    const {title, image, authors} = props.data
    return <div className={styles.book}>
      <img className={styles.image} src={image}/>
      <a className={styles.title}>
        {title}
      </a>
     <span>
      {authors.map(author => <a href={author.link}>{author.name}</a>)}
     </span>
    </div>
  }


export default Book;