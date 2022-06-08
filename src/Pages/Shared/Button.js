import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button class="btn btn-sm">{children}</button>
        </div>
    );
};

export default Button;