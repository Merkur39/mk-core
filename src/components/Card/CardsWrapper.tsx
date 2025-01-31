import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid2'
import type { ICardItem } from './types'

interface ICardsWrapperProps {
  cards: ICardItem[]
}

const cardStyle = {
  position: 'relative',
  backgroundColor: 'transparent',
  cursor: 'pointer',
}
const getBoxStyle = () => {
  const backgroundImage =
    'https://images.unsplash.com/uploads/1413387620228d142bee4/23eceb86' // TODO: Randomize

  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    opacity: 0.5,
    zIndex: -1,
  }
}

export const CardsWrapper = ({ cards }: ICardsWrapperProps) => {
  return (
    <Grid container spacing={4}>
      {cards.map(({ Component, slug }, index) => {
        const key = `${slug}-${index}`
        return (
          <Grid size={4} key={key}>
            <Card sx={cardStyle}>
              <Box sx={getBoxStyle} />
              <Component />
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
