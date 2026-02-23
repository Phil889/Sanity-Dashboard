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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 2 (German)...')
    
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
        question: "Wie unterstützt ADVISORI bei der Integration des NIST Frameworks in bestehende Enterprise-Governance und welche Board-Level Reporting-Mechanismen werden etabliert?",
        answer: "Für Board-Mitglieder und die C-Suite ist die nahtlose Integration von Cybersecurity-Governance in bestehende Unternehmensführungsstrukturen essentiell. Das NIST Framework muss sich nahtlos in etablierte Risikomanagement-, Compliance- und Strategieprozesse einfügen, ohne zusätzliche Komplexität zu schaffen. ADVISORI entwickelt maßgeschneiderte Governance-Integration, die dem Board präzise, handlungsrelevante Cybersecurity-Insights liefert.\n\n📊 Board-Level Governance Integration:\n• Executive Dashboards: Entwicklung von KPI-basierten Dashboards, die komplexe Cybersecurity-Metriken in geschäftsrelevante Kennzahlen übersetzen.\n• Risk Appetite Alignment: Integration der NIST-Framework-Implementierung in bestehende Risikotoleranz-Frameworks und Investment-Entscheidungsprozesse.\n• Audit Committee Integration: Strukturierte Einbindung von Cybersecurity-Reporting in bestehende Audit- und Compliance-Zyklen.\n• Strategic Planning Alignment: Verknüpfung von Cybersecurity-Zielen mit übergeordneten Geschäftszielen und strategischen Initiativen.\n\n🔄 ADVISORI's Governance-Orchestrierung:\n• Multi-Stakeholder Workshops: Durchführung von strukturierten Sessions mit Board, C-Suite und operativen Teams zur Definition von Governance-Strukturen.\n• Policy Framework Development: Erstellung von Board-approved Cybersecurity-Policies, die das NIST Framework in Unternehmensrichtlinien übersetzen.\n• Escalation Mechanisms: Design von klaren Eskalationswegen für Cybersecurity-Ereignisse vom operativen Level bis zur Board-Ebene.\n• Performance Monitoring: Etablierung von regelmäßigen Review-Zyklen, die kontinuierliche Optimierung und strategische Anpassung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen adressiert ADVISORI bei der NIST Framework-Implementierung in kritischen Infrastrukturen und regulierten Industrien?",
        answer: "Kritische Infrastrukturen und stark regulierte Industrien stehen vor einzigartigen Herausforderungen bei der Cybersecurity-Implementierung. Diese Sektoren müssen nicht nur höchste Sicherheitsstandards erfüllen, sondern auch Business Continuity unter allen Umständen gewährleisten. ADVISORI verfügt über spezialisierte Expertise für die Navigation komplexer regulatorischer Landschaften bei gleichzeitiger Aufrechterhaltung operativer Exzellenz.\n\n🏭 Sektorspezifische Herausforderungen:\n• Kontinuierlicher Betrieb: Implementierung von Cybersecurity-Maßnahmen ohne Unterbrechung kritischer Operationen oder Servicequalität.\n• Legacy-Systeme: Integration moderner Sicherheitsstandards in etablierte, oft jahrzehntealte industrielle Kontrollsysteme.\n• Multi-Regulatory Compliance: Gleichzeitige Erfüllung von NIST, sektorspezifischen Regulierungen (NERC CIP, FDA, etc.) und internationalen Standards.\n• Physical-Cyber Convergence: Schutz der Schnittstellen zwischen physischen Anlagen und digitalen Steuerungssystemen.\n\n⚡ ADVISORI's spezialisierte Sektorexpertise:\n• Phased Implementation Strategy: Entwicklung von stufenweisen Implementierungsansätzen, die kritische Operationen niemals gefährden.\n• Regulatory Mapping: Präzise Zuordnung von NIST-Kontrollen zu sektorspezifischen Compliance-Anforderungen für optimale Effizienz.\n• OT/IT Integration: Expertise in der sicheren Verbindung von Operational Technology und Information Technology-Umgebungen.\n• Crisis Management: Entwicklung von robusten Incident Response-Plänen, die sowohl Cyber-Ereignisse als auch physische Notfälle berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass die NIST Framework-Implementierung auch bei disruptiven Technologien wie Cloud-First-Strategien und Digital Transformation effektiv bleibt?",
        answer: "Moderne Unternehmen durchlaufen beschleunigte digitale Transformationen, die traditionelle Sicherheitsperimeter auflösen und neue Angriffsvektoren schaffen. Cloud-Migration, Mobile-First-Ansätze und API-basierte Architekturen erfordern eine fundamental neue Herangehensweise an Cybersecurity. ADVISORI adaptiert das NIST Framework für diese dynamischen, cloudnativen Umgebungen.\n\n☁️ Herausforderungen digitaler Transformation:\n• Perimeter Dissolution: Auflösung traditioneller Netzwerkgrenzen durch Cloud-Services, Remote Work und Partner-Integrationen.\n• Shared Responsibility Models: Navigation komplexer Verantwortungsverteilungen zwischen Unternehmen und Cloud-Providern.\n• DevOps Integration: Einbettung von Security-Kontrollen in agile Entwicklungs- und Deployment-Prozesse.\n• Data Sovereignty: Gewährleistung von Datenschutz und Compliance bei geografisch verteilten Cloud-Infrastrukturen.\n\n🚀 ADVISORI's Cloud-Native NIST Implementierung:\n• Zero Trust Architecture: Design von NIST-konformen Zero Trust-Sicherheitsmodellen, die inhärent cloud-native Prinzipien folgen.\n• Cloud Security Posture Management: Kontinuierliche Überwachung und Optimierung von Cloud-Konfigurationen gemäß NIST-Prinzipien.\n• DevSecOps Integration: Einbettung von NIST-Kontrollen in CI/CD-Pipelines für automatisierte Compliance.\n• Multi-Cloud Orchestration: Design von Framework-Implementierungen, die konsistente Sicherheit über verschiedene Cloud-Provider hinweg gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt künstliche Intelligenz in ADVISORI's NIST Framework-Implementierung und wie wird AI sowohl als Sicherheitstool als auch als potentielle Bedrohung adressiert?",
        answer: "Künstliche Intelligenz revolutioniert sowohl die Cybersecurity-Landschaft als auch die Bedrohungsumgebung. Während AI-gestützte Sicherheitstools beispiellose Detektions- und Response-Kapazitäten ermöglichen, schaffen sie gleichzeitig neue Angriffsvektoren und ethische Herausforderungen. ADVISORI integriert AI strategisch in NIST Framework-Implementierungen, während gleichzeitig AI-spezifische Risiken proaktiv adressiert werden.\n\n🤖 AI-Integration in NIST Framework-Komponenten:\n• Identify: AI-gestützte Asset Discovery und Risiko-Assessment für kontinuierliche Bestandsaufnahme komplexer IT-Landschaften.\n• Protect: Machine Learning-basierte Anomalieerkennung für präventive Bedrohungsabwehr und adaptive Zugangskontrollen.\n• Detect: Intelligente Threat Hunting und Behavioral Analytics für Erkennung sophistizierter, bisher unbekannter Angriffsmuster.\n• Respond: Automatisierte Incident Response mit AI-gestützter Triage und Kontextualisierung für beschleunigte Reaktionszeiten.\n• Recover: Prädiktive Wiederherstellungsmodelle und AI-optimierte Business Continuity-Planung.\n\n⚖️ AI-spezifische Risikomanagement durch ADVISORI:\n• Adversarial AI Defense: Entwicklung von Schutzmaßnahmen gegen AI-gestützte Angriffe, einschließlich Adversarial Machine Learning und Deepfake-Bedrohungen.\n• Algorithmic Bias Mitigation: Implementierung von Fairness- und Transparenz-Kontrollen für AI-Systeme in sicherheitskritischen Anwendungen.\n• AI Governance Framework: Etablierung von ethischen Leitlinien und Compliance-Mechanismen für verantwortlichen AI-Einsatz.\n• Explainable AI: Design von interpretierbaren AI-Systemen, die audit-fähige Entscheidungsprozesse für regulatorische Compliance ermöglichen."
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
