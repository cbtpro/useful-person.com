/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
export default function () {
    return (
        <style jsx global>{`
            html, body {
                margin: 0;
                font-size: 24px;
                color: #000;
            }
            html {
                // background-image: url(../static/images/mountain-984083.jpg);
                // background-position: center center;
                // background-repeat: no-repeat;
                // background-attachment: fixed;
                // background-size: cover;
            }
            a {
                text-decoration: none;
                color: #000;
            }
            a:hover {
                color: orange;
                text-decoration: underline orange;
            }
            .header {
                background-color: #fff;
            }
            .container {
            }
            .footer {
                background-color: #f0f0f0;
            }
            .copyright {
                color: black;
                font-size: 0.5rem;
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