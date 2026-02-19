import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidOrganizationalRequirements() {
  console.log('Fetching MiFID Organizational Requirements source document...')
  
  const query = `*[_type == "servicePage" && slug.current match "*mifid-organizational*" && language == "de"][0]`
  
  const result = await client.fetch(query)
  
  if (result) {
    console.log('Found document:', result._id)
    console.log('Title:', result.title)
    console.log('Slug:', result.slug?.current)
    console.log('FAQs:', result.faq?.length || 0)
    console.log('Services:', result.services?.length || 0)
    
    fs.writeFileSync('mifid-organizational-requirements-source.json', JSON.stringify(result, null, 2))
    console.log('\nSaved to mifid-organizational-requirements-source.json')
  } else {
    console.log('Document not found, trying alternative query...')
    
    const altQuery = `*[_type == "servicePage" && title match "*Organizational*" && language == "de"][0]`
    const altResult = await client.fetch(altQuery)
    
    if (altResult) {
      console.log('Found document:', altResult._id)
      console.log('Title:', altResult.title)
      console.log('Slug:', altResult.slug?.current)
      console.log('FAQs:', altResult.faq?.length || 0)
      console.log('Services:', altResult.services?.length || 0)
      
      fs.writeFileSync('mifid-organizational-requirements-source.json', JSON.stringify(altResult, null, 2))
      console.log('\nSaved to mifid-organizational-requirements-source.json')
    } else {
      console.log('Trying to find by slug pattern...')
      const slugQuery = `*[_type == "servicePage" && slug.current match "*organizational*"][0]`
      const slugResult = await client.fetch(slugQuery)
      
      if (slugResult) {
        console.log('Found document:', slugResult._id)
        console.log('Title:', slugResult.title)
        console.log('Slug:', slugResult.slug?.current)
        console.log('FAQs:', slugResult.faq?.length || 0)
        console.log('Services:', slugResult.services?.length || 0)
        
        fs.writeFileSync('mifid-organizational-requirements-source.json', JSON.stringify(slugResult, null, 2))
        console.log('\nSaved to mifid-organizational-requirements-source.json')
      } else {
        console.log('Document not found with any query')
      }
    }
  }
}

fetchMifidOrganizationalRequirements()
