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

async function fetchMifidMarketDataCosts() {
  console.log('Fetching MiFID Market Data Costs page...')
  
  // Try to find the document by title pattern
  const query = `*[_type == "servicePage" && title match "MiFID Market Data*" && language == "de"][0]`
  
  const result = await client.fetch(query)
  
  if (result) {
    console.log('Found document:', result._id)
    console.log('Title:', result.title)
    console.log('FAQ count:', result.faq?.length || 0)
    console.log('Services count:', result.services?.length || 0)
    
    // Save to file
    fs.writeFileSync(
      './mifid-market-data-costs-source.json',
      JSON.stringify(result, null, 2)
    )
    console.log('Saved to mifid-market-data-costs-source.json')
  } else {
    console.log('Document not found, trying alternative search...')
    
    // Try searching by slug
    const altQuery = `*[_type == "servicePage" && slug.current match "*market-data*" && language == "de"][0]`
    const altResult = await client.fetch(altQuery)
    
    if (altResult) {
      console.log('Found via slug:', altResult._id)
      console.log('Title:', altResult.title)
      fs.writeFileSync(
        './ADVISORI Sanity Migration/mifid-market-data-costs-source.json',
        JSON.stringify(altResult, null, 2)
      )
    } else {
      console.log('Still not found. Listing all MiFID pages...')
      const listQuery = `*[_type == "servicePage" && title match "MiFID*" && language == "de"]{_id, title, "slug": slug.current}`
      const list = await client.fetch(listQuery)
      console.log('Available MiFID pages:', JSON.stringify(list, null, 2))
    }
  }
}

fetchMifidMarketDataCosts().catch(console.error)
