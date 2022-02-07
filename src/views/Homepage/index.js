import React, { useEffect, useState } from 'react';
import BottomNavigation from 'components/BottomNavigation'
import {
  apiGetHomepage
} from 'api/homepage.api'
import GridList from '@material-ui/core/GridList';
import { withRouter } from "react-router";
import {
  routerPath
} from 'router/Routerlist'
import { connect } from 'react-redux'
import {
  actionToProps as newsAction
} from 'store/reducers/news/news.action'
import {
  actionToProps as authAction
} from 'store/reducers/auth/auth.action'
import HomepageCard from 'components/HomepageCard'
import CategoryCard from 'components/CategoryCard'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Loading from 'components/Loading'
import { LOGOUT } from 'store/reducers/auth/auth.constant'
import { LOGOUT as LOGOUT_NEWS } from 'store/reducers/news/news.constant'
import NavbarMenuTop from 'components/NavbarMenuTop'

const Homepage = (props) => {
  const [isLoading, setLoading] = useState(false)
    const {
      changeNewsAttribute,
      changeAuthAttribute,
      history,
      auth: {
        authenticated
      },
      news: {
        items,
        categoryItems,
        didMountHomepage,
      }
    } = props

  useEffect(()=>{

    const fetchHomepage = async () =>{
      setLoading(true)
      await apiGetHomepage().then((e)=>{
        const {
          response
        } = e

        let updateItems = []
        let updateCategoryItems = []
        setLoading(false)

        changeNewsAttribute({
          key: 'items',
          value: updateItems.concat(response[0].data.productPromo)
        }).then(()=>{
          changeNewsAttribute({
            key: 'categoryItems',
            value: updateCategoryItems.concat(response[0].data.category)
          }).then(()=>{
            changeNewsAttribute({
              key: 'didMountHomepage',
              value: true,
            })
          })
        })


      })
    }
    if(!didMountHomepage && authenticated){
      fetchHomepage()
    }
    if(!authenticated){
      history.push(routerPath.signin.root)
    }
  }, [categoryItems, items, changeNewsAttribute, didMountHomepage, authenticated, history,])

    return (
      <>
      <NavbarMenuTop/>
      <div className="search-box">
        <TextField
         id="input-with-icon-textfield"
         variant="outlined"
         fullWidth
         inputProps={{
           onClick: ()=>{
             history.push(routerPath.search.root)
           }
         }}
         InputProps={{
           startAdornment: (
             <InputAdornment position="start">
               <SearchIcon />
             </InputAdornment>
           ),
         }}
       />
     </div>

     <div className="category-box">
      {
        categoryItems && categoryItems.length > 0 && categoryItems.map((cat, idx)=>{
          return (
            <CategoryCard item={cat} key={idx}/>
          )
        })
      }
     </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: '55px',
        overflow: 'hidden'
      }}>
        <GridList cellHeight={180}>
          {items && items.length > 0 && items.map((tile, idx) => {
            let updateTile = {
              ...tile,
              img: tile.imageUrl,
              author: '-',
            }
            return (
              <HomepageCard tile={updateTile} key={idx}/>
            )
          })}
        </GridList>
        <div className="sign-out" onClick={()=>{
          changeAuthAttribute({
            key: false,
            value: false,
            type: LOGOUT
          }).then(()=>{
            changeNewsAttribute({
              key: false,
              value: false,
              type: LOGOUT_NEWS
            }).then(()=>{

              history.push(routerPath.signin.root)
            })
          })
        }}>Sign Out here</div>
      </div>
      <BottomNavigation active={'home'}/>
      <Loading open={isLoading}/>
      </>
    );
  // }
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      news: state.news,
    }
}
const mapDispatchToProps = {...newsAction, ...authAction}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
// export default Homepage;
