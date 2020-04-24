import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InactiveIcon from '@material-ui/icons/FavoriteBorder';
import ActiveIcon from '@material-ui/icons/FavoriteSharp';
// import classNames from 'classnames'
import { Link } from "react-router-dom";
import {
  routerPath
} from 'router/Routerlist'

export default (props) => {
  const {
    tile
  } = props

  return (
    <GridListTile key={tile.img}>
      <Link to={routerPath.news.detail.replace(/:id/g, tile.id)}>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={tile.title}
        actionIcon={
          <IconButton aria-label={`info about ${tile.title}`}>
            {
              tile.loved === 1 && (
                <ActiveIcon />
              )
            }
            {
              tile.loved === 0 && (
                <InactiveIcon />
              )
            }
          </IconButton>
        }
      />
      </Link>
    </GridListTile>
  )
}
