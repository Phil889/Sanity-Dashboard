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
    console.log('Updating ISO 27001 NIS2 Integration page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-nis2' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-nis2" not found')
    }
    
    // Create new FAQs for ISO 27001 NIS2 Integration fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die Integration von ISO 27001 und NIS2 strategisch sinnvoller als separate Compliance-Ansätze?',
        answer: "Die strategische Integration von ISO 27001 und NIS2 schafft eine einzigartige Compliance-Synergie, die weit über die bloße Erfüllung regulatorischer Anforderungen hinausgeht. Diese Verbindung nutzt die natürlichen Komplementaritäten beider Frameworks und maximiert sowohl die Effizienz als auch die Wirksamkeit Ihrer Sicherheitsarchitektur.\n\n🏗️ Strukturelle Synergien und Effizienzgewinne:\n• ISO 27001 ISMS bildet das perfekte Fundament für NIS2-Compliance, da beide Frameworks auf systematischem Risikomanagement basieren\n• Bestehende ISMS-Strukturen können direkt für NIS2-Anforderungen genutzt und erweitert werden, anstatt parallele Systeme aufzubauen\n• Einheitliche Governance-Strukturen reduzieren administrative Komplexität und vermeiden Doppelarbeit\n• Integrierte Dokumentationslandschaften schaffen Konsistenz und erleichtern Audits beider Frameworks\n• Gemeinsame Risikobewertungsmethoden ermöglichen kohärente Sicherheitsentscheidungen\n\n💰 Wirtschaftliche Vorteile und Ressourcenoptimierung:\n• Signifikante Kosteneinsparungen durch Vermeidung redundanter Prozesse und Systeme\n• Optimierte Personalressourcen durch einheitliche Verantwortlichkeiten und Kompetenzen\n• Reduzierte Schulungs- und Zertifizierungskosten durch integrierte Weiterbildungsprogramme\n• Beschleunigte Implementierungszeiten durch Nutzung bestehender ISMS-Infrastrukturen\n• Verbesserte ROI durch maximale Ausnutzung vorhandener Sicherheitsinvestitionen\n\n🎯 Strategische Compliance-Vorteile:\n• Einheitliche Sicherheitskultur, die sowohl allgemeine ISMS-Prinzipien als auch kritische Infrastruktur-Anforderungen umfasst\n• Kohärente Incident Response Prozesse, die sowohl ISO 27001 als auch NIS2-Meldepflichten erfüllen\n• Integrierte Business Continuity Strategien für umfassende Resilienz\n• Vereinfachte Stakeholder-Kommunikation durch einheitliche Compliance-Narrative\n• Proaktive Vorbereitung auf zukünftige regulatorische Entwicklungen\n\n🔄 Operative Exzellenz und Nachhaltigkeit:\n• Streamlined Audit-Prozesse durch koordinierte Compliance-Aktivitäten\n• Einheitliche KPI-Frameworks für ganzheitliches Sicherheitsmonitoring\n• Integrierte Verbesserungsprozesse, die beide Frameworks kontinuierlich optimieren\n• Kohärente Lieferanten- und Drittpartei-Bewertungen\n• Unified Security Architecture, die sowohl ISMS als auch kritische Infrastruktur-Anforderungen erfüllt"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Überschneidungen existieren zwischen ISO 27001 Controls und NIS2-Sicherheitsmaßnahmen?',
        answer: "Die Überschneidungen zwischen ISO 27001 Controls und NIS2-Sicherheitsmaßnahmen sind umfangreich und strategisch wertvoll, da beide Frameworks auf bewährten Cybersecurity-Prinzipien basieren. Diese natürlichen Synergien ermöglichen es Organisationen, ihre bestehenden ISMS-Investitionen optimal zu nutzen und gleichzeitig NIS2-Compliance zu erreichen.\n\n🛡️ Technische Sicherheitskontrollen:\n• ISO 27001 A.8 Asset Management korrespondiert direkt mit NIS2-Anforderungen zur Identifikation und Klassifizierung kritischer Assets\n• A.12 Operations Security deckt wesentliche NIS2-Maßnahmen wie Vulnerability Management und Patch Management ab\n• A.13 Communications Security adressiert NIS2-Anforderungen zu Netzwerksicherheit und Verschlüsselung\n• A.14 System Acquisition entspricht NIS2-Vorgaben für sichere Entwicklung und Beschaffung\n• A.18 Compliance Management unterstützt NIS2-Dokumentations- und Nachweispflichten\n\n🔍 Risikomanagement und Governance:\n• ISO 27001 Risikobewertungsprozesse (Clause 6.1) bilden die Grundlage für NIS2-konforme Risikoanalysen\n• ISMS-Governance-Strukturen (Clause 5) erfüllen NIS2-Anforderungen an Führungsverantwortung\n• Kontinuierliche Überwachung (Clause 9) entspricht NIS2-Monitoring-Vorgaben\n• Management Review Prozesse (Clause 9.3) unterstützen NIS2-Berichtspflichten\n• Korrekturmaßnahmen (Clause 10) adressieren NIS2-Anforderungen zur kontinuierlichen Verbesserung\n\n🚨 Incident Management und Business Continuity:\n• ISO 27001 A.16 Incident Management bildet das Fundament für NIS2-konforme Incident Response\n• A.17 Business Continuity entspricht NIS2-Anforderungen zur Aufrechterhaltung kritischer Funktionen\n• Dokumentierte Verfahren erfüllen NIS2-Meldepflichten und Zeitvorgaben\n• Stakeholder-Kommunikation adressiert NIS2-Koordinationsanforderungen\n• Lessons Learned Prozesse unterstützen NIS2-Verbesserungszyklen\n\n👥 Personal und Awareness:\n• ISO 27001 A.7 Human Resource Security deckt NIS2-Anforderungen zu Personalscreening und Schulungen\n• A.7.2.2 Information Security Awareness entspricht NIS2-Sensibilisierungspflichten\n• Rollenbasierte Zugangskontrollen (A.9) erfüllen NIS2-Anforderungen zum Privileged Access Management\n• Schulungsprogramme adressieren beide Frameworks gleichzeitig\n• Kompetenzmanagement unterstützt NIS2-Qualifikationsanforderungen\n\n🔧 Technische Implementation und Monitoring:\n• Network Security Controls (A.13.1) entsprechen NIS2-Netzwerksegmentierung\n• Cryptographic Controls (A.10) erfüllen NIS2-Verschlüsselungsanforderungen\n• Logging und Monitoring (A.12.4) adressieren NIS2-Detection-Capabilities\n• Backup und Recovery (A.12.3) unterstützen NIS2-Resilienz-Anforderungen\n• Supplier Relationship Security (A.15) deckt NIS2-Supply Chain Security ab"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie kann eine bestehende ISO 27001-Implementierung als Basis für NIS2-Compliance genutzt werden?',
        answer: "Eine bestehende ISO 27001-Implementierung bietet eine solide und strategisch wertvolle Basis für NIS2-Compliance, da die fundamentalen Strukturen, Prozesse und Kontrollen bereits etabliert sind. Der Schlüssel liegt in der systematischen Erweiterung und Anpassung der vorhandenen ISMS-Komponenten, um die spezifischen NIS2-Anforderungen zu erfüllen.\n\n📋 Baseline Assessment und Gap-Analyse:\n• Systematische Bewertung der bestehenden ISO 27001 Controls gegen NIS2-Anforderungen\n• Identifikation von Bereichen, wo ISMS-Kontrollen bereits NIS2-Compliance bieten\n• Mapping von ISO 27001 Prozessen zu NIS2-Sicherheitsmaßnahmen\n• Analyse der Governance-Strukturen und deren Anpassungsbedarf für kritische Infrastrukturen\n• Bewertung der aktuellen Risikomanagement-Methoden und deren NIS2-Kompatibilität\n\n🔧 Strukturelle Erweiterungen und Anpassungen:\n• Erweiterung der Asset-Klassifizierung um kritische Infrastruktur-spezifische Kategorien\n• Anpassung der Risikobewertungsmethoden um NIS2-spezifische Bedrohungsszenarien\n• Integration von NIS2-Meldepflichten in bestehende Incident Response Prozesse\n• Erweiterung der Business Impact Analysis um gesellschaftliche und wirtschaftliche Auswirkungen\n• Anpassung der Supplier Risk Management Prozesse um Supply Chain Security\n\n🎯 Governance und Verantwortlichkeiten:\n• Erweiterung der ISMS-Rollen um NIS2-spezifische Verantwortlichkeiten\n• Integration von NIS2-Berichtspflichten in bestehende Management Review Zyklen\n• Anpassung der Compliance-Überwachung um NIS2-spezifische KPIs\n• Erweiterung der Stakeholder-Kommunikation um Behörden und Regulatoren\n• Integration von NIS2-Koordinationsanforderungen in die Organisationsstruktur\n\n📊 Prozessoptimierung und Integration:\n• Harmonisierung von ISO 27001 und NIS2-Dokumentationsanforderungen\n• Integration von NIS2-Monitoring-Anforderungen in bestehende ISMS-Überwachung\n• Erweiterung der internen Audit-Programme um NIS2-spezifische Prüfpunkte\n• Anpassung der Schulungsprogramme um NIS2-relevante Inhalte\n• Integration von NIS2-Verbesserungszyklen in bestehende PDCA-Prozesse\n\n🚀 Implementierungsstrategie und Roadmap:\n• Phasenweise Erweiterung der ISMS-Strukturen um NIS2-Komponenten\n• Priorisierung basierend auf bestehenden Stärken und identifizierten Gaps\n• Nutzung etablierter Change Management Prozesse für NIS2-Integration\n• Leveraging vorhandener Schulungs- und Awareness-Programme\n• Kontinuierliche Optimierung durch integrierte Monitoring- und Verbesserungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Integration und wie werden sie bewältigt?',
        answer: "Die Integration von ISO 27001 und NIS2 bringt spezifische Herausforderungen mit sich, die jedoch durch systematische Planung und bewährte Integrationsmethoden erfolgreich bewältigt werden können. Das Verständnis dieser Herausforderungen und ihrer Lösungsansätze ist entscheidend für eine erfolgreiche und nachhaltige Integration.\n\n⚖️ Regulatorische Komplexität und Harmonisierung:\n• Unterschiedliche Terminologien und Definitionen zwischen ISO 27001 und NIS2 erfordern sorgfältige Mapping-Prozesse\n• Varying Compliance-Zyklen und Berichtszeiträume müssen in einheitliche Governance-Strukturen integriert werden\n• Verschiedene Audit-Ansätze und Bewertungskriterien erfordern koordinierte Prüfungsstrategien\n• Unterschiedliche Stakeholder-Erwartungen müssen durch klare Kommunikationsstrategien adressiert werden\n• Evolving regulatorische Landschaft erfordert flexible und anpassungsfähige Compliance-Architekturen\n\n🏗️ Organisatorische und strukturelle Anpassungen:\n• Bestehende Rollen und Verantwortlichkeiten müssen erweitert und neu definiert werden\n• Verschiedene Reporting-Lines und Eskalationswege erfordern organisatorische Harmonisierung\n• Cultural Change Management ist notwendig, um beide Compliance-Kulturen zu integrieren\n• Resource Allocation muss zwischen verschiedenen Compliance-Prioritäten balanciert werden\n• Skill Gaps in NIS2-spezifischen Bereichen müssen durch gezielte Weiterbildung geschlossen werden\n\n🔧 Technische Integration und Systemharmonisierung:\n• Legacy-Systeme müssen möglicherweise erweitert oder ersetzt werden, um beide Frameworks zu unterstützen\n• Verschiedene Monitoring- und Reporting-Tools erfordern Integration oder Konsolidierung\n• Data Consistency zwischen verschiedenen Compliance-Systemen muss gewährleistet werden\n• Automated Compliance-Checks müssen für beide Frameworks entwickelt werden\n• Interoperabilität zwischen bestehenden und neuen Sicherheitstechnologien muss sichergestellt werden\n\n📈 Performance und Effizienz-Optimierung:\n• Vermeidung von Compliance-Overhead durch intelligente Prozessintegration\n• Balancing zwischen Thoroughness und Practicality in der Umsetzung\n• Optimierung von Audit-Zyklen und Prüfungsaktivitäten\n• Streamlining von Dokumentations- und Berichtsprozessen\n• Kontinuierliche Verbesserung der integrierten Compliance-Landschaft\n\n🎯 Strategische Lösungsansätze und Best Practices:\n• Entwicklung einer Unified Compliance-Strategie, die beide Frameworks gleichberechtigt behandelt\n• Implementation von Cross-Functional Teams mit Expertise in beiden Bereichen\n• Nutzung von Compliance-Management-Plattformen für integrierte Überwachung\n• Etablierung von Regular Review-Zyklen zur kontinuierlichen Optimierung\n• Proactive Stakeholder Engagement zur frühzeitigen Identifikation von Herausforderungen"
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
