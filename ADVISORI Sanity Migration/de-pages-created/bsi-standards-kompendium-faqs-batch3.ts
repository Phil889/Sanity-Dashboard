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
    console.log('Updating BSI Standards Kompendium page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-standards-kompendium' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-standards-kompendium" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die besonderen Anforderungen kritischer Infrastrukturen bei der BSI Standards Kompendium-Implementierung und welche Branchenspezifika werden berücksichtigt?",
        answer: "Kritische Infrastrukturen wie Energie, Telekommunikation, Finanzwesen und Gesundheitswesen stehen vor einzigartigen Herausforderungen bei der BSI Standards Kompendium-Implementierung. Diese Sektoren unterliegen verschärften Sicherheitsanforderungen und regulatorischen Rahmenwerken. ADVISORI hat spezialisierte Ansätze für diese hochsensiblen Bereiche entwickelt.\n\n🏭 Kritische Infrastruktur-spezifische Herausforderungen:\n• Hochverfügbarkeits-Anforderungen: Implementierung ohne Beeinträchtigung kritischer Systemverfügbarkeit und Betriebskontinuität.\n• Regulatory Convergence: Integration von BSI-Standards mit sektorspezifischen Vorschriften wie NIS2, KRITIS-Verordnung und Branchenrichtlinien.\n• National Security Considerations: Berücksichtigung nationaler Sicherheitsaspekte und staatlicher Schutzinteressen.\n• Public Safety Impact: Bewertung und Minimierung von Auswirkungen auf die öffentliche Sicherheit während der Implementierung.\n\n🔒 Sector-Specific BSI Implementation Excellence:\n• Energy Sector Specialization: Anpassung an Energieversorgungsnetze, Smart Grids und kritische Energieinfrastrukturen.\n• Financial Services Adaptation: Integration mit Bankenaufsicht, Payment Systems und Finanzmarktregulierung.\n• Healthcare Critical Systems: Berücksichtigung von Patientensicherheit, Medizingeräten und Gesundheitsdatenverarbeitung.\n• Telecommunications Infrastructure: Anpassung an Netzwerk-Infrastrukturen, 5G-Implementierung und digitale Souveränität.\n\n🛡️ Enhanced Security für kritische Systeme:\n• Zero-Trust Architecture: Implementierung von Zero-Trust-Prinzipien als Basis für BSI-Standards in kritischen Umgebungen.\n• Advanced Threat Protection: Spezialisierte Bedrohungsabwehr für staatlich gesteuerte Angriffe und Advanced Persistent Threats.\n• Incident Response Excellence: Hochspezialisierte Incident Response-Verfahren für kritische Infrastrukturen.\n• Business Continuity Assurance: Gewährleistung unterbrechungsfreier Geschäftsprozesse auch bei Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt die digitale Souveränität bei der ADVISORI BSI Standards Kompendium-Implementierung und wie wird technologische Unabhängigkeit gewährleistet?",
        answer: "Digitale Souveränität ist ein zentraler Aspekt moderner IT-Sicherheitsstrategie, insbesondere bei der Implementierung des BSI Standards Kompendiums. ADVISORI verfolgt einen Ansatz, der technologische Unabhängigkeit fördert, nationale Sicherheitsinteressen berücksichtigt und gleichzeitig höchste Sicherheitsstandards gewährleistet.\n\n🇩🇪 Digitale Souveränität als strategischer Imperativ:\n• Technology Independence: Reduktion der Abhängigkeit von ausländischen Technologieanbietern durch bevorzugte Nutzung europäischer und deutscher Sicherheitslösungen.\n• Data Sovereignty: Gewährleistung, dass kritische Daten ausschließlich in Deutschland oder der EU verarbeitet und gespeichert werden.\n• Supply Chain Security: Umfassende Bewertung und Absicherung der gesamten Technologie-Lieferkette.\n• National Security Alignment: Abstimmung aller Implementierungsmaßnahmen mit nationalen Sicherheitsinteressen und Cyber-Strategien.\n\n🔐 Technological Independence Framework:\n• European Cloud-First Strategy: Priorisierung europäischer Cloud-Anbieter und Sovereign Cloud-Lösungen für BSI-konforme Systeme.\n• Open Source Security Solutions: Bevorzugung von Open Source-Sicherheitslösungen zur Reduktion von Vendor Lock-in und Abhängigkeiten.\n• Domestic Vendor Ecosystem: Aufbau und Stärkung des deutschen IT-Sicherheits-Ökosystems durch bevorzugte Zusammenarbeit mit nationalen Anbietern.\n• Technology Assessment Excellence: Systematische Bewertung aller eingesetzten Technologien hinsichtlich Souveränitäts- und Sicherheitsaspekten.\n\n🌍 Global Competitiveness mit nationaler Sicherheit:\n• Balanced Globalization: Optimale Balance zwischen internationaler Wettbewerbsfähigkeit und nationaler Technologie-Souveränität.\n• European Standards Leadership: Positionierung als Vorreiter für europäische IT-Sicherheitsstandards und digitale Souveränität.\n• Innovation in Security: Förderung deutscher und europäischer Innovation im Bereich IT-Sicherheit und Cyberschutz.\n• Strategic Technology Partnerships: Aufbau strategischer Allianzen mit vertrauenswürdigen internationalen Partnern unter Wahrung nationaler Interessen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI emerging technologies wie Quantum Computing, IoT und Edge Computing sicher in die BSI Standards Kompendium-Architektur?",
        answer: "Die rasante Entwicklung emerging technologies stellt die traditionelle IT-Sicherheitsarchitektur vor neue Herausforderungen. Quantum Computing, IoT-Proliferation und Edge Computing erfordern fundamentale Anpassungen der BSI Standards-Implementierung. ADVISORI hat spezialisierte Ansätze entwickelt, um diese Zukunftstechnologien sicher und BSI-konform zu integrieren.\n\n🔮 Quantum-Ready Security Architecture:\n• Post-Quantum Cryptography: Proaktive Integration quantum-resistenter Verschlüsselungsverfahren in die BSI-Standards-Implementierung.\n• Quantum Risk Assessment: Systematische Bewertung und Vorbereitung auf quantum-basierte Bedrohungen für bestehende Sicherheitsarchitekturen.\n• Hybrid Cryptographic Transition: Strukturierte Migration von klassischen zu quantum-sicheren Kryptographie-Standards.\n• Quantum-Safe Communication: Implementierung quantum-sicherer Kommunikationsverfahren für kritische Geschäftsprozesse.\n\n🌐 IoT Security Excellence:\n• Device Identity Management: Umfassende Identitäts- und Zugriffsverwaltung für massive IoT-Deployments nach BSI-Standards.\n• Edge-to-Cloud Security: Durchgängige Sicherheitsarchitektur von IoT-Devices über Edge Computing bis zur Cloud-Infrastruktur.\n• IoT Lifecycle Security: Sicherheitsmanagement für den gesamten IoT-Device-Lebenszyklus von Deployment bis Dekommissionierung.\n• Massive Scale Protection: Skalierbare Sicherheitslösungen für Millionen von IoT-Devices unter BSI-Standards-Konformität.\n\n⚡ Edge Computing Security Integration:\n• Distributed Security Architecture: Entwicklung verteilter Sicherheitsarchitekturen für Edge Computing-Umgebungen.\n• Real-Time Threat Detection: Implementierung von Echtzeit-Bedrohungserkennung an Edge-Standorten.\n• Zero-Trust Edge Networks: Anwendung von Zero-Trust-Prinzipien in hochverteilten Edge Computing-Infrastrukturen.\n• Edge Data Protection: Spezielle Datenschutz- und Sicherheitsmaßnahmen für sensitive Datenverarbeitung an Edge-Locations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gewährleistet ADVISORI nachhaltigen Wissenstransfer und Build-up interner Expertise während der BSI Standards Kompendium-Implementierung?",
        answer: "Eine erfolgreiche BSI Standards Kompendium-Implementierung erfordert nicht nur technische Exzellenz, sondern auch den systematischen Aufbau interner Expertise. ADVISORI verfolgt einen Knowledge Transfer-Ansatz, der Ihre Organisation befähigt, die implementierten Standards langfristig zu betreiben, zu optimieren und weiterzuentwickeln.\n\n🎓 Comprehensive Knowledge Transfer Strategy:\n• Progressive Skill Building: Strukturierter Kompetenzaufbau in Ihrer Organisation durch mehrstufige Ausbildungsprogramme und praktische Anwendung.\n• Mentoring Excellence: Persönliche Betreuung Ihrer Key-Mitarbeiter durch ADVISORI-Experten für nachhaltigen Wissenstransfer.\n• Documentation Excellence: Umfassende, verständliche Dokumentation aller implementierten Standards und Verfahren für eigenständige Nutzung.\n• Practical Training Programs: Hands-on Schulungen mit realen Szenarien und praktischen Übungen für optimales Lernergebnis.\n\n🏗️ Internal Capability Development:\n• Center of Excellence Establishment: Aufbau interner Kompetenzzentren für BSI-Standards mit dedizierten Experten-Teams.\n• Certification Support: Unterstützung beim Erwerb relevanter BSI-Zertifizierungen für Ihre Mitarbeiter.\n• Knowledge Retention Systems: Implementierung von Wissensmanagementsystemen für langfristige Expertise-Sicherung.\n• Continuous Learning Culture: Etablierung einer Lernkultur für kontinuierliche Weiterentwicklung der Sicherheitsexpertise.\n\n🔄 Sustainable Operations Excellence:\n• Self-Sufficiency Roadmap: Entwicklung einer strukturierten Roadmap zur vollständigen Unabhängigkeit in der Standards-Verwaltung.\n• Quality Assurance Transfer: Übertragung von Qualitätssicherungsverfahren für eigenständige Compliance-Überwachung.\n• Innovation Enablement: Befähigung zur eigenständigen Integration neuer BSI-Standards und Sicherheitsinnovationen.\n• Strategic Advisory Relationship: Langfristige strategische Beratungspartnerschaft für komplexe Herausforderungen und Weiterentwicklungen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
