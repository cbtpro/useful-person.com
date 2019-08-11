const logoStyle = {
    display: 'inline-block',
    width: 64
}
const logoImageStyle = {
    width: 24,
    verticalAlign: 'middle'
}
const logoText = {
    fontSize: '2rem',
    color: 'orange',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    verticalAlign: 'middle',
}

export default () => (
    <div style={logoStyle}>
        {/* <img style={logoImageStyle} src="static/logo.png" /> */}
        <div style={logoText}>庸</div>
    </div>
);