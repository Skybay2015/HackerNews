import React, { FC } from 'react';
import {Link} from 'react-router-dom'
import {getTime} from '../../helperFunctions/index'
import styles from './styles.module.sass'
import useFetch from '../../hooks/useFetch';


interface StoryProps {
   id: number,
   number: number
}

const Story: FC<StoryProps> = ({ id, number }) => {
   const { data, loading } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {})

   const showTime =  (data: any ) => {
     return getTime(data).hours <= 0 ?
               <span>{getTime(data).minutes} minutes ago</span> :
               <span>{getTime(data).hours} hours ago</span>
   }

   return (
      <div>
         {
            !loading && 
            <>
            <h2 className={styles.storyTitle}>
               {number + 1} <a href={data.url}>{data.title}</a>
            </h2>
            <p>{data.score} points | By {data.by}
               &nbsp; 
               {showTime(data)} 
               &nbsp; {data.kids && <span>| <Link  to={`/comments/${id}`}>{data.kids.length} comments </Link></span>}
            </p>
            </>
         }

      </div>
   );
}

export default Story;
