import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InactiveIcon from '@material-ui/icons/FavoriteBorder';
import ActiveIcon from '@material-ui/icons/FavoriteSharp';
// import classNames from 'classnames'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {
  routerPath
} from 'router/Routerlist'

export default (props) => {
  const {
    imageUrl,
    title,
    price,
    id,
  } = props

  return (
    <Link to={routerPath.news.detail.replace(/:id/g, id)}>
      <Grid container className="news-card">
        <Grid item sm={3} lg={3} md={3}>
          <img src={imageUrl} alt={title} />
        </Grid>
        <Grid item xs>
          <div className="title">{title}</div>
          <div className="title">{price}</div>
        </Grid>
      </Grid>
    </Link>
  )
}
