var React = require('react');
var Badge = require('./badge');
module.exports = React.createClass({
  render: function() {
    var props = this.props;
    return <div class="col-sm-6 col-md-4" id="thumbnailTarget">
        <div className="thumbnail">
          <img alt={props.imgUrl} src={this.props.imgUrl}/>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p><Badge number={this.props.number} title={this.props.title}/></p>
          </div>
        </div>
      </div>
  }
});
