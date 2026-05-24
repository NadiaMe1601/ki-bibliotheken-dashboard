// Vollständige Bibliotheksdaten - alle 54 Bibliotheken
const libraryData = [
  // Deutsche Bibliotheken (9)
  {
    "name": "VÖBB – Verbund Öffentlicher Bibliotheken Berlin",
    "location": "Deutschland / Berlin",
    "city": "Berlin",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "KI-gestützter Katalog-Chatbot mit natürlicher Sprachsuche und Empfehlungen in über 90 Sprachen.",
    "internalImplementation": "Implementierung eines mehrsprachigen KI-Chatbots für die Katalogrecherche mit natürlicher Sprachverarbeitung und maschinellem Lernen für personalisierte Empfehlungen.",
    "externalPrograms": "Öffentlich verfügbarer KI-Chatbot für alle Berliner Bürger*innen zur einfachen Medienrecherche. Webinare und Schulungen für Bibliothekspersonal zur KI-Integration.",
    "activities": ["Mehrsprachiger KI-Chatbot", "Natürliche Sprachverarbeitung", "Empfehlungssystem", "Benutzerfreundliche Suche"],
    "website": "https://www.zlb.de/presse/chatbot-auf-den-katalogseiten-des-voebb/",
    "dates": "Laufende Implementation seit 2024",
    "tags": ["Chatbot", "KI/AI", "Empfehlungen"],
    "language": "Deutsch"
  },
  {
    "name": "KIT-Bibliothek Karlsruhe",
    "location": "Deutschland / Karlsruhe",
    "city": "Karlsruhe",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "KI-basierter Chatbot 'BibKI' für 24/7 Service-Anfragen zu Bibliotheksangeboten.",
    "internalImplementation": "Entwicklung und Implementierung des BibKI-Chatbots für automatisierte Beantwortung von Routine-Serviceanfragen und Entlastung des Bibliothekspersonals.",
    "externalPrograms": "Öffentlich zugänglicher Service-Chatbot für Studierende und Forschende. Webinar-Serie für Bibliothekare zur KI-Integration im Bibliotheksservice.",
    "activities": ["BibKI Service-Chatbot", "Automatisierte Anfragen", "Webinar-Schulungen", "Service-Optimierung"],
    "website": "https://chatbot.bibliothek.kit.edu/",
    "dates": "Seit 2024, laufende Webinar-Serie",
    "tags": ["Chatbot", "KI/AI"],
    "language": "Deutsch"
  },
  {
    "name": "Deutsche Nationalbibliothek",
    "location": "Deutschland / Frankfurt",
    "city": "Frankfurt",
    "country": "Deutschland",
    "type": "Nationalbibliothek",
    "description": "KI-gestützte Metadatenerschließung, OCR-Optimierung und Gastgeberin der jährlichen Tagung 'KI in Bibliotheken weiterdenken' (7. Auflage Januar 2026).",
    "internalImplementation": "Produktiver Einsatz von KI zur automatisierten Metadaten-Erstellung und OCR-Verbesserung in der Erschließung. Koordination des 'Netzwerks maschinelle Verfahren in der Erschließung' mit jährlicher Fachtagung.",
    "externalPrograms": "Jährliche Tagung 'KI in Bibliotheken weiterdenken' (Januar 2026, 7. Auflage) mit Schwerpunkt LLMs, Datenqualität und Ethik. Bereitstellung verbesserter OCR-Ergebnisse für Forschende.",
    "activities": ["KI-Metadaten-Erschließung", "OCR-Optimierung", "Jährliche KI-Tagung", "Netzwerk maschinelle Verfahren"],
    "website": "https://blog.dnb.de/tagungsbericht-ki-in-bibliotheken-weiterdenken/",
    "dates": "Laufende Projekte seit 2023; Tagung Januar 2026",
    "tags": ["KI/AI", "Metadaten", "OCR"],
    "language": "Deutsch"
  },
  {
    "name": "TH Köln – Weiterbildungszentrum (ZBIW)",
    "location": "Deutschland / Köln",
    "city": "Köln",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "Weiterbildungszentrum für Bibliotheks- und Informationswissenschaft mit KI-bezogenen Seminaren und Workshops für Bibliotheksfachpersonal.",
    "internalImplementation": "Entwicklung und Durchführung von Weiterbildungsprogrammen zur KI-Integration in Bibliotheken mit praktischen Übungskomponenten.",
    "externalPrograms": "Öffentliche Seminare und Workshops für Bibliothekspersonal zur Entwicklung eigener KI-Chatbots. Zertifizierungsprogramme für KI-Kompetenz in Bibliotheken.",
    "activities": ["KI-Chatbot Seminare", "Praxis-Workshops", "Weiterbildung", "Zertifizierung"],
    "website": "https://www.th-koeln.de/weiterbildung/",
    "dates": "Regelmäßige Seminare seit 2024",
    "tags": ["Chatbot", "Workshop", "Training"],
    "language": "Deutsch"
  },
  {
    "name": "Stadtbibliothek Stuttgart",
    "location": "Deutschland / Stuttgart",
    "city": "Stuttgart",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "Pilot-Projekt 'SmartShelf': Automatische Regalerkennung mit Computer Vision zur Bestandsprüfung.",
    "internalImplementation": "Implementierung von Computer Vision-Technologie zur automatischen Erkennung und Überwachung von Regalbeständen für effizientere Bestandsverwaltung.",
    "externalPrograms": "Demonstrationen des SmartShelf-Systems für Besucher*innen und andere Bibliotheken. Workshops zur KI-Integration in öffentlichen Bibliotheken.",
    "activities": ["Computer Vision", "SmartShelf-System", "Bestandserkennung", "Automatisierte Verwaltung"],
    "website": "https://www.stuttgart.de/leben/bildung/stadtbibliothek/",
    "dates": "Pilot seit 2024",
    "tags": ["KI/AI"],
    "language": "Deutsch"
  },
  {
    "name": "Universitätsbibliothek München",
    "location": "Deutschland / München",
    "city": "München",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "KI-gestützte Digitalisierung historischer Handschriften mit automatischer Transkription.",
    "internalImplementation": "Entwicklung spezialisierter OCR-Systeme für historische deutsche Handschriften und automatische Metadaten-Generierung.",
    "externalPrograms": "Bereitstellung digitalisierter Handschriften für Forschende. Workshops zu KI-gestützter Paläographie für Geisteswissenschaftler.",
    "activities": ["Handschrift-OCR", "Historische Digitalisierung", "Paläographie-KI", "Forschungsunterstützung"],
    "website": "https://ub.uni-muenchen.de/",
    "dates": "Projekt seit 2023",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Deutsch"
  },
  {
    "name": "Hamburger Öffentliche Bücherhallen",
    "location": "Deutschland / Hamburg",
    "city": "Hamburg",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "KI-Pilotprojekt für intelligente Buchempfehlungen basierend auf Ausleihhistorie und Nutzerpräferenzen.",
    "internalImplementation": "Implementierung eines Machine Learning-basierten Empfehlungssystems zur Verbesserung der Benutzerfreundlichkeit.",
    "externalPrograms": "Personalisierte Buchempfehlungen für alle Hamburger Bürger*innen. KI-Alphabetisierung-Workshops für verschiedene Altersgruppen.",
    "activities": ["Empfehlungsalgorithmus", "Personalisierung", "KI-Bildung", "Benutzeranalyse"],
    "website": "https://buecherhallen.de/",
    "dates": "Pilot seit 2024",
    "tags": ["KI/AI", "Empfehlungen"],
    "language": "Deutsch"
  },
  {
    "name": "Stadtbibliothek Düsseldorf",
    "location": "Deutschland / Düsseldorf",
    "city": "Düsseldorf",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "Workshop-Programm 'KI für alle': Mehrsprachige KI-Alphabetisierung für die internationale Community.",
    "internalImplementation": "Entwicklung mehrsprachiger KI-Bildungsmaterialien für die diverse Düsseldorfer Bevölkerung.",
    "externalPrograms": "Mehrsprachige KI-Workshops (Deutsch, Türkisch, Arabisch, Englisch) für Bürger*innen aller Hintergründe.",
    "activities": ["Mehrsprachige KI-Bildung", "Community Outreach", "Interkulturelle Programme", "Digitale Inklusion"],
    "website": "https://duesseldorf.de/stadtbuecherei/",
    "dates": "Programme seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Deutsch"
  },
  {
    "name": "Universitätsbibliothek Heidelberg",
    "location": "Deutschland / Heidelberg",
    "city": "Heidelberg",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "Forschungsprojekt zur KI-gestützten Analyse antiker Texte und automatischen Übersetzung.",
    "internalImplementation": "Entwicklung von KI-Systemen zur Analyse und Übersetzung antiker griechischer und lateinischer Texte.",
    "externalPrograms": "Kooperationen mit internationalen Universitäten zur KI-gestützten Altphilologie. Workshops für Studierende der Klassischen Philologie.",
    "activities": ["Antike Texte KI", "Automatische Übersetzung", "Digital Humanities", "Altphilologie"],
    "website": "https://ub.uni-heidelberg.de/",
    "dates": "Forschung seit 2023",
    "tags": ["KI/AI", "OCR"],
    "language": "Deutsch"
  },

  // US-amerikanische Bibliotheken (15)
  {
    "name": "Boston Public Library",
    "location": "USA / Boston (Massachusetts)",
    "city": "Boston",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Großprojekt zur KI-gestützten Metadatenanreicherung und Skalierung der Digitalisierung historischer Bestände in Kooperation mit Harvard Law School.",
    "internalImplementation": "Partnerschaften mit Harvard Institute for Digital Innovation zur KI-gestützten Digitalisierung historischer Sammlungen. Automatische Metadaten-Erweiterung für tausende historische Dokumente.",
    "externalPrograms": "'Intro to AI: What It Is and How to Use It' - Workshops für Bürger mit Stanford-Absolventen. 'A Beginner's Guide to News Literacy in the Age of AI' - Workshops zu Medienkompetenz.",
    "activities": ["Harvard-KI-Digitalisierung", "Stanford-Alumni-Workshops", "News Literacy Training", "Anti-Desinformation"],
    "website": "https://www.bpl.org/",
    "dates": "Seit Januar 2025, wöchentliche Workshops",
    "tags": ["KI/AI", "Metadaten", "Digitalisierung"],
    "language": "Englisch"
  },
  {
    "name": "New York Public Library",
    "location": "USA / New York",
    "city": "New York",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "NYPL Labs: ML-basierte Themenklassifikation und Empfehlung von Digital Collections.",
    "internalImplementation": "Entwicklung und Testing von Machine Learning-Algorithmen zur automatischen Klassifikation und Empfehlung digitaler Sammlungen im NYPL Labs.",
    "externalPrograms": "Öffentliche Demonstrationen und Workshops zu KI-gestützten Empfehlungssystemen. Kooperationen mit Forschungseinrichtungen zur KI-Entwicklung.",
    "activities": ["NYPL Labs", "ML-Klassifikation", "Digital Collections", "KI-Empfehlungen"],
    "website": "https://www.nypl.org/collections/labs",
    "dates": "Laufendes Pilotprojekt seit 2023",
    "tags": ["KI/AI", "Empfehlungen"],
    "language": "Englisch"
  },
  {
    "name": "Los Angeles Public Library",
    "location": "USA / Los Angeles",
    "city": "Los Angeles",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Chatbot 'LIBRARI': Auskunft zu Öffnungszeiten, Standort, Medienrecherche über Messenger-Apps.",
    "internalImplementation": "Implementierung des LIBRARI-Chatbots für automatisierte Beantwortung häufiger Bürgeranfragen über verschiedene Messenger-Plattformen.",
    "externalPrograms": "24/7 verfügbarer Chatbot-Service für alle Bürger*innen von Los Angeles. Integration in Social Media und Messaging-Plattformen für einfachen Zugang.",
    "activities": ["LIBRARI Chatbot", "Messenger Integration", "24/7 Service", "Automatisierte Auskunft"],
    "website": "https://lapl.org/",
    "dates": "Seit 2024 im Einsatz",
    "tags": ["Chatbot", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Frisco Public Library",
    "location": "USA / Frisco (Texas)",
    "city": "Frisco",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Partner im Projekt 'Empowering Communities: Public Libraries...' zur Erforschung ethischer KI-Anwendungen in Bibliotheken.",
    "internalImplementation": "Teilnahme an der ULC-Forschungsinitiative zur ethischen Integration von KI-Technologien in öffentliche Bibliotheksservices.",
    "externalPrograms": "Entwicklung und Bereitstellung von Leitfäden und Case Studies für andere öffentliche Bibliotheken zur KI-Integration.",
    "activities": ["ULC Forschungsprojekt", "Ethische KI", "Case Studies", "Integration Leitfäden"],
    "website": "https://urbanlibraries.org/",
    "dates": "Forschungsprojekt 2023-2025",
    "tags": ["KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Chicago Public Library",
    "location": "USA / Chicago",
    "city": "Chicago",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Workshop-Reihe 'Navigating AI': Einführung in verschiedene KI-Tools für den Alltag, von ChatGPT bis zu Bild-KI.",
    "internalImplementation": "Entwicklung umfassender KI-Bildungsprogramme für die lokale Bevölkerung mit Fokus auf praktische Anwendung und kritische Bewertung.",
    "externalPrograms": "Öffentliche Workshop-Serie zu verschiedenen KI-Tools und deren verantwortungsvolle Nutzung für alle Altersgruppen.",
    "activities": ["KI-Tool Workshops", "Medienbildung", "Praktische Anwendung", "Kritisches Denken"],
    "website": "https://chipublib.org/",
    "dates": "Workshop-Serie seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "San Francisco Public Library",
    "location": "USA / San Francisco",
    "city": "San Francisco",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'AI Literacy for All Ages': Mehrgenerationale Programme von Kindern bis Senioren; spezielle Sessions zu AI-Ethik und -Bias.",
    "internalImplementation": "Entwicklung altersgerechter KI-Bildungsprogramme mit speziellem Fokus auf ethische Aspekte und Bias-Erkennung.",
    "externalPrograms": "Mehrgenerationale KI-Literacy-Programme mit speziellen Sessions für verschiedene Altersgruppen und Interessenschwerpunkte.",
    "activities": ["Mehrgenerational AI", "Ethik-Programme", "Bias-Erkennung", "Community-Bildung"],
    "website": "https://sfpl.org/",
    "dates": "Programme seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Seattle Public Library",
    "location": "USA / Seattle",
    "city": "Seattle",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'Tech Equity Initiative': KI-Zugang und -Bildung für unterversorgte Communities; kostenlose KI-Tools-Zugänge.",
    "internalImplementation": "Initiative zur digitalen Gerechtigkeit mit Fokus auf gleichberechtigten KI-Zugang für alle Bevölkerungsgruppen.",
    "externalPrograms": "Kostenlose KI-Tool-Zugänge und mehrsprachige Workshops für unterversorgte Communities mit Fokus auf digitale Gerechtigkeit.",
    "activities": ["Tech Equity", "Mehrsprachige Workshops", "Community Outreach", "Digitale Gerechtigkeit"],
    "website": "https://spl.org/",
    "dates": "Initiative seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Austin Public Library",
    "location": "USA / Austin",
    "city": "Austin",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'Creative AI Labs': Workshops zu generativer KI für kreative Anwendungen (Musik, Kunst, Schreiben).",
    "internalImplementation": "Aufbau kreativer KI-Labs in Kooperation mit lokalen Kunstinstitutionen und der Universität für innovative Community-Programme.",
    "externalPrograms": "Creative AI Labs mit Workshops zu generativer KI in Kunst, Musik und Schreiben, in Zusammenarbeit mit lokalen Künstlern.",
    "activities": ["Creative AI", "Generative KI", "Kunst-Workshops", "University Kooperation"],
    "website": "https://library.austintexas.gov/",
    "dates": "Labs seit 2024",
    "tags": ["Workshop", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Miami-Dade Public Library",
    "location": "USA / Miami",
    "city": "Miami",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'Bilingual AI Education': Zweisprachige KI-Programme (Englisch/Spanisch) zur Unterstützung der spanischsprachigen Community.",
    "internalImplementation": "Entwicklung zweisprachiger KI-Bildungsprogramme zur Unterstützung der großen spanischsprachigen Bevölkerung in Miami-Dade.",
    "externalPrograms": "Zweisprachige KI-Workshops und -Programme auf Englisch und Spanisch für die diverse Community von Miami-Dade.",
    "activities": ["Bilingual AI", "Spanish Programs", "Community Support", "Cultural Inclusion"],
    "website": "https://mdpls.org/",
    "dates": "Programme seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Denver Public Library",
    "location": "USA / Denver",
    "city": "Denver",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'AI and the Future of Work': Spezielle Programme für Erwachsenenbildung zu KI-Impact auf Karrieren und Jobmarkt.",
    "internalImplementation": "Entwicklung spezialisierter Erwachsenenbildungsprogramme zum KI-Impact auf Arbeitswelt und Karriereentwicklung.",
    "externalPrograms": "Fokussierte Programme für Erwachsene zu KI-Auswirkungen auf Karrieren, Jobmarkt und Umschulung.",
    "activities": ["Future of Work", "Erwachsenenbildung", "Karriere-KI", "Job Impact"],
    "website": "https://denverlibrary.org/",
    "dates": "Programme seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Brooklyn Public Library",
    "location": "USA / Brooklyn",
    "city": "Brooklyn",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "'AI for Social Good': Community-basierte Projekte, die KI für lokale Herausforderungen nutzen.",
    "internalImplementation": "Aufbau community-basierter KI-Projekte zur Lösung lokaler Herausforderungen in Brooklyn.",
    "externalPrograms": "AI for Social Good Initiative mit community-getriebenen Projekten zu Nachbarschaftssicherheit, Umweltschutz und sozialen Herausforderungen.",
    "activities": ["Social Good AI", "Community Projects", "Local Challenges", "Civic Tech"],
    "website": "https://bklynlibrary.org/",
    "dates": "Initiative seit 2024",
    "tags": ["KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "City of Santa Clara Library",
    "location": "USA / Santa Clara (Kalifornien)",
    "city": "Santa Clara",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Workshop 'AI Tools for Job Seekers': Einblicke, wie KI im Recruitment genutzt wird, plus praktische Übungen.",
    "internalImplementation": "Entwicklung spezialisierter Workshop-Programme zur Nutzung von KI-Tools für Jobsuchende und Karriereentwicklung.",
    "externalPrograms": "Regelmäßige öffentliche Workshops für Jobsuchende zur effektiven Nutzung von KI-Tools im Bewerbungsprozess.",
    "activities": ["Job Seeker Workshops", "KI-Recruitment Tools", "Lebenslauf-KI", "Karriere-Coaching"],
    "website": "https://webjunction.org/news/webjunction/ai-programming-for-patrons.html",
    "dates": "Regelmäßige Workshops seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Allen County Public Library",
    "location": "USA / Fort Wayne (Indiana)",
    "city": "Fort Wayne",
    "country": "USA",
    "type": "Öffentliche Bibliothek",
    "description": "Virtuelles Programm 'Building your family's story using AI on FamilySearch' mit OCR- und Handschriftenerkennung.",
    "internalImplementation": "Entwicklung virtueller Programme zur Nutzung von KI-gestützten Genealogie-Tools und historischer Dokumentenanalyse.",
    "externalPrograms": "Virtuelle Workshops für Familienforscher zur Nutzung von KI in genealogischen Datenbanken und historischer Dokumentenrecherche.",
    "activities": ["Genealogie-KI", "FamilySearch Integration", "OCR-Workshops", "Familienforschung"],
    "website": "https://webjunction.org/news/webjunction/ai-programming-for-patrons.html",
    "dates": "Virtuelle Programme seit 2024",
    "tags": ["OCR", "KI/AI", "Workshop"],
    "language": "Englisch"
  },

  // Internationale Bibliotheken (30)
  {
    "name": "Bibliothèque nationale de France (BnF)",
    "location": "Frankreich / Paris",
    "city": "Paris",
    "country": "Frankreich",
    "type": "Nationalbibliothek",
    "description": "'Gallica Images' segmentiert und charakterisiert digitale Dokumente mit ML; Transkriptionsdienste für historische Handschriften.",
    "internalImplementation": "Einsatz von KI zur automatischen Transkription historischer Handschriften und OCR-gestützten Digitalisierung. Machine Learning für erweiterte Metadatengenerierung und Sammlungserschließung.",
    "externalPrograms": "Webinar-Serien für Bibliothekare zu ethischer KI-Nutzung und Data Governance. Öffentliche Workshops zu KI-gestützter Handschrifttranskription.",
    "activities": ["Handschrift-KI-Transkription", "Ethik-Webinare", "Data Governance Training", "OCR-Digitalisierung"],
    "website": "https://www.bnf.fr/en/artificial-intelligence-bnf",
    "dates": "Webinar-Serie 2025, laufende KI-Digitalisierung",
    "tags": ["OCR", "KI/AI"],
    "language": "Französisch"
  },
  {
    "name": "Vancouver Public Library",
    "location": "Kanada / Vancouver",
    "city": "Vancouver",
    "country": "Kanada",
    "type": "Öffentliche Bibliothek",
    "description": "'AI for Everyone': Mehrsprachige KI-Alphabetisierung für die diverse Bevölkerung Vancouvers (Englisch, Mandarin, Punjabi, etc.).",
    "internalImplementation": "Entwicklung mehrsprachiger KI-Bildungsprogramme für die kulturell diverse Bevölkerung Vancouvers.",
    "externalPrograms": "Mehrsprachige KI-Alphabetisierungsprogramme in verschiedenen Sprachen (Englisch, Mandarin, Punjabi, etc.) für die diverse Bevölkerung.",
    "activities": ["Multilingual AI", "Cultural Diversity", "Community Outreach", "Language Inclusion"],
    "website": "https://vpl.ca/",
    "dates": "Programme seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Toronto Public Library",
    "location": "Kanada / Toronto",
    "city": "Toronto",
    "country": "Kanada",
    "type": "Öffentliche Bibliothek",
    "description": "'Digital Fluency Initiative': KI-Integration in bestehende digitale Alphabetisierungsprogramme; besonderer Fokus auf Senioren.",
    "internalImplementation": "Integration von KI-Bildung in bestehende digitale Alphabetisierungsprogramme mit speziellem Fokus auf unterversorgte Bevölkerungsgruppen.",
    "externalPrograms": "Digital Fluency Initiative mit KI-Komponenten, speziell für Senioren und andere Gruppen zur Überbrückung der digitalen Kluft.",
    "activities": ["Digital Fluency", "Senior Programs", "Digital Divide", "Accessibility"],
    "website": "https://torontopubliclibrary.ca/",
    "dates": "Initiative seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Suwon Women's University Library",
    "location": "Südkorea / Suwon",
    "city": "Suwon",
    "country": "Südkorea",
    "type": "Universitätsbibliothek",
    "description": "Chatbot 'e-library Friend' (KakaoTalk/Web) für Ausleihe, Rückgabe, Verlängerung, Standortinfos und Buchrecherche rund um die Uhr.",
    "internalImplementation": "Integration eines KI-Chatbots in das Bibliotheksmanagementsystem über KakaoTalk und Web-Interface für automatisierte Benutzerservices.",
    "externalPrograms": "Rund-um-die-Uhr verfügbarer Chatbot-Service für Studierende über die beliebte KakaoTalk-Plattform mit hoher Nutzerakzeptanz.",
    "activities": ["KakaoTalk Integration", "24/7 Chatbot", "Automated Services", "Student Support"],
    "website": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4943647",
    "dates": "Seit 2023 im Einsatz",
    "tags": ["Chatbot", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "National Library of China",
    "location": "China / Peking",
    "city": "Peking",
    "country": "China",
    "type": "Nationalbibliothek",
    "description": "OCR-KI für Handschriften in historischen Manuskripten; LLM-basierte Zusammenfassung.",
    "internalImplementation": "Entwicklung spezialisierter OCR-Systeme für chinesische Kalligrafie und historische Schriften mit LLM-Integration für Inhaltszusammenfassungen.",
    "externalPrograms": "Bereitstellung digitalisierter und durchsuchbarer historischer chinesischer Texte für Forscher und die Öffentlichkeit.",
    "activities": ["Chinese OCR", "Handschrift-Erkennung", "LLM-Zusammenfassung", "Digitale Kultur"],
    "website": "https://www.nlc.cn/",
    "dates": "Laufende Projekte seit 2022",
    "tags": ["OCR", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Koninklijke Bibliotheek (KB)",
    "location": "Niederlande / Den Haag",
    "city": "Den Haag",
    "country": "Niederlande",
    "type": "Nationalbibliothek",
    "description": "Pilot 'KB AI Labs': Automatische Entity-Extraktion aus historischen Zeitungen.",
    "internalImplementation": "Entwicklung von KI-Systemen zur automatischen Erkennung und Extraktion von Entitäten aus historischen niederländischen Zeitungsarchiven.",
    "externalPrograms": "Bereitstellung verbesserter Suchfunktionen für Forscher und Öffentlichkeit. Workshops zu KI-gestützter historischer Forschung.",
    "activities": ["Entity-Extraktion", "Zeitungsanalyse", "AI Labs", "Historische Forschung"],
    "website": "https://www.kb.nl/en",
    "dates": "Pilot seit 2023",
    "tags": ["KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Biblioteca Nacional de España (BNE)",
    "location": "Spanien / Madrid",
    "city": "Madrid",
    "country": "Spanien",
    "type": "Nationalbibliothek",
    "description": "LibrarIN-Projekt: Automatische Klassifikation und Verschlagwortung von Bibliotheksbeständen mit NLP für das Spanische.",
    "internalImplementation": "LibrarIN-Forschungsprojekt zu automatisierter Katalogisierung, Metadaten-Generierung und OCR-gestützten Digitalisierungen. Natural Language Processing zur automatischen Erschließung historischer spanischer Dokumente.",
    "externalPrograms": "Pilotprojekte mit öffentlicher Beteiligung zur Verbesserung der KI-Algorithmen für historische spanische Texte. Workshops für Forscher und Studierende zu KI-gestützten Digital Humanities Methoden.",
    "activities": ["LibrarIN Forschungsprojekt", "Automatisierte Katalogisierung", "NLP für Spanisch", "Digital Humanities KI"],
    "website": "https://www.bne.es/",
    "dates": "Laufende Forschung und Pilotprojekte",
    "tags": ["KI/AI", "Metadaten"],
    "language": "Spanisch"
  },
  {
    "name": "Bibliothèque municipale de Lyon",
    "location": "Frankreich / Lyon",
    "city": "Lyon",
    "country": "Frankreich",
    "type": "Öffentliche Bibliothek",
    "description": "Workshop-Reihe 'Ateliers IA': Einführung in KI-Tools für Bürger*innen inkl. Chatbot-Demos.",
    "internalImplementation": "Entwicklung und Durchführung von KI-Bildungsprogrammen für die lokale Bevölkerung mit praktischen Demonstrationen aktueller KI-Tools.",
    "externalPrograms": "Regelmäßige Ateliers IA für Bürger*innen aller Altersgruppen. Hands-on Workshops zu ChatGPT, Bildgenerierung und anderen KI-Tools.",
    "activities": ["Ateliers IA", "KI-Tool Einführung", "Chatbot-Demos", "Bürger-Bildung"],
    "website": "https://www.bm-lyon.fr/",
    "dates": "Regelmäßige Workshops seit 2024",
    "tags": ["Workshop", "KI/AI", "Chatbot"],
    "language": "Französisch"
  },
  {
    "name": "Biblioteca Pública de Barcelona",
    "location": "Spanien / Barcelona",
    "city": "Barcelona",
    "country": "Spanien",
    "type": "Öffentliche Bibliothek",
    "description": "Chatbot-Pilot für Gemeindeservice und Medienempfehlungen über WhatsApp.",
    "internalImplementation": "Entwicklung eines WhatsApp-basierten Chatbots für Bürgerservice und personalisierte Medienempfehlungen.",
    "externalPrograms": "24/7 WhatsApp-Service für Bibliotheksnutzer mit KI-gestützten Empfehlungen und Auskunftsdienst.",
    "activities": ["WhatsApp Bot", "Medienempfehlungen", "Bürgerservice", "Mobile KI"],
    "website": "https://ajuntament.barcelona.cat/biblioteques/",
    "dates": "Pilot seit 2024",
    "tags": ["Chatbot", "KI/AI", "Empfehlungen"],
    "language": "Spanisch"
  },
  {
    "name": "Biblioteca Vasconcelos",
    "location": "Mexiko / Mexiko-Stadt",
    "city": "Mexiko-Stadt",
    "country": "Mexiko",
    "type": "Öffentliche Bibliothek",
    "description": "Workshop 'Introducción a la IA' für Jugendliche mit Coding-Übungen und Simplified-ML-Frameworks.",
    "internalImplementation": "Entwicklung jugendgerechter KI-Bildungsprogramme mit praktischen Coding-Komponenten und vereinfachten ML-Tools.",
    "externalPrograms": "Regelmäßige Workshops für Jugendliche zur Einführung in KI-Programmierung und maschinelles Lernen mit hands-on Coding-Übungen.",
    "activities": ["Youth AI Education", "Coding Workshops", "Simplified ML", "STEM Programs"],
    "website": "https://bibliotecavasconcelos.gob.mx/",
    "dates": "Regelmäßige Jugend-Workshops seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Spanisch"
  },
  {
    "name": "Unisa Library & Info Services",
    "location": "Südafrika / Pretoria",
    "city": "Pretoria",
    "country": "Südafrika",
    "type": "Öffentliche Bibliothek",
    "description": "Dreitägiger Workshop zu AI- und Robotik-Integration in Bibliotheksservices; Fokus auf virtuelle Bibliothekar*innen und AR/VR-Anwendungen.",
    "internalImplementation": "Entwicklung und Testing von Robotik- und VR-Technologien für Bibliotheksservices mit Fokus auf innovative Benutzerinteraktion.",
    "externalPrograms": "Umfassende Workshop-Programme für Bibliothekare und Studierende zu KI-, Robotik- und AR/VR-Integration in Bildungseinrichtungen.",
    "activities": ["AI & Robotik Workshops", "Virtual Librarians", "AR/VR Learning", "Innovation Training"],
    "website": "https://libguides.unisa.ac.za/blog/Exploring-AI-and-robotics-in-public-libraries",
    "dates": "Dreitägige Workshops, regelmäßig seit 2024",
    "tags": ["Workshop", "KI/AI", "Robotik"],
    "language": "Englisch"
  },
  {
    "name": "University of KwaZulu-Natal Libraries",
    "location": "Südafrika / Pietermaritzburg",
    "city": "Pietermaritzburg",
    "country": "Südafrika",
    "type": "Universitätsbibliothek",
    "description": "Entwicklung des 'Thola' Robot Librarian mit ChatGPT-Integration und Gastgeber des 5. IFLA Librarians Symposiums.",
    "internalImplementation": "KI-gestützte Katalogisierung, Ausgabe, Verlängerung und Rückgabe von Büchern. Entwicklung des Roboter-Bibliothekars 'Thola' mit mehrsprachigen ChatGPT-Funktionen.",
    "externalPrograms": "5. IFLA Librarians Symposium 'Artificial Intelligence and Robots Transforming Libraries' mit Fokus auf Südliches Afrika. Pilotprojekt mit 'Thola' in der medizinischen Bibliothek.",
    "activities": ["Thola Robot Librarian", "IFLA Symposium", "Mehrsprachige ChatGPT", "KI-Katalogisierung"],
    "website": "https://iafrica.com/ai-and-robots-reshape-south-african-libraries-without-replacing-staff/",
    "dates": "5. IFLA Symposium 2025, Thola in Entwicklung",
    "tags": ["Robotik", "Chatbot", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "University of Alberta Libraries",
    "location": "Kanada / Edmonton",
    "city": "Edmonton",
    "country": "Kanada",
    "type": "Universitätsbibliothek",
    "description": "Workshop-Serie 'Understanding Generative AI' für Studierende und Fakultät; Fokus auf akademische Integrität und Forschungsethik.",
    "internalImplementation": "Entwicklung umfassender KI-Bildungsprogramme für Hochschulangehörige mit Fokus auf verantwortungsvolle Nutzung in Lehre und Forschung.",
    "externalPrograms": "Workshop-Serie zu generativer KI für Studierende und Lehrende mit Schwerpunkt auf akademischer Integrität und Forschungsethik.",
    "activities": ["GenAI Workshops", "Academic Integrity", "Research Ethics", "Faculty Training"],
    "website": "https://library.ualberta.ca/",
    "dates": "Workshop-Serie seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Englisch"
  },
  {
    "name": "Universidade de São Paulo Bibliotecas",
    "location": "Brasilien / São Paulo",
    "city": "São Paulo",
    "country": "Brasilien",
    "type": "Universitätsbibliothek",
    "description": "KI-gestütztes Recommender-System für Fachliteratur auf Basis von Nutzerprofilen.",
    "internalImplementation": "Entwicklung eines ausgeklügelten Empfehlungssystems, das Nutzerprofile, Forschungsinteressen und fachliche Schwerpunkte für personalisierte Literaturempfehlungen nutzt.",
    "externalPrograms": "Öffentlich verfügbares Empfehlungssystem für Studierende und Forschende der USP mit KI-gestützter Fachliteratur-Suche.",
    "activities": ["Literature Recommendations", "User Profiling", "Research Support", "Academic AI"],
    "website": "https://www.abcd.usp.br/",
    "dates": "System seit 2023 aktiv",
    "tags": ["Empfehlungen", "KI/AI"],
    "language": "Englisch"
  },
  {
    "name": "Biblioteca de la Universidad de Buenos Aires",
    "location": "Argentinien / Buenos Aires",
    "city": "Buenos Aires",
    "country": "Argentinien",
    "type": "Universitätsbibliothek",
    "description": "Seminarreihe 'IA en Bibliotecas Académicas' mit Gastvorträgen und Praxislabs.",
    "internalImplementation": "Entwicklung akademischer KI-Programme für Hochschulbibliotheken mit Fokus auf Forschungsunterstützung und Lehre.",
    "externalPrograms": "Regelmäßige Seminarreihe mit internationalen KI-Experten und praktischen Workshops für Bibliothekare und Studierende.",
    "activities": ["Academic AI Seminare", "Expert Lectures", "Practical Labs", "Research Support"],
    "website": "https://www.uba.ar/",
    "dates": "Seminarreihe seit 2024",
    "tags": ["Workshop", "KI/AI", "Training"],
    "language": "Spanisch"
  },
  {
    "name": "Biblioteca Nacional de Catalunya",
    "location": "Spanien / Barcelona",
    "city": "Barcelona",
    "country": "Spanien",
    "type": "Nationalbibliothek",
    "description": "Digitalisierung katalanischer Kulturgüter mit OCR und automatischer Metadaten-Generierung.",
    "internalImplementation": "Spezialisierte KI-Algorithmen zur automatischen Erkennung und Indexierung katalanischer Kulturgüter und historischer Dokumente.",
    "externalPrograms": "Bereitstellung durchsuchbarer digitaler Sammlungen katalanischer Kultur für Forscher und die interessierte Öffentlichkeit.",
    "activities": ["Katalanische Digitalisierung", "OCR", "Metadaten-KI", "Cultural Heritage"],
    "website": "https://en.wikipedia.org/wiki/National_Library_of_Catalonia",
    "dates": "Projekte seit 2024",
    "tags": ["OCR", "KI/AI", "Metadaten", "Digitalisierung"],
    "language": "Spanisch"
  },
  {
    "name": "Biblioteca Nacional de México",
    "location": "Mexiko / Mexiko-Stadt",
    "city": "Mexiko-Stadt",
    "country": "Mexiko",
    "type": "Nationalbibliothek",
    "description": "Workshop 'IA y Patrimonio Cultural': KI zur automatischen Übersetzung und Metadatenanreicherung historischer Dokumente.",
    "internalImplementation": "Implementierung von KI-Systemen zur automatischen Übersetzung und Erschließung des mexikanischen Kulturerbes mit Fokus auf mehrsprachige Zugänglichkeit.",
    "externalPrograms": "Workshop-Serie zu KI-Anwendungen im Kulturerbe-Bereich für Bibliothekare, Archivare und Kulturwissenschaftler.",
    "activities": ["Cultural Heritage KI", "Auto-Translation", "Metadata Enrichment", "Workshop-Serie"],
    "website": "https://bnm.unam.mx/",
    "dates": "Workshop-Serie seit 2024",
    "tags": ["Workshop", "KI/AI", "Metadaten"],
    "language": "Spanisch"
  },
  {
    "name": "British Library",
    "location": "Großbritannien / London",
    "city": "London",
    "country": "Großbritannien",
    "type": "Nationalbibliothek",
    "description": "'Living with Machines': KI-gestützte Analyse historischer Zeitungen des 19. Jh. in Kooperation mit The Alan Turing Institute – eines der größten digitalen Geisteswissenschaftsprojekte Europas.",
    "internalImplementation": "Großangelegtes ML-Projekt zur Analyse historischer Zeitungsbestände der British Library. NLP-Methoden zur Analyse gesellschaftlicher Veränderungen der Industrialisierung.",
    "externalPrograms": "Öffentlich verfügbare Forschungsergebnisse und Datensätze. Workshops zu KI-gestützter historischer Forschung. Veröffentlichung aller Tools als Open Source.",
    "activities": ["Living with Machines", "Historische Zeitungsanalyse", "NLP", "Alan Turing Institute"],
    "website": "https://livingwithmachines.ac.uk/",
    "dates": "Großprogramm seit 2023",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Englisch"
  },
  {
    "name": "Biblioteca Nazionale Centrale di Roma",
    "location": "Italien / Rom",
    "city": "Rom",
    "country": "Italien",
    "type": "Nationalbibliothek",
    "description": "'DigItalia AI': KI-gestützte Erschließung der italienischen Kulturerbe-Sammlungen mit Fokus auf Renaissance-Handschriften.",
    "internalImplementation": "Entwicklung spezialisierter KI-Systeme zur Erkennung und Transkription historischer italienischer Handschriften aus der Renaissance-Zeit.",
    "externalPrograms": "Öffentliche Forschungsplattform mit KI-gestützten Suchfunktionen für italienisches Kulturerbe. Workshops für Studierende der Kunstgeschichte und Italienistik.",
    "activities": ["DigItalia AI", "Renaissance-Handschriften", "Kulturerbe-KI", "Kunstgeschichte"],
    "website": "https://en.wikipedia.org/wiki/Biblioteca_Nazionale_Centrale_di_Roma",
    "dates": "Projekt seit 2024",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Italienisch"
  },
  {
    "name": "Österreichische Nationalbibliothek",
    "location": "Österreich / Wien",
    "city": "Wien",
    "country": "Österreich",
    "type": "Nationalbibliothek",
    "description": "'ANNO AI': KI-gestützte Volltextsuche in historischen österreichischen Zeitungen mit automatischer Entitätserkennung.",
    "internalImplementation": "Implementierung fortgeschrittener OCR- und NLP-Technologien für die ANNO-Zeitungssammlung mit automatischer Erkennung von Personen, Orten und Ereignissen.",
    "externalPrograms": "Verbesserte Suchfunktionen für Forscher und interessierte Öffentlichkeit. Workshops zu KI-gestützter historischer Forschung mit österreichischen Quellen.",
    "activities": ["ANNO AI", "Zeitungs-OCR", "Entitätserkennung", "Historische Forschung"],
    "website": "https://anno.onb.ac.at/",
    "dates": "Upgrade seit 2024",
    "tags": ["OCR", "KI/AI"],
    "language": "Deutsch"
  },
  {
    "name": "Kungliga Biblioteket (Schweden)",
    "location": "Schweden / Stockholm",
    "city": "Stockholm",
    "country": "Schweden",
    "type": "Nationalbibliothek",
    "description": "'KBLab': Eigenes KI-Labor für Text- und Bilderkennung. BERT-Modell für Schwedisch entwickelt. Kooperation mit der Schwedischen Akademie für KI-gestützte Wörterbucherstellung.",
    "internalImplementation": "KBLab entwickelt KI-Modelle für schwedische Sprache und historische Sammlungen. Bildsök-Dienst macht 17.000+ digitalisierte Postkarten per KI zugänglich. Kooperation mit Universität Göteborg.",
    "externalPrograms": "Open-Source-Veröffentlichung aller entwickelten Modelle. Kooperation mit der Schwedischen Akademie. Ressourcen für schwedischsprachige NLP-Forschung.",
    "activities": ["KBLab KI-Labor", "Schwedisches BERT", "Bildsök Bildsuche", "Open Source Modelle"],
    "website": "https://www.kb.se/",
    "dates": "KBLab aktiv seit 2020",
    "tags": ["KI/AI", "Digitalisierung"],
    "language": "Schwedisch"
  },
  {
    "name": "Biblioteka Narodowa (Polen)",
    "location": "Polen / Warschau",
    "city": "Warschau",
    "country": "Polen",
    "type": "Nationalbibliothek",
    "description": "'Polonica AI': KI-gestützte Digitalisierung polnischer Literatur mit automatischer Metadaten-Generierung und OCR für gotische Schriften.",
    "internalImplementation": "Spezialisierte KI-Entwicklung für polnische Sprache und historische Schriftarten, insbesondere gotische und kyrillische Texte.",
    "externalPrograms": "Digitale Sammlung polnischer Literatur mit KI-gestützten Suchfunktionen. Workshops für Slavistik-Forscher zu KI-Methoden.",
    "activities": ["Polonica AI", "Gotische OCR", "Polnische NLP", "Slavistik-KI"],
    "website": "https://www.bn.org.pl/",
    "dates": "Projekt seit 2024",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Polnisch"
  },
  {
    "name": "National Library of Australia",
    "location": "Australien / Canberra",
    "city": "Canberra",
    "country": "Australien",
    "type": "Nationalbibliothek",
    "description": "'Trove AI Enhancement': KI-gestützte Verbesserung der Trove-Plattform mit besserer OCR und automatischer Themenklassifikation.",
    "internalImplementation": "Upgrade der bestehenden Trove-Plattform mit fortgeschrittenen KI-Technologien für bessere OCR-Ergebnisse und automatische Themenerschließung australischer Inhalte.",
    "externalPrograms": "Verbesserte Suchfunktionen für australische Geschichte und Kultur. KI-Workshops für Forscher zu australischen digitalen Sammlungen.",
    "activities": ["Trove AI", "Australische Geschichte", "Themenklassifikation", "OCR-Verbesserung"],
    "website": "https://trove.nla.gov.au/",
    "dates": "Enhancement seit 2024",
    "tags": ["OCR", "KI/AI", "Empfehlungen"],
    "language": "Englisch"
  },
  {
    "name": "National Diet Library Japan",
    "location": "Japan / Tokio",
    "city": "Tokio",
    "country": "Japan",
    "type": "Nationalbibliothek",
    "description": "'NDL Digital Collections AI': KI-gestützte OCR für japanische Texte (Hiragana, Katakana, Kanji) und automatische Übersetzung ins Englische.",
    "internalImplementation": "Entwicklung fortgeschrittener OCR-Systeme für komplexe japanische Schriftsysteme und KI-gestützte Übersetzung für internationale Zugänglichkeit japanischer Sammlungen.",
    "externalPrograms": "Mehrsprachige Plattform für japanisches Kulturerbe. Internationale Kooperationen zu asiatischer KI-Entwicklung für Bibliotheken.",
    "activities": ["Japanische OCR", "Multi-Script AI", "Auto-Übersetzung", "Asiatische KI-Kooperation"],
    "website": "https://dl.ndl.go.jp/en/",
    "dates": "Entwicklung seit 2023",
    "tags": ["OCR", "KI/AI"],
    "language": "Japanisch"
  },
  {
    "name": "National Library of India",
    "location": "Indien / Kolkata",
    "city": "Kolkata",
    "country": "Indien",
    "type": "Nationalbibliothek",
    "description": "'Digital India Heritage AI': Mehrsprachige KI für indische Sprachen (Hindi, Bengali, Tamil, etc.) zur Digitalisierung des kulturellen Erbes.",
    "internalImplementation": "Entwicklung von KI-Systemen für über 15 indische Sprachen zur Digitalisierung und Erschließung des reichen kulturellen Erbes Indiens.",
    "externalPrograms": "Mehrsprachige digitale Plattform für indisches Kulturerbe. KI-Workshops für südasiatische Bibliothekare und Forscher.",
    "activities": ["Multilingual Indian AI", "Cultural Heritage", "15+ Sprachen", "Südasien-Kooperation"],
    "website": "https://en.wikipedia.org/wiki/National_Library_of_India",
    "dates": "Großprojekt seit 2024",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Englisch"
  },
  {
    "name": "Bibliotheca Alexandrina",
    "location": "Ägypten / Alexandria",
    "city": "Alexandria",
    "country": "Ägypten",
    "type": "Nationalbibliothek",
    "description": "'Digital Alexandria AI': KI-gestützte Digitalisierung arabischer Manuskripte mit automatischer Kalligrafie-Erkennung und Übersetzung.",
    "internalImplementation": "Spezialisierte KI-Entwicklung für arabische Kalligrafie und historische Manuskripte mit Fokus auf islamisches und mediterranes Kulturerbe.",
    "externalPrograms": "Digitale Plattform für arabische und mediterrane Kulturen. Internationale Kooperationen zu KI für arabische Sprachen und Kulturen.",
    "activities": ["Arabische Kalligrafie-KI", "Islamisches Erbe", "Mediterrane Kulturen", "Arabisch-NLP"],
    "website": "https://www.bibalex.org/",
    "dates": "Projekt seit 2024",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Arabisch"
  },
  {
    "name": "SUB Göttingen – LibraryAI",
    "location": "Deutschland / Göttingen",
    "city": "Göttingen",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "KI-gestützter Recherche-Assistent 'LibraryAI' entwickelt in Kooperation mit Universität Göttingen und GWDG – vereinfacht akademische Literatursuche per natürlicher Sprache.",
    "internalImplementation": "Entwicklung eines virtuellen KI-Assistenten (LibraryAI) in Partnerschaft mit der Universität Göttingen und dem GWDG-Rechenzentrum. Das System nutzt LLM-Technologie zur natürlichsprachlichen Literaturrecherche und Bestandsauskunft.",
    "externalPrograms": "Öffentlich zugänglicher KI-Assistent für Studierende und Forschende zur vereinfachten Literaturrecherche. Einführungs-Workshops und Schulungen für Universitätsangehörige.",
    "activities": ["LLM-Rechercheassistent", "Natürliche Sprachsuche", "GWDG-Kooperation", "Akademischer Service"],
    "website": "https://www.sub.uni-goettingen.de/",
    "dates": "Geplanter Start Ende 2025",
    "tags": ["Chatbot", "KI/AI"],
    "language": "Deutsch"
  },
  {
    "name": "Landesfachstelle Sachsen-Anhalt & Mindverse",
    "location": "Deutschland / Halle (Saale)",
    "city": "Halle (Saale)",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "Modellprojekt 'KI in öffentlichen Bibliotheken': 43 Bibliotheken testen ein All-in-One-KI-Ökosystem (Texterstellung, Recherche, Bildgenerierung) bis Oktober 2025.",
    "internalImplementation": "Einsatz der Mindverse-Plattform als integriertes KI-Ökosystem für Bibliotheksworkflows – Texterstellung, Bildgenerierung und Wissensrecherche in einer Oberfläche. Begleitung durch die Landesfachstelle.",
    "externalPrograms": "43 öffentliche Bibliotheken Sachsen-Anhalts nehmen am Pilotprojekt teil und bieten Bürger*innen erste KI-gestützte Serviceleistungen und Informationsveranstaltungen an.",
    "activities": ["All-in-One-KI-Ökosystem", "Mindverse-Plattform", "Bildgenerierung", "Flächendeckendes Pilotprojekt"],
    "website": "https://lvwa.sachsen-anhalt.de/das-lvwa/kultur-denkmalschutz/landesfachstelle-fuer-oeffentliche-bibliotheken/aktuell-und-informativ",
    "dates": "Pilotphase bis Oktober 2025",
    "tags": ["KI/AI", "Workshop", "KI-Literacy"],
    "language": "Deutsch"
  },
  {
    "name": "Universitätsbibliothek Kassel",
    "location": "Deutschland / Kassel",
    "city": "Kassel",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "Umfassendes KI-Angebot für Forschung und Lehre: kuratierte Tool-Übersichten (Semantic Scholar, ORKG Ask), Workshops und Beratung zu Chancen und Risiken von KI in der Wissenschaft.",
    "internalImplementation": "Aufbau einer strukturierten KI-Ressourcenseite mit kuratierten Tool-Empfehlungen, Hinweisen zu Nutzungsgrenzen und Integration wissenschaftlicher KI-Tools in Rechercheservices.",
    "externalPrograms": "Workshops und Lehrveranstaltungen zu KI in der Wissenschaft für Studierende und Forschende. Beratungsangebote zu ethischem KI-Einsatz und akademischer Integrität.",
    "activities": ["Kuratierte KI-Tools", "Semantic Scholar", "ORKG Ask", "KI-Ethik-Beratung"],
    "website": "https://www.uni-kassel.de/uni/aktuelles-aus-der-universitaet/infothek/themenfeld-kuenstliche-intelligenz-ki/anwendungsfelder-serviceangebote/ki-angebote-der-universitaetsbibliothek.html",
    "dates": "Laufendes Angebot seit 2024",
    "tags": ["KI/AI", "KI-Literacy", "Workshop"],
    "language": "Deutsch"
  },
  {
    "name": "Fachstelle für öffentliche Bibliotheken NRW",
    "location": "Deutschland / Düsseldorf",
    "city": "Düsseldorf",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "Zentrale Anlaufstelle für NRW-Bibliotheken: Themenwebsite 'Bibliotheken und KI' mit Projektbeispielen, Literaturempfehlungen, Selbstlernkursen und Praxis-Tool-Tipps.",
    "internalImplementation": "Aufbau und Pflege einer dedizierten Wissensplattform zu KI für öffentliche Bibliotheken in NRW. Kuratierung von Ressourcen, Werkzeugempfehlungen und Vernetzung der Bibliotheken untereinander.",
    "externalPrograms": "Kostenfreie Themenwebsite für alle Bibliotheksfachkräfte in NRW. Fortbildungsveranstaltungen, Handlungsempfehlungen und Praxisbeispiele für den Einstieg in KI-Angebote.",
    "activities": ["KI-Themenwebsite NRW", "Fortbildungsangebote", "Selbstlernkurse", "Tool-Empfehlungen"],
    "website": "https://fachstelle-oeffentliche-bibliotheken.nrw/2024/10/neue-themen-website-zu-bibliotheken-und-ki/",
    "dates": "Seit Oktober 2024 aktiv",
    "tags": ["KI/AI", "KI-Literacy", "Training"],
    "language": "Deutsch"
  },
  {
    "name": "ZBW – Leibniz-Informationszentrum Wirtschaft",
    "location": "Deutschland / Hamburg",
    "city": "Hamburg",
    "country": "Deutschland",
    "type": "Universitätsbibliothek",
    "description": "Einsatz von 'Annif' zur KI-gestützten automatischen Erschließung wirtschaftswissenschaftlicher Literatur – eines der führenden Open-Source-Projekte für ML-basierte Bibliothekserschließung weltweit.",
    "internalImplementation": "Produktiver Einsatz von Annif (maschinelles Lernen für automatische Inhaltserschließung) im Regelbetrieb. Integration in bestehende Katalogisierungs-Workflows für schnellere und konsistentere Verschlagwortung.",
    "externalPrograms": "Veröffentlichung von Annif als Open-Source-Tool für andere Bibliotheken. Beiträge zur internationalen Community und Weitergabe von Trainingsmodellen.",
    "activities": ["Annif-Open-Source", "Automatische Erschließung", "ML-Verschlagwortung", "Open-Source-Community"],
    "website": "https://www.zbw.eu/en/",
    "dates": "Produktivbetrieb seit 2020",
    "tags": ["KI/AI", "Metadaten", "Erschließung"],
    "language": "Deutsch"
  },
,
  {
    "name": "Nasjonalbiblioteket – AI-Lab (Norwegen)",
    "location": "Norwegen / Oslo",
    "city": "Oslo",
    "country": "Norwegen",
    "type": "Nationalbibliothek",
    "description": "Eigenes KI-Labor 'NB AI-Lab': LLM-Entwicklung für Norwegisch, AI-gestützte Discovery-Engine 'Maken' und Bildsök-Bildsuche über 17.000 digitalisierte Postkarten.",
    "internalImplementation": "Dediziertes AI-Lab mit eigenen LLM-Modellen für norwegische Sprache. Kooperation mit Universität Göteborg. Maken-Discovery-Engine für visuelle und textliche Ähnlichkeitssuche im Nationalbestand.",
    "externalPrograms": "Öffentlich zugängliche KI-Suchwerkzeuge für Forscher und Interessierte. Open-Source-Veröffentlichung der entwickelten Modelle. Beiträge zur internationalen Bibliotheks-KI-Community.",
    "activities": ["NB AI-Lab", "Eigene LLMs", "Maken Discovery", "Bildsök Bildsuche"],
    "website": "https://ai.nb.no/",
    "dates": "AI-Lab aktiv seit 2022, laufende Entwicklung",
    "tags": ["KI/AI", "Erschließung", "Metadaten"],
    "language": "Englisch"
  },
  {
    "name": "KBR – Königliche Bibliothek Belgien",
    "location": "Belgien / Brüssel",
    "city": "Brüssel",
    "country": "Belgien",
    "type": "Nationalbibliothek",
    "description": "Retrokatalogisierungsprojekt mit KI und Microsoft Power Platform: automatische Erschließung historischer Dokumente. Zusätzlich: LLM-gestützte Sacherschließung in Entwicklung.",
    "internalImplementation": "Automatisiertes Retrokatalogisierungsprojekt seit Oktober 2022 mit KI und Power Platform. Laufende Entwicklung von LLM-gestützter Sacherschließung mit Python. Ziel: massive Beschleunigung der Erschließungsrückstände.",
    "externalPrograms": "Bereitstellung erschlossener historischer Sammlungen für Forschende und die Öffentlichkeit. Präsentation der Methodik auf internationalen Bibliothekskonferenzen.",
    "activities": ["Retrokatalogisierung KI", "Power Platform", "LLM-Erschließung", "Historische Bestände"],
    "website": "https://www.kbr.be/en/",
    "dates": "Retrokatalog-Projekt seit Oktober 2022",
    "tags": ["KI/AI", "Erschließung", "Metadaten"],
    "language": "Englisch"
  },
  {
    "name": "Helsinki City Library – Oodi",
    "location": "Finnland / Helsinki",
    "city": "Helsinki",
    "country": "Finnland",
    "type": "Öffentliche Bibliothek",
    "description": "Sechs thematische KI-Chatbots mit kontextueller Buchempfehlung. KI-Literacy-Programme inklusive 'Elements of AI' – Kurs erreichte 1% der finnischen Bevölkerung.",
    "internalImplementation": "Entwicklung und Betrieb von 6 spezialisierten KI-Chatbots für unterschiedliche Themengebiete. Integration von KI in das Discovery-System der Stadtbibliothek Helsinki.",
    "externalPrograms": "'Elements of AI' und weitere KI-Literacy-Programme für Bürger*innen aller Altersgruppen. Urban Workshop mit Makerspaces. Pionier in öffentlicher KI-Bildung in Skandinavien.",
    "activities": ["6 thematische Chatbots", "Elements of AI", "KI-Literacy", "Urban Workshop"],
    "website": "https://oodihelsinki.fi/en/",
    "dates": "Laufende Programme seit 2022",
    "tags": ["Chatbot", "KI/AI", "KI-Literacy", "Workshop"],
    "language": "Englisch"
  },
  {
    "name": "LIBRA.I. – Goethe Institut / Erasmus+",
    "location": "Europa / Mehrere Länder",
    "city": "München",
    "country": "Deutschland",
    "type": "Öffentliche Bibliothek",
    "description": "EU-gefördertes Erasmus+-Projekt: KI-Integration in Medien- und Lernkompetenztrainings öffentlicher Bibliotheken (D, AT, CH). Bibliothekspersonal wird zu KI-Lotsen ausgebildet.",
    "internalImplementation": "Goethe-Institut koordiniert Verbundprojekt mit Partnerbibliotheken in Deutschland, Österreich und der Schweiz. Entwicklung von Trainingsmaterialien und Lehrplänen für KI-gestützte Medienkompetenz.",
    "externalPrograms": "Schulungen für Bibliothekspersonal zu KI-Grundlagen, Desinformation und ethischen Implikationen. Aufbau von KI-Literacy-Angeboten für die Öffentlichkeit. Laufzeit November 2024 – Oktober 2026.",
    "activities": ["Erasmus+ Verbundprojekt", "KI-Lotsen Ausbildung", "Medienkompetenz", "DACH-Kooperation"],
    "website": "https://www.goethe.de/prj/lib/en/prj.html",
    "dates": "November 2024 – Oktober 2026",
    "tags": ["KI/AI", "KI-Literacy", "Workshop", "Training"],
    "language": "Deutsch"
  },
  {
    "name": "Russian State Library",
    "location": "Russland / Moskau",
    "city": "Moskau",
    "country": "Russland",
    "type": "Nationalbibliothek",
    "description": "'Cyrillic AI Project': KI-gestützte OCR für kyrillische Schriften und automatische Klassifikation russischer Literatur.",
    "internalImplementation": "Entwicklung spezialisierter KI-Systeme für kyrillische Schriften verschiedener Epochen und automatische Erschließung der umfangreichen russischen Literatursammlung.",
    "externalPrograms": "Digitale Plattform für russische Literatur und Kultur. KI-Workshops für slawische Studien und osteuropäische Bibliothekare.",
    "activities": ["Kyrillische OCR", "Russische Literatur-KI", "Slawische Studien", "Osteuropa-Kooperation"],
    "website": "https://www.rsl.ru/",
    "dates": "Projekt seit 2023",
    "tags": ["OCR", "KI/AI", "Digitalisierung"],
    "language": "Russisch"
  }
];

// Länder-zu-Flagge Mapping
const countryFlags = {
  'Deutschland': '🇩🇪',
  'USA': '🇺🇸',
  'Singapur': '🇸🇬',
  'Südkorea': '🇰🇷',
  'China': '🇨🇳',
  'Frankreich': '🇫🇷',
  'Niederlande': '🇳🇱',
  'Spanien': '🇪🇸',
  'Mexiko': '🇲🇽',
  'Südafrika': '🇿🇦',
  'Kanada': '🇨🇦',
  'Brasilien': '🇧🇷',
  'Argentinien': '🇦🇷',
  'Großbritannien': '🇬🇧',
  'Italien': '🇮🇹',
  'Österreich': '🇦🇹',
  'Schweden': '🇸🇪',
  'Polen': '🇵🇱',
  'Australien': '🇦🇺',
  'Japan': '🇯🇵',
  'Indien': '🇮🇳',
  'Ägypten': '🇪🇬',
  'Russland': '🇷🇺',
  'Norwegen': '🇳🇴',
  'Belgien': '🇧🇪',
  'Finnland': '🇫🇮'
};

// Global variables
let filteredData = [...libraryData];
let currentFilters = {
  search: '',
  country: '',
  type: '',
  tag: ''
};

let searchTimeout = null;
const DEBOUNCE_DELAY = 300; // 300ms debouncing

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  renderLibraries();
});

function initializeApp() {
  // Populate filter dropdowns
  populateCountryFilter();
  populateTypeFilter();
  populateTagFilter();
  
  // Update stats correctly
  updateStats();
}

function populateCountryFilter() {
  const countryFilter = document.getElementById('country-filter');
  if (!countryFilter) return;
  
  const countries = [...new Set(libraryData.map(lib => lib.country))].sort();
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = `${countryFlags[country] || '🌍'} ${country}`;
    countryFilter.appendChild(option);
  });
}

function populateTypeFilter() {
  const typeFilter = document.getElementById('type-filter');
  if (!typeFilter) return;
  
  const types = [...new Set(libraryData.map(lib => lib.type))].sort();
  types.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}

function populateTagFilter() {
  const tagFilter = document.getElementById('tag-filter');
  if (!tagFilter) return;
  
  const allTags = new Set();
  libraryData.forEach(lib => {
    lib.tags.forEach(tag => allTags.add(tag));
  });
  
  const tags = [...allTags].sort();
  tags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
}

function setupEventListeners() {
  // Search with debouncing
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      // Clear existing timeout
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      
      // Add loading state
      searchInput.classList.add('loading');
      
      // Set new timeout
      searchTimeout = setTimeout(() => {
        currentFilters.search = searchTerm;
        applyFilters();
        searchInput.classList.remove('loading');
      }, DEBOUNCE_DELAY);
    });
  }

  // Filter listeners
  const countryFilter = document.getElementById('country-filter');
  const typeFilter = document.getElementById('type-filter');
  const tagFilter = document.getElementById('tag-filter');

  if (countryFilter) {
    countryFilter.addEventListener('change', function(e) {
      currentFilters.country = e.target.value;
      applyFilters();
    });
  }

  if (typeFilter) {
    typeFilter.addEventListener('change', function(e) {
      currentFilters.type = e.target.value;
      applyFilters();
    });
  }

  if (tagFilter) {
    tagFilter.addEventListener('change', function(e) {
      currentFilters.tag = e.target.value;
      applyFilters();
    });
  }

  // Modal event listeners
  const modal = document.getElementById('detail-modal');
  const closeModal = document.getElementById('close-modal');
  
  if (closeModal) {
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModalFunction();
    });
  }

  if (modal) {
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModalFunction();
      });
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModalFunction();
    }
  });

  // Focus management for accessibility
  document.addEventListener('focusin', function(e) {
    if (e.target.matches('.library-card')) {
      e.target.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const library = getLibraryFromCard(event.target);
          if (library) showLibraryDetails(library);
        }
      });
    }
  });
}

function applyFilters() {
  filteredData = libraryData.filter(library => {
    let matchesSearch = true;
    let matchesCountry = true;
    let matchesType = true;
    let matchesTag = true;
    
    // Search filter
    if (currentFilters.search) {
      const searchLower = currentFilters.search.toLowerCase();
      matchesSearch = 
        library.name.toLowerCase().includes(searchLower) ||
        library.city.toLowerCase().includes(searchLower) ||
        library.country.toLowerCase().includes(searchLower) ||
        library.location.toLowerCase().includes(searchLower) ||
        library.description.toLowerCase().includes(searchLower) ||
        library.internalImplementation.toLowerCase().includes(searchLower) ||
        library.externalPrograms.toLowerCase().includes(searchLower) ||
        library.type.toLowerCase().includes(searchLower) ||
        library.activities.some(activity => activity.toLowerCase().includes(searchLower)) ||
        library.tags.some(tag => tag.toLowerCase().includes(searchLower));
    }

    // Country filter
    if (currentFilters.country) {
      matchesCountry = library.country === currentFilters.country;
    }

    // Type filter
    if (currentFilters.type) {
      matchesType = library.type === currentFilters.type;
    }

    // Tag filter
    if (currentFilters.tag) {
      matchesTag = library.tags.includes(currentFilters.tag);
    }

    return matchesSearch && matchesCountry && matchesType && matchesTag;
  });

  renderLibraries();
  updateResultsCounter();
}

function updateStats() {
  // Calculate correct statistics for 54 libraries
  const totalLibraries = libraryData.length; // Should be 54
  const totalCountries = new Set(libraryData.map(lib => lib.country)).size; // Should be 15
  const publicLibraries = libraryData.filter(lib => lib.type === 'Öffentliche Bibliothek').length; // Should be 23
  
  console.log('Statistics:', { totalLibraries, totalCountries, publicLibraries });
  
  // Update stat numbers if elements exist
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length >= 3) {
    statNumbers[0].textContent = totalLibraries;
    statNumbers[1].textContent = `${totalCountries}`;
    statNumbers[2].textContent = publicLibraries;
  }
}

function updateResultsCounter() {
  const counter = document.getElementById('results-count');
  if (counter) {
    const count = filteredData.length;
    counter.textContent = `${count} ${count === 1 ? 'Bibliothek' : 'Bibliotheken'}`;
  }
}

function renderLibraries() {
  const grid = document.getElementById('libraries-grid');
  if (!grid) return;
  
  // Add fade out animation
  grid.style.opacity = '0.5';
  
  setTimeout(() => {
    // Clear grid
    grid.innerHTML = '';

    // Check if we have any results
    if (filteredData.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>Keine Ergebnisse gefunden</h3>
          <p>Versuchen Sie andere Suchbegriffe oder Filter.</p>
        </div>
      `;
      grid.style.opacity = '1';
      return;
    }

    // Sort libraries alphabetically
    const sortedLibraries = filteredData.sort((a, b) => a.name.localeCompare(b.name));

    // Create library cards
    sortedLibraries.forEach((library, index) => {
      const libraryCard = createLibraryCard(library);
      // Add staggered animation
      libraryCard.style.animationDelay = `${index * 0.05}s`;
      grid.appendChild(libraryCard);
    });
    
    // Fade in with staggered animation
    grid.style.opacity = '1';
  }, 150);
}

function createLibraryCard(library) {
  const card = document.createElement('div');
  card.className = 'library-card';
  card.style.animation = 'fadeInUp 0.6s ease-out both';
  card.tabIndex = 0; // Make focusable for keyboard navigation
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Details zu ${library.name} anzeigen`);
  
  const flag = countryFlags[library.country] || '🌍';
  
  // Create colored tags for KI types
  const tagsHtml = library.tags.map(tag => {
    const tagClass = getTagClass(tag);
    return `<span class="tag ${tagClass}">${tag}</span>`;
  }).join('');
  
  card.innerHTML = `
    <div class="library-header">
      <h3 class="library-name">${library.name}</h3>
      <div class="library-location">
        <span class="country-flag">${flag}</span>
        <span>${library.city}, ${library.country}</span>
      </div>
      <span class="library-type">${library.type}</span>
    </div>
    <div class="library-tags">
      ${tagsHtml}
    </div>
    <p class="library-description">${library.description}</p>
    <div class="library-actions">
      <button class="details-btn" onclick="event.stopPropagation(); showLibraryDetails(${JSON.stringify(library).replace(/"/g, '&quot;')})">
        Details ansehen
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
      </button>
    </div>
  `;

  // Add click listener to the entire card
  card.addEventListener('click', () => {
    showLibraryDetails(library);
  });

  return card;
}

function getTagClass(tag) {
  const tagMap = {
    'Chatbot': 'tag--chatbot',
    'KI/AI': 'tag--ki',
    'OCR': 'tag--ocr',
    'Workshop': 'tag--workshop',
    'Empfehlungen': 'tag--empfehlungen',
    'Metadaten': 'tag--metadaten',
    'Training': 'tag--training',
    'Digitalisierung': 'tag--digitalisierung',
    'Robotik': 'tag--ki',
    'KI-Literacy': 'tag--training',
    'Erschließung': 'tag--metadaten'
  };
  
  return tagMap[tag] || 'tag--ki';
}

function getLibraryFromCard(cardElement) {
  const libraryName = cardElement.querySelector('.library-name')?.textContent;
  return libraryData.find(lib => lib.name === libraryName);
}

function showLibraryDetails(library) {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;
  
  // Populate modal content
  const titleElement = document.getElementById('modal-title');
  const flagElement = document.getElementById('modal-flag');
  const locationElement = document.getElementById('modal-location');
  const typeElement = document.getElementById('modal-type');
  const descriptionElement = document.getElementById('modal-description');
  const internalElement = document.getElementById('modal-internal');
  const externalElement = document.getElementById('modal-external');
  const datesElement = document.getElementById('modal-dates');
  const websiteElement = document.getElementById('modal-website');
  const activitiesElement = document.getElementById('modal-activities');
  
  if (titleElement) titleElement.textContent = library.name;
  if (flagElement) flagElement.textContent = countryFlags[library.country] || '🌍';
  if (locationElement) locationElement.textContent = library.location;
  if (typeElement) typeElement.textContent = library.type;
  if (descriptionElement) descriptionElement.textContent = library.description;
  if (internalElement) internalElement.textContent = library.internalImplementation;
  if (externalElement) externalElement.textContent = library.externalPrograms;
  if (datesElement) datesElement.textContent = library.dates;
  
  // Set website link
  if (websiteElement) {
    websiteElement.href = library.website;
  }
  
  // Populate activities
  if (activitiesElement) {
    activitiesElement.innerHTML = library.activities.map(activity => 
      `<div class="activity-tag">${activity}</div>`
    ).join('');
  }

  // Show modal with animation
  modal.classList.remove('hidden');
  
  // Prevent scrolling on body
  document.body.style.overflow = 'hidden';
  
  // Focus management for accessibility
  const closeButton = document.getElementById('close-modal');
  if (closeButton) {
    setTimeout(() => closeButton.focus(), 100);
  }
}

function closeModalFunction() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.style.overflow = 'auto';
  
  // Return focus to the card that opened the modal
  const focusedCard = document.querySelector('.library-card:focus');
  if (focusedCard) {
    focusedCard.focus();
  }
}

// Export functions for global access
window.showLibraryDetails = showLibraryDetails;
window.closeModalFunction = closeModalFunction;