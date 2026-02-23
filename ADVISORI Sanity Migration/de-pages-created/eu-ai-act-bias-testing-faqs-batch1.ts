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
    console.log('Updating EU AI Act Bias Testing page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-bias-testing' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-bias-testing" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist systematisches Bias Testing für unser Unternehmen strategisch entscheidend und welche Geschäftsrisiken entstehen durch diskriminierende KI-Systeme?",
        answer: "Bias Testing ist für moderne Unternehmen weit mehr als eine regulatorische Compliance-Anforderung – es ist ein fundamentaler Baustein für nachhaltigen Geschäftserfolg und gesellschaftliche Verantwortung. Diskriminierende KI-Systeme können nicht nur erhebliche rechtliche und finanzielle Risiken verursachen, sondern auch das Markenvertrauen und die langfristige Geschäftsfähigkeit gefährden.\n\n⚠️ Kritische Geschäftsrisiken durch ungetestete Bias-Anfälligkeit:\n• Regulatorische Sanktionen: EU AI Act-Verstöße durch diskriminierende KI können zu Geldstrafen von bis zu 7% des weltweiten Jahresumsatzes führen\n• Reputationsschäden: Öffentliche Kontroversen über unfaire Algorithmen können dauerhaften Markenschaden und Vertrauensverlust verursachen\n• Rechtliche Haftungsrisiken: Diskriminierungsvorwürfe können zu kostspieligen Rechtsstreitigkeiten und Schadenersatzforderungen führen\n• Marktausschluss: Unfaire KI-Systeme können zu Geschäftsverboten in kritischen Märkten und Kundensegmenten führen\n• Talentabwanderung: Ethisch problematische KI-Praktiken können hochqualifizierte Mitarbeiter abschrecken und das Employer Branding schädigen\n\n🎯 Strategische Vorteile systematischen Bias Testings:\n• Vertrauensbildung: Nachweislich faire KI-Systeme schaffen Vertrauen bei Kunden, Partnern und Stakeholdern\n• Marktdifferenzierung: Ethisch verantwortliche KI positioniert Ihr Unternehmen als Qualitäts- und Vertrauensführer\n• Risikominimierung: Proaktive Bias-Detection verhindert kostspielige Post-Launch-Probleme und Krisensituationen\n• Innovationsförderung: Systematische Fairness-Tests verbessern die Qualität und Robustheit Ihrer KI-Entwicklung\n\n🛡️ ADVISORIs ganzheitlicher Bias-Testing-Ansatz:\n• Präventive Risikoanalyse: Früherkennung von Bias-Risiken bereits in der Entwicklungsphase\n• Multi-dimensionale Fairness-Bewertung: Umfassende Tests verschiedener Diskriminierungsdimensionen und intersektionaler Effekte\n• Business-integrierte Lösungen: Bias-Testing-Strategien, die nahtlos in Ihre Geschäftsprozesse und KPIs integriert werden\n• Kontinuierliche Überwachung: Implementierung dauerhafter Monitoring-Systeme für langfristige Fairness-Sicherung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir Bias Testing als strategisches Instrument zur Stärkung unserer Marktposition und Vertrauensbildung nutzen, während wir gleichzeitig Innovation und Performance optimieren?",
        answer: "Bias Testing sollte nicht als innovationshemmende Compliance-Hürde, sondern als strategischer Enabler für vertrauenswürdige Innovation und Marktführerschaft verstanden werden. Ein systematischer Fairness-Ansatz kann gleichzeitig die KI-Performance verbessern, Vertrauen schaffen und neue Geschäftsmöglichkeiten eröffnen.\n\n🚀 Innovation durch strategisches Bias Testing:\n• Qualitätsgetriebene Entwicklung: Systematische Fairness-Tests führen zu robusteren und zuverlässigeren KI-Systemen mit verbesserter Generalisierungsfähigkeit\n• Datenqualitäts-Optimierung: Bias-Detection identifiziert Datenprobleme und führt zu besseren Trainingsdatensätzen und Modellperformance\n• Algorithmus-Verbesserung: Fairness-Constraints fördern die Entwicklung innovativer Algorithmen mit überlegener Performance\n• Markt-Expansion: Bias-freie KI ermöglicht die sichere Erschließung diverser Märkte und Kundensegmente\n\n💎 Vertrauensbildung als Wettbewerbsvorteil:\n• Transparenz-Leadership: Offene Kommunikation über Fairness-Tests positioniert Ihr Unternehmen als Vertrauensführer\n• Stakeholder-Engagement: Systematische Bias-Bewertung schafft Vertrauen bei Investoren, Kunden und Regulatoren\n• Ethik-Branding: Nachweislich faire KI wird zum differenzierenden Markenattribut in qualitätsbewussten Märkten\n• Partnerschafts-Förderung: Vertrauenswürdige KI erleichtert strategische Partnerschaften und Kooperationen\n\n⚖️ Performance-Fairness-Optimierung:\n• Balanced Scorecard-Ansatz: Integration von Fairness-Metriken in Performance-KPIs für ganzheitliche Optimierung\n• Multi-objektive Optimierung: Entwicklung von Algorithmen, die sowohl Performance als auch Fairness maximieren\n• Adaptive Systeme: Implementation intelligenter Bias-Mitigation, die Performance-Einbußen minimiert\n• Langzeit-Performance: Faire Systeme zeigen oft bessere Langzeit-Performance durch reduzierte Drift-Anfälligkeit\n\n🎯 ADVISORIs strategischer Fairness-Ansatz:\n• Business-Value Integration: Verknüpfung von Bias-Testing mit messbaren Geschäftsergebnissen und ROI-Metriken\n• Innovation Labs: Schaffung geschützter Experimentierräume für fairness-optimierte KI-Innovation\n• Stakeholder-Kommunikation: Entwicklung transparenter Fairness-Reporting-Systeme für verschiedene Zielgruppen\n• Kontinuierliche Verbesserung: Etablierung lernender Bias-Testing-Systeme, die sich kontinuierlich weiterentwickeln"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Maßnahmen und Investitionen sind erforderlich, um eine umfassende Bias-Testing-Strategie in unserem Unternehmen zu implementieren und welchen ROI können wir erwarten?",
        answer: "Die Implementierung einer umfassenden Bias-Testing-Strategie erfordert strategische Investitionen in Technologie, Prozesse und Kompetenzentwicklung. Diese Investitionen zahlen sich jedoch durch Risikominimierung, Qualitätsverbesserung und Marktvorteile oft bereits mittelfristig aus.\n\n💰 Strategische Investitionsbereiche für Bias Testing:\n• Technologie-Infrastructure: Implementation automatisierter Bias-Detection-Tools, Fairness-Monitoring-Systeme und Dashboard-Lösungen für kontinuierliche Überwachung\n• Kompetenzaufbau: Entwicklung interner Expertise durch Schulungen, Zertifizierungen und Rekrutierung spezialisierter Fairness-Engineers und Data Scientists\n• Prozess-Integration: Redesign von ML-Pipelines zur nahtlosen Integration von Bias-Testing in alle Entwicklungsphasen\n• Governance-Strukturen: Etablierung von Fairness-Committees, Ethics Boards und klaren Verantwortlichkeiten für Bias-Management\n• Datenmanagement: Investitionen in diverse, repräsentative Datensätze und Bias-Audit-fähige Datenarchitekturen\n\n📊 Messbare ROI-Dimensionen:\n• Risikominimierung: Vermeidung regulatorischer Strafen (potentiell Millionen Euro), Rechtskosten und Reputationsschäden\n• Qualitätsverbesserung: Reduzierte Fehlerkosten, verbesserte Kundenzufriedenheit und erhöhte Systemzuverlässigkeit\n• Marktvorteile: Erschließung neuer Kundensegmente, Premium-Pricing für vertrauenswürdige KI und Wettbewerbsdifferenzierung\n• Operationale Effizienz: Reduzierte Nachbesserungskosten, weniger Krisenbewältigung und optimierte Entwicklungszyklen\n• Stakeholder-Value: Erhöhtes Investorenvertrauen, verbesserte ESG-Ratings und gestärkte Employer-Brand\n\n⏱️ Implementierungs-Roadmap:\n• Phase 1 (Monate 1-3): Baseline-Assessment, Tool-Evaluation und erste Bias-Tests in Pilotprojekten\n• Phase 2 (Monate 4-6): Rollout automatisierter Testing-Frameworks und Integration in CI/CD-Pipelines\n• Phase 3 (Monate 7-12): Vollständige Prozess-Integration, Governance-Etablierung und kontinuierliches Monitoring\n• Phase 4 (Ongoing): Kontinuierliche Optimierung, Advanced Analytics und strategische Weiterentwicklung\n\n🎯 ADVISORIs ROI-optimierter Implementierungsansatz:\n• Phased Rollout: Schrittweise Implementierung mit schnellen Wins und messbaren Zwischenergebnissen\n• Tool-Integration: Maximale Nutzung bestehender Infrastrukturen zur Kostenoptimierung\n• Training-as-a-Service: Effiziente Kompetenzentwicklung durch maßgeschneiderte Schulungsprogramme\n• Success Metrics: Etablierung klarer KPIs und ROI-Tracking für kontinuierliche Erfolgsmessung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir Bias Testing in unsere bestehenden KI-Governance-Strukturen integrieren und eine Kultur der verantwortlichen KI-Entwicklung in unserem Unternehmen etablieren?",
        answer: "Die Integration von Bias Testing in bestehende Governance-Strukturen und die Etablierung einer Kultur verantwortlicher KI-Entwicklung erfordern einen systematischen Change-Management-Ansatz, der technische Exzellenz mit organisatorischer Transformation verbindet.\n\n🏗️ Governance-Integration und Strukturelle Verankerung:\n• Executive Sponsorship: Etablierung von C-Level Verantwortlichkeiten für KI-Fairness mit klaren Accountability-Strukturen\n• Cross-funktionale Teams: Bildung interdisziplinärer Bias-Testing-Teams aus Technik, Legal, Compliance und Business-Stakeholdern\n• Policy-Integration: Einbettung von Fairness-Anforderungen in bestehende KI-Governance-Policies und Risikomanagementsysteme\n• Audit-Strukturen: Integration von Bias-Assessments in interne und externe Audit-Zyklen\n• Reporting-Mechanismen: Etablierung regelmäßiger Fairness-Reports an Vorstand und Aufsichtsgremien\n\n🌱 Kulturwandel und Mitarbeiter-Engagement:\n• Awareness-Programme: Umfassende Schulungen über KI-Ethik, Bias-Risiken und gesellschaftliche Verantwortung\n• Incentive-Alignment: Integration von Fairness-Metriken in Performance-Bewertungen und Bonussysteme\n• Innovation-Förderung: Schaffung von Innovationsräumen für ethische KI-Entwicklung und Bias-Mitigation-Forschung\n• Community Building: Etablierung interner Fairness-Communities und Best-Practice-Sharing-Plattformen\n• Externe Vernetzung: Teilnahme an Brancheninitiativen und Thought Leadership in verantwortlicher KI\n\n🔄 Prozess-Integration und Operationalisierung:\n• DevOps-Integration: Einbettung automatisierter Bias-Tests in CI/CD-Pipelines und Deployment-Prozesse\n• Quality Gates: Etablierung von Fairness-Checkpoints in allen Projektphasen von Konzeption bis Produktion\n• Documentation Standards: Entwicklung standardisierter Bias-Testing-Dokumentation und Compliance-Nachweise\n• Incident Response: Aufbau spezialisierter Response-Teams für Bias-related Incidents und Krisensituationen\n• Continuous Learning: Implementation von Feedback-Loops zur kontinuierlichen Verbesserung der Bias-Testing-Praktiken\n\n🎭 Change Management und Adoption-Strategien:\n• Stakeholder-Mapping: Identifikation und gezieltes Engagement aller relevanten internen und externen Stakeholder\n• Communication Strategy: Entwicklung klarer Botschaften über den Business-Value und die strategische Bedeutung von Bias Testing\n• Quick Wins: Identifikation und Kommunikation früher Erfolge zur Momentum-Bildung\n• Resistance Management: Proaktive Adressierung von Widerständen und Bedenken durch transparente Kommunikation\n\n🛡️ ADVISORIs Kulturwandel-Begleitung:\n• Assessment & Roadmapping: Analyse der aktuellen Organisationskultur und Entwicklung maßgeschneiderter Transformationspläne\n• Leadership Development: Spezialisierte Programme zur Entwicklung ethischer KI-Leadership-Kompetenzen\n• Organizational Design: Optimierung von Strukturen, Prozessen und Rollen für nachhaltige Fairness-Integration\n• Success Measurement: Entwicklung kultureller KPIs und regelmäßige Fortschrittsmessung des Kulturwandels"
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
