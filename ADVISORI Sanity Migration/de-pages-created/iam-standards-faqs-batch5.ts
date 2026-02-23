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
    console.log('Updating IAM Standards page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-standards' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-standards" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche strategischen Überlegungen sind bei der Auswahl und Priorisierung von IAM-Standards für verschiedene Organisationstypen und Reifegrade erforderlich?',
        answer: "Die strategische Auswahl und Priorisierung von IAM-Standards erfordert eine ganzheitliche Bewertung von Organisationskontext, Geschäftszielen und technischer Reife, um eine optimale Balance zwischen Compliance-Anforderungen, Implementierungsaufwand und strategischem Nutzen zu erreichen. Diese Entscheidungen transformieren Standards von regulatorischen Pflichten zu strategischen Enablers für Geschäftswachstum und operative Exzellenz.\n\n🎯 Organizational Maturity Assessment:\n• Current State Analysis mit detaillierter Bewertung bestehender IAM-Capabilities und Governance-Strukturen\n• Maturity Model Mapping mit Einordnung der Organisation in etablierte IAM-Reifegradmodelle\n• Gap Analysis mit Identifikation kritischer Lücken zwischen Ist-Zustand und Standards-Anforderungen\n• Resource Capability Evaluation mit Bewertung verfügbarer Skills, Budget und technischer Infrastruktur\n• Change Readiness Assessment mit Analyse der organisatorischen Bereitschaft für Standards-Transformation\n\n🏢 Business Context und Strategic Alignment:\n• Industry Requirements mit Analyse branchenspezifischer Standards und regulatorischer Landschaften\n• Business Model Impact mit Bewertung, wie verschiedene Standards Geschäftsmodelle unterstützen oder behindern\n• Competitive Advantage Potential mit Identifikation von Standards als Differenzierungsfaktoren\n• Risk Tolerance Evaluation mit Abwägung zwischen Standards-Compliance und Geschäftsagilität\n• Growth Strategy Alignment mit Berücksichtigung zukünftiger Expansionspläne und Marktentwicklungen\n\n📊 Risk-based Prioritization Framework:\n• Regulatory Risk Assessment mit Priorisierung basierend auf Compliance-Dringlichkeit und Sanktionsrisiken\n• Business Impact Analysis mit Bewertung der Auswirkungen von Standards-Implementierung auf kritische Geschäftsprozesse\n• Technical Complexity Evaluation mit Einschätzung des Implementierungsaufwands verschiedener Standards\n• ROI Calculation mit quantitativer Bewertung von Kosten-Nutzen-Verhältnissen verschiedener Standards-Optionen\n• Timeline Feasibility mit realistischer Einschätzung von Implementierungszeiträumen und Abhängigkeiten\n\n🚀 Implementation Strategy Development:\n• Phased Rollout Planning mit strategischer Sequenzierung von Standards-Implementierungen\n• Quick Wins Identification mit Fokus auf Standards mit hohem Nutzen und geringem Implementierungsaufwand\n• Foundation Building mit Priorisierung grundlegender Standards als Basis für komplexere Frameworks\n• Pilot Programme mit risikoarmen Testumgebungen für neue Standards-Ansätze\n• Stakeholder Engagement mit systematischer Einbindung aller relevanten Interessensgruppen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie entwickelt man eine effektive Standards-Roadmap für IAM-Transformation und welche Faktoren beeinflussen die Timeline und Meilensteine?',
        answer: "Eine effektive Standards-Roadmap für IAM-Transformation verbindet strategische Vision mit praktischer Umsetzbarkeit und schafft einen strukturierten Pfad von der aktuellen Situation zu einer standards-konformen, zukunftssicheren IAM-Landschaft. Diese Roadmap fungiert als strategischer Kompass, der komplexe Transformationsprojekte in manageable Phasen unterteilt und dabei Flexibilität für sich ändernde Anforderungen bewahrt.\n\n🗺️ Strategic Roadmap Architecture:\n• Vision Definition mit klarer Artikulation der angestrebten Standards-Excellence und Geschäftsvorteile\n• Milestone Framework mit definierten Zwischenzielen und messbaren Erfolgsmetriken\n• Dependency Mapping mit Identifikation kritischer Abhängigkeiten zwischen verschiedenen Standards-Initiativen\n• Resource Allocation Planning mit strategischer Verteilung von Budget, Personal und technischen Ressourcen\n• Risk Mitigation Integration mit proaktiver Planung für potenzielle Hindernisse und Verzögerungen\n\n⏱️ Timeline Optimization und Critical Path Analysis:\n• Critical Path Identification mit Fokus auf zeitkritische Standards-Implementierungen\n• Parallel Execution Opportunities mit Identifikation von Standards, die gleichzeitig implementiert werden können\n• Buffer Time Integration mit realistischen Puffern für unvorhergesehene Komplexitäten\n• Regulatory Deadline Alignment mit Berücksichtigung externer Compliance-Fristen\n• Business Cycle Coordination mit Abstimmung auf Geschäftszyklen und kritische Betriebsperioden\n\n🎯 Milestone Definition und Success Metrics:\n• Quantitative KPIs mit messbaren Indikatoren für Standards-Compliance und Implementierungsfortschritt\n• Qualitative Assessments mit Bewertung von Governance-Reife und organisatorischer Transformation\n• Stakeholder Satisfaction Metrics mit regelmäßiger Bewertung der Zufriedenheit verschiedener Interessensgruppen\n• Business Value Realization mit Tracking der durch Standards-Implementierung erzielten Geschäftsvorteile\n• Risk Reduction Measurement mit Quantifizierung der Verbesserung der Sicherheits- und Compliance-Posture\n\n🔄 Adaptive Planning und Continuous Refinement:\n• Regular Review Cycles mit quartalsweisen Roadmap-Updates basierend auf Fortschritt und neuen Erkenntnissen\n• Scope Adjustment Mechanisms mit flexiblen Anpassungsmöglichkeiten für sich ändernde Anforderungen\n• Lessons Learned Integration mit kontinuierlicher Verbesserung basierend auf Implementierungserfahrungen\n• Technology Evolution Accommodation mit Berücksichtigung neuer Standards und technologischer Entwicklungen\n• Stakeholder Feedback Integration mit regelmäßiger Einbindung von User-Input und Business-Requirements"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielen externe Partner, Berater und Technologieanbieter bei der erfolgreichen Implementierung von IAM-Standards und wie wählt man die richtigen Partner aus?',
        answer: "Externe Partner, Berater und Technologieanbieter spielen eine entscheidende Rolle bei der erfolgreichen IAM-Standards-Implementierung, indem sie spezialisierte Expertise, bewährte Methoden und technologische Lösungen bereitstellen, die interne Capabilities ergänzen und Implementierungsrisiken reduzieren. Die strategische Auswahl und das Management dieser Partnerschaften kann den Unterschied zwischen erfolgreicher Transformation und kostspieligen Fehlschlägen ausmachen.\n\n🤝 Strategic Partnership Framework:\n• Capability Gap Analysis mit Identifikation spezifischer Bereiche, in denen externe Expertise erforderlich ist\n• Partnership Strategy Definition mit klarer Abgrenzung zwischen strategischen und taktischen Partnerschaften\n• Value Proposition Assessment mit Bewertung des erwarteten Mehrwerts verschiedener Partner-Kategorien\n• Risk Sharing Models mit strukturierten Ansätzen zur Risikoteilung zwischen Organisation und Partnern\n• Long-term Relationship Planning mit Berücksichtigung zukünftiger Entwicklungen und Erweiterungsmöglichkeiten\n\n🔍 Partner Selection Criteria und Due Diligence:\n• Standards Expertise Evaluation mit detaillierter Bewertung der Partner-Erfahrung in relevanten Standards-Frameworks\n• Track Record Analysis mit Untersuchung erfolgreicher Implementierungen in vergleichbaren Organisationen\n• Technical Competency Assessment mit Validierung der technischen Fähigkeiten und Zertifizierungen\n• Cultural Fit Evaluation mit Bewertung der Kompatibilität von Arbeitsweisen und Unternehmenskulturen\n• Financial Stability Review mit Analyse der finanziellen Solidität und Geschäftskontinuität der Partner\n\n📋 Engagement Models und Service Delivery:\n• Consulting Services mit strategischer Beratung für Standards-Auswahl und Implementierungsplanung\n• Implementation Support mit hands-on Unterstützung bei der technischen Umsetzung\n• Managed Services mit ausgelagerten Betrieb und Wartung standards-konformer IAM-Systeme\n• Training und Knowledge Transfer mit systematischer Kompetenzentwicklung interner Teams\n• Ongoing Support mit kontinuierlicher Betreuung und Optimierung nach der Implementierung\n\n⚖️ Contract Management und Performance Governance:\n• SLA Definition mit klaren Service-Level-Agreements und Performance-Metriken\n• Intellectual Property Protection mit Schutz organisatorischer Daten und Geschäftsgeheimnisse\n• Change Management Procedures mit strukturierten Prozessen für Scope-Änderungen und Anpassungen\n• Quality Assurance Frameworks mit regelmäßigen Reviews und Performance-Bewertungen\n• Exit Strategy Planning mit klaren Verfahren für Partnerschaftsbeendigung und Wissenstransfer"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie gewährleistet man langfristige Nachhaltigkeit und kontinuierliche Evolution von IAM-Standards-Implementierungen in sich schnell verändernden Technologie- und Regulierungslandschaften?',
        answer: "Langfristige Nachhaltigkeit und kontinuierliche Evolution von IAM-Standards-Implementierungen erfordern adaptive Governance-Strukturen, proaktive Technologie-Überwachung und kulturelle Verankerung von Standards-Excellence, die es Organisationen ermöglichen, auf Veränderungen zu reagieren, ohne die Grundlagen ihrer Compliance-Posture zu gefährden. Diese Nachhaltigkeit transformiert Standards von statischen Compliance-Checklisten zu dynamischen, sich entwickelnden Frameworks für kontinuierliche Verbesserung.\n\n🔄 Adaptive Governance und Continuous Improvement:\n• Standards Evolution Monitoring mit systematischer Überwachung von Änderungen in relevanten Standards und Frameworks\n• Regular Assessment Cycles mit quartalsweisen Reviews der Standards-Compliance und Effectiveness\n• Feedback Loop Integration mit strukturierten Mechanismen zur Sammlung und Integration von Stakeholder-Input\n• Performance Optimization mit kontinuierlicher Verbesserung basierend auf Metriken und Erfahrungen\n• Innovation Integration mit systematischer Evaluation und Adoption neuer Standards-Ansätze\n\n🚀 Technology Evolution Management:\n• Emerging Technology Assessment mit proaktiver Bewertung neuer Technologien auf Standards-Impact\n• Architecture Flexibility mit modularen, erweiterbaren Designs für zukünftige Anpassungen\n• Vendor Relationship Management mit strategischen Partnerschaften für kontinuierliche Innovation\n• Proof of Concept Programmes mit risikoarmen Tests neuer Standards-konformer Technologien\n• Technology Roadmap Alignment mit Abstimmung zwischen Standards-Evolution und Technologie-Strategie\n\n📚 Knowledge Management und Organizational Learning:\n• Expertise Development mit kontinuierlicher Weiterbildung interner Teams zu Standards-Entwicklungen\n• Best Practice Documentation mit systematischer Erfassung und Sharing von Lessons Learned\n• Community Engagement mit aktiver Teilnahme an Standards-Communities und Industry-Groups\n• Internal Knowledge Sharing mit regelmäßigen Workshops und Cross-functional Collaboration\n• Succession Planning mit Sicherstellung der Kontinuität kritischer Standards-Expertise\n\n🌐 Ecosystem Integration und Future-Proofing:\n• Industry Collaboration mit strategischen Allianzen für gemeinsame Standards-Entwicklung\n• Regulatory Engagement mit proaktiver Kommunikation mit Aufsichtsbehörden und Standards-Organisationen\n• Cross-industry Learning mit Wissensaustausch über Branchengrenzen hinweg\n• Global Standards Harmonization mit Berücksichtigung internationaler Standards-Entwicklungen\n• Innovation Labs mit experimentellen Umgebungen für Standards-Innovation und -Testing"
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
