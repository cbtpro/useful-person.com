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
                background-image: url(../static/images/mountain-984083.jpg);
                background-position: center center;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
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
                margin: 20px;
            }
            .footer {
                background-color: #fff;
            }
            .copyright {
                color: black;
                font-size: 0.5rem;
            }
        `}</style>
    )
}