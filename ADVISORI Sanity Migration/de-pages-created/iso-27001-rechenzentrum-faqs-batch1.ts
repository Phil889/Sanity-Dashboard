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
    console.log('Updating ISO 27001 Rechenzentrum page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-rechenzentrum' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-rechenzentrum" not found')
    }
    
    // Create new FAQs for data center fundamentals and strategic importance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist ISO 27001-konforme Rechenzentrum-Sicherheit strategisch entscheidend für moderne Unternehmen?',
        answer: "ISO 27001-konforme Rechenzentrum-Sicherheit ist weit mehr als technische Compliance – sie bildet das strategische Fundament für digitale Transformation und Geschäftskontinuität. Rechenzentren sind das Herzstück der modernen Unternehmens-IT und erfordern einen ganzheitlichen Sicherheitsansatz, der physische und logische Kontrollen nahtlos integriert.\n\n🏢 Strategische Geschäftskontinuität:\n• Rechenzentren beherbergen kritische Geschäftsdaten und Anwendungen, deren Verfügbarkeit direkt den Unternehmenserfolg beeinflusst\n• ISO 27001-konforme Sicherheit gewährleistet robuste Schutzmaßnahmen gegen physische und cyber-basierte Bedrohungen\n• Systematische Risikobewertung identifiziert und adressiert alle potenziellen Schwachstellen in der Infrastruktur\n• Strukturierte Notfallpläne und Business Continuity Strategien minimieren Ausfallzeiten und deren Geschäftsauswirkungen\n• Proaktive Sicherheitsmaßnahmen schützen vor kostspieligen Betriebsunterbrechungen und Reputationsschäden\n\n🛡️ Umfassender Schutz kritischer Assets:\n• Physische Sicherheitskontrollen schützen vor unbefugtem Zugang, Diebstahl und Sabotage der IT-Infrastruktur\n• Mehrstufige Zugangskontrollen gewährleisten, dass nur autorisierte Personen Zugang zu sensiblen Bereichen erhalten\n• Umgebungsüberwachung verhindert Schäden durch Umweltfaktoren wie Temperatur, Feuchtigkeit oder Stromausfälle\n• Integrierte Überwachungssysteme ermöglichen Echtzeit-Erkennung und schnelle Reaktion auf Sicherheitsvorfälle\n• Dokumentierte Sicherheitsprozesse schaffen Transparenz und Nachvollziehbarkeit für Audits und Compliance-Prüfungen\n\n📋 Regulatorische Compliance und Vertrauen:\n• ISO 27001-Konformität erfüllt internationale Sicherheitsstandards und regulatorische Anforderungen\n• Strukturierte Dokumentation und Prozesse erleichtern Compliance mit DORA, NIS2 und branchenspezifischen Vorschriften\n• Zertifizierte Sicherheit schafft Vertrauen bei Kunden, Partnern und Stakeholdern\n• Systematische Risikomanagement-Prozesse demonstrieren professionelle Governance und Verantwortung\n• Regelmäßige Audits und Assessments gewährleisten kontinuierliche Verbesserung der Sicherheitsstandards\n\n🚀 Wettbewerbsvorteile und Innovation:\n• Sichere Rechenzentren ermöglichen vertrauensvolle Digitalisierung und Innovation\n• Robuste Infrastruktur unterstützt Skalierung und Wachstum ohne Kompromisse bei der Sicherheit\n• Professionelle Sicherheitsstandards differenzieren das Unternehmen im Markt\n• Zuverlässige IT-Services stärken die Kundenzufriedenheit und Marktposition\n• Zukunftssichere Architektur ermöglicht Integration neuer Technologien und Services"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche spezifischen Herausforderungen adressiert ADVISORI bei der ISO 27001-Implementierung in Rechenzentren?',
        answer: "ADVISORI adressiert die komplexen und vielschichtigen Herausforderungen der Rechenzentrum-Sicherheit mit einem ganzheitlichen Ansatz, der technische Expertise mit strategischem Verständnis verbindet. Rechenzentren stellen einzigartige Sicherheitsanforderungen dar, die spezialisierte Lösungen und tiefgreifende Branchenkenntnisse erfordern.\n\n🔧 Technische Komplexität und Integration:\n• Rechenzentren umfassen diverse Technologien, Systeme und Infrastrukturen, die nahtlos integriert werden müssen\n• Herausforderung der Koordination zwischen physischen Sicherheitsmaßnahmen und IT-Sicherheitssystemen\n• Komplexe Abhängigkeiten zwischen Stromversorgung, Kühlung, Netzwerk und Sicherheitssystemen\n• Integration legacy Systeme mit modernen Sicherheitstechnologien ohne Betriebsunterbrechungen\n• Skalierbarkeit der Sicherheitsarchitektur für wachsende Infrastrukturanforderungen\n\n⚡ Betriebskontinuität und Verfügbarkeit:\n• Rechenzentren erfordern kontinuierlichen Betrieb ohne Unterbrechungen für Sicherheitsimplementierungen\n• Herausforderung der Implementierung neuer Sicherheitsmaßnahmen ohne Ausfallzeiten\n• Koordination von Wartungsarbeiten und Sicherheitsupdates mit Geschäftsanforderungen\n• Entwicklung redundanter Sicherheitssysteme für höchste Verfügbarkeit\n• Balance zwischen Sicherheit und operativer Effizienz in kritischen Umgebungen\n\n🌐 Hybrid- und Multi-Cloud-Komplexität:\n• Integration von On-Premises-Rechenzentren mit Cloud-Services und Hybrid-Architekturen\n• Einheitliche Sicherheitsrichtlinien über verschiedene Infrastrukturmodelle hinweg\n• Herausforderung der Datenklassifizierung und des Schutzes in verteilten Umgebungen\n• Komplexe Compliance-Anforderungen für grenzüberschreitende Datenverarbeitung\n• Koordination von Sicherheitsmaßnahmen mit externen Cloud-Anbietern und Service-Providern\n\n📊 Compliance und Dokumentation:\n• Umfassende Dokumentationsanforderungen für komplexe Rechenzentrum-Infrastrukturen\n• Herausforderung der Nachverfolgung und Dokumentation aller Sicherheitskontrollen und Prozesse\n• Integration verschiedener Compliance-Frameworks und regulatorischer Anforderungen\n• Entwicklung auditfähiger Prozesse und Nachweise für Zertifizierungen\n• Kontinuierliche Aktualisierung der Dokumentation bei Infrastrukturänderungen\n\n🎯 Maßgeschneiderte ADVISORI-Lösungen:\n• Spezialisierte Expertise in kritischen Infrastrukturen und Rechenzentrum-Technologien\n• Bewährte Methodiken für phasenweise Implementierung ohne Betriebsunterbrechungen\n• Ganzheitlicher Ansatz von physischer Sicherheit bis Cloud-Integration\n• Proaktive Risikobewertung und kontinuierliche Optimierung der Sicherheitsarchitektur\n• Langfristige Partnerschaft für nachhaltige Sicherheit und Compliance-Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie gewährleistet eine strukturierte Risikobewertung optimale Sicherheit für Rechenzentrum-Infrastrukturen?',
        answer: "Eine strukturierte Risikobewertung bildet das Fundament für effektive Rechenzentrum-Sicherheit und ermöglicht die systematische Identifikation, Bewertung und Behandlung aller potenziellen Bedrohungen. Rechenzentren sind komplexe Umgebungen mit vielfältigen Risikofaktoren, die einen methodischen und umfassenden Ansatz erfordern.\n\n🔍 Systematische Bedrohungsanalyse:\n• Umfassende Identifikation physischer Bedrohungen wie Naturkatastrophen, Einbruch, Sabotage und Umweltrisiken\n• Analyse cyber-basierter Risiken einschließlich Malware, Ransomware, Insider-Bedrohungen und Advanced Persistent Threats\n• Bewertung operationeller Risiken wie Systemausfälle, menschliche Fehler und Lieferkettenunterbrechungen\n• Untersuchung regulatorischer und Compliance-Risiken sowie deren potenzielle Auswirkungen\n• Berücksichtigung emerging Threats und zukünftiger Bedrohungslandschaften\n\n📊 Quantitative und qualitative Risikobewertung:\n• Systematische Bewertung der Eintrittswahrscheinlichkeit verschiedener Bedrohungsszenarien\n• Quantifizierung potenzieller Auswirkungen auf Geschäftsprozesse, Finanzen und Reputation\n• Entwicklung von Risikomatrizen für priorisierte Behandlung kritischer Schwachstellen\n• Berücksichtigung von Interdependenzen zwischen verschiedenen Infrastrukturkomponenten\n• Regelmäßige Neubewertung und Aktualisierung der Risikolandschaft\n\n🛡️ Risikobasierte Kontrollauswahl:\n• Auswahl angemessener Sicherheitskontrollen basierend auf identifizierten Risiken und Geschäftsanforderungen\n• Optimierung des Kosten-Nutzen-Verhältnisses durch gezielte Investitionen in kritische Bereiche\n• Integration präventiver, detektiver und korrektiver Sicherheitsmaßnahmen\n• Entwicklung mehrstufiger Verteidigungsstrategien für umfassenden Schutz\n• Berücksichtigung von Restrisiken und Akzeptanzkriterien\n\n🔄 Kontinuierliches Risikomanagement:\n• Etablierung regelmäßiger Risikobewertungszyklen für dynamische Anpassung\n• Integration von Threat Intelligence und aktuellen Bedrohungsinformationen\n• Monitoring und Messung der Effektivität implementierter Sicherheitskontrollen\n• Anpassung der Risikostrategie bei Infrastrukturänderungen oder neuen Bedrohungen\n• Dokumentation und Kommunikation von Risikoinformationen an relevante Stakeholder\n\n📈 Strategische Risikokommunikation:\n• Entwicklung risikoorientierter Berichte für verschiedene Managementebenen\n• Übersetzung technischer Risiken in geschäftsrelevante Auswirkungen und Empfehlungen\n• Unterstützung fundierter Entscheidungsfindung durch transparente Risikoinformationen\n• Integration von Risikomanagement in strategische Planungs- und Budgetierungsprozesse\n• Aufbau einer risikobasierten Sicherheitskultur in der gesamten Organisation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt die Integration moderner Compliance-Frameworks in der Rechenzentrum-Sicherheitsstrategie?',
        answer: "Die Integration moderner Compliance-Frameworks ist essentiell für eine zukunftssichere Rechenzentrum-Sicherheitsstrategie und ermöglicht es Unternehmen, multiple regulatorische Anforderungen effizient zu erfüllen. Moderne Frameworks wie DORA, NIS2 und branchenspezifische Regulierungen erfordern einen koordinierten Ansatz für optimale Compliance und operative Effizienz.\n\n🌐 Multi-Framework-Integration:\n• Harmonisierung verschiedener Compliance-Anforderungen in einer einheitlichen Sicherheitsarchitektur\n• Identifikation von Synergien und Überschneidungen zwischen ISO 27001, DORA, NIS2 und anderen Standards\n• Entwicklung integrierter Kontrollframeworks, die multiple Anforderungen gleichzeitig erfüllen\n• Vermeidung redundanter Prozesse und Dokumentation durch intelligente Framework-Mappings\n• Optimierung von Audit- und Assessment-Zyklen für verschiedene Compliance-Bereiche\n\n📋 Strategische Compliance-Planung:\n• Proaktive Antizipation zukünftiger regulatorischer Entwicklungen und deren Integration\n• Entwicklung flexibler Compliance-Architekturen, die sich an neue Anforderungen anpassen können\n• Berücksichtigung branchenspezifischer Regulierungen und deren Auswirkungen auf Rechenzentren\n• Integration von Datenschutz- und Cybersecurity-Anforderungen in ganzheitliche Sicherheitskonzepte\n• Koordination mit internationalen Standards für grenzüberschreitende Geschäftstätigkeiten\n\n🔄 Operative Compliance-Umsetzung:\n• Entwicklung einheitlicher Prozesse und Verfahren für verschiedene Compliance-Bereiche\n• Integration von Compliance-Kontrollen in tägliche Betriebsabläufe ohne operative Behinderung\n• Automatisierung von Compliance-Monitoring und Reporting-Prozessen\n• Etablierung kontinuierlicher Compliance-Überwachung und proaktiver Anpassungsmechanismen\n• Schulung und Sensibilisierung von Mitarbeitern für integrierte Compliance-Anforderungen\n\n📊 Effizientes Reporting und Dokumentation:\n• Entwicklung zentralisierter Dokumentationssysteme für alle Compliance-Frameworks\n• Automatisierte Generierung von Framework-spezifischen Reports und Nachweisen\n• Integration von Compliance-Metriken in Management-Dashboards und Steuerungssysteme\n• Vereinfachung von Audit-Prozessen durch strukturierte und zugängliche Dokumentation\n• Kontinuierliche Aktualisierung und Pflege der Compliance-Dokumentation\n\n🎯 Strategische Vorteile integrierter Compliance:\n• Reduzierung von Compliance-Kosten durch Synergieeffekte und Prozessoptimierung\n• Verbesserung der Risikomanagement-Effektivität durch ganzheitliche Betrachtung\n• Stärkung der Marktposition durch umfassende und nachweisbare Compliance\n• Vereinfachung von Due-Diligence-Prozessen bei Geschäftspartnerschaften und M&A-Aktivitäten\n• Aufbau einer zukunftssicheren Compliance-Infrastruktur für nachhaltige Geschäftsentwicklung"
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
