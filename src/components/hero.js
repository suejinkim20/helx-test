import * as React from "react"
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { useScrollPosition } from '../hooks'

export const Hero = ({
  backgroundImage,
  backgroundColor,
  children
}) => {
  const { scrollPosition } = useScrollPosition()
  return (
    <Box>
      <Box
        style={{
          backgroundImage: `url(${ backgroundImage })`,
          backgroundColor,
          backgroundPosition: `0 ${ scrollPosition / 2 }px`
        }}
      />
      <Box  />
    </Box>    
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.object,
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Hero.defaultProps = {
  backgroundColor: '#f3f9cd',
}