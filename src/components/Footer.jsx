const Footer  = () => {
  const styles = {
    textAlign: 'center',
  }
    return (
    <div style={styles} id="footer"><footer>

    <p>Copyright {new Date().getFullYear()}</p>
        </footer></div>
    )
  }

export default Footer;