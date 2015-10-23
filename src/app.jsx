var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: 'Show Courses',
      number: 35,
      header: 'Learn React',
      description: 'Learn React with Flux',
      imgUrl: 'http://formatjs.io/img/react.svg'
    }, {
      title: 'See Tutorials 2',
      number: 25,
      header: 'Learn Gulp',
      description: 'Learn Gulp to speed Development',
      imgUrl: 'http://brunch.io/images/others/gulp.png'
    }
  ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.container'));
