import React, {FC} from "react";
import StoryContainer from "./containers/StoryContainer";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import CommentsContainer from "./containers/CommentsContainer";



const App: FC<any> = () => {

   return (
      
      <Router>
         <NavBar />
         <Switch>
            <Route path='/' exact component={()=> <StoryContainer content='newstories'/>}/>
            <Route path='/beststories' component={()=> <StoryContainer content='beststories' />}/>
            <Route path='/topstories' component={()=> <StoryContainer content='topstories' />} />
            <Route path='/comments/:id'> 
               <CommentsContainer/>
            </Route>
            <Redirect to='/' />
            
         </Switch>
      </Router>

   )
   
}

export default App;