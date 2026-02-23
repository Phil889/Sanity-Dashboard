import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fixFaqs() {
  console.log('Fetching current FAQs...')
  
  const doc = await client.fetch(`*[_id == "mifid-systematic-internaliser-en"][0]{
    _id,
    faq
  }`)
  
  if (!doc || !doc.faq) {
    console.log('No document or FAQs found')
    return
  }
  
  console.log(`Current FAQ count: ${doc.faq.length}`)
  
  // Keep only the first 20 FAQs (remove duplicates from batch1 running twice)
  const uniqueFaqs = doc.faq.slice(0, 20)
  
  console.log(`Keeping ${uniqueFaqs.length} FAQs...`)
  
  const result = await client
    .patch('mifid-systematic-internaliser-en')
    .set({ faq: uniqueFaqs })
    .commit()
  
  console.log(`✅ Fixed! Document now has ${result.faq?.length || 0} FAQs`)
}

fixFaqs()
