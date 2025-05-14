import { Link } from "@remix-run/react";

// Ernährungspläne
const nutritionPlans = [
  {
    title: "Low-Carb Starter",
    description: "Einfacher Einstieg in eine kohlenhydratarme Ernährung",
    duration: "4 Wochen",
    level: "Anfänger",
    meals: [
      { name: "Frühstück: Rühreier mit Avocado", calories: "350 kcal" },
      { name: "Mittag: Hähnchen mit Brokkoli", calories: "400 kcal" },
      { name: "Abend: Lachs mit Salat", calories: "450 kcal" },
    ],
  },
  {
    title: "Vegane Power",
    description: "Pflanzliche Ernährung für Energie und Muskelaufbau",
    duration: "6 Wochen",
    level: "Mittel",
    meals: [
      { name: "Frühstück: Smoothie Bowl mit Beeren", calories: "300 kcal" },
      { name: "Mittag: Quinoa-Bowl mit Gemüse", calories: "450 kcal" },
      { name: "Abend: Tofu-Stir-Fry mit Reis", calories: "400 kcal" },
      { name: "Snack: Hummus mit Gemüsesticks", calories: "150 kcal" },
    ],
  },
  {
    title: "Intermittierendes Fasten",
    description: "16:8-Fasten für Fettverbrennung und Gesundheit",
    duration: "8 Wochen",
    level: "Fortgeschritten",
    meals: [
      { name: "Mittag: Rindersteak mit Süßkartoffeln", calories: "500 kcal" },
      { name: "Abend: Gemüsesuppe mit Linsen", calories: "200 kcal" },
      { name: "Snack: Handvoll Nüsse", calories: "150 kcal" },
    ],
  },
  {
    title: "Ketogene Diät",
    description: "High-Fat, Low-Carb für Ketose und Energie",
    duration: "6 Wochen",
    level: "Mittel",
    meals: [
      { name: "Frühstück: Bulletproof Coffee", calories: "250 kcal" },
      { name: "Mittag: Cobb-Salat mit Bacon", calories: "450 kcal" },
      { name: "Abend: Lachs mit Spargel in Butter", calories: "500 kcal" },
    ],
  },
  {
    title: "Proteinreich Muskelaufbau",
    description: "Hoher Proteingehalt für Muskelwachstum",
    duration: "8 Wochen",
    level: "Fortgeschritten",
    meals: [
      { name: "Frühstück: Proteinshake mit Hafer", calories: "400 kcal" },
      { name: "Mittag: Putenbrust mit Quinoa", calories: "500 kcal" },
      { name: "Abend: Thunfischsalat", calories: "350 kcal" },
      { name: "Snack: Hüttenkäse", calories: "150 kcal" },
    ],
  },
  {
    title: "Ausgewogene Ernährung",
    description: "Balance aus Makros für allgemeine Gesundheit",
    duration: "4 Wochen",
    level: "Alle Stufen",
    meals: [
      { name: "Frühstück: Vollkornbrot mit Ei", calories: "300 kcal" },
      { name: "Mittag: Hähnchen mit Gemüse und Reis", calories: "450 kcal" },
      { name: "Abend: Ofengemüse mit Feta", calories: "350 kcal" },
    ],
  },
  {
    title: "Paleo Lebensstil",
    description: "Natürliche Ernährung ohne verarbeitete Lebensmittel",
    duration: "6 Wochen",
    level: "Mittel",
    meals: [
      { name: "Frühstück: Obstsalat mit Nüssen", calories: "250 kcal" },
      { name: "Mittag: Rindfleisch mit Gemüse", calories: "450 kcal" },
      { name: "Abend: Gegrillter Fisch mit Salat", calories: "400 kcal" },
    ],
  },
  {
    title: "Kalorienreduziert",
    description: "Gewichtsverlust durch Kaloriendefizit",
    duration: "4 Wochen",
    level: "Anfänger",
    meals: [
      { name: "Frühstück: Grüner Smoothie", calories: "200 kcal" },
      { name: "Mittag: Gemüsesuppe", calories: "250 kcal" },
      { name: "Abend: Hähnchenbrust mit Salat", calories: "300 kcal" },
      { name: "Snack: Apfelscheiben", calories: "100 kcal" },
    ],
  },
  {
    title: "Mediterrane Diät",
    description: "Herzgesunde Ernährung mit viel Gemüse und Fisch",
    duration: "8 Wochen",
    level: "Alle Stufen",
    meals: [
      { name: "Frühstück: Griechischer Joghurt mit Honig", calories: "250 kcal" },
      { name: "Mittag: Tomaten-Mozzarella-Salat", calories: "350 kcal" },
      { name: "Abend: Gegrillter Fisch mit Gemüse", calories: "400 kcal" },
    ],
  },
  {
    title: "Vegetarische Balance",
    description: "Pflanzlich mit Fokus auf Nährstoffvielfalt",
    duration: "6 Wochen",
    level: "Mittel",
    meals: [
      { name: "Frühstück: Haferflocken mit Beeren", calories: "300 kcal" },
      { name: "Mittag: Linsencurry mit Gemüse", calories: "400 kcal" },
      { name: "Abend: Gebackener Kürbis mit Quark", calories: "350 kcal" },
    ],
  },
  {
    title: "High-Carb Ausdauer",
    description: "Kohlenhydratreich für Ausdauersportler",
    duration: "6 Wochen",
    level: "Fortgeschritten",
    meals: [
      { name: "Frühstück: Bananen-Pancakes", calories: "400 kcal" },
      { name: "Mittag: Vollkornpasta mit Pesto", calories: "500 kcal" },
      { name: "Abend: Süßkartoffel mit Hähnchen", calories: "450 kcal" },
      { name: "Snack: Energieriegel", calories: "200 kcal" },
    ],
  },
  {
    title: "Glutenfreie Ernährung",
    description: "Gesunde Ernährung ohne Gluten",
    duration: "4 Wochen",
    level: "Anfänger",
    meals: [
      { name: "Frühstück: Reisflocken mit Obst", calories: "250 kcal" },
      { name: "Mittag: Quinoa mit Gemüse", calories: "400 kcal" },
      { name: "Abend: Hähnchen mit Kartoffeln", calories: "350 kcal" },
    ],
  },
  {
    title: "Flexitarianisch",
    description: "Wenig Fleisch, viel Pflanzenpower",
    duration: "6 Wochen",
    level: "Mittel",
    meals: [
      { name: "Frühstück: Smoothie mit Spinat", calories: "200 kcal" },
      { name: "Mittag: Gemüsepfanne mit Tofu", calories: "400 kcal" },
      { name: "Abend: Hähnchen mit Salat", calories: "350 kcal" },
      { name: "Snack: Nüsse und Trockenfrüchte", calories: "150 kcal" },
    ],
  },
  {
    title: "Clean Eating",
    description: "Unverarbeitete Lebensmittel für reine Ernährung",
    duration: "8 Wochen",
    level: "Alle Stufen",
    meals: [
      { name: "Frühstück: Haferflocken mit Obst", calories: "300 kcal" },
      { name: "Mittag: Gegrilltes Gemüse mit Huhn", calories: "400 kcal" },
      { name: "Abend: Lachs mit Quinoa", calories: "450 kcal" },
    ],
  },
  {
    title: "Low-Fat Diät",
    description: "Fettreduzierte Ernährung für Gewichtsmanagement",
    duration: "4 Wochen",
    level: "Anfänger",
    meals: [
      { name: "Frühstück: Magerquark mit Beeren", calories: "200 kcal" },
      { name: "Mittag: Putenbrust mit Reis", calories: "350 kcal" },
      { name: "Abend: Gemüsesalat mit Hähnchen", calories: "300 kcal" },
      { name: "Snack: Karottensticks", calories: "100 kcal" },
    ],
  },
];

// Komponente
export default function EPlansRoute() {
  // Funktion zur Bestimmung der Badge-Farbe basierend auf dem Level
  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Anfänger":
        return "bg-green-100 text-green-800";
      case "Mittel":
        return "bg-yellow-100 text-yellow-800";
      case "Fortgeschritten":
        return "bg-red-100 text-red-800";
      case "Alle Stufen":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
        Ernährungspläne
      </h1>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nutritionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-gray-500 text-sm">Dauer:</span>
                  <span className="text-gray-900 text-sm font-medium ml-1">{plan.duration}</span>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelBadgeClass(
                    plan.level
                  )}`}
                >
                  {plan.level}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Mahlzeiten:</h4>
                <dl className="space-y-2 text-sm text-gray-600">
                  {plan.meals.map((meal, mIndex) => (
                    <div key={mIndex} className="flex justify-between">
                      <dt className="font-medium text-gray-700">{meal.name}</dt>
                      <dd className="text-gray-600">{meal.calories}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Zurück zum Tracker
      </Link>
    </div>
  );
}