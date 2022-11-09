import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { Link, Page, Section } from '../components'


export default function Home() {
  return (
    <Page
      title="Home"
      description="Welcome to HeLx"
    >
      {/* {
        homeSections.map((section)=>(
          <Section title={section.title} style={{display: 'flex'}}>
            <div>
              <img src={section.image} style={{textAlign: `${section.align}`, height: '300px'}}/>
            </div>
            <div>
              <ul>
                {
                  section.listItems.map((item)=>(
                    <li>
                      <Typography>{item}</Typography>
                    </li>
                  ))
                }
              </ul>

            </div>
          </Section>
        ))
      } */}
    </Page>
  )
}