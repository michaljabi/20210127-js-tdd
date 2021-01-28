import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'

class SearchInputBar extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        ariaLabel: PropTypes.string.isRequired,
        onSearchChange: PropTypes.func.isRequired
    };

    debouncedOnSearchChange = debounce(this.props.onSearchChange, 300);

    handleOnChange = ({target}) => this.debouncedOnSearchChange(target.value)

    render() {
        const {placeholder, ariaLabel} = this.props;
        return (
            <div className="input-group mb-3">
                <input type="text"
                        className="form-control"
                        placeholder={placeholder}
                        aria-label={ariaLabel}
                        onChange={this.handleOnChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text" aria-label="search" role="img"> 🔍 </span>
                </div>
            </div>
        )
    }
}

export default SearchInputBar

