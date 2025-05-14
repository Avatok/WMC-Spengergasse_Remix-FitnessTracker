import { Link } from "@remix-run/react";

// Trainingspläne
const trainingPlans = [
  {
    title: "Anfänger Cardio",
    description: "Ideal für Einsteiger: 30 Min Laufen, 3x pro Woche",
    duration: "4 Wochen",
    level: "Anfänger",
    exercises: [
      { name: "Laufen (Treadmill)", weight: "N/A", reps: "30 Min" },
      { name: "Fahrrad", weight: "N/A", reps: "20 Min" },
      { name: "Seilspringen", weight: "N/A", reps: "3x 1 Min" },
    ],
  },
  {
    title: "Krafttraining Fortgeschritten",
    description: "Ganzkörpertraining mit Gewichten, 4x pro Woche",
    duration: "6 Wochen",
    level: "Fortgeschritten",
    exercises: [
      { name: "Bankdrücken", weight: "60-80 kg", reps: "3x 8-12" },
      { name: "Kreuzheben", weight: "80-100 kg", reps: "3x 6-10" },
      { name: "Kniebeugen", weight: "70-90 kg", reps: "3x 8-12" },
    ],
  },
  {
    title: "Yoga & Mobilität",
    description: "Tägliche Yoga-Sessions für Flexibilität und Entspannung",
    duration: "8 Wochen",
    level: "Alle Stufen",
    exercises: [
      { name: "Sonnengruß", weight: "N/A", reps: "5 Runden" },
      { name: "Herabschauender Hund", weight: "N/A", reps: "30 Sek" },
      { name: "Krieger II", weight: "N/A", reps: "30 Sek pro Seite" },
    ],
  },
  {
    title: "HIIT Power",
    description: "Hochintensives Intervalltraining, 3x pro Woche",
    duration: "5 Wochen",
    level: "Mittel",
    exercises: [
      { name: "Burpees", weight: "N/A", reps: "3x 15" },
      { name: "Kettlebell Swing", weight: "16-24 kg", reps: "3x 12" },
      { name: "Mountain Climbers", weight: "N/A", reps: "3x 20 pro Seite" },
    ],
  },
  {
    title: "Core Stärke",
    description: "Fokus auf Bauch- und Rumpfmuskulatur, 4x pro Woche",
    duration: "4 Wochen",
    level: "Anfänger bis Mittel",
    exercises: [
      { name: "Plank", weight: "N/A", reps: "3x 30-60 Sek" },
      { name: "Russian Twists", weight: "5-10 kg", reps: "3x 20 pro Seite" },
      { name: "Beinheben", weight: "N/A", reps: "3x 15" },
    ],
  },
  {
    title: "Oberkörper Kraft",
    description: "Intensives Training für Brust, Rücken und Arme",
    duration: "6 Wochen",
    level: "Fortgeschritten",
    exercises: [
      { name: "Liegestütze", weight: "N/A", reps: "3x 15-20" },
      { name: "Klimmzüge", weight: "N/A", reps: "3x 8-12" },
      { name: "Schulterdrücken", weight: "20-30 kg", reps: "3x 10" },
    ],
  },
  {
    title: "Ausdauer Lauftraining",
    description: "Steigere deine Laufleistung, 4x pro Woche",
    duration: "8 Wochen",
    level: "Mittel",
    exercises: [
      { name: "Intervallläufe", weight: "N/A", reps: "4x 3 Min schnell" },
      { name: "Langsamer Dauerlauf", weight: "N/A", reps: "45 Min" },
      { name: "Sprint", weight: "N/A", reps: "6x 30 Sek" },
    ],
  },
  {
    title: "Pilates Grundkurs",
    description: "Sanftes Training für Haltung und Stabilität",
    duration: "6 Wochen",
    level: "Anfänger",
    exercises: [
      { name: "Hundert", weight: "N/A", reps: "3x 10 Atemzüge" },
      { name: "Brücke", weight: "N/A", reps: "3x 12" },
      { name: "Seitstütz", weight: "N/A", reps: "2x 20 Sek pro Seite" },
    ],
  },
  {
    title: "Functional Fitness",
    description: "Alltagsbewegungen stärken, 4x pro Woche",
    duration: "5 Wochen",
    level: "Mittel",
    exercises: [
      { name: "Farmer’s Carry", weight: "20-30 kg", reps: "3x 30 m" },
      { name: "Goblet Squat", weight: "12-20 kg", reps: "3x 15" },
      { name: "Push-Up to Plank", weight: "N/A", reps: "3x 12" },
    ],
  },
  {
    title: "Beweglichkeit & Dehnen",
    description: "Verbessere deine Flexibilität, tägliche Routine",
    duration: "4 Wochen",
    level: "Alle Stufen",
    exercises: [
      { name: "Katzen-Kuh", weight: "N/A", reps: "10 Wiederholungen" },
      { name: "Hamstring-Dehnung", weight: "N/A", reps: "2x 30 Sek pro Seite" },
      { name: "Schulterbrücke", weight: "N/A", reps: "2x 30 Sek" },
    ],
  },
  {
    title: "Kraft & Ausdauer",
    description: "Kombiniertes Training für Kraft und Kondition",
    duration: "6 Wochen",
    level: "Fortgeschritten",
    exercises: [
      { name: "Thruster", weight: "20-30 kg", reps: "3x 12" },
      { name: "Box Jumps", weight: "N/A", reps: "3x 15" },
      { name: "Rudergerät", weight: "N/A", reps: "3x 500 m" },
    ],
  },
  {
    title: "Anfänger Krafttraining",
    description: "Einstieg ins Krafttraining, 3x pro Woche",
    duration: "4 Wochen",
    level: "Anfänger",
    exercises: [
      { name: "Kniebeugen (Bodyweight)", weight: "N/A", reps: "3x 15" },
      { name: "Liegestütze (Knie)", weight: "N/A", reps: "3x 12" },
      { name: "Plank", weight: "N/A", reps: "3x 20 Sek" },
    ],
  },
  {
    title: "Zirkeltraining",
    description: "Ganzkörper-Zirkel für Fettverbrennung",
    duration: "5 Wochen",
    level: "Mittel",
    exercises: [
      { name: "Jumping Jacks", weight: "N/A", reps: "3x 30 Sek" },
      { name: "Kettlebell Deadlift", weight: "16-24 kg", reps: "3x 12" },
      { name: "Plank Shoulder Taps", weight: "N/A", reps: "3x 20 pro Seite" },
    ],
  },
  {
    title: "Rumpfkraft Fortgeschritten",
    description: "Intensives Training für den Core",
    duration: "6 Wochen",
    level: "Fortgeschritten",
    exercises: [
      { name: "Hanging Leg Raise", weight: "N/A", reps: "3x 12" },
      { name: "Ab Rollout", weight: "N/A", reps: "3x 15" },
      { name: "Side Plank", weight: "N/A", reps: "3x 45 Sek pro Seite" },
    ],
  },
  {
    title: "Sprint & Agilität",
    description: "Verbessere Geschwindigkeit und Beweglichkeit",
    duration: "5 Wochen",
    level: "Mittel",
    exercises: [
      { name: "Shuttle Run", weight: "N/A", reps: "5x 20 m" },
      { name: "Ladder Drills", weight: "N/A", reps: "3x 30 Sek" },
      { name: "High Knees", weight: "N/A", reps: "3x 20 Sek" },
    ],
  },
];

// Komponente
export default function PlansRoute() {
  // Funktion zur Bestimmung der Badge-Farbe basierend auf dem Level
  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Anfänger":
        return "bg-green-100 text-green-800";
      case "Mittel":
        return "bg-yellow-100 text-yellow-800";
      case "Fortgeschritten":
        return "bg-red-100 text-red-800";
      case "Anfänger bis Mittel":
        return "bg-blue-100 text-blue-800";
      case "Alle Stufen":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
        Trainingspläne
      </h1>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingPlans.map((plan, index) => (
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
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Übungen:</h4>
                <dl className="space-y-2 text-sm text-gray-600">
                  {plan.exercises.map((exercise, exIndex) => (
                    <div key={exIndex} className="flex justify-between">
                      <dt className="font-medium text-gray-700">{exercise.name}</dt>
                      <dd className="text-gray-600">
                        {exercise.weight}, {exercise.reps}
                      </dd>
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