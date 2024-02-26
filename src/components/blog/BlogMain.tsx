
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogArea from './BlogArea';



const BlogMain = () => {
    return (
        <>
          <Breadcrumb title='Blog'/>
           <BlogArea/>
        </>
    );
};

export default BlogMain;