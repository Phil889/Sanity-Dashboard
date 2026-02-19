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
    console.log('Updating Standards Frameworks Zertifizierungsbegleitung Audit Support page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-zertifizierungsbegleitung-audit-support' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-zertifizierungsbegleitung-audit-support" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie hilft ADVISORI dabei, die häufigsten Fallstricke und Audit-Risiken bei BSI-Zertifizierungen zu vermeiden und welche präventiven Maßnahmen werden eingesetzt?",
        answer: "BSI-Zertifizierungsaudits sind anspruchsvolle Prüfungen, bei denen bereits kleine Versäumnisse zu kostspieligen Nachbesserungen oder gar dem Scheitern der Zertifizierung führen können. ADVISORI kennt aus langjähriger Erfahrung die typischen Stolpersteine und hat bewährte Präventionsstrategien entwickelt, um diese proaktiv zu vermeiden und eine reibungslose Zertifizierung sicherzustellen.\n\n⚠️ Häufigste Audit-Risiken und Fallstricke:\n• Dokumentationslücken: Unvollständige oder inkonsistente Dokumentation von Sicherheitsmaßnahmen und Prozessen, die zu Audit-Findings und Nacharbeit führen.\n• Implementierungsdefizite: Diskrepanzen zwischen dokumentierten Prozessen und tatsächlicher Praxis, die bei Stichproben aufgedeckt werden.\n• Nachweisführung: Fehlende oder unzureichende Evidenz für die wirksame Umsetzung von IT-Grundschutz Maßnahmen.\n• Scope-Abgrenzung: Unklare Definition des Zertifizierungsscopes, die zu Verwirrung und zusätzlichen Anforderungen während des Audits führt.\n\n🛡️ ADVISORI's präventive Risikominimierung:\n• Pre-Audit Deep Dive: Systematische Vorab-Prüfung aller zertifizierungsrelevanten Aspekte durch erfahrene BSI-Auditoren, die potenzielle Schwachstellen identifizieren bevor sie zu Problemen werden.\n• Evidence Management: Strukturierter Aufbau einer lückenlosen Nachweisführung mit automatisierten Dokumentations- und Überwachungssystemen.\n• Mock-Audit Simulation: Realistische Simulation des Zertifizierungsaudits unter authentischen Bedingungen zur Identifikation verdeckter Risiken.\n• Continuous Gap Analysis: Fortlaufende Überwachung der Compliance-Performance mit sofortiger Korrektur identifizierter Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Vorbereitungsmaßnahmen und Trainings bietet ADVISORI für interne Teams, um sie optimal auf das BSI-Zertifizierungsaudit vorzubereiten?",
        answer: "Der Erfolg einer BSI-Zertifizierung hängt maßgeblich von der Vorbereitung und Kompetenz der internen Teams ab, die während des Audits als Ansprechpartner und Wissensträger fungieren. ADVISORI hat spezialisierte Trainingsprogramme entwickelt, die Ihre Mitarbeiter optimal auf ihre Rolle im Zertifizierungsprozess vorbereiten und ihnen das Selbstvertrauen für eine erfolgreiche Audit-Performance geben.\n\n👥 Zielgruppenspezifische Vorbereitung für verschiedene Rollen:\n• Management-Briefings: Fokussierte Vorbereitung der Führungsebene auf strategische Fragen zu Sicherheitsstrategie, Investitionen und Compliance-Zielen.\n• Technical Deep Dives: Intensive Schulung der IT-Teams zu spezifischen Baustein-Implementierungen, technischen Details und Nachweisführung.\n• Process Owner Training: Spezialisierte Vorbereitung der Prozessverantwortlichen auf Fragen zu Abläufen, Kontrollen und Dokumentation.\n• ISMS Coordinator Coaching: Umfassende Vorbereitung der ISMS-Koordinatoren als zentrale Ansprechpartner für übergreifende Themen.\n\n🎯 ADVISORI's strukturiertes Vorbereitungsprogramm:\n• Audit-Simulation Workshops: Realistische Nachstellung von Audit-Situationen mit typischen Auditor-Fragen und Bewertungskriterien zur Gewöhnung an die Prüfungsatmosphäre.\n• Knowledge Assessment: Systematische Überprüfung des Wissensstands in allen relevanten IT-Grundschutz Bereichen mit gezielten Nachschulungen bei identifizierten Lücken.\n• Communication Training: Schulung effektiver Kommunikationstechniken für die Interaktion mit Auditoren, einschließlich präziser Antwortformulierung und professioneller Präsentation.\n• Stress Management: Vorbereitung auf den psychologischen Druck von Audit-Situationen mit Techniken zur Stressreduktion und Selbstsicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI eine effiziente Koordination und Kommunikation zwischen allen Stakeholdern während des komplexen BSI-Zertifizierungsprozesses?",
        answer: "BSI-Zertifizierungsprojekte involvieren eine Vielzahl interner und externer Stakeholder mit unterschiedlichen Perspektiven, Anforderungen und Verantwortlichkeiten. Eine erfolgreiche Zertifizierung erfordert präzise Koordination und klare Kommunikation zwischen allen Beteiligten. ADVISORI hat bewährte Governance-Strukturen entwickelt, um auch komplexe Multi-Stakeholder-Projekte erfolgreich zu orchestrieren.\n\n🎭 Stakeholder-Landschaft in BSI-Zertifizierungsprojekten:\n• Interne Stakeholder: C-Level Management, IT-Teams, Compliance-Abteilungen, Prozessverantwortliche, ISMS-Koordinatoren und Fachabteilungen.\n• Externe Partner: BSI-Zertifizierungsstelle, externe Auditoren, Technologie-Anbieter, Rechtsberater und Compliance-Berater.\n• Regulatorische Instanzen: Aufsichtsbehörden, Branchenverbände und weitere Compliance-relevante Organisationen.\n• Geschäftspartner: Kunden, Lieferanten und Joint-Venture-Partner, die von der Zertifizierung betroffen sind.\n\n🔄 ADVISORI's strukturierte Stakeholder-Governance:\n• Multi-Level Communication Framework: Etablierung differenzierter Kommunikationsebenen von operativen Updates bis zu strategischen Board-Briefings, angepasst an die jeweiligen Informationsbedürfnisse.\n• Centralized Project Management: Zentrale Koordination aller Projektaktivitäten durch erfahrene Projektmanager mit spezieller BSI-Zertifizierungsexpertise.\n• Stakeholder Alignment Sessions: Regelmäßige Abstimmungsrunden zur Synchronisation von Erwartungen, Zielen und Ressourcenallokation zwischen allen Beteiligten.\n• Issue Escalation Matrix: Klar definierte Eskalationswege und Entscheidungsstrukturen für die schnelle Lösung auftretender Probleme oder Konflikte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt ADVISORI bei der strategischen Positionierung und Vermarktung der erreichten BSI-Zertifizierung für maximalen Geschäftsnutzen?",
        answer: "Eine erfolgreiche BSI-Zertifizierung ist nur der erste Schritt – der wahre Geschäftswert entsteht durch die strategische Nutzung und Vermarktung dieses wichtigen Differenzierungsmerkmals. ADVISORI unterstützt Unternehmen dabei, ihre BSI-Zertifizierung optimal zu positionieren und in konkrete Geschäftsvorteile umzuwandeln, die sich direkt auf Umsatz und Marktstellung auswirken.\n\n📈 Strategische Wertschöpfung durch BSI-Zertifizierung:\n• Market Differentiation: Positionierung als vertrauenswürdiger Partner mit nachgewiesener Sicherheitsexzellenz in einem zunehmend sicherheitsbewussten Marktumfeld.\n• Premium Positioning: Rechtfertigung höherer Preise durch objektiv nachgewiesene Qualitäts- und Sicherheitsstandards.\n• Trust Building: Aufbau von Vertrauen bei kritischen Stakeholdern durch unabhängige Zertifizierung von Drittparteien.\n• Competitive Advantage: Verschaffung entscheidender Vorteile bei Ausschreibungen und Partnerschaftsentscheidungen.\n\n🎯 ADVISORI's strategische Vermarktungsunterstützung:\n• Go-to-Market Strategy: Entwicklung gezielter Markteinführungsstrategien, die die BSI-Zertifizierung optimal in die bestehende Positionierung und Verkaufsargumentation integrieren.\n• Stakeholder Communication: Erstellung professioneller Kommunikationsmaterialien für verschiedene Zielgruppen, von technischen Whitepapers bis zu Executive Summaries.\n• PR und Marketing Support: Unterstützung bei der Entwicklung einer umfassenden PR-Strategie zur Maximierung der Sichtbarkeit und Glaubwürdigkeit der Zertifizierung.\n• Sales Enablement: Schulung der Vertriebsteams zur effektiven Nutzung der BSI-Zertifizierung als Verkaufsargument und Differenzierungsfaktor."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
