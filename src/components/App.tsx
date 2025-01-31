import '../index.css'
import { CardContent } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { CardsWrapper } from './Card/CardsWrapper'
import type { ICardItem } from './Card/types'

/**
 * Example:
 * The "Time" component is a simple component that displays the current date and time.
 */
const Time = () => {
  const locale = navigator.languages
  const [today, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: 'long' })
  const date = `${day} ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}`
  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <CardContent>
      <Typography variant="h4">{date}</Typography>
      <Typography variant="h5">{time}</Typography>
    </CardContent>
  )
}

/**
 * The "Component" is added as a child to MUI's Card component. See https://mui.com/material-ui/react-card/ for more details.
 */
const cards: ICardItem[] = [{ slug: 'time', desc: '', Component: Time }]

export const App = () => {
  return (
    <Box component="main" sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h1">MK-core Project</Typography>
      <CardsWrapper cards={cards} />
    </Box>
  )
}
