import { createMifidConductBusinessRulesEn } from './create-mifid-conduct-business-rules-en'
import { addFaqsBatch1 } from './mifid-conduct-business-rules-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-conduct-business-rules-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-conduct-business-rules-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-conduct-business-rules-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-conduct-business-rules-en-faqs-batch5'

async function importMifidConductBusinessRulesEn() {
  console.log('='.repeat(60))
  console.log('Starting MiFID Conduct of Business Rules EN Import')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidConductBusinessRulesEn()
    console.log('✅ Main page created successfully!')
    
    // Wait a bit between operations
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 2: Add FAQ batches
    console.log('\n📝 Step 2: Adding FAQ batches...')
    
    console.log('\n  Adding batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('\n  Adding batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    
    console.log('\n' + '='.repeat(60))
    console.log('✅ MiFID Conduct of Business Rules EN Import Complete!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('- Document ID: mifid-conduct-of-business-rules-en')
    console.log('- Total FAQs: 20')
    console.log('- Total Services: 6')
    console.log('- Parent: mifid')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importMifidConductBusinessRulesEn()
