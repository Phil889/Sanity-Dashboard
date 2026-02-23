import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Maßnahmen page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-massnahmen" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Best Practices haben sich für die langfristige Aufrechterhaltung von ISO 27001 Maßnahmen bewährt?',
        answer: "Die langfristige Aufrechterhaltung von ISO 27001 Maßnahmen erfordert systematische Ansätze, die über die initiale Implementierung hinausgehen und kontinuierliche Verbesserung, Anpassungsfähigkeit und organisatorische Verankerung gewährleisten. Erfolgreiche Organisationen etablieren nachhaltige Strukturen und Prozesse.\n\n🔄 Kontinuierliche Verbesserungskultur:\n• Etablierung eines strukturierten PDCA-Zyklus mit regelmäßigen Review-Terminen\n• Integration von Lessons Learned aus Sicherheitsvorfällen in die Kontrolloptimierung\n• Aufbau einer Feedback-Kultur, die proaktive Verbesserungsvorschläge fördert\n• Implementierung von Innovation Labs für neue Sicherheitstechnologien\n• Regelmäßige Benchmarking-Aktivitäten mit Branchenführern\n\n📚 Wissensmanagement und Kompetenzentwicklung:\n• Aufbau eines zentralen Wissensmanagementsystems für Sicherheitsinformationen\n• Entwicklung interner Expertise durch kontinuierliche Weiterbildung\n• Etablierung von Mentoring-Programmen und Wissenstransfer-Initiativen\n• Schaffung von Communities of Practice für verschiedene Sicherheitsbereiche\n• Integration von externen Experten und Beratern für spezielle Themen\n\n🎯 Strategische Governance und Leadership:\n• Sicherstellung kontinuierlicher Unterstützung durch die Geschäftsführung\n• Integration von Sicherheitszielen in Unternehmensstrategie und KPIs\n• Aufbau von Security Champions Netzwerken in allen Geschäftsbereichen\n• Etablierung regelmäßiger Management Reviews mit strategischem Fokus\n• Entwicklung langfristiger Sicherheitsroadmaps und Investitionspläne"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie können ISO 27001 Maßnahmen zur Unterstützung von ESG-Zielen und nachhaltiger Unternehmensführung beitragen?',
        answer: "ISO 27001 Maßnahmen spielen eine zunehmend wichtige Rolle bei der Erreichung von ESG-Zielen und nachhaltiger Unternehmensführung, indem sie Governance-Strukturen stärken, soziale Verantwortung fördern und umweltbewusste Technologieentscheidungen unterstützen. Moderne Sicherheitsstrategien integrieren Nachhaltigkeitsaspekte systematisch.\n\n🏛️ Governance und Compliance Excellence:\n• Stärkung von Corporate Governance durch systematische Risikomanagement-Prozesse\n• Verbesserung der Transparenz und Rechenschaftspflicht gegenüber Stakeholdern\n• Integration von Sicherheits-KPIs in ESG-Reporting und Nachhaltigkeitsberichte\n• Aufbau von Compliance-Frameworks, die regulatorische Anforderungen übertreffen\n• Etablierung ethischer Geschäftspraktiken durch Sicherheits-Governance\n\n👥 Soziale Verantwortung und Stakeholder-Schutz:\n• Schutz von Kundendaten und Privatsphäre als soziale Verantwortung\n• Förderung von Diversität und Inklusion in Sicherheitsteams\n• Aufbau von Cybersecurity-Awareness in der Gesellschaft\n• Unterstützung von Bildungsinitiativen und Kompetenzentwicklung\n• Schutz kritischer Infrastrukturen für gesellschaftliche Stabilität\n\n🌱 Umweltbewusste Sicherheitstechnologien:\n• Implementierung energieeffizienter Sicherheitslösungen\n• Nutzung von Cloud-Services mit nachhaltigen Rechenzentren\n• Optimierung von Sicherheitsinfrastrukturen für reduzierten Energieverbrauch\n• Förderung von Remote Work durch sichere digitale Arbeitsplätze\n• Integration von Green IT Prinzipien in Sicherheitsarchitekturen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielen ISO 27001 Maßnahmen bei der Vorbereitung auf zukünftige regulatorische Anforderungen?',
        answer: "ISO 27001 Maßnahmen schaffen eine solide Grundlage für die Anpassung an zukünftige regulatorische Anforderungen, indem sie flexible, skalierbare und zukunftsorientierte Sicherheitsframeworks etablieren. Proaktive Organisationen nutzen ISO 27001 als strategische Plattform für Regulatory Readiness.\n\n🔮 Antizipation regulatorischer Trends:\n• Kontinuierliche Überwachung der regulatorischen Landschaft und emerging Regulations\n• Aufbau von Regulatory Intelligence Capabilities für frühzeitige Trendidentifikation\n• Teilnahme an Brancheninitiativen und Standardisierungsgremien\n• Entwicklung von Scenario Planning für verschiedene regulatorische Entwicklungen\n• Integration von Regulatory Impact Assessments in strategische Planung\n\n🏗️ Adaptive Compliance-Architektur:\n• Design modularer Compliance-Frameworks, die flexibel erweitert werden können\n• Implementierung von Compliance-as-Code Ansätzen für schnelle Anpassungen\n• Aufbau von API-basierten Compliance-Systemen für Integration neuer Anforderungen\n• Entwicklung von Template-basierten Ansätzen für neue Regulierungen\n• Etablierung von Cross-Jurisdictional Compliance Capabilities\n\n📊 Datengetriebene Compliance-Vorbereitung:\n• Aufbau umfassender Datensammlungs- und Analysefähigkeiten\n• Implementierung von Automated Evidence Collection für Audit-Readiness\n• Entwicklung von Predictive Compliance Analytics\n• Etablierung von Real-Time Compliance Dashboards\n• Integration von Machine Learning für Compliance Pattern Recognition\n\n🤝 Stakeholder-Engagement und Collaboration:\n• Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden\n• Teilnahme an Regulatory Sandboxes und Pilotprogrammen\n• Entwicklung von Industry Collaboration Frameworks\n• Etablierung von Regulatory Affairs Expertise\n• Integration von Legal Technology für Compliance Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie können Organisationen den ROI ihrer ISO 27001 Maßnahmen maximieren und den Geschäftswert demonstrieren?',
        answer: "Die Maximierung des ROI von ISO 27001 Maßnahmen erfordert strategische Ausrichtung, messbare Wertschöpfung und kontinuierliche Optimierung der Sicherheitsinvestitionen. Erfolgreiche Organisationen transformieren Sicherheit von einem Kostenfaktor zu einem Geschäftstreiber und Wettbewerbsvorteil.\n\n💰 Quantifizierbare Wertschöpfung:\n• Entwicklung umfassender ROI-Modelle, die direkte und indirekte Nutzen erfassen\n• Messung von Risikoreduktion durch vermiedene Sicherheitsvorfälle und deren Kosten\n• Quantifizierung von Effizienzsteigerungen durch automatisierte Sicherheitsprozesse\n• Bewertung von Compliance-Kosteneinsparungen und vermiedenen Strafen\n• Analyse von Versicherungsprämienreduktionen und verbesserten Konditionen\n\n🚀 Geschäftswert und Competitive Advantage:\n• Nutzung von Sicherheitszertifizierungen als Differentiator in Ausschreibungen\n• Erschließung neuer Märkte und Kunden durch nachgewiesene Sicherheitsstandards\n• Beschleunigung von Geschäftsprozessen durch vertrauensvolle Partnerschaften\n• Steigerung der Markenreputation und des Kundenvertrauens\n• Ermöglichung innovativer Geschäftsmodelle durch sichere digitale Plattformen\n\n📊 Performance Measurement und Optimization:\n• Implementierung von Security Value Dashboards für kontinuierliches Monitoring\n• Entwicklung von Business-aligned Security Metrics und KPIs\n• Aufbau von Benchmarking-Programmen für kontinuierliche Verbesserung\n• Integration von Value Stream Mapping für Sicherheitsprozesse\n• Etablierung von Continuous Improvement Zyklen basierend auf ROI-Analysen\n\n🎯 Strategische Integration und Alignment:\n• Ausrichtung von Sicherheitsinvestitionen auf Geschäftsstrategie und Prioritäten\n• Integration von Sicherheitszielen in Unternehmens-OKRs und Balanced Scorecards\n• Entwicklung von Business Case Methodologien für Sicherheitsprojekte\n• Aufbau von Security Business Partnership Modellen\n• Etablierung von Executive Reporting und Communication Strategien für Sicherheitswert"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
