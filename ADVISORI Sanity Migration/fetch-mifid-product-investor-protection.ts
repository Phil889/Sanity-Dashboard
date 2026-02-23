import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fetchMifidProductInvestorProtection() {
  // Fetch the specific MiFID Product Investor Protection page
  const docId = 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung'
  console.log(`Fetching document: ${docId}`)
  
  const fullDoc = await client.fetch(`*[_id == $id][0]`, { id: docId })
  
  if (fullDoc) {
    // Save to file
    const fs = await import('fs')
    fs.writeFileSync(
      'ADVISORI Sanity Migration/mifid-product-investor-protection-source.json',
      JSON.stringify(fullDoc, null, 2)
    )
    console.log('Full document saved to mifid-product-investor-protection-source.json')
    console.log(`Title: ${fullDoc.title}`)
    console.log(`Slug: ${fullDoc.slug?.current}`)
    console.log(`FAQ count: ${fullDoc.faq?.length || 0}`)
    console.log(`Services count: ${fullDoc.services?.length || 0}`)
  } else {
    console.log('Document not found!')
  }
}

fetchMifidProductInvestorProtection()
