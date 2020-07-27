import React from 'react';
import './Header.css'
import { Dropdown, Button } from 'semantic-ui-react'


function Header(props) {

    const options = []

    for(var i = 0; i < props.items.length; i++) {
        var obj = props.items[i];
        options.push({ key: i , text: obj.size, value: obj.size })
    }

    const filteredOptions = options.reduce((acc, current) => {
        const x = acc.find(item => item.value === current.value);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
  
        return (
            <div className="header">
                  <Dropdown clearable placeholder='Select Your Size!' options={filteredOptions} onChange={props.onChange} selection />
            </div>
        
        );



}


export default Header;