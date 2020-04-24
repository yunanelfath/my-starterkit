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
import HomepageCard from 'components/HomepageCard'
import CategoryCard from 'components/CategoryCard'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Loading from 'components/Loading'

const Homepage = (props) => {
  const [isLoading, setLoading] = useState(false)
    const {
      changeNewsAttribute,
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
const mapDispatchToProps = {...newsAction}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
// export default Homepage;
