import React from 'react';
import './SearchBar.css';

// let sortByOptions = {
//     'Best Match': 'best_match',
//     'Highest Rated': 'rating',
//     'Most Reviewed': 'review_count'
// };

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        // this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    getSortByClass(sortByOptions) {
        if (this.state.sortBy === sortByOptions) {
            return 'active';
        }
        else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    // Dynamically creates list items to display the sort options.
    // Future-proofs against potential changes to Yelp API
    // Method iterates through keys and values of sortByOptions object and returns a list item.
    // Each list item uses keys as attributes and values as the content.
    renderSortByOptions() {
        // Accesses keys of sortByOptions object via Object.keys function.
        // Iterates through each key via .map() function and stores value into sortByOptionValue variable.
        // Returns list item element with key attribute equal to sortByOptionValue and content as sortByOption.
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li className={this.getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;