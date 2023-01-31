import Styles from "../Styles/components/footer.module.scss"
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={Styles.footer}>
      <p> &copy; {year}</p>
    </footer>
  )
}

export default Footer