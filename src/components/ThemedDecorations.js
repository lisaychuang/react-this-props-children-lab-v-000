import React from 'react';

class ThemedDecorations extends React.Component{
    render(){
        // Add className property to each children
        const childrenWithNames = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                className: this.props.theme
              });
        });

        return (
            <div>
                {childrenWithNames}
            </div>
        );
    }
}

export default ThemedDecorations;