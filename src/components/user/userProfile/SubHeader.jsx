import React from 'react';
import Style from './SubHeader.module.css'
import BasicTabs from './BasicTabs';

const SubHeader = () => {
  return (
    <div className={Style.header}>
        <h1>Shamil</h1>
        <div className={Style.sub_bar}>
            <BasicTabs/>
        </div>
    </div>
  )
}

export default SubHeader

