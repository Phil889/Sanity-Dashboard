import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Aufbau interner KI-Kompetenzen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'aufbau-interner-ki-kompetenzen' })
    
    if (!existingDoc) {
      throw new Error('Document "aufbau-interner-ki-kompetenzen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist der strategische Aufbau interner KI-Kompetenzen für die C-Suite mehr als nur eine Personalentwicklungsmaßnahme und wie positioniert ADVISORI dies als Wettbewerbsvorteil?',
        answer: "Für C-Level-Führungskräfte repräsentiert der Aufbau interner KI-Kompetenzen eine fundamentale strategische Investition in die Zukunftsfähigkeit des Unternehmens. Es geht weit über traditionelle Schulungsmaßnahmen hinaus – es ist die Schaffung einer organisationalen Intelligenz, die nachhaltigen Wettbewerbsvorteile generiert und das Unternehmen für die KI-getriebene Wirtschaft positioniert. ADVISORI versteht KI-Kompetenzaufbau als strategischen Enabler für Geschäftstransformation.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Organisationale Resilienz und Anpassungsfähigkeit: Interne KI-Kompetenzen schaffen die Fähigkeit, schnell auf Marktveränderungen zu reagieren und neue Geschäftsmöglichkeiten zu identifizieren.\n• Reduzierung der Abhängigkeit von externen Dienstleistern: Eigene KI-Expertise ermöglicht autonome Entscheidungsfindung und reduziert strategische Risiken durch Vendor-Lock-in.\n• Innovationskultur und Talentbindung: Unternehmen mit starken KI-Kompetenzen ziehen Top-Talente an und schaffen eine Kultur der kontinuierlichen Innovation.\n• Datenhoheit und IP-Schutz: Interne Kompetenzen gewährleisten, dass sensible Geschäftsdaten und Algorithmen im Unternehmen verbleiben.\n\n🛡️ Der ADVISORI-Ansatz für strategischen Kompetenzaufbau:\n• DSGVO-First-Kompetenzentwicklung: Wir integrieren Datenschutz und Compliance von Anfang an in alle Schulungsmodule, um rechtssichere KI-Anwendungen zu gewährleisten.\n• Geschäftsorientierte KI-Bildung: Unsere Programme verbinden technische Fähigkeiten mit strategischem Geschäftsverständnis für maximalen ROI.\n• Skalierbare Lernarchitekturen: Entwicklung nachhaltiger Bildungsstrukturen, die mit dem Unternehmenswachstum mitwachsen.\n• Change Management Integration: Begleitung des kulturellen Wandels hin zu einer datengetriebenen, KI-affinen Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir den ROI von Investitionen in interne KI-Kompetenzen und welchen direkten Einfluss hat ADVISORI\'s Kompetenzaufbau auf Produktivität und Unternehmenswert?',
        answer: "Die Investition in interne KI-Kompetenzen durch ADVISORI ist ein strategischer Multiplikator, der sowohl direkte Kosteneinsparungen als auch exponentielles Wachstumspotenzial freisetzt. Der Return on Investment manifestiert sich in messbaren Produktivitätssteigerungen, beschleunigter Innovation und der Fähigkeit, neue Geschäftsmodelle zu entwickeln, die ohne interne KI-Expertise nicht realisierbar wären.\n\n💰 Direkter Einfluss auf Produktivität und finanzielle Performance:\n• Automatisierung und Effizienzsteigerung: Teams mit KI-Kompetenzen können Routineaufgaben automatisieren und sich auf wertschöpfende Tätigkeiten konzentrieren, was die Produktivität um signifikante Faktoren steigert.\n• Reduzierung externer Beratungskosten: Interne Expertise eliminiert die Notwendigkeit teurer externer KI-Consultants und schafft langfristige Kosteneinsparungen.\n• Beschleunigte Produktentwicklung: KI-kompetente Teams können neue Produkte und Features schneller entwickeln und testen, was Time-to-Market verkürzt.\n• Datenmonetarisierung: Interne Fähigkeiten ermöglichen es, aus vorhandenen Datenbeständen neue Einnahmequellen zu generieren.\n\n📈 Strategische Werttreiber und Marktpositionierung:\n• Innovationsgeschwindigkeit: Unternehmen mit starken internen KI-Kompetenzen können Markttrends schneller aufgreifen und First-Mover-Vorteile realisieren.\n• Talentmagnet-Effekt: Investitionen in KI-Kompetenzen ziehen hochqualifizierte Fachkräfte an, was die Innovationskraft weiter verstärkt.\n• Kundenbindung durch bessere Services: KI-gestützte Personalisierung und Servicequalität erhöhen Customer Lifetime Value und Retention-Raten.\n• Unternehmensbewertung: Nachweisbare KI-Kompetenzen steigern die Attraktivität für Investoren und können Unternehmensbewertungen positiv beeinflussen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Die KI-Landschaft entwickelt sich exponentiell – neue Technologien, Frameworks und Best Practices entstehen kontinuierlich. Wie stellt ADVISORI sicher, dass unsere internen Kompetenzen mit dieser Dynamik Schritt halten?',
        answer: "In einer Ära exponentieller technologischer Entwicklung ist statisches Wissen schnell obsolet. ADVISORI verfolgt einen adaptiven und zukunftsorientierten Ansatz für den Aufbau interner KI-Kompetenzen, der kontinuierliches Lernen, Experimentieren und Anpassung an neue Technologien als Kernprinzip verankert. Wir schaffen nicht nur aktuelles Wissen, sondern die Fähigkeit zur selbstständigen Weiterentwicklung.\n\n🔄 Adaptive Lernarchitekturen als Grundprinzip:\n• Kontinuierliche Technologie-Scouting: Wir überwachen aktiv die KI-Forschungslandschaft und integrieren relevante Entwicklungen in unsere Schulungsprogramme, bevor sie Mainstream werden.\n• Modulare Kompetenzentwicklung: Unsere Lernpfade sind flexibel gestaltet und können schnell um neue Technologien und Methoden erweitert werden.\n• Community of Practice Aufbau: Etablierung interner Netzwerke und Expertengruppen, die Wissen teilen und gemeinsam neue Entwicklungen evaluieren.\n• Experimentelle Lernumgebungen: Bereitstellung von Sandbox-Umgebungen, in denen Teams neue KI-Tools und -Techniken risikofrei testen können.\n\n🔍 ADVISORI's Future-Ready Kompetenzstrategie:\n• Emerging Technology Integration: Proaktive Integration neuer KI-Paradigmen wie Generative AI, Multimodal AI und Edge AI in bestehende Lernprogramme.\n• Cross-Industry Learning: Wissenstransfer aus verschiedenen Branchen und Anwendungsbereichen für innovative Lösungsansätze.\n• Academic Partnerships: Kooperationen mit führenden Forschungseinrichtungen für Zugang zu cutting-edge Entwicklungen.\n• Continuous Assessment und Upskilling: Regelmäßige Bewertung der Kompetenzlücken und gezielte Weiterbildungsmaßnahmen für sich wandelnde Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI den Aufbau interner KI-Kompetenzen von einer Kostenstelle zu einem strategischen Wachstumstreiber und welche organisatorischen Veränderungen ermöglicht dies?',
        answer: "ADVISORI positioniert den Aufbau interner KI-Kompetenzen nicht als isolierte Bildungsinitiative, sondern als fundamentalen Organisationswandel, der neue Geschäftsmodelle ermöglicht, Innovationszyklen beschleunigt und die gesamte Wertschöpfungskette transformiert. Für die C-Suite bedeutet dies, dass Kompetenzinvestitionen direkt zu messbaren Geschäftsergebnissen und strategischen Vorteilen führen.\n\n🚀 Von Kompetenzaufbau zu Geschäftstransformation:\n• Neue Geschäftsmodell-Entwicklung: Interne KI-Kompetenzen ermöglichen die Entwicklung datengetriebener Services und Produkte, die neue Umsatzströme generieren.\n• Organisationale Agilität: Teams mit KI-Fähigkeiten können schneller auf Marktveränderungen reagieren und innovative Lösungen entwickeln.\n• Cross-funktionale Innovation: KI-Kompetenzen brechen Silos auf und ermöglichen abteilungsübergreifende Innovationsprojekte.\n• Datengetriebene Entscheidungskultur: Transformation von intuitionsbasierten zu evidenzbasierten Entscheidungsprozessen auf allen Unternehmensebenen.\n\n💡 ADVISORI's Transformations-Framework:\n• Center of Excellence Etablierung: Aufbau interner KI-Kompetenzzentren, die als Innovationsmotoren und Wissensverteiler fungieren.\n• AI-First Mindset Development: Kulturwandel hin zu einer Organisation, die KI-Möglichkeiten in allen Geschäftsprozessen mitdenkt.\n• Governance und Ethics Integration: Aufbau von Kompetenzen für verantwortungsvolle KI-Nutzung und Compliance-Management.\n• Skalierbare Innovationsprozesse: Entwicklung von Strukturen und Prozessen, die kontinuierliche KI-Innovation ermöglichen und fördern."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
