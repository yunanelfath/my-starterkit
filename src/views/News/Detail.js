import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  actionToProps as newsAction
} from 'store/reducers/news/news.action'
import ArrowIcon from '@material-ui/icons/ChevronLeft';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InactiveIcon from '@material-ui/icons/FavoriteBorder';
import ActiveIcon from '@material-ui/icons/FavoriteSharp';

const DetailNews = (props) => {
  const {
    history,
    changeNewsAttribute,
    news: {
      detail,
      purchaseItems,
      items,
    },
    match: {
      params: {
        id
      }
    }
  } = props

  useEffect(()=>{
    let findIndex = items.findIndex((e)=> e.id === id)
    changeNewsAttribute({
      key: 'detail',
      value: items[findIndex]
    })
  }, [changeNewsAttribute, id, items])

  const handlePurchase = () =>{
    let purchaseItemsUpdate = purchaseItems

    let findIndex = purchaseItems.findIndex((f)=> f.id === detail.id)
    if(findIndex < 0){
      purchaseItemsUpdate.push(detail)

      changeNewsAttribute({
        key: 'purchaseItems',
        value: purchaseItemsUpdate
      })
      alert('Purchase Added')
    }else{
      alert('Item already Purchased')
    }
  }

  return (
    <>
      {
        detail && (
          <div className="detail-news">
            <div className="top">
              <Grid container>
                <Grid item xs>
                  <IconButton onClick={history.goBack}>
                    <ArrowIcon />
                  </IconButton>
                </Grid>
                <Grid item sm={7} lg={7} md={7}>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <img src={detail.imageUrl} alt={detail.title}/>
            </div>
            <Grid container>
              <Grid item xs className="title">
                {detail.title}
              </Grid>
              <Grid item sm={7} lg={7} md={7}>
                <IconButton>
                  {
                    detail.loved === 1 && (
                      <ActiveIcon />
                    )
                  }
                  {
                    detail.loved === 0 && (
                      <InactiveIcon />
                    )
                  }
                </IconButton>
              </Grid>
            </Grid>
            <div className="desc">{detail.description}</div>
            <div className="action" onClick={handlePurchase}>{detail.price}<span>Buy</span></div>
          </div>
        )
      }
      {
        !detail && (
          <div style={{textAlign: 'center'}}>detail item not found</div>
        )
      }
    </>
  );
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      news: state.news,
    }
}
const mapDispatchToProps = {...newsAction}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailNews))
