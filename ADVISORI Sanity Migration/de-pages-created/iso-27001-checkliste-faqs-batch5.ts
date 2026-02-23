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
    console.log('Updating ISO 27001 Checkliste page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-checkliste" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie können Checklisten bei der ISO 27001 Awareness und Training-Programme unterstützen?',
        answer: "ISO 27001 Checklisten sind fundamentale Instrumente für strukturierte Awareness-Programme und effektive Training-Implementierung. Sie gewährleisten systematische Kompetenzentwicklung, messbare Lernfortschritte und nachhaltige Sicherheitskultur-Transformation.\n\n🎯 Strukturierte Training-Planung:\n• Rollenspezifische Training-Checklisten für zielgruppengerechte Schulungsprogramme\n• Kompetenz-Assessment-Frameworks für systematische Skill-Gap-Analyse\n• Learning-Path-Definition mit progressiven Qualifikationsstufen\n• Training-Content-Validation für standardkonforme Schulungsinhalte\n• Certification-Tracking für kontinuierliche Qualifikations-Überwachung\n\n📚 Content-Development und Delivery:\n• Curriculum-Design-Checklisten für umfassende Schulungsprogramm-Entwicklung\n• Interactive-Learning-Integration für moderne Trainingsmethoden\n• Assessment-Design für objektive Lernerfolgsmessung\n• Multi-Modal-Delivery für verschiedene Lerntypen und Präferenzen\n• Continuous-Update-Mechanisms für aktuelle Schulungsinhalte\n\n🔄 Performance-Monitoring und Improvement:\n• Training-Effectiveness-Measurement für quantitative Erfolgsvalidierung\n• Behavioral-Change-Tracking für nachhaltige Kulturveränderung\n• Feedback-Integration für kontinuierliche Programm-Optimierung\n• ROI-Calculation für Training-Investment-Rechtfertigung\n• Long-term-Impact-Assessment für strategische Programm-Bewertung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Zukunftstrends beeinflussen die Entwicklung von ISO 27001 Checklisten?',
        answer: "Die Entwicklung von ISO 27001 Checklisten wird durch technologische Innovation, regulatorische Evolution und sich wandelnde Bedrohungslandschaften geprägt. Zukunftstrends erfordern adaptive Checklisten-Architekturen und proaktive Integration emerging Technologies.\n\n🤖 AI und Machine Learning Integration:\n• Intelligent-Automation für adaptive Checklisten-Generierung basierend auf Organisationskontext\n• Predictive-Analytics für proaktive Risiko-Identifikation und präventive Maßnahmen\n• Natural-Language-Processing für automatisierte Compliance-Dokumentation\n• Machine-Learning-basierte Pattern-Recognition für Anomalie-Detection\n• AI-gestützte Decision-Support für optimale Kontrollmaßnahmen-Auswahl\n\n🌐 Cloud-Native und DevSecOps Integration:\n• Container-Security-Checklisten für moderne Anwendungsarchitekturen\n• Infrastructure-as-Code-Compliance für automatisierte Sicherheitskonfiguration\n• Continuous-Compliance-Monitoring für agile Entwicklungsumgebungen\n• API-Security-Frameworks für Microservices-Architekturen\n• Zero-Trust-Architecture-Integration für moderne Sicherheitsmodelle\n\n🔮 Emerging Regulatory Requirements:\n• Quantum-Computing-Readiness für zukünftige Verschlüsselungsanforderungen\n• Sustainability-Compliance für umweltbezogene Informationssicherheit\n• Digital-Identity-Standards für erweiterte Authentifizierungsanforderungen\n• Cross-Border-Data-Governance für internationale Compliance-Harmonisierung\n• Ethical-AI-Integration für verantwortungsvolle KI-Nutzung in Sicherheitskontexten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie können kleine und mittlere Unternehmen ISO 27001 Checklisten effektiv nutzen?',
        answer: "Kleine und mittlere Unternehmen können ISO 27001 Checklisten durch skalierbare Ansätze, Ressourcen-optimierte Implementierung und pragmatische Priorisierung effektiv nutzen. Erfolgreiche KMU-Implementierungen erfordern angepasste Strategien und kosteneffiziente Lösungen.\n\n💡 Skalierbare Implementierungsstrategien:\n• Phased-Approach mit priorisierten Quick-Wins für schnelle Erfolge\n• Risk-Based-Prioritization für fokussierte Ressourcenallokation\n• Outsourcing-Integration für spezialisierte Expertise ohne interne Kapazitätserweiterung\n• Cloud-Based-Solutions für kosteneffiziente Technologie-Adoption\n• Collaborative-Approaches mit anderen KMUs für Ressourcen-Sharing\n\n🎯 Pragmatische Checklisten-Anpassung:\n• Simplified-Templates für KMU-spezifische Anforderungen\n• Cost-Effective-Controls-Focus auf wesentliche Sicherheitsmaßnahmen\n• Automation-Opportunities für Effizienzsteigerung bei begrenzten Ressourcen\n• Vendor-Management-Simplification für reduzierte Komplexität\n• Documentation-Streamlining für minimalen administrativen Aufwand\n\n📈 Sustainable Growth Planning:\n• Scalability-Design für zukünftiges Unternehmenswachstum\n• Modular-Implementation für schrittweise Erweiterung\n• Investment-Prioritization für optimale ROI-Maximierung\n• Partnership-Strategies für erweiterte Capabilities\n• Continuous-Learning-Integration für interne Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Erfolgsfaktoren sind entscheidend für die langfristige Wirksamkeit von ISO 27001 Checklisten?',
        answer: "Langfristige Wirksamkeit von ISO 27001 Checklisten erfordert strategische Planung, kontinuierliche Adaptation und nachhaltige Governance-Strukturen. Erfolgsfaktoren umfassen organisatorische Verankerung, technologische Evolution und kulturelle Transformation.\n\n🏗️ Strategische Organisationsverankerung:\n• Executive-Sponsorship für nachhaltige Unterstützung und Ressourcenbereitstellung\n• Cross-Functional-Integration für ganzheitliche Sicherheitskultur\n• Performance-Management-Integration für individuelle Accountability\n• Strategic-Alignment mit Geschäftszielen und Unternehmensstrategie\n• Long-term-Vision-Development für zukunftsorientierte Sicherheitsarchitektur\n\n🔄 Adaptive Governance und Evolution:\n• Continuous-Improvement-Culture für systematische Optimierung\n• Change-Management-Excellence für erfolgreiche Transformationen\n• Innovation-Integration für technologische Weiterentwicklung\n• Stakeholder-Engagement für breite Akzeptanz und Partizipation\n• Knowledge-Management für organisationales Lernen und Wissenssicherung\n\n📊 Messbare Wertschöpfung:\n• Business-Value-Demonstration für kontinuierliche Investitionsrechtfertigung\n• Risk-Reduction-Quantification für objektive Erfolgsvalidierung\n• Efficiency-Gains-Measurement für Produktivitätssteigerungs-Nachweis\n• Competitive-Advantage-Realization für strategische Marktpositionierung\n• Stakeholder-Satisfaction-Tracking für nachhaltige Beziehungsqualität"
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
