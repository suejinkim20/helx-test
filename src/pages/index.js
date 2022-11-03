import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { Link, Page, Section } from '../components'

const homeSections = [
  {
    title: 'Reach new data frontiers with HeLx',
    listItems: [
      'Provides a complete data science laboratory for research in the cloud.',
      'Solves technical infrastructure challenges to focus researchers on science.',
      'Brings the right tools for each team together in a secure, scalable portal.',
      'Includes bringing your own data access patterns.',
    ],
  },
  {
    title: 'Implement tools and solutions to explore your data',
    listItems: [
      'Existing applications include notebooks, imaging, Apache Spark, and Nextflow workflows.',
      'Includes intuitive full text driven, knowledge graph augmented semantic search.',
      'Open source technology supports multiple authentication providers and authorization models.',
      'Scalable cloud native architecture with Kubernetes, Apache Airflow, and Nextflow.',
    ],
  },
  {
    title: 'Launch a flexible workspace for any science domain',
    listItems: [
      'Provides a unified data science workbench tailored to each science community.',
      'Extensible metadata driven architecture simplifies adding data science workspaces.',
      'Applicable to and actively used across science domains.',
    ],
  },
]

export default function Home() {
  return (
    <Page
      title="Home"
      description="Welcome to HeLx"
    >
      {
        homeSections.map((section)=>(
          <Section title={section.title}>
            <ul>
              {
                section.listItems.map((item)=>(
                  <li>
                    <Typography>{item}</Typography>
                  </li>
                ))
              }
            </ul>
          </Section>
        ))
      }
    </Page>
  )
}