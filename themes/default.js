/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
export default function () {
    return (
        <style jsx global>{`
            html {
                font-size: 18px;
                height: 100%;
                width: 100%;
            }
            body {
                font-family: 'Microsoft YaHei', '微软雅黑', STXihei;
                margin: 0;
                padding: 0;
            }
            .navbar-item {
                font-size: 2rem;
            }
            @media only screen and (min-width: 769px) {
                .mini-menu-button, .mini-navbar-menu {
                    display: none;
                }
            }
            @media only screen and (max-width: 768px) {
                .navbar-menu {
                    display: none;
                }
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
            .navbar-item {
                align-items: center;
                display: flex;
            }
            .navbar-title {
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