
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorite.contex'
import clases from './MainNavigation.module.css'


const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext)

  
  
   return (
   <header className={clases.header}>
       <div className={clases.logo}>Places Keeper</div>
         <nav>
              <ul>
                    <li>
                       <Link to="/">All Places</Link>
                    </li>
                    <li>
                       <Link to="/newmeetups">Add a new Place</Link>
                    </li>
                    <li>
                       <Link to="/favorites">
                       Favorite Places
                       <span className={clases.badge}>{favoritesCtx.totalFavorites}</span>
                       </Link>
                    </li>
                     
                     
                     
                     
                     </ul>   
         </nav>
   </header>
  )
}

export default MainNavigation