import 'dotenv/config'
import { createClient } from '@sanity/client';

// Client configuration
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const linkTranslations = async (deDocId: string, enDocId: string) => {
  if (!deDocId || !enDocId) {
    console.error('Error: Please provide both German and English document IDs as arguments.');
    console.error(`Usage: npx tsx link-translations.ts <german-doc-id> <english-doc-id>`);
    return;
  }

  console.log(`Linking documents: German ('${deDocId}') and English ('${enDocId}')...`);

  try {
    // Start a transaction
    const transaction = client.transaction();

    // Patch the German document
    transaction.patch(deDocId, {
      set: {
        language: 'de',
        translations: [{ _type: 'reference', _ref: enDocId, _key: enDocId }],
      },
    });

    // Patch the English document
    transaction.patch(enDocId, {
      set: {
        language: 'en',
        translations: [{ _type: 'reference', _ref: deDocId, _key: deDocId }],
      },
    });

    // Commit the transaction
    const result = await transaction.commit();

    console.log('✅ Successfully linked documents.', result);
  } catch (error) {
    console.error('Error linking documents:', error);
  }
};

// Get document IDs from command-line arguments
const args = process.argv.slice(2);
const germanDocId = args[0];
const englishDocId = args[1];

// Run the linking script
linkTranslations(germanDocId, englishDocId);
