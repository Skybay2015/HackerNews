import React, { FC, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './style.module.sass'
import { getTime } from '../../helperFunctions';

interface CommentProps {
   id: number,
}

const Comment: FC<CommentProps> = ({ id, }) => {
   const [hidden, setHidden] = useState<boolean>(true)
   const { data, loading, error } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {})
   const classes:any = [styles.comment]

   const clickHandler = (): void => {
      setHidden(prevHidden => !prevHidden)
   }


   const showTime =  (data: any ) => {
     return getTime(data).hours <= 0 ?
               <span>{getTime(data).minutes} minutes ago</span> :
               <span>{getTime(data).hours} hours ago</span>
   }

   if (data.parent) {
      classes.push(styles.childComment)
   }

   return ( 
      <>

      {loading ? <p>Loading...</p> : error ? <div>Something went wrong...</div> :
       <div className={classes.join(' ')} >
         <span>By {data.by} | </span>
         {showTime(data)}
          {data.kids && <button className={styles.btnReplies} onClick={clickHandler}>{hidden ? "Show" : 'Hide'} replies</button>}
         {!loading && <p className={styles.commentText} dangerouslySetInnerHTML={{__html: data.text}} />}
         <div hidden={hidden}>
            {data.kids && data.kids.map((id: number) => <Comment key={id} id={id} />)}
         </div>
      </div>
   }
     </>
   );
}

export default Comment;
