import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/Layout.js';
import Images from '../examples/Images';

export default function Home() {
  return (
    <Layout>
        <h1>Home Page</h1>
        <Images />
    </Layout>
  )
}
