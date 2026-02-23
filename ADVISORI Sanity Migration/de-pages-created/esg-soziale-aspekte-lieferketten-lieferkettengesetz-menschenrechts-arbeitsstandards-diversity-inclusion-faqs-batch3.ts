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
    console.log('Updating ESG Soziale Aspekte page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Technologie-Integration wird zunehmend entscheidend für soziale ESG-Excellence. Wie positioniert ADVISORI innovative Technologien als Enabler für Menschenrechts-Monitoring und Supply Chain Transparency?",
        answer: "Die digitale Transformation sozialer ESG-Praktiken eröffnet beispiellose Möglichkeiten für Transparenz, Effizienz und Impact-Maximierung. Gleichzeitig entstehen neue Herausforderungen bezüglich Datenschutz, Algorithmus-Fairness und digitaler Gerechtigkeit. ADVISORI hat einen Human-Centered Technology Approach entwickelt, der innovative Technologien als Verstärker menschlicher Werte und sozialer Gerechtigkeit positioniert.\n\n🔧 Technologie-Enabler für soziale ESG-Excellence:\n• Blockchain-basierte Supply Chain Transparency: Unveränderliche Dokumentation von Arbeitsbedingungen, Löhnen und Arbeitszeiten entlang der gesamten Lieferkette für lückenlose Nachverfolgbarkeit.\n• AI-powered Human Rights Monitoring: Intelligente Systeme zur Analyse von Satellitenbildern, sozialen Medien und öffentlichen Daten für frühzeitige Erkennung von Menschenrechtsverletzungen.\n• IoT-gestützte Worker Safety: Vernetzte Sensoren und Wearables zur Echtzeit-Überwachung von Arbeitssicherheit und Gesundheitsschutz in Produktionsstätten.\n• Digital Identity Solutions: Sichere, dezentrale Identitätslösungen für Arbeiter in informellen Sektoren zur Gewährleistung von Rechten und Schutz.\n\n🌐 ADVISORI's Human-Centered Technology Framework:\n• Ethics by Design: Integration ethischer Prinzipien in alle technologischen Lösungen von der Konzeption bis zur Implementierung.\n• Participatory Technology Development: Einbindung betroffener Communities und Stakeholder in die Entwicklung und Bewertung technologischer Lösungen.\n• Digital Equity Focus: Sicherstellung, dass Technologie-Einsatz bestehende Ungleichheiten nicht verstärkt, sondern abbaut.\n• Privacy-First Approach: Rigoroser Schutz persönlicher Daten und Respekt für digitale Rechte in allen technologischen Implementierungen.\n\n🚀 Innovative Anwendungsfelder und Business Impact:\n• Predictive Supply Chain Risk Analytics: Vorausschauende Identifikation von sozialen Risiken in der Lieferkette für proaktive Intervention.\n• Automated Compliance Monitoring: Kontinuierliche, automatisierte Überwachung der Einhaltung sozialer Standards mit Echtzeit-Alerting.\n• Digital Worker Empowerment: Mobile Plattformen, die Arbeitern direkten Zugang zu Rechten, Beschwerdemechanismen und Weiterbildungsangeboten bieten.\n• Impact Measurement Automation: Automatisierte Erfassung und Analyse sozialer Impact-Metriken für datengetriebene Entscheidungsfindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Generative KI und Algorithmus-Fairness werden zu kritischen Faktoren für soziale Gerechtigkeit. Wie unterstützt ADVISORI Unternehmen bei der Entwicklung ethischer KI-Strategien, die Diversity & Inclusion fördern?",
        answer: "Die rasante Entwicklung generativer KI-Systeme birgt sowohl enormes Potenzial für die Förderung sozialer Gerechtigkeit als auch erhebliche Risiken für die Verstärkung bestehender Diskriminierungen und Ungleichheiten. ADVISORI hat einen Responsible AI for Social Good Approach entwickelt, der KI-Technologien als mächtige Werkzeuge für Diversity & Inclusion und soziale Gerechtigkeit positioniert.\n\n🤖 KI-Risiken für soziale Gerechtigkeit:\n• Algorithmic Bias: KI-Systeme können bestehende gesellschaftliche Vorurteile und Diskriminierungen perpetuieren und verstärken.\n• Representation Gaps: Unterrepräsentation marginalisierter Gruppen in Trainingsdaten führt zu unfairen Ergebnissen.\n• Automated Discrimination: Automatisierte Entscheidungssysteme können systematische Benachteiligung bestimmter Bevölkerungsgruppen verursachen.\n• Transparency Deficits: Mangelnde Nachvollziehbarkeit von KI-Entscheidungen erschwert die Identifikation und Korrektur unfairer Behandlung.\n\n⚖️ ADVISORI's Responsible AI Framework:\n• Fairness by Design: Integration von Fairness-Kriterien und Bias-Tests in alle Phasen der KI-Entwicklung und -Implementierung.\n• Diverse AI Teams: Aufbau multidisziplinärer, diverser Entwicklungsteams für verschiedene Perspektiven und Erfahrungen.\n• Inclusive Data Strategies: Systematische Sicherstellung repräsentativer, vielfältiger Trainingsdaten für faire KI-Modelle.\n• Explainable AI Implementation: Entwicklung transparenter, nachvollziehbarer KI-Systeme für verantwortungsvolle Entscheidungsfindung.\n\n🎯 KI-Potenziale für Diversity & Inclusion:\n• Bias-Free Recruitment: KI-gestützte Rekrutierungssysteme, die auf Fähigkeiten fokussieren und demographische Vorurteile eliminieren.\n• Inclusive Design Tools: Generative KI für die Entwicklung barrierefreier, kulturell sensibler Produkte und Dienstleistungen.\n• Language Accessibility: KI-powered Translation und Kommunikationstools für mehrsprachige, inklusive Arbeitsplätze.\n• Personalized Learning: Adaptive KI-Systeme für individualisierte, inklusive Weiterbildungs- und Entwicklungsprogramme.\n\n🔍 Governance und Monitoring für ethische KI:\n• AI Ethics Committees: Etablierung multidisziplinärer Ethik-Gremien für KI-Governance und -Oversight.\n• Continuous Bias Monitoring: Implementierung systematischer Monitoring-Systeme für die laufende Überwachung von KI-Fairness.\n• Stakeholder Feedback Loops: Strukturierte Einbindung betroffener Communities in KI-Bewertung und -Verbesserung.\n• Regular Algorithm Audits: Durchführung regelmäßiger, unabhängiger Audits von KI-Systemen auf Fairness und soziale Auswirkungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Investoren fokussieren zunehmend auf messbare soziale Impacts. Wie entwickelt ADVISORI robuste Impact-Measurement-Frameworks, die sowohl Stakeholder-Erwartungen erfüllen als auch genuine gesellschaftliche Wertschöpfung demonstrieren?",
        answer: "Die Messung und Kommunikation sozialer Impacts entwickelt sich von qualitativen Anekdoten zu quantitativen, wissenschaftlich fundierten Bewertungen. Investoren, Regulatoren und Stakeholder verlangen zunehmend nach robusten, vergleichbaren und verifizierbaren Impact-Metriken. ADVISORI hat einen Scientific Impact Measurement Approach entwickelt, der höchste methodische Standards mit praktischer Anwendbarkeit verbindet.\n\n📊 Evolution der Impact-Measurement-Erwartungen:\n• Outcomes over Outputs: Fokus verschiebt sich von Aktivitäten und Inputs zu messbaren gesellschaftlichen Verbesserungen und Wirkungen.\n• Scientific Rigor: Anwendung wissenschaftlicher Methoden wie Randomized Controlled Trials und Kausalitätsanalysen für robuste Impact-Bewertung.\n• Long-term Perspective: Berücksichtigung langfristiger, nachhaltiger Wirkungen statt kurzfristiger, oberflächlicher Erfolge.\n• Stakeholder-Defined Value: Integration der Perspektiven und Wertvorstellungen betroffener Communities in Impact-Definitionen.\n\n🔬 ADVISORI's Scientific Impact Framework:\n• Theory of Change Development: Systematische Entwicklung logischer Kausalketten von Aktivitäten zu gesellschaftlichen Wirkungen.\n• Mixed-Methods Evaluation: Kombination quantitativer und qualitativer Bewertungsmethoden für ganzheitliche Impact-Analyse.\n• Attribution and Causality: Rigorose Analyse kausaler Zusammenhänge zwischen Unternehmensaktivitäten und sozialen Outcomes.\n• Counterfactual Analysis: Bewertung dessen, was ohne die Intervention geschehen wäre, für präzise Impact-Quantifizierung.\n\n🎯 Innovative Measurement-Technologien und -Methoden:\n• Digital Impact Tracking: Nutzung von Big Data, Satellitenbildern und IoT-Sensoren für kontinuierliche, objektive Impact-Messung.\n• Blockchain-based Impact Verification: Unveränderliche Dokumentation und Verifizierung von Impact-Daten für maximale Transparenz.\n• AI-powered Pattern Recognition: Identifikation subtiler Impact-Muster und Langzeittrends durch Machine Learning-Algorithmen.\n• Real-time Impact Dashboards: Live-Visualisierung von Impact-Metriken für kontinuierliche Steuerung und Optimierung.\n\n💰 Monetarisierung und Business Value von Social Impact:\n• Social Return on Investment (SROI): Quantifizierung des gesellschaftlichen Werts in monetären Begriffen für Investor-Relations.\n• Impact-linked Financing: Strukturierung von Finanzierungen mit impact-basierten Rückzahlungsmodalitäten und Zinssätzen.\n• ESG Premium Valuation: Demonstration des Beitrags sozialer Impacts zu Unternehmensbewertung und Kapitalmarktzugang.\n• Risk-Adjusted Returns: Integration sozialer Impact-Faktoren in Risikobewertungen und Return-Kalkulationen für fundierte Investmententscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Geopolitische Spannungen und Lieferkettenresilienz stehen in direktem Zusammenhang mit sozialen ESG-Risiken. Wie integriert ADVISORI geopolitische Risikobewertung in soziale ESG-Strategien für krisenresistente Geschäftsmodelle?",
        answer: "Geopolitische Instabilitäten, Handelskonflikte und regionale Krisen haben direkte Auswirkungen auf soziale ESG-Performance und Lieferkettenresilienz. Traditionelle Risikobewertungen berücksichtigen oft nicht die komplexen Interdependenzen zwischen politischen Entwicklungen und sozialen Herausforderungen. ADVISORI hat einen Geopolitical-Social Risk Integration Approach entwickelt, der diese Dimensionen systematisch verknüpft.\n\n🌍 Geopolitische Risikodimensionen für soziale ESG:\n• Political Instability Impact: Auswirkungen politischer Unruhen, Regierungswechsel und Konflikte auf Arbeitnehmerrechte und Menschenrechtssituation.\n• Trade War Implications: Handelskonflikte führen zu Produktionsverlagerungen mit potenziell negativen Auswirkungen auf Arbeitsstandards in neuen Regionen.\n• Sanctions and Compliance: Sanktionsregime schaffen Komplexität bei der Aufrechterhaltung ethischer Geschäftspraktiken in betroffenen Regionen.\n• Resource Scarcity Conflicts: Klimawandel und Ressourcenknappheit verstärken geopolitische Spannungen mit direkten sozialen Konsequenzen.\n\n⚡ ADVISORI's Integrated Risk Assessment Framework:\n• Geopolitical-Social Risk Mapping: Systematische Analyse der Interdependenzen zwischen geopolitischen Entwicklungen und sozialen ESG-Risiken.\n• Scenario-based Strategic Planning: Entwicklung multipler Zukunftsszenarien für robuste Strategieentwicklung unter Unsicherheit.\n• Early Warning Systems: Implementation von Monitoring-Systemen für frühzeitige Erkennung geopolitischer Risiken mit sozialen Implikationen.\n• Adaptive Response Mechanisms: Aufbau flexibler Reaktionsmechanismen für schnelle Anpassung an sich verändernde geopolitische Realitäten.\n\n🛡️ Resiliente Geschäftsmodell-Strategien:\n• Diversified Supply Chain Architecture: Aufbau geografisch und politisch diversifizierter Lieferketten zur Risikominimierung.\n• Local Value Creation: Stärkung lokaler Wertschöpfung und Community-Bindungen als Puffer gegen geopolitische Schocks.\n• Ethical Supply Chain Standards: Etablierung robuster, universeller Ethikstandards, die auch in politisch instabilen Regionen durchsetzbar sind.\n• Stakeholder Alliance Building: Aufbau strategischer Allianzen mit lokalen Stakeholdern für erhöhte Resilienz und Social License to Operate.\n\n📈 Strategische Wettbewerbsvorteile durch integrierte Risikobewertung:\n• Proactive Risk Mitigation: Frühzeitige Identifikation und Adressierung geopolitisch-sozialer Risiken vor Wettbewerbern.\n• Enhanced Due Diligence: Überlegene Due-Diligence-Prozesse, die politische und soziale Risikofaktoren systematisch integrieren.\n• Crisis-resistant Operations: Aufbau von Geschäftsmodellen, die auch unter geopolitischem Stress hohe soziale Standards aufrechterhalten.\n• Stakeholder Trust Premium: Erhöhtes Vertrauen von Investoren, Kunden und Partnern durch demonstrierte Krisenresilienz."
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
