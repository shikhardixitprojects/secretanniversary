import React, { useEffect } from "react"
import { Helmet } from "react-helmet";
import { isLoggedIn } from "../services/auth"
import { navigate } from "gatsby"

// Styles
import "../styles/app.css";
import { site } from "../constants/site";

export const TRUNCATION_LIMIT = 150

const Entry = ({ children, bodyClass, location }) => {

    useEffect(() => {
        if (!isLoggedIn() && location.pathname !== `/login`) {
          navigate("/")
          return null
        }
      }, [])

    return (
        <>
            <Helmet>
                <title>Secret Anniversary</title>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header
                        className="site-head"
                        style={{
                            ...(site.cover_image && {
                                backgroundImage: `url(${
                                    require("../assets/" + site.cover_image)
                                        .default
                                })`,
                            }),
                        }}
                    >
                        <div className="container">
                            <div>
                                <h1 className="site-banner-title">
                                    {site.title}
                                </h1>
                                <p className="site-banner-desc">
                                    {site.description}
                                </p>
                            </div>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div>
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                Published with Love.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Entry;
