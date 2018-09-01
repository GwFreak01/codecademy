import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// Creates BusinessList Component and utilizes Business class
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BusinessList;