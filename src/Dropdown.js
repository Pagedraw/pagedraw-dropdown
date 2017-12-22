import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import PdOpen from './pagedraw/dropdownopen';
import PdClosed from './pagedraw/dropdownclosed';

class Dropdown extends Component {
  constructor() {
      super();
      this.state = {
          open: false,
          chosen: 'Hello world'
      }

      this.handleOpen = this.handleOpen.bind(this);
  }

  handleClickOutside() {
      if (!this.state.open)
          return;

      this.setState({open: false});
  }

  handleOpen() {
      this.setState({open: true});
  }

  render() {
    const items = [
        {label: 'Hello world'},
        {label: 'A whole new world'},
        {label: 'A new fantastic point of view'}
    ].map((item) => Object.assign({}, item, {handler: () => {
        this.setState({chosen: item.label, open: false});
    }}));

    return <div style={{position: 'relative'}}>
          <PdClosed chosen={this.state.chosen} handleOpen={this.handleOpen} />
          { this.state.open &&
            <div style={{position: 'absolute', top: 0, left: 0, right: 0}}>
                <PdOpen items={items} chosen={this.state.chosen} />
            </div>
          }
        </div>;
  }
}

export default onClickOutside(Dropdown);

