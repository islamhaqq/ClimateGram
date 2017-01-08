import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1920,
    height: 650,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Landfill.jpg',
    title: 'What happens when you don\'t take care of the Earth',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'http://www.wherecoolthingshappen.com/wp-content/uploads/2014/03/zoomed-out-landmarks-3-2.jpg',
    title: 'Different View of Taj Mahal',
    author: 'pashminu',
  },
  {
    img: 'http://images.all-free-download.com/footage_preview/webm/tree_268.webm',
    title: 'Some refreshing nature videos',
    author: 'Danson67',
  },
  {
    img: 'http://www.americanadoptions.com/shop_image/family/54283/61bff86919b597f4886d61dc2fb32700_lg.JPG',
    title: 'Me and my wife posing in front of pyramid',
    author: 'fancycrave1',
  },
  {
    img: '../../../public/img/',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '../../../public/img/',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '../../../public/img/',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '../../../public/img/',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={5}
      cellHeight={400}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;
