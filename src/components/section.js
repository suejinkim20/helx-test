import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

export const Section = ({ title, children }) => {
  return (
    <Box >
      {
        title && (
          <Box >
            <Typography variant="h2" >
              { title }
            </Typography>
          </Box>
        )
      }
      <Box >
        { children }
      </Box>
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}