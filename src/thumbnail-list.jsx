var React = require('react');
var thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
        return <thumbnail key={thumbnailProps.number} {...thumbnailProps}/>
      });

    return <div>{list}</div>
  }
});
