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
    console.log('Updating DSGVO für KI page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie unterstützt ADVISORI bei der Implementierung von Data Governance-Strukturen für KI-Systeme und welche organisatorischen Maßnahmen sind für DSGVO-Compliance erforderlich?',
        answer: "Effektive Data Governance ist das Rückgrat DSGVO-konformer KI-Systeme. ADVISORI entwickelt umfassende Governance-Frameworks, die sowohl technische als auch organisatorische Aspekte der Datenverarbeitung in AI-Umgebungen abdecken und dabei die spezifischen Herausforderungen von Machine Learning-Systemen berücksichtigen.\n\n🏛️ Organisatorische DSGVO-Governance-Strukturen:\n• Etablierung von AI Data Protection Officers mit spezialisierten Kenntnissen in KI-Datenschutz und technischem Verständnis für Machine Learning-Prozesse.\n• Implementierung von Cross-funktionalen AI Ethics Committees, die Datenschutz, Ethik und Geschäftsanforderungen ausbalancieren.\n• Entwicklung von KI-spezifischen Datenschutz-Richtlinien und Verfahren, die über allgemeine DSGVO-Compliance hinausgehen.\n• Schaffung klarer Verantwortlichkeiten und Eskalationswege für datenschutzrelevante KI-Entscheidungen.\n\n📋 Data Lifecycle Management für KI:\n• Comprehensive Data Mapping für alle KI-Datenflüsse von der Sammlung über Training bis zur Inferenz und Archivierung.\n• Implementierung von Data Lineage-Systemen, die den Weg von Daten durch komplexe KI-Pipelines nachverfolgen.\n• Etablierung von Data Quality Gates, die sicherstellen, dass nur DSGVO-konforme und qualitativ hochwertige Daten in KI-Systeme gelangen.\n• Entwicklung von Retention- und Deletion-Policies, die sowohl Geschäftsanforderungen als auch Datenschutzbestimmungen berücksichtigen.\n\n🔐 Technische Governance-Implementierung:\n• Automated Compliance Monitoring durch KI-gestützte Systeme, die kontinuierlich Datenschutzverletzungen und Compliance-Abweichungen erkennen.\n• Policy-as-Code-Ansätze, die Datenschutzrichtlinien direkt in KI-Systeme einbetten und automatisch durchsetzen.\n• Implementierung von Privacy-by-Design-Prinzipien in allen Entwicklungs- und Deployment-Prozessen.\n• Etablierung von Audit-Trails und Logging-Mechanismen für vollständige Nachverfolgbarkeit aller datenschutzrelevanten Aktivitäten.\n\n🎯 ADVISORI's Governance Excellence Framework:\n• Entwicklung maßgeschneiderter Governance-Modelle basierend auf Unternehmensgröße, Branche und KI-Reifegrad.\n• Implementierung von Governance-Dashboards für Echtzeit-Überwachung von Compliance-Status und Risikoindikatoren.\n• Schulung von Governance-Teams in KI-spezifischen Datenschutzherausforderungen und Best Practices.\n• Kontinuierliche Bewertung und Optimierung von Governance-Strukturen basierend auf sich entwickelnden regulatorischen Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche spezifischen Herausforderungen entstehen bei der DSGVO-konformen Verarbeitung von Gesundheitsdaten in KI-Systemen und wie adressiert ADVISORI diese sensiblen Anwendungsfälle?',
        answer: "Gesundheitsdaten stellen als besondere Kategorie personenbezogener Daten höchste Anforderungen an DSGVO-Compliance in KI-Systemen. ADVISORI hat spezialisierte Frameworks für Healthcare AI entwickelt, die sowohl die strengen Datenschutzanforderungen als auch die innovativen Möglichkeiten von Medical AI berücksichtigen.\n\n🏥 Besondere DSGVO-Anforderungen für Gesundheits-KI:\n• Artikel 9 DSGVO verlangt explizite Einwilligung oder andere spezifische Rechtsgrundlagen für die Verarbeitung von Gesundheitsdaten in KI-Systemen.\n• Erhöhte Transparenzpflichten erfordern verständliche Erklärungen medizinischer KI-Entscheidungen für Patienten und Ärzte.\n• Besonders strenge Sicherheitsanforderungen zum Schutz sensibler Gesundheitsinformationen vor unbefugtem Zugriff.\n• Spezielle Betroffenenrechte, einschließlich des Rechts auf menschliche Intervention bei automatisierten medizinischen Entscheidungen.\n\n🔬 Technische Schutzmaßnahmen für Medical AI:\n• Federated Learning-Architekturen ermöglichen KI-Training auf verteilten Gesundheitsdaten ohne zentrale Datensammlung.\n• Differential Privacy-Techniken schützen individuelle Patientendaten, während sie medizinische Erkenntnisse ermöglichen.\n• Homomorphe Verschlüsselung erlaubt KI-Berechnungen auf verschlüsselten Gesundheitsdaten ohne Entschlüsselung.\n• Secure Multi-Party Computation ermöglicht kollaborative medizinische Forschung zwischen Institutionen ohne Datenaustausch.\n\n🏛️ Regulatory Compliance für Healthcare AI:\n• Integration von DSGVO-Anforderungen mit medizinischen Regulierungen wie MDR (Medical Device Regulation) für umfassende Compliance.\n• Entwicklung von DPIA-Frameworks speziell für medizinische KI-Anwendungen mit Berücksichtigung von Patientenrisiken.\n• Implementierung von Clinical Governance-Strukturen, die Datenschutz und medizinische Sicherheit integrieren.\n• Koordination mit Gesundheitsbehörden und Datenschutzaufsichten für regulatorische Klarheit.\n\n🎯 ADVISORI's Healthcare AI Compliance Framework:\n• Entwicklung branchenspezifischer Compliance-Templates für verschiedene medizinische Anwendungsfälle.\n• Implementierung von Patient-Consent-Management-Systemen mit granularer Kontrolle über Datennutzung.\n• Schulung medizinischer Teams in DSGVO-konformer KI-Nutzung und Patientenkommunikation.\n• Kontinuierliche Überwachung regulatorischer Entwicklungen im Gesundheitswesen für proaktive Compliance-Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie gewährleistet ADVISORI die DSGVO-konforme Anonymisierung und Pseudonymisierung von Daten für KI-Training und welche Risiken bestehen bei Re-Identifikation?',
        answer: "Anonymisierung und Pseudonymisierung sind kritische Techniken für DSGVO-konforme KI-Entwicklung, bergen aber spezifische Risiken in Machine Learning-Kontexten. ADVISORI entwickelt robuste Anonymisierungsstrategien, die sowohl rechtliche Sicherheit als auch KI-Performance gewährleisten, während Re-Identifikationsrisiken minimiert werden.\n\n🔒 DSGVO-konforme Anonymisierungsstandards:\n• Echte Anonymisierung nach DSGVO-Standards erfordert, dass Daten nicht mehr einer identifizierten oder identifizierbaren Person zugeordnet werden können.\n• Pseudonymisierung reduziert Datenschutzrisiken, fällt aber weiterhin unter DSGVO-Schutz und erfordert entsprechende Sicherheitsmaßnahmen.\n• Berücksichtigung von Zusatzwissen und verfügbaren externen Datenquellen bei der Bewertung von Anonymisierungsqualität.\n• Kontinuierliche Neubewertung der Anonymisierung bei sich entwickelnden KI-Modellen und neuen Datenquellen.\n\n🧮 Technische Anonymisierungsverfahren für KI:\n• K-Anonymität stellt sicher, dass jede Person in mindestens k anderen Personen mit ähnlichen Attributen ununterscheidbar ist.\n• L-Diversity erweitert K-Anonymität um Diversitätsanforderungen für sensitive Attribute zur Vermeidung von Homogenitätsangriffen.\n• T-Closeness gewährleistet, dass die Verteilung sensitiver Attribute in Äquivalenzklassen der Gesamtverteilung ähnelt.\n• Differential Privacy fügt kalibrierten Rauschen hinzu, um mathematisch beweisbare Datenschutzgarantien zu bieten.\n\n⚠️ Re-Identifikationsrisiken in KI-Systemen:\n• Model Inversion Attacks können aus KI-Modellen Informationen über Trainingsdaten extrahieren und zur Re-Identifikation führen.\n• Membership Inference Attacks ermöglichen es zu bestimmen, ob bestimmte Daten im Trainingsdatensatz enthalten waren.\n• Linkage Attacks nutzen Korrelationen zwischen verschiedenen Datensätzen zur Aufhebung der Anonymisierung.\n• Temporal Correlation Attacks verwenden zeitliche Muster zur Identifikation von Personen über verschiedene Datensätze hinweg.\n\n🛡️ ADVISORI's Robust Anonymization Framework:\n• Multi-Layer-Anonymisierung kombiniert verschiedene Techniken für maximalen Schutz gegen Re-Identifikationsangriffe.\n• Continuous Privacy Monitoring überwacht KI-Systeme auf potenzielle Datenschutzverletzungen und Re-Identifikationsrisiken.\n• Privacy-Preserving Model Training verwendet Techniken wie Federated Learning und Secure Aggregation.\n• Regular Privacy Audits bewerten die Wirksamkeit von Anonymisierungsmaßnahmen und identifizieren neue Risiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielen Auftragsverarbeitungsverträge bei KI-Cloud-Services und wie strukturiert ADVISORI DSGVO-konforme Verträge mit AI-Service-Providern?',
        answer: "Auftragsverarbeitungsverträge für KI-Cloud-Services erfordern besondere Sorgfalt, da sie die komplexen Datenflüsse und Verarbeitungsprozesse von AI-Systemen abdecken müssen. ADVISORI entwickelt spezialisierte Vertragsstrukturen, die sowohl DSGVO-Compliance als auch die technischen Realitäten von Cloud-basierter KI berücksichtigen.\n\n📋 DSGVO-Anforderungen für KI-Auftragsverarbeitung:\n• Artikel 28 DSGVO verlangt schriftliche Verträge mit detaillierten Regelungen für alle Aspekte der Datenverarbeitung in KI-Systemen.\n• Spezifische Weisungen für KI-Verarbeitungen müssen klar definiert werden, einschließlich Training, Inferenz und Modell-Updates.\n• Vertraulichkeit und Sicherheit müssen besonders für KI-Trainingsdaten und Modellparameter gewährleistet werden.\n• Unterauftragsverarbeitung erfordert explizite Genehmigung und entsprechende vertragliche Absicherung für alle beteiligten AI-Service-Provider.\n\n🔐 KI-spezifische Vertragsklauseln:\n• Data Processing Specifications müssen alle KI-Verarbeitungsschritte von Datenaufbereitung über Training bis zu Inferenz und Monitoring abdecken.\n• Model Governance-Klauseln regeln Eigentum, Nutzungsrechte und Löschung von KI-Modellen und deren Parametern.\n• Bias und Fairness-Verpflichtungen stellen sicher, dass AI-Services diskriminierungsfreie Ergebnisse liefern.\n• Explainability-Anforderungen definieren, welche Erklärungen für KI-Entscheidungen bereitgestellt werden müssen.\n\n🌐 Multi-Cloud und Vendor-Management:\n• Vendor Risk Assessment bewertet Datenschutz-Compliance und Sicherheitsstandards verschiedener AI-Cloud-Provider.\n• Standardisierte Vertragsvorlagen für verschiedene KI-Service-Kategorien reduzieren Komplexität und gewährleisten Konsistenz.\n• Exit-Strategien und Data Portability-Klauseln ermöglichen sichere Migration zwischen verschiedenen AI-Plattformen.\n• Incident Response-Koordination zwischen verschiedenen Service-Providern für effektive Datenschutzverletzungs-Behandlung.\n\n⚖️ ADVISORI's Contract Excellence für AI-Services:\n• Entwicklung branchenspezifischer Vertragsvorlagen für verschiedene KI-Anwendungsfälle und Compliance-Anforderungen.\n• Legal Tech-Integration für automatisierte Vertragsüberwachung und Compliance-Tracking.\n• Regelmäßige Vertragsreviews zur Anpassung an neue regulatorische Anforderungen und technologische Entwicklungen.\n• Schulung von Procurement-Teams in KI-spezifischen Datenschutzanforderungen für informierte Vertragsverhandlungen."
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
