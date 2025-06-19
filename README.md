# Digitale Huisdierenpas

## Overzicht
Deze webapplicatie biedt een moderne, interactieve digitale huisdierenpas. Gebouwd met de nieuwste webtechnologieën, levert het een prettige gebruikerservaring met soepele animaties en een overzichtelijke, toegankelijke interface. De applicatie maakt het mogelijk om huisdiergegevens, medische dossiers, QR-codes en herinneringen eenvoudig te beheren en te delen.

## Belangrijkste Functionaliteiten
- **Interactieve Animaties:** Zachte, moderne animaties met Tailwind CSS en shadcn-ui
- **Responsief Design:** Geoptimaliseerd voor mobiel, tablet en desktop
- **Moderne UI Componenten:** Gebouwd met React, shadcn-ui en Tailwind CSS
- **Snel & Prettig:** Direct laden en vloeiende interacties dankzij Vite
- **Dynamische Content:** Profielbeheer, medische gegevens, QR-code generatie en herinneringen
- **Profielfoto:** Upload of plaats een afbeelding in `public/profile-images/profielfoto.jpg` voor gebruik als profielfoto

## Technologieën
- **Frontend:**
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS 3
  - shadcn-ui (Radix UI)
  - Lucide React Icons
- **Development Tools:**
  - Visual Studio Code
  - Git & GitHub
  - NPM

## Installatie
### Vereisten
- Node.js (LTS-versie)
- npm (wordt meegeleverd met Node.js)

### Stappen
1. **Kloon de repository**
   ```sh
   git clone <JOUW_GIT_URL>
   cd <JOUW_PROJECTNAAM>
   ```
2. **Installeer dependencies**
   ```sh
   npm install
   ```
3. **Start de ontwikkelserver**
   ```sh
   npm run dev
   ```
4. **Open je browser op** [http://localhost:5173](http://localhost:5173) (standaard Vite-poort)

## Projectstructuur
```
project-root/
├── public/
│   └── profile-images/      # Profielfoto's (bijv. profielfoto.jpg)
├── src/
│   ├── components/          # React componenten (PetProfile, MedicalRecord, QRCodeGenerator, NotificationReminders, ui/)
│   ├── pages/               # Pagina's (Index.tsx, NotFound.tsx)
│   ├── styles/              # Globale styles (index.css, App.css)
│   └── ...
├── package.json
├── tailwind.config.ts
└── ...
```

## Beschikbare Scripts
| Command         | Beschrijving                        |
|----------------|-------------------------------------|
| npm run dev    | Start de ontwikkelserver (Vite)     |
| npm run build  | Maakt een productie-build           |
| npm run preview| Preview van productie-build         |
| npm run lint   | Codekwaliteit controleren (ESLint)  |

## Configuratie
- **Omgevingsvariabelen:** Voeg toe in `.env` indien nodig
- **Tailwind CSS:** Configuratie in `tailwind.config.ts`
- **Vite:** Configuratie in `vite.config.ts`

## Bijdragen
Bijdragen zijn welkom! Maak gerust een Pull Request aan. Voor grote wijzigingen, open eerst een issue om je voorstel te bespreken.

## Licentie
Dit project is gelicenseerd onder de ISC-licentie.

## Contact
Voor vragen of suggesties, open een issue in de GitHub repository.

## Dankwoord
- shadcn-ui & Radix UI voor de UI-componenten
- Lucide voor de iconen
- Alle bijdragers aan dit project
