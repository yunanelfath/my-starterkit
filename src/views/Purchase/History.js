import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import ArrowIcon from '@material-ui/icons/ChevronLeft';
import {
  actionToProps as newsAction
} from 'store/reducers/news/news.action'
import NewsList from 'components/NewsListCard'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const PurchaseHistory = (props) => {
  const {
    news: {
      purchaseItems,
    },
    history,
  } = props

  return (
    <>
      <div className="header">
        <Grid container>
          <Grid item sm={3} lg={3} md={3}>
            <IconButton onClick={history.goBack}>
              <ArrowIcon />
            </IconButton>
          </Grid>
          <Grid item xs style={{paddingTop: '10px'}}>
            Purchase History
          </Grid>
        </Grid>
      </div>
      <div className="list-container">
      {
        purchaseItems && purchaseItems.length > 0 && purchaseItems.map((e, idx)=>{
            return (
              <NewsList {...e} key={idx}/>
            )
          })
      }
      {
        purchaseItems && purchaseItems.length === 0 && (
          <div style={{textAlign: 'center'}}>not found items</div>
        )
      }
      </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PurchaseHistory))
