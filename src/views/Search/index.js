import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import ArrowIcon from '@material-ui/icons/ChevronLeft';
import {
  actionToProps as newsAction
} from 'store/reducers/news/news.action'
import NewsList from 'components/NewsListCard'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const PurchaseHistory = (props) => {
  const [newValue, setValue] = useState('')

  const {
    news: {
      items,
    },
    history,
  } = props

  return (
    <>
      <div className="header">
        <Grid container className="top-container">
          <Grid item sm={3} lg={3} md={3}>
            <IconButton onClick={history.goBack}>
              <ArrowIcon />
            </IconButton>
          </Grid>
          <Grid item xs>

          <div className="search-box search-page">
            <TextField
             id="input-with-icon-textfield"
             variant="outlined"
             fullWidth
             inputProps={{
               onChange: (e)=>{
                 setValue(e.target.value)
               }
             }}
             placeholder={'Type n'}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <SearchIcon />
                 </InputAdornment>
               ),
             }}
           />
         </div>
        </Grid>
        </Grid>
      </div>
      <div className="list-container">
      {
        newValue !== '' && items && items.length > 0 && items.map((e, idx)=>{
            let findText = new RegExp(newValue, 'g')

            return e.title.toLowerCase().match(findText) && ( <NewsList {...e} key={idx}/> )
          })
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
