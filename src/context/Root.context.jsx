import React from 'react';

// create blog context
const BlogContext = React.createContext();
export default BlogContext; // default.. hot use

// create blog provider
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};
