import { Grid, Link } from '@mui/material'
import Item from '@mui/material/Grid/'
import styles from './header.module.css'

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={4} className={styles.center}>
        <Item>
          <a href='/' className={styles.navlink}>
            Home
          </a>
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>
          <h1 className={styles.logo}>Awesome Breweries</h1>
        </Item>
      </Grid>
    </Grid>
  )
}
