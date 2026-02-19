import { createMifidGapAnalyseEn } from './create-mifid-gap-analyse-en'
import { addFaqsBatch1 } from './mifid-gap-analyse-en-faqs-batch1'
import { addFaqsBatch2 } from './mifid-gap-analyse-en-faqs-batch2'
import { addFaqsBatch3 } from './mifid-gap-analyse-en-faqs-batch3'
import { addFaqsBatch4 } from './mifid-gap-analyse-en-faqs-batch4'
import { addFaqsBatch5 } from './mifid-gap-analyse-en-faqs-batch5'

async function importMifidGapAnalyseEn() {
  console.log('Starting MiFID Gap Analysis & Roadmap EN import...')
  console.log('='.repeat(60))
  
  try {
    // Step 1: Create the main page
    console.log('\n📄 Step 1: Creating main page...')
    await createMifidGapAnalyseEn()
    console.log('✅ Main page created successfully')
    
    // Wait a bit between operations
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 2: Add FAQs batch 1 (FAQs 1-4)
    console.log('\n📝 Step 2: Adding FAQs batch 1 (FAQs 1-4)...')
    await addFaqsBatch1()
    console.log('✅ FAQs batch 1 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 3: Add FAQs batch 2 (FAQs 5-8)
    console.log('\n📝 Step 3: Adding FAQs batch 2 (FAQs 5-8)...')
    await addFaqsBatch2()
    console.log('✅ FAQs batch 2 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 4: Add FAQs batch 3 (FAQs 9-12)
    console.log('\n📝 Step 4: Adding FAQs batch 3 (FAQs 9-12)...')
    await addFaqsBatch3()
    console.log('✅ FAQs batch 3 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 5: Add FAQs batch 4 (FAQs 13-16)
    console.log('\n📝 Step 5: Adding FAQs batch 4 (FAQs 13-16)...')
    await addFaqsBatch4()
    console.log('✅ FAQs batch 4 added successfully')
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Step 6: Add FAQs batch 5 (FAQs 17-20)
    console.log('\n📝 Step 6: Adding FAQs batch 5 (FAQs 17-20)...')
    await addFaqsBatch5()
    console.log('✅ FAQs batch 5 added successfully')
    
    console.log('\n' + '='.repeat(60))
    console.log('🎉 MiFID Gap Analysis & Roadmap EN import completed successfully!')
    console.log('='.repeat(60))
    console.log('\nSummary:')
    console.log('- Document ID: mifid-gap-analyse-roadmap-en')
    console.log('- Total FAQs: 20')
    console.log('- Total Services: 2')
    console.log('- Language: English')
    console.log('- Base reference: mifid-gap-analyse-roadmap')
    
  } catch (error) {
    console.error('\n❌ Import failed:', error)
    throw error
  }
}

importMifidGapAnalyseEn()
