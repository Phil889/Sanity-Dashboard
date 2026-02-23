import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function fixKritisSlugs() {
  console.log('Fixing KRITIS slugs...')
  
  try {
    // Fix German KRITIS page slug
    console.log('\n1. Updating German KRITIS page slug...')
    const deResult = await client
      .patch('kritis')
      .set({
        slug: {
          _type: 'slug',
          current: 'kritis'
        }
      })
      .commit()
    console.log('✅ German KRITIS slug updated:', deResult.slug.current)
    
    // Fix English KRITIS page slug
    console.log('\n2. Updating English KRITIS page slug...')
    const enResult = await client
      .patch('kritis-en')
      .set({
        slug: {
          _type: 'slug',
          current: 'kritis-en'
        }
      })
      .commit()
    console.log('✅ English KRITIS slug updated:', enResult.slug.current)
    
    // Verify both pages
    console.log('\n📋 Verification:')
    const verification = await client.fetch(`
      *[_id in ["kritis", "kritis-en"]]{
        _id,
        title,
        language,
        "slug": slug.current
      }
    `)
    
    verification.forEach((doc: any) => {
      console.log(`- ${doc._id}: slug="${doc.slug}", language="${doc.language}"`)
    })
    
    console.log('\n✅ Slugs fixed successfully!')
    
  } catch (error) {
    console.error('❌ Error:', error)
    throw error
  }
}

fixKritisSlugs()
