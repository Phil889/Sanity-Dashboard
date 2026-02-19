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
    console.log('Updating ISO 27001 vs SOC 2 page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-vs-soc-2' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-vs-soc-2" not found')
    }
    
    // Create new FAQs for ISO 27001 vs SOC 2 comparison fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die grundlegenden Unterschiede zwischen ISO 27001 und SOC 2 und für welche Organisationen ist welcher Standard geeignet?',
        answer: "ISO 27001 und SOC 2 repräsentieren zwei unterschiedliche Philosophien im Informationssicherheitsmanagement, die jeweils spezifische Zielgruppen und Anwendungsbereiche adressieren. Während beide Standards darauf abzielen, Informationssicherheit zu gewährleisten, unterscheiden sie sich fundamental in Ansatz, Scope und Anwendung.\n\n🌍 Geografische und regulatorische Ausrichtung:\n• ISO 27001 ist ein internationaler Standard mit globaler Anerkennung und Anwendbarkeit in allen Ländern und Branchen\n• SOC 2 ist primär für den US-amerikanischen Markt entwickelt und basiert auf den Trust Services Criteria des AICPA\n• ISO 27001 bietet eine formale Zertifizierung durch akkreditierte Zertifizierungsstellen\n• SOC 2 resultiert in einer Attestation durch lizenzierte CPAs ohne formale Zertifizierung\n• Internationale Organisationen bevorzugen oft ISO 27001 für globale Anerkennung\n\n🏗️ Struktureller Ansatz und Philosophie:\n• ISO 27001 etabliert ein umfassendes Informationssicherheitsmanagementsystem mit systematischem Ansatz\n• SOC 2 fokussiert auf spezifische Kontrollen und deren operative Wirksamkeit über definierte Zeiträume\n• ISO 27001 basiert auf dem Plan-Do-Check-Act-Zyklus für kontinuierliche Verbesserung\n• SOC 2 konzentriert sich auf die Bewertung von Kontrollen zu einem Stichtag oder über einen Zeitraum\n• ISO 27001 erfordert eine ganzheitliche Betrachtung aller Informationsassets und Geschäftsprozesse\n\n🎯 Zielgruppen und Anwendungsbereiche:\n• ISO 27001 eignet sich für alle Organisationstypen, von kleinen Unternehmen bis zu multinationalen Konzernen\n• SOC 2 ist speziell für Service-Organisationen konzipiert, die Kundendaten verarbeiten oder IT-Services bereitstellen\n• ISO 27001 adressiert interne und externe Stakeholder gleichermaßen\n• SOC 2 richtet sich primär an Kunden und Geschäftspartner von Service-Providern\n• Cloud-Provider, SaaS-Anbieter und Outsourcing-Unternehmen nutzen häufig SOC 2 für Kundennachweise\n\n📋 Scope und Kontrollumfang:\n• ISO 27001 definiert einen umfassenden Kontrollkatalog mit Anhang A Controls\n• SOC 2 basiert auf fünf Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy\n• ISO 27001 ermöglicht flexible Kontrollauswahl basierend auf Risikoanalyse\n• SOC 2 erfordert Security-Kriterien als Minimum, andere Kriterien sind optional\n• ISO 27001 integriert Informationssicherheit in alle Geschäftsprozesse\n\n⚖️ Strategische Entscheidungsfaktoren:\n• Wählen Sie ISO 27001 für internationale Märkte, umfassende Managementsysteme und formale Zertifizierung\n• Entscheiden Sie sich für SOC 2 bei US-Marktfokus, Service-Provider-Geschäftsmodell und Kundennachweisen\n• Berücksichtigen Sie Ihre Stakeholder-Anforderungen und regulatorischen Verpflichtungen\n• Bewerten Sie verfügbare Ressourcen und Implementierungskapazitäten\n• Beide Standards können sich ergänzen und parallel implementiert werden"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Kosten und Zeitaufwände sind mit der Implementierung von ISO 27001 versus SOC 2 verbunden?',
        answer: "Die Kosten und Zeitaufwände für ISO 27001 und SOC 2 unterscheiden sich erheblich aufgrund der verschiedenen Ansätze, Scope-Definitionen und Implementierungsanforderungen. Eine realistische Budgetplanung berücksichtigt sowohl direkte Implementierungskosten als auch laufende Betriebskosten für beide Standards.\n\n💰 Implementierungskosten ISO 27001:\n• Kleine bis mittlere Unternehmen: 50.000 bis 150.000 Euro für vollständige ISMS-Implementierung\n• Große Organisationen: 150.000 bis 500.000 Euro abhängig von Komplexität und Standorten\n• Zertifizierungskosten: 15.000 bis 75.000 Euro für Erstaudit durch akkreditierte Stellen\n• Beratungskosten: 30.000 bis 200.000 Euro für externe Expertise und Projektbegleitung\n• Interne Personalkosten: 0,5 bis 2 Vollzeitäquivalente über 12 bis 24 Monate\n\n💰 Implementierungskosten SOC 2:\n• Erstimplementierung: 25.000 bis 100.000 Euro für Kontrolldesign und -implementierung\n• CPA-Attestation: 15.000 bis 60.000 Euro für Type I oder Type II Prüfung\n• Beratungskosten: 20.000 bis 80.000 Euro für SOC 2 Readiness und Vorbereitung\n• Interne Ressourcen: 0,3 bis 1 Vollzeitäquivalent über 6 bis 12 Monate\n• Jährliche Attestation: 10.000 bis 40.000 Euro für wiederkehrende Prüfungen\n\n⏱️ Zeitaufwand und Implementierungsdauer:\n• ISO 27001: 12 bis 24 Monate für vollständige ISMS-Implementierung und Zertifizierung\n• SOC 2: 6 bis 12 Monate für Kontrollimplementierung und erste Attestation\n• ISO 27001 erfordert umfassende Organisationsentwicklung und Kulturwandel\n• SOC 2 fokussiert auf spezifische Kontrollbereiche mit schnellerer Umsetzung\n• Beide Standards benötigen kontinuierliche Wartung und regelmäßige Audits\n\n🔄 Laufende Betriebskosten:\n• ISO 27001: Jährliche Überwachungsaudits 5.000 bis 25.000 Euro, Rezertifizierung alle drei Jahre\n• SOC 2: Jährliche Attestation 10.000 bis 40.000 Euro, kontinuierliche Kontrollüberwachung\n• Beide Standards erfordern dedizierte Personalressourcen für Compliance-Management\n• Technologie-Investitionen für Monitoring, Dokumentation und Kontrollautomatisierung\n• Schulungs- und Weiterbildungskosten für Mitarbeiter und Compliance-Teams\n\n📊 Kosten-Nutzen-Bewertung:\n• ISO 27001 bietet langfristige Investition in systematisches Informationssicherheitsmanagement\n• SOC 2 ermöglicht schnellere Markteinführung und Kundennachweise mit geringeren Anfangsinvestitionen\n• ISO 27001 Zertifizierung kann Versicherungsprämien reduzieren und neue Märkte erschließen\n• SOC 2 Attestation verbessert Vertriebschancen bei US-Kunden und Cloud-Service-Nachfrage\n• Beide Standards können Compliance-Kosten durch strukturierte Prozesse langfristig reduzieren\n\n⚡ Effizienzfaktoren und Kostentreiber:\n• Bestehende Sicherheitsreife reduziert Implementierungsaufwand für beide Standards\n• Parallele Implementierung kann Synergieeffekte und Kosteneinsparungen ermöglichen\n• Externe Beratung beschleunigt Implementierung, erhöht aber Gesamtkosten\n• Automatisierung von Kontrollen und Monitoring reduziert langfristige Betriebskosten\n• Organisationsgröße und Komplexität beeinflussen Kosten erheblich bei beiden Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Können ISO 27001 und SOC 2 parallel implementiert werden und welche Synergieeffekte entstehen dabei?',
        answer: "Die parallele Implementierung von ISO 27001 und SOC 2 ist nicht nur möglich, sondern kann erhebliche Synergieeffekte und strategische Vorteile bieten. Viele Organisationen nutzen einen integrierten Ansatz, um beide Standards effizient zu implementieren und dabei Ressourcen zu optimieren sowie Compliance-Ziele zu maximieren.\n\n🔗 Strukturelle Synergien und Überschneidungen:\n• Beide Standards teilen fundamentale Informationssicherheitsprinzipien und Kontrollziele\n• Risikomanagement-Prozesse können für beide Frameworks genutzt und angepasst werden\n• Dokumentationsstrukturen und Richtlinien lassen sich mit geringfügigen Anpassungen wiederverwenden\n• Incident Response und Business Continuity Prozesse erfüllen Anforderungen beider Standards\n• Access Management und Zugangskontrollen adressieren sowohl ISO 27001 als auch SOC 2 Kriterien\n\n📋 Kontrollmapping und gemeinsame Anforderungen:\n• Security-Kriterien von SOC 2 überschneiden sich erheblich mit ISO 27001 Anhang A Kontrollen\n• Physische und logische Zugangskontrollen sind in beiden Standards zentral\n• Monitoring und Logging-Anforderungen können gemeinsam implementiert und betrieben werden\n• Vendor Management und Third-Party-Risikobewertungen erfüllen beide Compliance-Anforderungen\n• Change Management und Konfigurationskontrollen adressieren überlappende Kontrollziele\n\n🚀 Implementierungsstrategien für parallele Umsetzung:\n• Beginnen Sie mit einer gemeinsamen Gap-Analyse für beide Standards\n• Entwickeln Sie integrierte Richtlinien und Verfahren, die beide Anforderungen erfüllen\n• Nutzen Sie gemeinsame Projektressourcen und Cross-Training für Effizienzsteigerung\n• Implementieren Sie einheitliche Monitoring- und Reporting-Systeme\n• Koordinieren Sie Audit-Zyklen und Prüfungsaktivitäten für optimale Ressourcennutzung\n\n💡 Strategische Vorteile der parallelen Implementierung:\n• Maximale Marktabdeckung durch Erfüllung internationaler und US-amerikanischer Anforderungen\n• Verbesserte Verhandlungsposition bei Kunden durch umfassende Compliance-Nachweise\n• Reduzierte Gesamtkosten durch gemeinsame Nutzung von Infrastruktur und Prozessen\n• Beschleunigte Implementierung durch Wiederverwendung von Kontrollen und Dokumentation\n• Erhöhte organisatorische Reife im Informationssicherheitsmanagement\n\n⚖️ Herausforderungen und Managementansätze:\n• Unterschiedliche Audit-Zyklen und Berichtszeiträume erfordern koordinierte Planung\n• Verschiedene Terminologien und Frameworks benötigen einheitliche Interpretation\n• Ressourcenallokation zwischen beiden Projekten muss sorgfältig balanciert werden\n• Stakeholder-Kommunikation wird komplexer bei parallelen Compliance-Initiativen\n• Change Management erfordert Berücksichtigung beider Standard-Anforderungen\n\n🎯 Best Practices für erfolgreiche Integration:\n• Etablieren Sie ein gemeinsames Governance-Framework für beide Standards\n• Nutzen Sie integrierte Risikobewertungen und gemeinsame Kontrollmatrizen\n• Implementieren Sie einheitliche Schulungsprogramme für beide Compliance-Bereiche\n• Entwickeln Sie gemeinsame KPIs und Metriken für Compliance-Monitoring\n• Schaffen Sie klare Rollen und Verantwortlichkeiten für beide Standard-Implementierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Branchen und Geschäftsmodelle profitieren am meisten von ISO 27001 versus SOC 2?',
        answer: "Die Wahl zwischen ISO 27001 und SOC 2 hängt stark von branchenspezifischen Anforderungen, Geschäftsmodellen und Zielmarktcharakteristika ab. Verschiedene Industrien haben unterschiedliche Compliance-Präferenzen und regulatorische Anforderungen, die die Standardauswahl maßgeblich beeinflussen.\n\n🏢 Branchen mit ISO 27001 Präferenz:\n• Finanzdienstleister und Banken nutzen ISO 27001 für internationale Regulierungskonformität\n• Fertigungsindustrie und Automotive-Sektor bevorzugen ISO 27001 für globale Lieferketten\n• Gesundheitswesen und Pharmaindustrie kombinieren ISO 27001 mit branchenspezifischen Standards\n• Kritische Infrastrukturen und Energieversorger implementieren ISO 27001 für systematisches Risikomanagement\n• Regierungsorganisationen und öffentlicher Sektor nutzen ISO 27001 für umfassende Informationssicherheit\n\n☁️ Branchen mit SOC 2 Fokus:\n• Cloud-Service-Provider und SaaS-Anbieter nutzen SOC 2 für Kundennachweise und Marktdifferenzierung\n• IT-Outsourcing und Managed Service Provider implementieren SOC 2 für Vertrauensbildung\n• Fintech-Unternehmen und Payment-Processor nutzen SOC 2 für US-Markterschließung\n• Data Analytics und Business Intelligence Anbieter verwenden SOC 2 für Datenschutznachweise\n• Cybersecurity-Dienstleister implementieren SOC 2 für Glaubwürdigkeit und Kundenvertrauen\n\n🌐 Geschäftsmodell-spezifische Überlegungen:\n• B2B-Service-Provider profitieren von SOC 2 für direkte Kundennachweise und Vertriebsunterstützung\n• Internationale Konzerne bevorzugen ISO 27001 für globale Standardisierung und Zertifizierung\n• Startup-Unternehmen wählen oft SOC 2 für schnellere Markteinführung und geringere Anfangsinvestitionen\n• Traditionelle Industrien nutzen ISO 27001 für umfassende Organisationsentwicklung\n• Digitale Plattformen und Marktplätze implementieren beide Standards für maximale Marktabdeckung\n\n🎯 Zielmarkt und Kundenanforderungen:\n• US-amerikanische Kunden erwarten häufig SOC 2 Attestation von Service-Providern\n• Europäische und internationale Märkte bevorzugen ISO 27001 Zertifizierung\n• Enterprise-Kunden fordern oft beide Standards für umfassende Due Diligence\n• Regulierte Industrien kombinieren ISO 27001 mit branchenspezifischen Compliance-Anforderungen\n• Öffentliche Ausschreibungen spezifizieren häufig ISO 27001 als Mindestanforderung\n\n📊 Strategische Marktpositionierung:\n• ISO 27001 signalisiert systematische Informationssicherheitsreife und internationale Standards\n• SOC 2 demonstriert operative Kontrollen und Transparenz für Service-Delivery\n• Beide Standards zusammen maximieren Marktchancen und Wettbewerbsdifferenzierung\n• ISO 27001 unterstützt Premium-Positionierung und Vertrauensbildung\n• SOC 2 ermöglicht schnelle Marktvalidierung und Kundenakquisition\n\n🔄 Evolutionäre Compliance-Strategien:\n• Viele Organisationen beginnen mit SOC 2 und erweitern später zu ISO 27001\n• Reife Unternehmen implementieren ISO 27001 als Basis und ergänzen mit SOC 2\n• Wachstumsunternehmen nutzen SOC 2 für schnelle Skalierung und Markterschließung\n• Etablierte Konzerne bevorzugen ISO 27001 für systematische Organisationsentwicklung\n• Internationale Expansion erfordert oft Ergänzung bestehender Standards"
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
