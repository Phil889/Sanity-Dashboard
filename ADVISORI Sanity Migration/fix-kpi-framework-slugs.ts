import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

async function fixKpiFrameworkSlugs() {
  console.log('Fixing KPI Framework slugs...')
  
  // Fix German page slug
  console.log('\n1. Fixing German page (kpi-framework)...')
  try {
    const deResult = await client
      .patch('kpi-framework')
      .set({
        slug: {
          _type: 'slug',
          current: 'informationssicherheit/information-security-management-system-isms/kpi-framework'
        }
      })
      .commit()
    console.log(`   German page slug fixed: ${deResult.slug?.current}`)
  } catch (error) {
    console.error('   Error fixing German page:', error)
  }
  
  // Fix English page slug
  console.log('\n2. Fixing English page (kpi-framework-en)...')
  try {
    const enResult = await client
      .patch('kpi-framework-en')
      .set({
        slug: {
          _type: 'slug',
          current: 'information-security/information-security-management-system-isms/kpi-framework-en'
        }
      })
      .commit()
    console.log(`   English page slug fixed: ${enResult.slug?.current}`)
  } catch (error) {
    console.error('   Error fixing English page:', error)
  }
  
  console.log('\nDone!')
}

fixKpiFrameworkSlugs().catch(console.error)
