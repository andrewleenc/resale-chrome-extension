import React from 'react';
import Select from 'react-select'
import './Header.css'

function Header(props) {
    const options = []

    for(var i = 0; i < props.items.length; i++) {
        var obj = props.items[i];
        options.push({ value: obj.size , label: obj.size })
    }

    const filteredOptions = options.reduce((acc, current) => {
        const x = acc.find(item => item.value === current.value);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

        const customStyles = {
            control: styles => ({ ...styles, border: 'none', margin: '10px 10px'})
        }

  
        return (
            <div className="header">
                 <Select
                  isClearable
                  options={filteredOptions}
                  placeholder="Select a size!"
                  styles={customStyles}
                  onChange={props.onChange}
                  value={props.value}
                  />
            </div>
        
        );



}


export default Header;