import React from 'react';
import './Blog.css'

const Blog = () => {
    const inline = '<a > ,<b >, <big >, <i >, <small >, <img > <span >';
    const block = '< p >, < h1 >, to < h6>, < ul >,< ol >,< div >,< hr >,< blockquote >'
    return (
        <div className='row'>
            <div className='blog-question'>
                <h2><strong>Question: </strong>What is Context API?</h2>
                <p><strong>Answer:</strong>
                    <p>Context API is an Amazing thing of React to passing data to the child element. Its is a shortest way to passing data from parent element to children of children Element. With the context API, the hassle of passing data through. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. each element by the props can be avoided. In React we usually send data from one component to another. In that case, the data of one component has to be sent to another child component as props. Often there is a situation where the child component is much lower than our main component where your data is.</p>
                </p>
            </div>
            <div className='blog-question'>
                <h2><strong>Question: </strong>Differences between Inline, Block and Inline Block</h2>
                <p><strong>Answer:</strong>
                    <p><strong>Inline:</strong> Inline elements sit one after the other, that is, holding a line. They always sit side by side, occupying as much space as needed. Some inline elements are: {inline}  etc.<br />
                        Example:
                        <a href="#">Click here</a>
                        <button>Click here</button>
                        <span>span</span>
                        <br /><br />
                        <strong>Block:</strong> Block elements basically cover all the places of the element. These elements always start from a new line. Usually the block element can have 2 inline or block elements inside. Some block elements are:  {block}etc.<br />
                        Example:
                        <p>Paragraph</p>
                        <div>Div</div>
                        <br /><br />
                        <strong>Inline-Block:</strong> When the properties of a block can be applied by keeping an element inline, then that element is basically called Inline-Block element. In this case we use display: inline-block Css. And I also use the CSS of block elements.</p>
                </p>
            </div>
        </div>
    );
};

export default Blog;