// file: src/components/PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info_ => (
        <PhoneInfo
          key={info_.id}
          info={info_}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;