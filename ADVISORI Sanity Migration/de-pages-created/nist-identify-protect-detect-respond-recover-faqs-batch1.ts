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
    console.log('Updating NIST Identify, Protect, Detect, Respond, Recover page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-identify-protect-detect-respond-recover' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-identify-protect-detect-respond-recover" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie transformiert die systematische Implementierung der fünf NIST CSF-Kernfunktionen die strategische Cybersicherheits-Governance auf C-Level und welchen messbaren Geschäftswert generiert ADVISORI dabei?",
        answer: "Die fünf NIST CSF-Kernfunktionen - Identify, Protect, Detect, Respond, Recover - bilden das Rückgrat einer modernen, geschäftsorientierten Cybersicherheitsstrategie. Für die C-Suite repräsentieren sie nicht nur technische Sicherheitsmaßnahmen, sondern strategische Enabler für nachhaltiges Geschäftswachstum und operative Exzellenz. ADVISORI entwickelt eine ganzheitliche Governance-Architektur, die Cybersicherheit als integralen Bestandteil der Unternehmensstrategie positioniert.\n\n🎯 Strategische Transformation der Cybersicherheits-Governance:\n• Executive Decision Framework: Die fünf Kernfunktionen schaffen eine strukturierte Entscheidungsgrundlage für Investitionspriorisierung und Risikomanagement auf Vorstandsebene.\n• Business Resilience Integration: Cybersicherheit wird von einem Kostenfaktor zu einem strategischen Differenzierungsmerkmal, das Marktvertrauen und Wettbewerbsvorteile schafft.\n• Risk-to-Value Translation: Transformation von technischen Sicherheitsmetriken in geschäftsrelevante KPIs, die direkten Bezug zu Umsatz, Profitabilität und Marktwert haben.\n• Stakeholder Alignment: Einheitliche Sprache und Verständnis zwischen IT, Risk Management, Legal und Geschäftsführung für effektive Cybersicherheits-Governance.\n\n💼 Messbarer Geschäftswert durch systematische Framework-Implementierung:\n• Operational Excellence: Strukturierte Prozesse reduzieren operative Reibungsverluste um durchschnittlich 35% und ermöglichen schnellere Marktreaktionen.\n• Revenue Protection: Proaktive Identify- und Protect-Funktionen verhindern geschäftskritische Ausfälle und schützen Umsatzströme vor Cybersicherheitsvorfällen.\n• Cost Optimization: Integrierte Detect- und Respond-Capabilities reduzieren die durchschnittlichen Incident-Kosten um 60-80% durch frühe Erkennung und effiziente Reaktion.\n• Growth Enablement: Robuste Recovery-Prozesse schaffen Vertrauen für aggressive Wachstumsstrategien und Expansion in neue Märkte.\n\n🔄 ADVISORI's Value-Creation-Ansatz:\n• Strategic Assessment: Bewertung der aktuellen Cybersicherheitslage im Kontext der Geschäftsstrategie und Identifikation von Wertschöpfungspotenzialen.\n• Executive Roadmapping: Entwicklung einer C-Level-gerechten Implementierungsroadmap mit klaren Meilensteinen und Geschäftswerttreibern.\n• Performance Dashboard: Etablierung von Executive Dashboards, die den kontinuierlichen Geschäftswert der Framework-Implementierung transparent machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie gewährleistet ADVISORI bei der IDENTIFY-Funktion eine vollständige Asset-Transparenz und Risikobewertung, die auch komplexe Hybrid-Cloud- und Multi-Vendor-Umgebungen abdeckt?",
        answer: "Die IDENTIFY-Funktion bildet das Fundament jeder effektiven Cybersicherheitsstrategie und erfordert in modernen, hybriden IT-Landschaften eine besonders durchdachte und systematische Herangehensweise. ADVISORI entwickelt umfassende Asset Discovery- und Risk Assessment-Strategien, die auch die komplexesten Unternehmensumgebungen vollständig erfassen und bewerten.\n\n🔍 Comprehensive Asset Discovery und Management:\n• Automated Discovery Tools: Implementierung fortgeschrittener Asset Discovery-Technologien, die kontinuierlich alle physischen, virtuellen und Cloud-basierten Assets identifizieren und kategorisieren.\n• Shadow IT Detection: Proaktive Erkennung und Integration von nicht autorisierten IT-Ressourcen und Shadow-IT-Systemen in das offizielle Asset-Inventar.\n• Dependency Mapping: Vollständige Kartierung von Asset-Abhängigkeiten und -beziehungen zur Identifikation kritischer Pfade und Single Points of Failure.\n• Multi-Cloud Visibility: Einheitliche Sichtbarkeit über alle Cloud-Provider und Hybrid-Infrastrukturen hinweg mit standardisierten Klassifizierungs- und Bewertungskriterien.\n\n⚖️ Advanced Risk Assessment und Business Impact-Analyse:\n• Business-Critical Asset Prioritization: Bewertung aller Assets basierend auf ihrem direkten Beitrag zu kritischen Geschäftsprozessen und Umsatzgenerierung.\n• Third-Party Risk Integration: Comprehensive Assessment von Vendor- und Supply-Chain-Risiken mit kontinuierlicher Überwachung der Sicherheitshaltung externer Partner.\n• Threat Landscape Mapping: Kontinuierliche Analyse der spezifischen Bedrohungslandschaft für Ihre Branche und Assets mit Integration aktueller Threat Intelligence.\n• Quantitative Risk Modeling: Entwicklung fortgeschrittener Risikomodelle, die finanzielle Auswirkungen von Sicherheitsvorfällen quantifizieren und Investitionsentscheidungen unterstützen.\n\n🏗️ Governance und Compliance Framework:\n• Data Classification Standards: Etablierung einheitlicher Datenklassifizierungs-Standards, die regulatorische Anforderungen (GDPR, DORA, NIS2) erfüllen und Geschäftswert widerspiegeln.\n• Role-Based Access Management: Implementierung granularer Zugriffskontrollen basierend auf Geschäftsrollen, Asset-Kritikalität und Risikoprofilen.\n• Continuous Compliance Monitoring: Automatisierte Überwachung der Compliance-Haltung aller Assets mit Real-time-Berichterstattung an die Geschäftsleitung.\n• Strategic Risk Communication: Entwicklung C-Level-gerechter Risk Dashboards, die komplexe technische Risiken in geschäftsrelevante Entscheidungsgrundlagen übersetzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche innovativen PROTECT- und DETECT-Strategien implementiert ADVISORI, um Zero-Trust-Prinzipien mit den NIST CSF-Kernfunktionen zu integrieren und moderne Bedrohungen proaktiv abzuwehren?",
        answer: "Die Integration von Zero-Trust-Prinzipien in die PROTECT- und DETECT-Funktionen des NIST CSF repräsentiert die Evolution moderner Cybersicherheitsarchitekturen. ADVISORI entwickelt innovative Sicherheitsstrategien, die traditionelle Perimeter-basierte Ansätze durch adaptive, intelligente Schutz- und Erkennungsmechanismen ersetzen, die kontinuierlich Vertrauen verifizieren und Bedrohungen proaktiv neutralisieren.\n\n🛡️ Advanced PROTECT-Implementierung mit Zero-Trust-Integration:\n• Identity-Centric Security: Implementierung umfassender Identity and Access Management (IAM)-Systeme mit Multi-Faktor-Authentifizierung, Privileged Access Management und kontinuierlicher Identitätsverifikation.\n• Micro-Segmentation: Granulare Netzwerksegmentierung, die jede Kommunikation zwischen Assets kontrolliert und überwacht, unabhängig von ihrer Netzwerkposition.\n• Data-Centric Protection: Implementierung von Data Loss Prevention (DLP), Encryption-at-Rest und In-Transit sowie Rights Management-Systemen, die Daten unabhängig von ihrem Standort schützen.\n• Adaptive Security Controls: Dynamische Anpassung von Sicherheitskontrollen basierend auf Risikobewertung, Benutzerverhalten und aktueller Bedrohungslandschaft.\n\n🔎 Intelligent DETECT-Capabilities für moderne Bedrohungsabwehr:\n• AI-Powered Anomaly Detection: Implementierung von Machine Learning-Algorithmen, die normale Verhaltensmuster lernen und Abweichungen in Echtzeit identifizieren.\n• Behavioral Analytics: Kontinuierliche Analyse von Benutzer- und Entity-Verhalten (UEBA) zur Erkennung von Insider-Bedrohungen und kompromittierten Konten.\n• Threat Hunting: Proaktive Suche nach versteckten Bedrohungen durch spezialisierte Security-Teams mit fortgeschrittenen Analysewerkzeugen.\n• Integration von Threat Intelligence: Real-time-Integration externer Threat Intelligence-Feeds zur Erkennung von Known-Bad-Indicators und emerging Threats.\n\n⚡ Proaktive Bedrohungsabwehr und Response-Integration:\n• Automated Response: Implementierung von SOAR (Security Orchestration, Automation and Response)-Plattformen, die auf erkannte Bedrohungen automatisch reagieren.\n• Deception Technology: Einsatz von Honeypots und Decoy-Systemen zur frühen Erkennung von Angreifern und Ablenkung von kritischen Assets.\n• Continuous Security Validation: Regelmäßige Validierung der Sicherheitskontrollen durch automatisierte Penetrationstests und Purple Team-Exercises.\n• Predictive Threat Modeling: Nutzung fortgeschrittener Analytics zur Vorhersage wahrscheinlicher Angriffspfade und präventiver Stärkung der Verteidigung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie strukturiert ADVISORI die RESPOND- und RECOVER-Funktionen, um bei Cybersicherheitsvorfällen minimale Business-Disruption zu gewährleisten und gleichzeitig regulatorische Meldepflichten zu erfüllen?",
        answer: "Effektive RESPOND- und RECOVER-Strategien sind entscheidend für die Minimierung von Geschäftsunterbrechungen und die Wahrung der regulatorischen Compliance bei Cybersicherheitsvorfällen. ADVISORI entwickelt integrierte Incident Response- und Business Continuity-Strategien, die nicht nur technische Wiederherstellung, sondern auch Geschäftskontinuität, Stakeholder-Kommunikation und regulatorische Compliance in den Fokus stellen.\n\n🚨 Strukturierte RESPOND-Implementation für minimale Business-Disruption:\n• Tiered Incident Classification: Entwicklung eines mehrstufigen Klassifizierungssystems, das Incidents nach Geschäftsauswirkung, technischer Komplexität und regulatorischen Implikationen kategorisiert.\n• Executive Communication Protocols: Etablierung klarer Eskalations- und Kommunikationswege zur C-Suite mit vordefinierten Entscheidungspunkten und Handlungsoptionen.\n• Automated Incident Response: Implementierung von Playbooks und Automatisierungstools, die standardisierte Reaktionen auf bekannte Incident-Typen ermöglichen.\n• Stakeholder Management: Koordinierte Kommunikationsstrategien für Kunden, Partner, Regulatoren und Medien zur Wahrung des Unternehmensrufs.\n\n🔄 Comprehensive RECOVER-Strategien für Business Resilience:\n• Recovery Time Objectives (RTO) Optimization: Entwicklung geschäftskritischer Wiederherstellungsziele, die minimale Ausfallzeiten für umsatzgenerierende Prozesse gewährleisten.\n• Data Recovery Excellence: Implementierung robuster Backup- und Disaster Recovery-Strategien mit regelmäßigen Restore-Tests und Validierung der Datenintegrität.\n• Business Process Continuity: Entwicklung alternativer Geschäftsprozesse und Workarounds, die kritische Funktionen auch bei eingeschränkter IT-Verfügbarkeit aufrechterhalten.\n• Lessons Learned Integration: Systematische Analyse jedes Incidents zur kontinuierlichen Verbesserung der Response- und Recovery-Capabilities.\n\n⚖️ Regulatory Compliance und Meldepflichten-Management:\n• Automated Reporting: Implementierung von Systemen, die regulatorische Meldepflichten (DORA, NIS2, GDPR) automatisch erfüllen und Compliance-Deadlines einhalten.\n• Legal and Regulatory Coordination: Integration von Legal- und Compliance-Teams in den Incident Response-Prozess zur Sicherstellung angemessener regulatorischer Reaktionen.\n• Evidence Preservation: Strukturierte Forensik- und Evidence-Management-Prozesse, die rechtliche Verwertbarkeit und regulatorische Transparenz gewährleisten.\n• Breach Notification Management: Koordinierte Breach-Notification-Prozesse für alle relevanten Stakeholder, einschließlich Kunden, Aufsichtsbehörden und Geschäftspartnern.\n\n📊 Continuous Improvement und Maturity Development:\n• Regular Tabletop Exercises: Durchführung regelmäßiger Incident Response-Simulationen zur Validierung der Prozesse und Training der Teams.\n• Performance Metrics: Etablierung von KPIs zur Messung der Response- und Recovery-Effectiveness mit kontinuierlicher Optimierung.\n• Industry Threat Sharing: Teilnahme an Threat Intelligence-Sharing-Initiativen zur Verbesserung der kollektiven Cybersicherheit."
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
