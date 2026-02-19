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
    console.log('Updating ISO 27001 SOA page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-soa' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-soa" not found')
    }
    
    // Create new FAQs for SOA basics and fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist eine Statement of Applicability (SOA) und warum ist sie für ISO 27001 unverzichtbar?',
        answer: "Die Statement of Applicability ist ein zentrales Dokument der ISO 27001 Norm, das systematisch alle Sicherheitsmaßnahmen aus Annex A bewertet und deren Anwendbarkeit für die jeweilige Organisation dokumentiert. Sie bildet die Brücke zwischen der Risikoanalyse und der praktischen Implementierung von Sicherheitskontrollen und ist ein obligatorisches Element für die ISO 27001 Zertifizierung.\n\n📋 Systematische Control-Bewertung:\n• Die SOA muss alle 93 Controls aus ISO 27001 Annex A systematisch bewerten und dokumentieren\n• Für jedes Control wird entschieden, ob es anwendbar ist oder nicht\n• Bei Nicht-Anwendbarkeit muss eine fundierte, nachvollziehbare Begründung erfolgen\n• Die Bewertung basiert auf der individuellen Risikosituation und den Geschäftsanforderungen der Organisation\n• Regelmäßige Überprüfung und Aktualisierung der SOA ist erforderlich\n\n🔗 Verknüpfung mit ISMS-Prozessen:\n• Die SOA verbindet die Ergebnisse der Risikoanalyse mit konkreten Sicherheitsmaßnahmen\n• Sie dokumentiert den Zusammenhang zwischen identifizierten Risiken und ausgewählten Controls\n• Integration mit dem Risk Treatment Plan für eine kohärente Sicherheitsstrategie\n• Basis für die Entwicklung von Implementierungsplänen und Ressourcenplanung\n• Fundament für interne Audits und kontinuierliche Verbesserung des ISMS\n\n⚖️ Compliance und Audit-Anforderungen:\n• Obligatorisches Dokument nach ISO 27001 Klausel 6.1.3 für die Zertifizierung\n• Nachweis der systematischen und risikobasierten Herangehensweise an Informationssicherheit\n• Zentrale Grundlage für externe Audits und Zertifizierungsprüfungen\n• Dokumentation der Compliance mit regulatorischen Anforderungen\n• Transparenz über implementierte und geplante Sicherheitsmaßnahmen\n\n🎯 Strategische Bedeutung für das Unternehmen:\n• Grundlage für strategische Sicherheitsentscheidungen und Investitionsplanung\n• Kommunikationsinstrument für Management und Stakeholder\n• Basis für Lieferanten- und Partnerbewertungen im Bereich Informationssicherheit\n• Fundament für die Integration von Sicherheitsanforderungen in Geschäftsprozesse\n• Instrument zur Demonstration der Sicherheitsreife gegenüber Kunden und Partnern\n\n🔄 Kontinuierliche Entwicklung:\n• Die SOA ist ein lebendes Dokument, das sich mit der Organisation entwickelt\n• Anpassung an veränderte Geschäftsanforderungen und neue Bedrohungen\n• Integration neuer Technologien und Geschäftsprozesse\n• Berücksichtigung von Lessons Learned aus Sicherheitsvorfällen\n• Grundlage für die kontinuierliche Verbesserung der Informationssicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche rechtlichen und regulatorischen Anforderungen bestehen für die SOA-Dokumentation?',
        answer: "Die Statement of Applicability unterliegt spezifischen rechtlichen und regulatorischen Anforderungen, die über die ISO 27001 Norm hinausgehen und je nach Branche und geografischem Standort variieren können. Eine compliance-konforme SOA-Dokumentation ist entscheidend für die rechtliche Absicherung und regulatorische Compliance der Organisation.\n\n📜 ISO 27001 Normative Anforderungen:\n• Klausel 6.1.3 der ISO 27001 definiert die SOA als obligatorisches Dokument\n• Vollständige Bewertung aller Annex A Controls ohne Ausnahmen\n• Dokumentation der Anwendbarkeitsentscheidung mit nachvollziehbarer Begründung\n• Verknüpfung mit der Risikoanalyse und dem Risk Treatment Plan\n• Regelmäßige Überprüfung und Aktualisierung entsprechend dem PDCA-Zyklus\n\n🏛️ Branchenspezifische Regulatorische Anforderungen:\n• Finanzdienstleister müssen zusätzliche Anforderungen aus DORA, MaRisk und BAIT berücksichtigen\n• Gesundheitswesen unterliegt spezifischen Datenschutz- und Sicherheitsanforderungen\n• Kritische Infrastrukturen müssen NIS2-Richtlinie und IT-Sicherheitsgesetz beachten\n• Cloud-Provider und Telekommunikationsunternehmen haben zusätzliche Compliance-Verpflichtungen\n• Internationale Organisationen müssen verschiedene nationale Regulierungen harmonisieren\n\n🔒 Datenschutzrechtliche Aspekte:\n• Integration der DSGVO-Anforderungen in die SOA-Dokumentation\n• Berücksichtigung von Privacy by Design und Privacy by Default Prinzipien\n• Dokumentation der technischen und organisatorischen Maßnahmen nach Art. 32 DSGVO\n• Nachweis der Datenschutz-Folgenabschätzung bei relevanten Controls\n• Harmonisierung mit Datenschutz-Management-Systemen\n\n⚖️ Rechtliche Haftung und Sorgfaltspflichten:\n• SOA als Nachweis der angemessenen Sorgfalt bei Informationssicherheit\n• Dokumentation der Due Diligence für Haftungsminimierung\n• Grundlage für Cyber-Versicherungen und Risikobewertungen\n• Nachweis der Compliance bei rechtlichen Auseinandersetzungen\n• Erfüllung von Vorstandspflichten und Corporate Governance Anforderungen\n\n🌍 Internationale Compliance-Harmonisierung:\n• Berücksichtigung verschiedener nationaler Standards und Regulierungen\n• Mapping zu internationalen Frameworks wie NIST, COBIT oder SOX\n• Harmonisierung mit lokalen Datenschutz- und Sicherheitsgesetzen\n• Dokumentation grenzüberschreitender Datenverarbeitung und Transfer-Mechanismen\n• Integration von Export-Kontroll-Bestimmungen bei relevanten Technologien\n\n📊 Audit und Nachweispflichten:\n• Vollständige Dokumentation aller Bewertungsentscheidungen mit Zeitstempel\n• Nachvollziehbare Begründungen für Control-Ausschlüsse\n• Versionskontrolle und Change Management für alle SOA-Änderungen\n• Aufbewahrung von Audit-Trails für regulatorische Prüfungen\n• Bereitstellung strukturierter Nachweise für Aufsichtsbehörden"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie schafft eine professionell entwickelte SOA konkreten Business Value für Unternehmen?',
        answer: "Eine strategisch entwickelte Statement of Applicability generiert erheblichen Business Value, der weit über die reine Compliance-Erfüllung hinausgeht. Sie wird zu einem strategischen Instrument für Risikomanagement, operative Effizienz und Wettbewerbsdifferenzierung, das messbare Geschäftsvorteile schafft.\n\n💰 Finanzielle Vorteile und ROI:\n• Reduzierung von Cyber-Versicherungsprämien durch nachweisbare Risikominimierung\n• Vermeidung kostspieliger Sicherheitsvorfälle durch systematische Präventionsmaßnahmen\n• Optimierung von Sicherheitsinvestitionen durch risikobasierte Priorisierung\n• Effizienzsteigerungen durch strukturierte Sicherheitsprozesse und Automatisierung\n• Langfristige Kosteneinsparungen durch präventive statt reaktive Sicherheitsmaßnahmen\n\n🏆 Wettbewerbsvorteile und Marktpositionierung:\n• Differenzierung im Markt durch nachweisbare Informationssicherheitskompetenz\n• Zugang zu neuen Geschäftsmöglichkeiten, die ISO 27001 Zertifizierung voraussetzen\n• Erfüllung von Ausschreibungsanforderungen in sicherheitskritischen Branchen\n• Stärkung der Verhandlungsposition bei Vertragsabschlüssen\n• Aufbau von Vertrauen bei Kunden, Partnern und Investoren\n\n🤝 Stakeholder-Vertrauen und Reputation:\n• Demonstration von Verantwortung und Professionalität im Umgang mit Informationen\n• Stärkung des Unternehmensimages als vertrauenswürdiger und sicherer Partner\n• Positive Auswirkungen auf Kreditwürdigkeit und Investorenbewertungen\n• Verbesserung der Beziehungen zu Geschäftspartnern durch transparente Sicherheitsstandards\n• Aufbau einer starken Sicherheitskultur als Employer Branding Faktor\n\n📈 Operative Exzellenz und Prozessoptimierung:\n• Systematische Identifikation und Eliminierung von Sicherheitslücken\n• Standardisierung und Automatisierung von Sicherheitsprozessen\n• Verbesserung der Incident Response Fähigkeiten und Minimierung von Ausfallzeiten\n• Integration von Sicherheitsanforderungen in alle Geschäftsprozesse\n• Aufbau robuster Governance-Strukturen für nachhaltige Sicherheit\n\n🚀 Innovation und digitale Transformation:\n• Schaffung einer sicheren Basis für digitale Innovationen und neue Technologien\n• Ermöglichung sicherer Cloud-Adoption und digitaler Geschäftsmodelle\n• Integration von Sicherheit in DevOps und agile Entwicklungsprozesse\n• Aufbau von Kompetenzen für zukünftige Sicherheitsherausforderungen\n• Grundlage für sichere Partnerschaften und Ecosystem-Entwicklung\n\n🎯 Strategische Entscheidungsunterstützung:\n• Datenbasierte Grundlage für strategische Sicherheitsentscheidungen\n• Transparenz über Sicherheitsrisiken und deren Auswirkungen auf das Geschäft\n• Unterstützung bei M&A-Aktivitäten durch klare Sicherheitsbewertung\n• Grundlage für Ressourcenplanung und Budgetierung im Sicherheitsbereich\n• Integration von Sicherheitsaspekten in die Unternehmensstrategie"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen die Qualität einer SOA-Implementierung?',
        answer: "Die Qualität einer SOA-Implementierung hängt von verschiedenen kritischen Erfolgsfaktoren ab, die über die reine Dokumentation hinausgehen und eine ganzheitliche, strategische Herangehensweise erfordern. Diese Faktoren bestimmen maßgeblich den langfristigen Erfolg und die Nachhaltigkeit des Informationssicherheitsmanagementsystems.\n\n🎯 Strategische Ausrichtung und Leadership:\n• Klare Unterstützung und Commitment des Top-Managements für die SOA-Entwicklung\n• Integration der SOA in die Unternehmensstrategie und Geschäftsziele\n• Definition klarer Verantwortlichkeiten und Governance-Strukturen\n• Bereitstellung ausreichender Ressourcen für Entwicklung und Pflege\n• Etablierung einer Sicherheitskultur, die die SOA-Prinzipien unterstützt\n\n🔍 Methodische Exzellenz und Systematik:\n• Anwendung bewährter Methoden für Risikobewertung und Control-Auswahl\n• Systematische Analyse aller Geschäftsprozesse und Informationsassets\n• Strukturierte Bewertung aller Annex A Controls ohne Ausnahmen\n• Verwendung konsistenter Bewertungskriterien und Dokumentationsstandards\n• Integration von Lessons Learned aus anderen Implementierungen\n\n👥 Kompetenz und Expertise:\n• Verfügbarkeit qualifizierter Fachkräfte mit ISO 27001 und SOA-Expertise\n• Kontinuierliche Weiterbildung und Kompetenzentwicklung des Teams\n• Einbindung externer Expertise bei komplexen oder spezialisierten Anforderungen\n• Cross-funktionale Zusammenarbeit zwischen IT, Compliance und Business\n• Aufbau interner Kompetenzen für nachhaltige SOA-Pflege\n\n🔗 Integration und Harmonisierung:\n• Nahtlose Integration mit bestehenden Managementsystemen und Prozessen\n• Harmonisierung mit anderen Compliance-Frameworks und Regulierungen\n• Verknüpfung mit Risikomanagement und Business Continuity Management\n• Integration in die IT-Governance und Architektur-Prozesse\n• Abstimmung mit Datenschutz und anderen Sicherheitsinitiativen\n\n📊 Datenqualität und Evidenz:\n• Vollständige und aktuelle Inventarisierung aller Informationsassets\n• Qualitativ hochwertige Risikobewertungen als Basis für Control-Auswahl\n• Dokumentation nachvollziehbarer Begründungen für alle Entscheidungen\n• Verwendung objektiver Kriterien und messbarer Indikatoren\n• Regelmäßige Validierung und Aktualisierung der Datengrundlage\n\n🛠️ Technische Umsetzung und Tools:\n• Einsatz geeigneter Tools für SOA-Management und Dokumentation\n• Automatisierung wiederkehrender Prozesse und Bewertungen\n• Integration mit bestehenden IT-Systemen und Sicherheitstools\n• Implementierung effektiver Monitoring und Reporting-Mechanismen\n• Sicherstellung der Skalierbarkeit und Wartbarkeit der Lösung\n\n🔄 Kontinuierliche Verbesserung:\n• Etablierung regelmäßiger Review und Update-Zyklen\n• Integration von Feedback aus internen und externen Audits\n• Anpassung an veränderte Geschäftsanforderungen und Bedrohungslandschaft\n• Messung und Bewertung der Effektivität implementierter Controls\n• Kontinuierliche Optimierung der SOA-Prozesse und Dokumentation"
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
