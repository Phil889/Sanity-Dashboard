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
    console.log('Updating Aufbau interner KI-Kompetenzen page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'aufbau-interner-ki-kompetenzen' })
    
    if (!existingDoc) {
      throw new Error('Document "aufbau-interner-ki-kompetenzen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Leadership-Development-Programme entwickelt ADVISORI speziell für Führungskräfte im Kontext des KI-Kompetenzaufbaus und wie werden C-Level-Executives auf ihre Rolle als KI-Champions vorbereitet?',
        answer: "ADVISORI entwickelt spezialisierte Leadership-Development-Programme, die Führungskräfte nicht nur zu kompetenten KI-Anwendern, sondern zu visionären KI-Champions transformieren. Unsere Executive-Programme kombinieren strategisches KI-Verständnis mit praktischer Führungskompetenz und befähigen C-Level-Executives, KI-Transformation erfolgreich zu orchestrieren und zu skalieren.\n\n🎯 Executive KI-Leadership Transformation:\n• Strategic AI Vision Development: Entwicklung der Fähigkeit, KI-Potenziale in langfristige Geschäftsstrategien zu übersetzen und organisationsweite KI-Visionen zu artikulieren.\n• AI-Driven Decision Making: Schulung in datengetriebener Entscheidungsfindung und der Integration von KI-Insights in strategische Geschäftsentscheidungen.\n• Digital Leadership Competencies: Aufbau von Führungskompetenzen für die Leitung digitaler Transformationen und KI-getriebener Organisationsveränderungen.\n• Stakeholder Communication: Entwicklung der Fähigkeit, KI-Strategien und -Werte gegenüber Investoren, Kunden und internen Teams zu kommunizieren.\n\n🚀 C-Level KI-Champion Development:\n• Board-Level AI Governance: Schulung in der Etablierung und Führung von KI-Governance-Strukturen auf Vorstandsebene.\n• Risk und Opportunity Assessment: Entwicklung von Kompetenzen zur Bewertung von KI-Risiken und -Chancen aus strategischer Perspektive.\n• Innovation Leadership: Befähigung zur Führung von KI-Innovationsinitiativen und zur Schaffung einer experimentierfreudigen Organisationskultur.\n• Cross-Functional AI Integration: Kompetenzaufbau für die Integration von KI-Strategien über alle Geschäftsbereiche hinweg.\n\n💡 Praktische Leadership-Anwendung:\n• Executive Simulation Exercises: Realistische Szenarien und Planspiele für die Anwendung von KI-Leadership-Prinzipien in komplexen Geschäftssituationen.\n• Peer Learning Networks: Aufbau von Netzwerken zwischen KI-erfahrenen Führungskräften für kontinuierlichen Erfahrungsaustausch.\n• Mentorship und Coaching: Individualisierte Betreuung durch erfahrene KI-Leader für persönliche Entwicklung und strategische Beratung.\n• Action Learning Projects: Reale KI-Projekte als Lernvehikel für die praktische Anwendung von Leadership-Kompetenzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie etabliert ADVISORI effektive Governance-Strukturen für KI-Kompetenzen und welche Frameworks nutzen wir für nachhaltiges KI-Governance und Compliance-Management?',
        answer: "ADVISORI entwickelt umfassende KI-Governance-Strukturen, die nicht nur regulatorische Compliance gewährleisten, sondern auch als strategische Enabler für verantwortungsvolle Innovation fungieren. Unsere Governance-Frameworks integrieren technische Exzellenz mit ethischen Prinzipien und schaffen nachhaltige Strukturen für langfristige KI-Kompetenzentwicklung und -anwendung.\n\n🏛️ Multi-Level Governance Architecture:\n• Strategic Governance Layer: Etablierung von KI-Steering-Committees und Executive-Oversight-Strukturen für strategische Entscheidungsfindung.\n• Operational Governance Layer: Implementierung von Prozessen und Kontrollen für die tägliche KI-Entwicklung und -Anwendung.\n• Technical Governance Layer: Aufbau technischer Standards, Qualitätssicherung und Architektur-Governance für KI-Systeme.\n• Compliance Governance Layer: Integration regulatorischer Anforderungen und Audit-Strukturen in alle Governance-Ebenen.\n\n📋 Comprehensive Compliance Frameworks:\n• Regulatory Mapping und Monitoring: Kontinuierliche Überwachung sich entwickelnder KI-Regulierung und proaktive Anpassung der Compliance-Strukturen.\n• Risk Assessment und Mitigation: Systematische Identifikation, Bewertung und Minderung von KI-bezogenen Risiken auf allen Organisationsebenen.\n• Audit und Assurance: Etablierung interner und externer Audit-Prozesse für kontinuierliche Compliance-Validierung.\n• Documentation und Reporting: Umfassende Dokumentationsstandards und Reporting-Mechanismen für Transparenz und Nachvollziehbarkeit.\n\n🔄 Adaptive Governance Evolution:\n• Continuous Improvement Cycles: Regelmäßige Überprüfung und Anpassung der Governance-Strukturen basierend auf Erfahrungen und sich ändernden Anforderungen.\n• Stakeholder Engagement: Integration verschiedener Stakeholder-Perspektiven in Governance-Entscheidungen für ganzheitliche Betrachtung.\n• Innovation-Friendly Governance: Balance zwischen notwendiger Kontrolle und Flexibilität für Innovation und Experimentierung.\n• Cross-Industry Learning: Integration von Best Practices und Lessons Learned aus verschiedenen Branchen und Anwendungsbereichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche spezifischen Ethik-Training-Programme und verantwortungsvolle KI-Nutzungs-Frameworks implementiert ADVISORI für verschiedene Organisationsebenen?',
        answer: "ADVISORI entwickelt differenzierte Ethik-Training-Programme, die verantwortungsvolle KI-Nutzung nicht als Compliance-Übung, sondern als Wettbewerbsvorteil und Innovationstreiber positionieren. Unsere Frameworks integrieren ethische Überlegungen in alle Aspekte der KI-Entwicklung und -Anwendung und schaffen eine Kultur der verantwortungsvollen Innovation.\n\n🧭 Rollenspezifische Ethik-Kompetenzentwicklung:\n• Executive Ethics Leadership: Strategische Ethik-Frameworks für Führungskräfte zur Integration ethischer Überlegungen in Geschäftsentscheidungen.\n• Technical Ethics Implementation: Praktische Schulungen für Entwickler und Data Scientists zur Implementierung ethischer Prinzipien in KI-Systemen.\n• Business Ethics Application: Ethik-Training für Fachbereiche zur verantwortungsvollen Identifikation und Spezifikation von KI-Use-Cases.\n• Legal und Compliance Ethics: Spezialisierte Programme für Rechts- und Compliance-Teams zur Navigation ethischer und rechtlicher Komplexitäten.\n\n⚖️ Comprehensive Ethical AI Frameworks:\n• Fairness und Bias Mitigation: Systematische Ansätze zur Identifikation, Bewertung und Minderung von Algorithmus-Bias und Diskriminierung.\n• Transparency und Explainability: Entwicklung von Fähigkeiten zur Schaffung nachvollziehbarer und erklärbarer KI-Systeme.\n• Privacy und Data Protection: Integration von Datenschutzprinzipien in alle Aspekte der KI-Entwicklung und -Anwendung.\n• Human-AI Collaboration: Frameworks für die ethische Gestaltung der Zusammenarbeit zwischen Menschen und KI-Systemen.\n\n🌍 Gesellschaftliche Verantwortung und Impact:\n• Social Impact Assessment: Methoden zur Bewertung und Optimierung der gesellschaftlichen Auswirkungen von KI-Projekten.\n• Stakeholder Engagement: Prozesse zur Einbindung verschiedener Interessengruppen in ethische Entscheidungsfindung.\n• Continuous Ethical Monitoring: Etablierung von Systemen zur kontinuierlichen Überwachung und Verbesserung ethischer KI-Praktiken.\n• Global Ethics Standards: Integration internationaler ethischer Standards und Best Practices in lokale Implementierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie integriert ADVISORI Compliance-Aspekte in die KI-Kompetenzentwicklung und welche spezifischen Schulungen bieten wir für regulatorische Anforderungen wie die EU-KI-Verordnung?',
        answer: "ADVISORI integriert Compliance nicht als nachgelagerte Überlegung, sondern als fundamentales Design-Prinzip in alle Aspekte der KI-Kompetenzentwicklung. Unsere Compliance-Integration schafft nicht nur rechtliche Sicherheit, sondern auch Wettbewerbsvorteile durch proaktive Vorbereitung auf regulatorische Entwicklungen und die Etablierung von Compliance als Qualitätsmerkmal.\n\n📜 Regulatory Readiness und Proactive Compliance:\n• EU AI Act Implementation: Umfassende Schulungen zur praktischen Umsetzung der EU-KI-Verordnung mit Fokus auf Risikoklassifizierung und Compliance-Anforderungen.\n• DSGVO-AI Integration: Spezialisierte Programme zur Integration von Datenschutzanforderungen in KI-Entwicklungsprozesse.\n• Sector-Specific Regulations: Branchenspezifische Compliance-Schulungen für regulierte Industrien wie Finanzdienstleistungen, Gesundheitswesen und Automobilindustrie.\n• International Compliance Coordination: Navigation komplexer internationaler Regulierungslandschaften für global agierende Unternehmen.\n\n🔍 Practical Compliance Implementation:\n• Risk Assessment Methodologies: Entwicklung von Fähigkeiten zur systematischen Bewertung von KI-Risiken entsprechend regulatorischer Frameworks.\n• Documentation und Audit Trails: Schulungen zur Erstellung compliance-konformer Dokumentation und Nachweisführung.\n• Conformity Assessment Procedures: Praktische Anleitung zur Durchführung von Konformitätsbewertungen und CE-Kennzeichnung.\n• Incident Response und Reporting: Entwicklung von Kompetenzen für den Umgang mit Compliance-Vorfällen und regulatorischen Meldepflichten.\n\n🚀 Compliance als Competitive Advantage:\n• Compliance-by-Design Principles: Integration von Compliance-Überlegungen in den gesamten KI-Entwicklungszyklus von der Konzeption bis zur Implementierung.\n• Automated Compliance Monitoring: Entwicklung von Fähigkeiten zur Automatisierung von Compliance-Überwachung und -Reporting.\n• Stakeholder Communication: Schulungen zur effektiven Kommunikation von Compliance-Maßnahmen gegenüber Regulierungsbehörden, Kunden und Partnern.\n• Continuous Regulatory Intelligence: Aufbau von Kompetenzen zur kontinuierlichen Überwachung und Antizipation regulatorischer Entwicklungen."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
