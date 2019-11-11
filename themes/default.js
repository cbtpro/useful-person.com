/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
export default function () {
    return (
        <style jsx global>{`
            html, body {
                box-sizing: border-box;
                font-size: 16px!important;
                min-width: 320px;
                overflow: hidden;
                text-rendering: optimizeLegibility;
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                text-size-adjust: 100%;
                -ms-overflow-style: -ms-autohiding-scrollbar;
                -webkit-font-smoothing: antialiased;
                height: 100%;
                width: 100%;
                margin: 0;
            }
            html {
                color: #4a4a4a;
                font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
                font-weight: 400!important;
                font-size: 1rem;
                line-height: 1.5!important;
                margin: 0;
                height: 100%;
                width: 100%;
            }
            a {
                text-decoration: none;
            }
            a:hover {
            }
            @media only screen and (min-width: 601px) {
                .navbar-item {
                    font-size: 2rem;
                }
            }
            @media only screen and (max-width: 600px) {
                .navbar-item {
                    display: none!important;
                }
            }
            .mini-navbar {
            }
            .navbar {
                color: #3572b0;
                font-weight: 100;
                min-height: 3.25rem;
                position: relative;
                display: flex;
                z-index: 30;
                box-shadow: 0 2px 4px -1px rgba(0,0,0,.25);
            }
            .navbar-brand {
                align-items: stretch;
                flex-shrink: 0;
                min-height: 3.25rem;
                width: 100%;
                display: flex;
            }
            .navbar-separator:after {
                content: "|";
                position: absolute;
                left: -3px;
                font-size: 1.7em;
                color: #3b4d96;
                margin-top: -3px;
                padding-right: 5px;
            }
            .navbar-item {
                align-items: center;
                display: flex;
                flex-grow: 0;
                flex-shrink: 0;
                line-height: 1.5;
                padding: .5rem .75rem;
                position: relative;
            }
            .navbar-title {
                font-size: 18px;
                color: #3572b0;
                line-height: 1.5;
                padding: .5rem .75rem;
                margin-top: -4px;
                background-color: transparent;
            }
            .navbar-language {
            }
            .container {
            }
            .footer {
                color: #3572b0;
                height: 100px;
            }
            .copyright {
                font-size: 0.5rem;
                color: #999;
            }

            .input-text {
                width: 100%;
                height: 48px;
                background-color: #e7e7e7;
                border-radius: 5px;
                text-indent: 16px;
                font-size: 18px;
                border: none;
                color: black;
            }
            .input-button {
                width: 100%;
                height: 48px;
                background-color: #2ed573;
                border-radius: 5px;
                color: #fff;
                font-size: 1rem;
                margin: 18.5px auto;
                border: none;
            }
        `}</style>
    )
}