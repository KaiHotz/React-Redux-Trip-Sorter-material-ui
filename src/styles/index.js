import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 350,
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    marginBottom: 16,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '95%',
  },
  sortButton: {
    width: '48%',
    margin: `${theme.spacing(1)}px 2px`,
  },
  searchResetButton: {
    width: '98%',
  },
  listItem: {
    textAlign: 'center',
  },
}))
