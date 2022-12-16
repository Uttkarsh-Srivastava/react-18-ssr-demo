/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {lazy} from 'react-loadable-visibilty';
import {ErrorBoundary} from 'react-error-boundary';
import Html from './Html';
import Spinner from './Spinner';
import Layout from './Layout';
import NavBar from './NavBar';

const Comments = lazy(() => import('./Comments'),{fallback:<Spinner />});
const Sidebar = lazy(() => import('./Sidebar'),{fallback:<Spinner />});
const Post = lazy(() => import('./Post' ),{fallback:<Spinner />});

export default function App({assets}) {
  return (
    <Html assets={assets} title="Hello">
       
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
        
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <NavBar />
      {/* <aside className="sidebar">
         
          <Sidebar />
          
      </aside> */}
      <article className="post">
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          <Post />
          
         
          <Post />
          
         
          <Post />
          
         
          <Post />
          
        <section className="comments">
          <h2>Comments</h2>
           
            <Comments />
            <Comments />
            
           
            <Comments />
            
           
            <Comments />
            
           
            <Comments />
            
           
            <Comments />
            
        </section>
        <h2>Thanks for reading!</h2>
      </article>
       
          
            
    </Layout>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
