import React from 'react';

export const SearchForm = () => {
    return (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name of recipe"
                />
            </div>
        </form>
    )
}
