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
    console.log('Updating ISO 27001 BSI page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-bsi" not found')
    }
    
    // Create new FAQs for ISO 27001 BSI fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist das BSI und welche Rolle spielt es bei der ISO 27001 Implementierung in Deutschland?',
        answer: "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist die zentrale Cyber-Sicherheitsbehörde des Bundes und spielt eine entscheidende Rolle bei der Gestaltung der deutschen Informationssicherheitslandschaft. Als nationale Cyber-Sicherheitsbehörde entwickelt das BSI Standards, Empfehlungen und Richtlinien, die für deutsche Unternehmen bei der ISO 27001 Implementierung von besonderer Bedeutung sind.\n\n🏛️ Rolle und Aufgaben des BSI:\n• Das BSI fungiert als zentrale Anlaufstelle für alle Fragen der Informations- und Cyber-Sicherheit in Deutschland\n• Entwicklung und Pflege des IT-Grundschutz-Kompendiums als methodische Grundlage für Informationssicherheit\n• Bereitstellung von Cyber-Sicherheitswarnungen, Threat Intelligence und aktuellen Bedrohungsanalysen\n• Zertifizierung und Anerkennung von Sicherheitsprodukten, Dienstleistern und Managementsystemen\n• Beratung und Unterstützung von Behörden, Unternehmen und kritischen Infrastrukturen\n\n🔗 Integration mit ISO 27001:\n• Das BSI erkennt ISO 27001 als internationalen Standard für Informationssicherheitsmanagementsysteme an\n• BSI-Standards und IT-Grundschutz-Kataloge können nahtlos in ISO 27001 ISMS integriert werden\n• Harmonisierung von ISO 27001 Controls mit deutschen Sicherheitsanforderungen und regulatorischen Vorgaben\n• BSI-anerkannte Zertifizierungsstellen gewährleisten die Anerkennung von ISO 27001 Zertifikaten in Deutschland\n• Kontinuierliche Weiterentwicklung der Standards entsprechend internationaler Best Practices\n\n🛡️ BSI-spezifische Vorteile für ISO 27001:\n• Berücksichtigung deutscher Rechtslage und regulatorischer Besonderheiten\n• Integration aktueller deutscher Cyber-Bedrohungslandschaft und Threat Intelligence\n• Anpassung an sektorenspezifische Anforderungen und KRITIS-Verordnung\n• Unterstützung bei der Erfüllung von NIS2-Richtlinie und anderen EU-Regulierungen\n• Zugang zu BSI-Ressourcen, Schulungen und Expertennetzwerken\n\n📋 Praktische Umsetzung:\n• BSI-konforme Gap-Analyse berücksichtigt sowohl ISO 27001 als auch deutsche Spezifika\n• Integration von IT-Grundschutz-Bausteinen in die ISO 27001 Kontrollstruktur\n• Nutzung von BSI-Empfehlungen für Risikoanalyse und Schutzbedarfsfeststellung\n• Anwendung BSI-anerkannter Methoden für Audit und Zertifizierung\n• Kontinuierliche Anpassung an BSI-Updates und neue Sicherheitsempfehlungen\n\n🌐 Strategischer Mehrwert:\n• Kombination internationaler Anerkennung mit nationaler Compliance-Sicherheit\n• Optimale Vorbereitung auf deutsche Regulierungsanforderungen und Aufsichtsprüfungen\n• Aufbau von Vertrauen bei deutschen Geschäftspartnern und Behörden\n• Zugang zu BSI-Netzwerken und Informationsaustausch mit anderen Organisationen\n• Langfristige Sicherstellung der Compliance durch kontinuierliche BSI-Guidance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie lassen sich BSI IT-Grundschutz-Kataloge mit ISO 27001 Controls harmonisieren?',
        answer: "Die Harmonisierung von BSI IT-Grundschutz-Katalogen mit ISO 27001 Controls schafft ein robustes, deutschlandspezifisches Informationssicherheitsmanagement, das sowohl internationale Standards als auch nationale Besonderheiten optimal berücksichtigt. Diese Integration ermöglicht es deutschen Unternehmen, von bewährten deutschen Sicherheitsmethoden zu profitieren und gleichzeitig internationale Anerkennung zu erlangen.\n\n🔄 Methodische Integration:\n• Systematisches Mapping von IT-Grundschutz-Bausteinen zu entsprechenden ISO 27001 Annex A Controls\n• Identifikation von Überschneidungen, Ergänzungen und spezifischen deutschen Anforderungen\n• Entwicklung einer integrierten Kontrollmatrix, die beide Frameworks optimal kombiniert\n• Berücksichtigung der unterschiedlichen Strukturen und Herangehensweisen beider Standards\n• Schaffung einer einheitlichen Dokumentationsstruktur für beide Anforderungssets\n\n📊 Praktisches Mapping-Verfahren:\n• ISO 27001 A.5 (Informationssicherheitsrichtlinien) harmoniert mit IT-Grundschutz-Bausteinen zur Sicherheitsorganisation\n• ISO 27001 A.8 (Asset Management) entspricht IT-Grundschutz-Anforderungen zur Informationsklassifizierung\n• ISO 27001 A.12 (Operations Security) deckt sich mit IT-Grundschutz-Maßnahmen zum sicheren IT-Betrieb\n• ISO 27001 A.13 (Communications Security) integriert IT-Grundschutz-Vorgaben zur Netzwerksicherheit\n• ISO 27001 A.14 (System Acquisition) berücksichtigt IT-Grundschutz-Empfehlungen zur sicheren Systementwicklung\n\n🛠️ Implementierungsansatz:\n• Verwendung von IT-Grundschutz-Gefährdungskatalogen zur Ergänzung der ISO 27001 Risikoanalyse\n• Integration von IT-Grundschutz-Maßnahmenkatalogen als konkrete Umsetzungshilfen für ISO 27001 Controls\n• Anwendung der IT-Grundschutz-Methodik zur Schutzbedarfsfeststellung im Rahmen von ISO 27001\n• Nutzung von IT-Grundschutz-Bausteinen als detaillierte Implementierungsleitfäden\n• Berücksichtigung deutscher Rechtslage und Compliance-Anforderungen in beiden Frameworks\n\n📋 Dokumentationsharmonisierung:\n• Entwicklung integrierter Richtlinien, die sowohl ISO 27001 als auch IT-Grundschutz-Anforderungen erfüllen\n• Schaffung einheitlicher Verfahrensanweisungen für beide Standards\n• Harmonisierte Risikobewertung unter Berücksichtigung beider Methodiken\n• Integrierte Audit-Checklisten für effiziente Überprüfung beider Anforderungssets\n• Einheitliche Schulungsunterlagen für Mitarbeiter zu beiden Standards\n\n🎯 Optimierungsvorteile:\n• Vermeidung von Doppelarbeit durch intelligente Integration beider Frameworks\n• Nutzung der Detailtiefe von IT-Grundschutz zur Konkretisierung von ISO 27001 Controls\n• Erhöhung der Akzeptanz durch Verwendung etablierter deutscher Sicherheitsmethoden\n• Verbesserung der Compliance-Sicherheit durch Berücksichtigung nationaler Besonderheiten\n• Optimierung der Ressourcennutzung durch koordinierte Implementierung beider Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche besonderen Anforderungen gelten für KRITIS-Unternehmen bei der ISO 27001 BSI Implementierung?',
        answer: "KRITIS-Unternehmen (Kritische Infrastrukturen) unterliegen in Deutschland besonderen Sicherheitsanforderungen, die bei der ISO 27001 Implementierung nach BSI-Standards spezielle Berücksichtigung finden müssen. Die Kombination aus KRITIS-Verordnung, sektorenspezifischen Standards und ISO 27001 schafft ein umfassendes Sicherheitsframework für systemrelevante Unternehmen.\n\n⚡ KRITIS-spezifische Grundlagen:\n• KRITIS-Unternehmen sind Betreiber kritischer Infrastrukturen in den Sektoren Energie, Wasser, Ernährung, Informationstechnik und Telekommunikation, Gesundheit, Finanz- und Versicherungswesen, Transport und Verkehr\n• Besondere Meldepflichten bei IT-Sicherheitsvorfällen an das BSI innerhalb definierter Fristen\n• Verpflichtung zur Implementierung angemessener technischer und organisatorischer Maßnahmen\n• Regelmäßige Überprüfung der IT-Sicherheit durch qualifizierte Stellen\n• Einhaltung sektorenspezifischer Sicherheitsstandards zusätzlich zu allgemeinen Anforderungen\n\n🏗️ Sektorenspezifische Standards Integration:\n• B3S (Branchenspezifischer Sicherheitsstandard) für verschiedene KRITIS-Sektoren\n• ISMS-V (Informationssicherheitsmanagementsystem-Verordnung) für Energieversorgungsunternehmen\n• Wassersicherheitsstandard für Wasserversorgung und Abwasserentsorgung\n• Telekommunikations-spezifische Anforderungen nach TKG und TTDSG\n• Finanzsektor-spezifische Vorgaben nach BAIT, MaRisk und anderen BaFin-Regelungen\n\n🔒 Erweiterte Sicherheitsmaßnahmen:\n• Implementierung von Defense-in-Depth-Strategien mit mehrschichtigen Sicherheitskonzepten\n• Besondere Anforderungen an Netzwerksegmentierung und Zugangskontrollen\n• Erweiterte Monitoring- und Detektionssysteme für Cyber-Angriffe\n• Spezielle Backup- und Disaster Recovery-Konzepte für kritische Systeme\n• Erhöhte Anforderungen an Lieferanten- und Dienstleister-Management\n\n📊 Compliance und Reporting:\n• Regelmäßige Sicherheitsaudits durch BSI-anerkannte Prüfstellen\n• Detaillierte Dokumentation aller Sicherheitsmaßnahmen und deren Wirksamkeit\n• Kontinuierliche Überwachung und Berichterstattung an Aufsichtsbehörden\n• Nachweis der Angemessenheit der Sicherheitsmaßnahmen entsprechend dem Stand der Technik\n• Integration von Incident Response und Business Continuity Management\n\n🚨 Besondere Herausforderungen:\n• Koordination zwischen verschiedenen Aufsichtsbehörden und Regulierungsrahmen\n• Balance zwischen Sicherheitsanforderungen und operativer Effizienz\n• Umgang mit Legacy-Systemen und kritischen Altanlagen\n• Sicherstellung der Verfügbarkeit bei gleichzeitig höchsten Sicherheitsstandards\n• Kontinuierliche Anpassung an sich entwickelnde Bedrohungslandschaft und neue Regulierungen\n\n🎯 Strategische Umsetzung:\n• Entwicklung einer integrierten Compliance-Strategie für alle relevanten Regulierungsrahmen\n• Aufbau spezialisierter KRITIS-Sicherheitsteams mit entsprechender Expertise\n• Implementierung von Threat Intelligence und Information Sharing mit anderen KRITIS-Betreibern\n• Regelmäßige Krisenübungen und Notfallvorsorge-Tests\n• Kontinuierliche Weiterbildung und Zertifizierung des Sicherheitspersonals"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie unterstützt BSI Threat Intelligence die kontinuierliche Verbesserung des ISO 27001 ISMS?',
        answer: "BSI Threat Intelligence bildet einen wesentlichen Baustein für die kontinuierliche Verbesserung und Anpassung von ISO 27001 Informationssicherheitsmanagementsystemen an die aktuelle deutsche und internationale Bedrohungslandschaft. Die Integration von BSI-Cyber-Sicherheitsinformationen ermöglicht eine proaktive, risikobasierte Sicherheitsstrategie.\n\n🔍 BSI Threat Intelligence Quellen:\n• Cyber-Sicherheitswarnungen und aktuelle Bedrohungsanalysen des BSI\n• Informationen aus dem Nationalen Cyber-Abwehrzentrum und internationalen Partnerschaften\n• Sektorenspezifische Threat Intelligence für verschiedene Branchen und KRITIS-Bereiche\n• Technische Schwachstelleninformationen und Patch-Management-Empfehlungen\n• Strategische Analysen zu Cyber-Kriminalität und staatlich gesteuerten Angriffen\n\n📊 Integration in ISO 27001 Risikomanagement:\n• Kontinuierliche Aktualisierung der Risikoanalyse basierend auf aktuellen BSI-Bedrohungsinformationen\n• Anpassung der Risikobewertung entsprechend neuer Angriffsvektoren und Schwachstellen\n• Priorisierung von Sicherheitsmaßnahmen basierend auf aktueller Bedrohungsrelevanz\n• Entwicklung spezifischer Kontrollmaßnahmen für identifizierte Bedrohungen\n• Regelmäßige Überprüfung und Anpassung des Risikoappetits basierend auf Threat Intelligence\n\n🛡️ Proaktive Sicherheitsmaßnahmen:\n• Implementierung von Frühwarnsystemen basierend auf BSI-Cyber-Sicherheitswarnungen\n• Anpassung von Monitoring- und Detektionssystemen an aktuelle Angriffsmuster\n• Entwicklung spezifischer Incident Response-Verfahren für neue Bedrohungstypen\n• Aktualisierung von Awareness-Schulungen entsprechend aktueller Angriffsmethoden\n• Kontinuierliche Anpassung von technischen Sicherheitskontrollen an neue Bedrohungen\n\n📈 Kontinuierliche Verbesserung:\n• Regelmäßige Management Reviews unter Berücksichtigung aktueller BSI-Threat Intelligence\n• Anpassung der ISMS-Strategie basierend auf sich entwickelnden Bedrohungslandschaften\n• Kontinuierliche Schulung und Sensibilisierung der Mitarbeiter zu neuen Bedrohungen\n• Regelmäßige Überprüfung und Aktualisierung von Notfallplänen und Business Continuity-Maßnahmen\n• Integration von Lessons Learned aus Sicherheitsvorfällen in die ISMS-Dokumentation\n\n🔗 Operative Umsetzung:\n• Etablierung von Prozessen zur regelmäßigen Auswertung von BSI-Publikationen und Warnungen\n• Integration von Threat Intelligence in tägliche Sicherheitsoperationen und SOC-Aktivitäten\n• Entwicklung von Indikatoren und Metriken zur Messung der Bedrohungsexposition\n• Aufbau von Kooperationen mit anderen Organisationen für Information Sharing\n• Implementierung automatisierter Systeme zur Verarbeitung und Verteilung von Threat Intelligence\n\n🎯 Strategische Vorteile:\n• Erhöhung der Resilienz durch proaktive Anpassung an neue Bedrohungen\n• Optimierung der Sicherheitsinvestitionen durch fokussierte Maßnahmen\n• Verbesserung der Incident Response-Fähigkeiten durch aktuelle Bedrohungsinformationen\n• Stärkung der Compliance durch Berücksichtigung nationaler Sicherheitsempfehlungen\n• Aufbau von Vertrauen bei Stakeholdern durch demonstrierte Bedrohungsawareness"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
