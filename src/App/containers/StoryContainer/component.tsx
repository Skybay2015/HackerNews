import React, { FC, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Story from '../../components/Story';
import styles from './styles.module.sass'

interface StoryContainerProps {
   content: string
}


const StoryContainer: FC<StoryContainerProps> = ({content}) => {
   const [maxStories, setMaxStories] = useState(30)

   const [IsLoadingNewStories, setIsLoadingNewStories] = useState(false)

   const {loading, data} = useFetch(`https://hacker-news.firebaseio.com/v0/${content}.json?print=pretty`, {})
   

   const btnClickHandler = () => {
      setMaxStories(maxStories + 30) 
      setIsLoadingNewStories(true)
      const t = setTimeout(()=>  {
         setIsLoadingNewStories(false)
         clearTimeout(t)
      },500)
   }
 

   return (
      <div className={styles.storyContainer}>
         {loading ? <div>Loading...</div> : data.map((id: number, step: number) => {
           return step + 1 > maxStories ? null : <Story key={id} id={id} number={step} />
         } )}
         <button className={styles.btnLoadMore} onClick={()=>  {
            if (!IsLoadingNewStories) btnClickHandler()
         }}>More</button>
      </div>
   );
}

export default StoryContainer;
