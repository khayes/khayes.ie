import React from "react"
import {Link} from 'gatsby'
import DefaultLayout from '../layouts/default-layout'

export default function PageNotFound() {
  return <React.Fragment>
        <DefaultLayout>
            <h1>Oops page not found!</h1>
            <p>Try to <Link to="/">return to the homepage.</Link></p>
        </DefaultLayout>
    </React.Fragment>;
}