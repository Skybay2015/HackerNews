import React, {FC} from 'react';
import useFetch from '../../hooks/useFetch';
import Comment from '../../components/Comment';
import { useParams } from 'react-router';
import styles from './styles.module.sass'


const CommentsContainer:FC<any> = () => {
   const { id } = useParams()
   const {data, loading} =  useFetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {})

   return (
      <div className={styles.commentsContainer}>
         {!loading && data.kids && data.kids.map((id:number) => {
            return <div key={id} className={styles.mainComment}>
                     <Comment  id={id} />
                  </div>
         })}
         
      </div>
   );
}

export default CommentsContainer;
