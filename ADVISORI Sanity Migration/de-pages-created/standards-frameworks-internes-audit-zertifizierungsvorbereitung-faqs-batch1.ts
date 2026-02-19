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
    console.log('Updating ISO 27001 Internal Audit & Certification Preparation page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-internes-audit-zertifizierungsvorbereitung' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-internes-audit-zertifizierungsvorbereitung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind interne Audits für die C-Suite mehr als nur eine regulatorische Verpflichtung und wie kann ADVISORI diese zu einem strategischen Wettbewerbsvorteil transformieren?",
        answer: "Für Führungskräfte stellen interne Audits im Kontext von ISO 27001 eine fundamentale Managementpraxis dar, die weit über die reine Compliance-Erfüllung hinausgeht. Sie sind ein essentielles Instrument zur Risikobewertung, kontinuierlichen Verbesserung und strategischen Steuerung der Informationssicherheit. ADVISORI versteht interne Audits als strategisches Instrument zur Optimierung der Unternehmensresilienz und Marktpositionierung.\n\n🎯 Strategischer Wert interner Audits für die Führungsebene:\n• Proaktive Risikoidentifikation: Systematische Erkennung von Sicherheitslücken und Compliance-Risiken bevor sie zu kostspieligen Vorfällen oder regulatorischen Problemen führen.\n• Kontinuierliche Verbesserung: Strukturierte Identifikation von Optimierungspotenzialen in Prozessen, Technologien und organisatorischen Strukturen zur Steigerung der operativen Effizienz.\n• Stakeholder-Vertrauen: Demonstration professioneller Governance und Risikomanagement-Praktiken gegenüber Kunden, Partnern, Aufsichtsbehörden und Investoren.\n• Kosteneinsparungen: Präventive Identifikation und Behebung von Ineffizienzen und Schwachstellen reduziert langfristige Betriebskosten und Haftungsrisiken.\n\n🛡️ ADVISORIs strategischer Auditansatz:\n• Business-integrierte Auditmethodiken: Wir entwickeln Auditprogramme, die nicht nur ISO 27001-Konformität prüfen, sondern auch Geschäftsprozesse optimieren und strategische Ziele unterstützen.\n• Datengetriebene Erkenntnisse: Einsatz fortschrittlicher Analysemethoden zur Transformation von Auditbefunden in strategische Handlungsempfehlungen und Investitionsentscheidungen.\n• Kulturelle Transformation: Aufbau einer präventiven Sicherheitskultur, die interne Audits als Chance zur kontinuierlichen Verbesserung statt als kritische Kontrolle versteht.\n• ROI-orientierte Auditplanung: Fokussierung auf Audit-Bereiche mit höchstem strategischen Wert und direktem Impact auf Geschäftsergebnisse und Marktposition."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Geschäftsrisiken entstehen bei einer unzureichenden Zertifizierungsvorbereitung und wie minimiert ADVISORI diese systematisch?",
        answer: "Eine mangelhafte Vorbereitung auf die ISO 27001-Zertifizierung kann erhebliche strategische und operative Risiken verursachen, die weit über die unmittelbaren Zertifizierungskosten hinausgehen. Diese Risiken können die Marktposition, Kundenbeziehungen und finanzielle Performance nachhaltig beeinträchtigen. ADVISORI entwickelt systematische Ansätze zur Risikominimierung und Erfolgsmaximierung.\n\n⚠️ Kritische Geschäftsrisiken unzureichender Zertifizierungsvorbereitung:\n• Zertifizierungsfehlschlag: Misserfolg beim ersten Zertifizierungsaudit führt zu Verzögerungen, zusätzlichen Kosten und Reputationsschäden bei Stakeholdern und im Markt.\n• Opportunitätskosten: Verlust von Geschäftsmöglichkeiten und Kunden, die ISO 27001-Zertifizierung als Mindestanforderung für Geschäftsbeziehungen voraussetzen.\n• Ineffiziente Ressourcenallokation: Unstrukturierte Vorbereitung führt zu unnötigen Investitionen in falsche Bereiche und Verschwendung wertvoller interner Kapazitäten.\n• Compliance-Lücken: Unentdeckte Schwachstellen können zu Sicherheitsvorfällen, Datenschutzverletzungen und regulatorischen Sanktionen führen.\n• Mitarbeiterdemotivation: Chaotische oder erfolglose Zertifizierungsprojekte demotivieren Teams und beeinträchtigen die langfristige Sicherheitskultur.\n\n🚀 ADVISORIs systematische Risikominimierungsstrategie:\n• Strukturiertes Pre-Assessment: Umfassende Bewertung der Zertifizierungsbereitschaft mit detaillierter Gap-Analyse und priorisierten Handlungsempfehlungen.\n• Realistische Zeitplanung: Entwicklung eines pragmatischen Zertifizierungsfahrplans mit ausreichenden Puffern und Meilensteinen zur kontinuierlichen Fortschrittskontrolle.\n• Risikoadaptive Vorbereitung: Fokussierung auf kritische Audit-Bereiche mit höchstem Risikopotenzial und systematische Dokumentation aller Compliance-Nachweise.\n• Simulation und Testing: Durchführung von Mock-Audits und Zertifizierungssimulationen zur realistischen Einschätzung der Erfolgswahrscheinlichkeit und finalen Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ADVISORI unsere internen Audit-Kapazitäten so entwickeln, dass sie nachhaltigen Mehrwert schaffen und nicht nur Compliance erfüllen?",
        answer: "Die Entwicklung interner Audit-Kapazitäten ist eine strategische Investition, die über die reine ISO 27001-Compliance hinausgeht und langfristigen Geschäftswert generiert. ADVISORI transformiert interne Audits von einer obligatorischen Compliance-Aktivität zu einem wertstiftenden Managementinstrument, das kontinuierliche Verbesserung und strategische Erkenntnisse liefert.\n\n🏗️ Nachhaltige Kompetenzentwicklung für interne Auditoren:\n• Strategische Audit-Kompetenz: Ausbildung interner Auditoren nicht nur in ISO 27001-Techniken, sondern auch in Geschäftsprozessanalyse, Risikobewertung und strategischer Beratung.\n• Methodische Vielfalt: Vermittlung verschiedener Audit-Ansätze wie risikobasierte Audits, Prozessaudits und kontinuierliche Monitoring-Techniken für unterschiedliche Anwendungsfälle.\n• Technologie-Integration: Schulung in modernen Audit-Tools, Datenanalyse-Methoden und automatisierten Überwachungssystemen zur Effizienzsteigerung.\n• Kommunikations- und Beratungsfähigkeiten: Entwicklung von Soft Skills zur konstruktiven Kommunikation von Audit-Erkenntnissen und Change Management.\n\n🔄 ADVISORIs Ansatz zur nachhaltigen Wertschöpfung:\n• Business-orientierte Auditprogramme: Entwicklung von Audit-Frameworks, die Geschäftsziele unterstützen und operative Verbesserungen identifizieren, nicht nur Schwachstellen aufdecken.\n• Kontinuierliche Kompetenzentwicklung: Etablierung von Mentoring-Programmen und regelmäßigen Weiterbildungszyklen zur kontinuierlichen Qualitätssteigerung der internen Audit-Funktion.\n• Kennzahlen-orientierte Steuerung: Implementierung von KPIs zur Messung des Wertbeitrags interner Audits und kontinuierlichen Optimierung der Audit-Effektivität.\n• Cross-funktionale Integration: Verknüpfung der Audit-Funktion mit anderen Governance-Bereichen wie Risikomanagement, Compliance und Qualitätsmanagement für synergetische Effekte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Erfolgsfaktoren sind entscheidend für eine erfolgreiche ISO 27001-Zertifizierung und wie stellt ADVISORI deren systematische Umsetzung sicher?",
        answer: "Eine erfolgreiche ISO 27001-Zertifizierung erfordert mehr als die technische Erfüllung der Standard-Anforderungen – sie benötigt eine strategische Herangehensweise, die organisatorische, technische und kulturelle Faktoren integriert. ADVISORI identifiziert und adressiert diese kritischen Erfolgsfaktoren systematisch, um eine nachhaltige und wertschöpfende Zertifizierung zu gewährleisten.\n\n🎯 Kritische Erfolgsfaktoren für ISO 27001-Zertifizierung:\n• Management Commitment: Sichtbare und kontinuierliche Unterstützung durch die Führungsebene mit ausreichender Ressourcenallokation und strategischer Priorisierung des ISMS.\n• Organisatorische Verankerung: Integration der Informationssicherheit in alle Geschäftsprozesse und Entscheidungsstrukturen, nicht als isolierte IT-Funktion.\n• Kulturelle Transformation: Entwicklung einer sicherheitsbewussten Organisationskultur, in der alle Mitarbeiter Informationssicherheit als gemeinsame Verantwortung verstehen.\n• Prozessqualität: Implementierung robuster, praxistauglicher Prozesse, die sowohl Compliance sicherstellen als auch operative Effizienz fördern.\n• Kontinuierliche Verbesserung: Etablierung von Mechanismen zur systematischen Weiterentwicklung des ISMS basierend auf internen Audits, Vorfällen und Veränderungen.\n\n🛠️ ADVISORIs systematischer Umsetzungsansatz:\n• Stakeholder-Alignment: Systematische Einbindung aller relevanten Interessensgruppen von der Geschäftsführung bis zu operativen Teams mit klaren Rollen und Verantwortlichkeiten.\n• Phasenweise Implementation: Strukturierter Aufbau des ISMS in manageable Phasen mit regelmäßigen Meilensteinen und Erfolgskontrollen zur Risikominimierung.\n• Praxisorientierte Dokumentation: Entwicklung pragmatischer, lebender Dokumentation, die tatsächlich genutzt wird und kontinuierlich weiterentwickelt werden kann.\n• Change Management: Professionelle Begleitung des organisatorischen Wandels mit gezielten Kommunikations- und Schulungsmaßnahmen zur Akzeptanzförderung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
