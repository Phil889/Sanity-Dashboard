import 'dotenv/config'
import { createClient } from '@sanity/client'
import * as fs from 'fs'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fetchMariskRiskControlFunction() {
  // Fetch the specific page
  const page = await client.fetch(`*[_type == "servicePage" && _id == "marisk-risk-control-function"][0]`)
  
  if (page) {
    console.log('Found marisk-risk-control-function page!')
    console.log('Title:', page.title)
    console.log('Language:', page.language)
    console.log('FAQ count:', page.faq?.length || 0)
    console.log('Services count:', page.services?.length || 0)
    
    // Save to file
    fs.writeFileSync('marisk-risk-control-function-source.json', JSON.stringify(page, null, 2))
    console.log('\nSaved to marisk-risk-control-function-source.json')
  } else {
    console.log('Page marisk-risk-control-function not found')
  }
}

fetchMariskRiskControlFunction()
