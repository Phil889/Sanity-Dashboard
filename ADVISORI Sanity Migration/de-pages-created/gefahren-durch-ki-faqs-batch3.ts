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
    console.log('Updating Gefahren durch KI page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'gefahren-durch-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "gefahren-durch-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Risiken entstehen durch KI-Halluzinationen und wie kann ADVISORI diese für kritische Geschäftsentscheidungen minimieren?',
        answer: "KI-Halluzinationen - die Generierung falscher oder erfundener Informationen durch KI-Systeme - stellen eine der subtilsten und gleichzeitig gefährlichsten Bedrohungen für Unternehmen dar, die KI für kritische Entscheidungen einsetzen. Diese Phänomene können zu fehlerhaften Geschäftsentscheidungen, rechtlichen Problemen und Reputationsschäden führen. ADVISORI entwickelt umfassende Frameworks zur Erkennung, Bewertung und Minimierung von Halluzinationsrisiken in geschäftskritischen KI-Anwendungen.\n\n🧠 Halluzinations-Mechanismen und Geschäftsrisiken:\n• Konfabulation: KI-Systeme generieren plausibel klingende, aber faktisch falsche Informationen, die in Berichten oder Analysen verwendet werden könnten.\n• Source Confusion: Vermischung oder falsche Zuordnung von Informationen aus verschiedenen Quellen, was zu irreführenden Schlussfolgerungen führt.\n• Overconfident Predictions: Übermäßiges Vertrauen in unsichere Vorhersagen, die zu riskanten Geschäftsentscheidungen führen können.\n• Context Drift: Verlust des ursprünglichen Kontexts bei längeren Interaktionen, was zu inkonsistenten oder widersprüchlichen Aussagen führt.\n\n🔍 ADVISORI's Hallucination Detection Framework:\n• Multi-Source Verification: Implementierung von Systemen, die KI-Ausgaben automatisch gegen multiple vertrauenswürdige Quellen validieren.\n• Confidence Scoring und Uncertainty Quantification: Entwicklung von Metriken zur Bewertung der Zuverlässigkeit von KI-Ausgaben.\n• Fact-Checking Pipelines: Integration automatisierter Fact-Checking-Systeme zur Verifikation kritischer Informationen.\n• Human-in-the-Loop Validation: Etablierung von Prozessen für menschliche Überprüfung bei kritischen Entscheidungen.\n\n🛡️ Proactive Mitigation Strategies:\n• Retrieval-Augmented Generation: Implementierung von RAG-Systemen, die KI-Antworten auf vertrauenswürdige Wissensdatenbanken stützen.\n• Ensemble Methods: Verwendung mehrerer KI-Modelle zur Kreuzvalidierung und Konsensbildung.\n• Structured Output Formats: Entwicklung strukturierter Ausgabeformate, die Quellenangaben und Konfidenzwerte enthalten.\n• Domain-Specific Fine-Tuning: Anpassung von KI-Modellen an spezifische Geschäftsbereiche zur Reduzierung von Halluzinationen.\n\n📊 Business Process Integration:\n• Risk-Aware Decision Frameworks: Integration von Halluzinationsrisiken in Geschäftsentscheidungsprozesse.\n• Escalation Procedures: Etablierung klarer Eskalationswege bei Unsicherheiten oder widersprüchlichen KI-Ausgaben.\n• Audit Trails: Vollständige Dokumentation von KI-Entscheidungen für spätere Überprüfung und Compliance.\n• Continuous Learning: Implementierung von Feedback-Loops zur kontinuierlichen Verbesserung der Halluzinations-Erkennung.\n\n🎯 Quality Assurance und Monitoring:\n• Real-time Monitoring: Kontinuierliche Überwachung von KI-Ausgaben auf Anzeichen von Halluzinationen.\n• Performance Metrics: Entwicklung spezifischer KPIs zur Messung der Faktentreue und Zuverlässigkeit.\n• Regular Model Evaluation: Systematische Bewertung der Halluzinationsneigung verschiedener KI-Modelle.\n• Incident Response: Schnelle Reaktionsverfahren bei Entdeckung kritischer Halluzinationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie schützt ADVISORI vor Prompt Injection Angriffen und welche Risiken entstehen durch manipulierte KI-Eingaben?',
        answer: "Prompt Injection Angriffe stellen eine neue Kategorie von Sicherheitsbedrohungen dar, die spezifisch für Large Language Models und generative KI-Systeme entwickelt wurden. Diese Angriffe nutzen die natürlichsprachliche Schnittstelle von KI-Systemen aus, um deren Verhalten zu manipulieren oder unbeabsichtigte Aktionen auszulösen. ADVISORI entwickelt spezialisierte Abwehrstrategien gegen diese emerging threats, die sowohl technische als auch organisatorische Maßnahmen umfassen.\n\n💉 Prompt Injection Angriffsvektoren:\n• Direct Prompt Injection: Direkte Manipulation von Systemprompts durch bösartige Benutzereingaben zur Umgehung von Sicherheitsrichtlinien.\n• Indirect Prompt Injection: Einschleusung manipulativer Anweisungen über externe Datenquellen wie Dokumente oder Webseiten.\n• Jailbreaking: Umgehung von Sicherheitsbeschränkungen durch clevere Formulierungen oder Rollenspiele.\n• Data Exfiltration: Ausnutzung von Prompt Injection zur unbefugten Extraktion sensibler Informationen aus KI-Systemen.\n\n🛡️ ADVISORI's Multi-Layer Defense Strategy:\n• Input Sanitization und Validation: Implementierung robuster Filter zur Erkennung und Neutralisierung verdächtiger Eingaben.\n• Prompt Isolation: Trennung von Systemprompts und Benutzereingaben durch technische Barrieren.\n• Context Boundary Enforcement: Strikte Durchsetzung von Kontextgrenzen zur Verhinderung von Prompt Leakage.\n• Output Filtering: Überwachung und Filterung von KI-Ausgaben zur Verhinderung unbeabsichtigter Informationspreisgabe.\n\n🔍 Advanced Detection Mechanisms:\n• Behavioral Analysis: Überwachung von KI-Systemverhalten zur Erkennung ungewöhnlicher oder verdächtiger Aktivitäten.\n• Semantic Analysis: Tiefere Analyse der Bedeutung und Absicht von Benutzereingaben.\n• Pattern Recognition: Identifikation bekannter Injection-Muster und Angriffssignaturen.\n• Anomaly Detection: Erkennung von Abweichungen vom normalen Systemverhalten.\n\n🏗️ Secure Architecture Design:\n• Principle of Least Privilege: Minimierung der Berechtigungen und Fähigkeiten von KI-Systemen.\n• Sandboxing: Isolation von KI-Systemen in sicheren Umgebungen mit begrenzten Zugriffsmöglichkeiten.\n• API Security: Robuste Sicherheitsmaßnahmen für KI-APIs und Schnittstellen.\n• Access Controls: Granulare Zugriffskontrolle für verschiedene KI-Funktionen und Datenquellen.\n\n📊 Monitoring und Response:\n• Real-time Threat Detection: Sofortige Erkennung und Reaktion auf Prompt Injection Versuche.\n• Incident Response Procedures: Spezialisierte Verfahren für die Behandlung von Prompt Injection Incidents.\n• Forensic Capabilities: Detaillierte Analyse und Nachverfolgung von Angriffsversuchen.\n• Continuous Improvement: Regelmäßige Aktualisierung der Abwehrmaßnahmen basierend auf neuen Bedrohungen.\n\n🎓 Training und Awareness:\n• Security Training: Schulung von Entwicklern und Nutzern zu Prompt Injection Risiken.\n• Best Practices: Entwicklung und Verbreitung von Sicherheits-Best-Practices für KI-Systeme.\n• Red Team Exercises: Regelmäßige Penetrationstests zur Bewertung der Wirksamkeit von Schutzmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche spezifischen Risiken entstehen durch KI-Deepfakes und wie implementiert ADVISORI Schutzmaßnahmen gegen synthetische Medien?',
        answer: "Deepfakes und synthetische Medien stellen eine wachsende Bedrohung für Unternehmen dar, da sie für Betrug, Manipulation und Reputationsschäden eingesetzt werden können. Diese Technologien können täuschend echte Audio-, Video- und Bildmaterialien erstellen, die schwer von authentischen Inhalten zu unterscheiden sind. ADVISORI entwickelt umfassende Detection- und Prevention-Strategien zum Schutz vor den vielfältigen Risiken synthetischer Medien.\n\n🎭 Deepfake Bedrohungslandschaft:\n• CEO Fraud und Voice Cloning: Nachahmung von Führungskräften für Betrugsversuche oder unbefugte Anweisungen.\n• Brand Impersonation: Erstellung gefälschter Inhalte zur Schädigung der Unternehmensreputation.\n• Social Engineering: Nutzung synthetischer Medien für sophisticated Phishing und Manipulation.\n• Market Manipulation: Verbreitung falscher Informationen zur Beeinflussung von Aktienkursen oder Geschäftsentscheidungen.\n\n🔍 ADVISORI's Deepfake Detection Framework:\n• Multi-Modal Analysis: Kombination verschiedener Erkennungstechniken für Audio, Video und Bildmaterial.\n• Temporal Inconsistency Detection: Analyse zeitlicher Inkonsistenzen in Videomaterial.\n• Biometric Verification: Überprüfung biometrischer Merkmale zur Authentifizierung von Personen.\n• Blockchain-based Provenance: Implementierung unveränderlicher Herkunftsnachweise für authentische Medien.\n\n🛡️ Proactive Protection Measures:\n• Media Authentication Systems: Entwicklung von Systemen zur Verifikation der Authentizität von Medieninhalten.\n• Digital Watermarking: Einbettung unsichtbarer Wasserzeichen in authentische Unternehmensinhalte.\n• Voice Biometrics: Implementierung von Stimmerkennungssystemen für kritische Kommunikation.\n• Content Verification Pipelines: Automatisierte Überprüfung eingehender Medieninhalte.\n\n🏢 Organizational Safeguards:\n• Verification Protocols: Etablierung strenger Verifikationsverfahren für kritische Kommunikation.\n• Multi-Channel Confirmation: Bestätigung wichtiger Anweisungen über mehrere unabhängige Kanäle.\n• Employee Training: Schulung der Mitarbeiter zur Erkennung von Deepfakes und synthetischen Medien.\n• Incident Response Plans: Spezialisierte Verfahren für den Umgang mit Deepfake-Angriffen.\n\n📊 Monitoring und Intelligence:\n• Dark Web Monitoring: Überwachung von Plattformen auf potenzielle Deepfake-Bedrohungen gegen das Unternehmen.\n• Brand Protection: Kontinuierliche Überwachung des Internets auf gefälschte Unternehmensinhalte.\n• Threat Intelligence: Integration aktueller Informationen über neue Deepfake-Technologien und -Bedrohungen.\n• Legal Preparedness: Vorbereitung rechtlicher Schritte gegen Deepfake-Missbrauch.\n\n🔬 Technical Innovation:\n• AI-powered Detection: Einsatz fortschrittlicher KI-Systeme zur Deepfake-Erkennung.\n• Real-time Analysis: Entwicklung von Systemen für die Echtzeit-Analyse verdächtiger Inhalte.\n• Cross-Platform Integration: Integration von Deepfake-Detection in verschiedene Kommunikationsplattformen.\n• Continuous Learning: Anpassung der Erkennungssysteme an neue Deepfake-Technologien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie adressiert ADVISORI die Risiken von KI-Vendor Lock-in und gewährleistet strategische Flexibilität bei KI-Investitionen?',
        answer: "KI-Vendor Lock-in stellt ein erhebliches strategisches Risiko für Unternehmen dar, da es die Flexibilität einschränkt, Kosten erhöht und die Abhängigkeit von einzelnen Anbietern verstärkt. In der schnelllebigen KI-Landschaft kann Lock-in dazu führen, dass Unternehmen nicht von technologischen Fortschritten profitieren können oder bei Problemen mit dem Anbieter handlungsunfähig werden. ADVISORI entwickelt strategische Frameworks zur Vermeidung von Vendor Lock-in und zur Gewährleistung langfristiger Flexibilität.\n\n🔒 Vendor Lock-in Risikokategorien:\n• Technical Lock-in: Abhängigkeit von proprietären APIs, Datenformaten oder Infrastrukturen, die Migration erschweren.\n• Data Lock-in: Schwierigkeiten beim Export oder Transfer von Trainingsdaten und Modellen zwischen Plattformen.\n• Skill Lock-in: Aufbau von Expertise in anbieterspezifischen Tools, die nicht übertragbar sind.\n• Economic Lock-in: Hohe Wechselkosten durch Investitionen in spezifische Technologien oder Verträge.\n\n🏗️ ADVISORI's Vendor-Agnostic Architecture Strategy:\n• Multi-Cloud und Hybrid Approaches: Implementierung von Architekturen, die mehrere Cloud-Anbieter und On-Premise-Lösungen kombinieren.\n• Standardized APIs und Interfaces: Verwendung offener Standards und Abstraktionsschichten zur Entkopplung von spezifischen Anbietern.\n• Containerization und Orchestration: Einsatz von Container-Technologien für portable KI-Workloads.\n• Open Source Integration: Strategische Nutzung von Open-Source-Technologien zur Reduzierung der Anbieterabhängigkeit.\n\n📊 Strategic Vendor Management:\n• Vendor Diversification: Aufbau von Beziehungen zu mehreren KI-Anbietern zur Risikominimierung.\n• Negotiation Strategies: Verhandlung flexibler Verträge mit Exit-Klauseln und Datenportabilität.\n• Performance Benchmarking: Kontinuierliche Bewertung verschiedener Anbieter zur Aufrechterhaltung von Alternativen.\n• Technology Roadmap Alignment: Sicherstellung, dass Anbieter-Roadmaps mit Unternehmenszielen übereinstimmen.\n\n🔄 Migration und Portability Planning:\n• Data Portability Frameworks: Entwicklung von Strategien für den nahtlosen Transfer von Daten und Modellen.\n• Migration Testing: Regelmäßige Tests der Migrationsfähigkeit zu alternativen Plattformen.\n• Backup Strategies: Implementierung von Backup-Lösungen für kritische KI-Funktionen.\n• Gradual Transition Plans: Entwicklung schrittweiser Migrationspläne zur Risikominimierung.\n\n💡 Innovation und Future-Proofing:\n• Technology Scouting: Kontinuierliche Überwachung neuer KI-Technologien und -Anbieter.\n• Proof of Concept Programs: Regelmäßige Evaluierung alternativer Lösungen durch Pilotprojekte.\n• Internal Capability Building: Aufbau interner KI-Kompetenzen zur Reduzierung der Anbieterabhängigkeit.\n• Strategic Partnerships: Entwicklung strategischer Partnerschaften, die Flexibilität und Innovation fördern.\n\n📈 Risk Mitigation und Governance:\n• Vendor Risk Assessment: Umfassende Bewertung der finanziellen Stabilität und strategischen Ausrichtung von KI-Anbietern.\n• Contingency Planning: Entwicklung von Notfallplänen für verschiedene Vendor-Ausfallszenarien.\n• Legal Safeguards: Implementierung rechtlicher Schutzmaßnahmen in Vendor-Verträgen.\n• Regular Review Cycles: Etablierung regelmäßiger Überprüfungen der Vendor-Strategie und -Performance."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
