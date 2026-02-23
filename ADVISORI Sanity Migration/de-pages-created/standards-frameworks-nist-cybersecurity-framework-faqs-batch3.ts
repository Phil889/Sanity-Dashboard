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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie gestaltet ADVISORI die NIST Framework-Implementierung für Unternehmen mit begrenzten Cybersecurity-Ressourcen und wie wird Kosteneffizienz maximiert?",
        answer: "Nicht alle Unternehmen verfügen über umfangreiche Cybersecurity-Budgets oder spezialisierte Teams. Besonders mittelständische Unternehmen und Organisationen in kostensensitiven Branchen müssen maximale Sicherheit mit minimalen Ressourcen erreichen. ADVISORI hat spezialisierte Ansätze entwickelt, um das NIST Framework auch in ressourcenbeschränkten Umgebungen effektiv zu implementieren, ohne Kompromisse bei der Sicherheitsqualität einzugehen.\n\n💡 Ressourcen-optimierte Implementierungsstrategien:\n• Risk-Based Prioritization: Fokussierung auf die kritischsten Assets und Bedrohungen für maximale Wirkung bei minimalen Investitionen.\n• Phased Implementation: Stufenweise Umsetzung, die sofortige Verbesserungen ermöglicht und Budgetbelastung über Zeit verteilt.\n• Automation-First Approach: Priorisierung automatisierter Lösungen, die manuelle Überwachung und Wartung minimieren.\n• Shared Service Models: Entwicklung von kostengeteilten Sicherheitsdiensten für kleinere Organisationen oder Unternehmensgruppen.\n\n⚙️ ADVISORI's Effizienz-maximierende Methodik:\n• Cost-Benefit Optimization: Präzise ROI-Berechnungen für jede Sicherheitsmaßnahme zur Identifikation der wirkungsvollsten Investitionen.\n• Open Source Integration: Strategische Nutzung bewährter Open Source-Sicherheitstools zur Reduzierung von Lizenzkosten.\n• Training Multiplier Effect: Entwicklung interner Cybersecurity-Champions, die Wissen organisationsweit multiplizieren können.\n• Cloud-Native Solutions: Nutzung von skalierbaren Cloud-Sicherheitsdiensten, die Pay-as-you-grow-Modelle ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt Compliance-Management in ADVISORI's NIST Framework-Ansatz und wie werden multiple regulatorische Anforderungen harmonisiert?",
        answer: "Moderne Unternehmen navigieren eine komplexe Landschaft überlappender und teilweise konfliktierender regulatorischer Anforderungen. Das NIST Framework muss nicht isoliert implementiert werden, sondern als integraler Bestandteil eines umfassenden Compliance-Programms. ADVISORI entwickelt harmonisierte Ansätze, die multiple Compliance-Ziele gleichzeitig erfüllen und Synergien zwischen verschiedenen Regulierungsframeworks maximieren.\n\n📋 Multi-Regulatory Compliance-Herausforderungen:\n• Standard-Überlappungen: Identifikation und Optimierung überlappender Kontrollen zwischen NIST, ISO 27001, SOC 2, GDPR und branchenspezifischen Standards.\n• Audit-Koordination: Harmonisierung verschiedener Audit-Zyklen und Nachweisanforderungen zur Minimierung des Prüfungsaufwands.\n• Regional Variations: Anpassung an lokale Interpretationen globaler Standards in verschiedenen Jurisdiktionen.\n• Change Management: Koordinierte Anpassung an evolvierende regulatorische Landschaften ohne Disruption bestehender Compliance-Programme.\n\n🔄 ADVISORI's Compliance-Orchestrierung:\n• Universal Control Framework: Entwicklung einer einheitlichen Kontrollstruktur, die multiple Standards simultан erfüllt und redundante Implementierungen eliminiert.\n• Integrated Audit Management: Design von Audit-Programmen, die verschiedene Compliance-Anforderungen in koordinierten Prüfungszyklen adressieren.\n• Regulatory Intelligence: Kontinuierliches Monitoring regulatorischer Entwicklungen und proaktive Anpassung der Framework-Implementierung.\n• Documentation Consolidation: Streamlining der Compliance-Dokumentation zur Reduzierung administrativer Belastung bei verbesserter Nachweisqualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie adressiert ADVISORI Human Factor und Cybersecurity Culture als integralen Bestandteil der NIST Framework-Implementierung?",
        answer: "Technologie allein kann keine umfassende Cybersecurity gewährleisten – der menschliche Faktor bleibt sowohl die größte Schwachstelle als auch das stärkste Verteidigungselement. Eine erfolgreiche NIST Framework-Implementierung muss Cybersecurity Culture, Awareness und Human-Centered Design als Kernkomponenten integrieren. ADVISORI entwickelt ganzheitliche Ansätze, die Menschen als aktive Sicherheitspartner positionieren.\n\n👥 Human-Centered Cybersecurity-Herausforderungen:\n• Security Awareness: Transformation von Compliance-basiertem Training zu engagement-orientierter Sicherheitskultur.\n• Usability vs. Security: Balance zwischen benutzerfreundlichen Systemen und robusten Sicherheitsmaßnahmen.\n• Behavioral Change: Nachhaltige Verhaltensänderung durch psychologisch fundierte Change-Management-Ansätze.\n• Incident Psychology: Umgang mit menschlichen Faktoren bei Sicherheitsvorfällen und Fehlerkultur-Entwicklung.\n\n🧠 ADVISORI's Human-Centric Framework Integration:\n• Behavioral Security Design: Integration von Verhaltenspsychologie in Sicherheitssystem-Design für intuitive und nachhaltige Nutzung.\n• Gamification Strategies: Entwicklung spielerischer Ansätze für kontinuierliches Cybersecurity-Learning und Engagement.\n• Role-Based Training: Maßgeschneiderte Sicherheitsschulungen basierend auf spezifischen Rollen, Risiken und Verantwortlichkeiten.\n• Culture Measurement: Entwicklung von Metriken und KPIs zur Messung und kontinuierlichen Verbesserung der Cybersecurity-Kultur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Strategien verwendet ADVISORI für die kontinuierliche Verbesserung und Evolution der NIST Framework-Implementierung über Zeit?",
        answer: "Cybersecurity ist kein statisches Ziel, sondern ein kontinuierlicher Prozess der Anpassung und Verbesserung. Eine erfolgreiche NIST Framework-Implementierung muss evolutionsfähig sein und kontinuierliches Learning, Adaptation und Optimization ermöglichen. ADVISORI etabliert selbstoptimierende Systeme, die automatisch aus Erfahrungen lernen und sich an verändernde Bedrohungslandschaften anpassen.\n\n🔄 Continuous Improvement-Mechanismen:\n• Lessons Learned Integration: Systematische Erfassung und Integration von Erkenntnissen aus Sicherheitsvorfällen und operativen Erfahrungen.\n• Performance Analytics: Kontinuierliche Messung der Framework-Effektivität durch Advanced Analytics und Machine Learning.\n• Threat Intelligence Feedback: Integration aktueller Bedrohungsinformationen in Framework-Anpassungen und Prioritätssetzung.\n• Stakeholder Feedback Loops: Strukturierte Erfassung von Nutzer- und Stakeholder-Feedback für praxisorientierte Optimierungen.\n\n📈 ADVISORI's Evolution-Framework:\n• Adaptive Maturity Model: Entwicklung dynamischer Maturity-Assessments, die sich an organizationale Evolution und Branchenstandards anpassen.\n• Predictive Optimization: Einsatz von Predictive Analytics zur Antizipation zukünftiger Sicherheitsanforderungen und proaktiver Framework-Evolution.\n• Innovation Integration: Systematische Bewertung und Integration neuer Sicherheitstechnologien und -methoden in bestehende Framework-Strukturen.\n• Knowledge Management: Aufbau organisationaler Cybersecurity-Wissensdatenbanken für kontinuierliches institutional Learning und Wissenserhalt."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
