import { Form, useLoaderData } from "@remix-run/react";
import { redirect, type LoaderFunction, type ActionFunction } from "@remix-run/node";
import { getEntries, addWorkoutEntry, addMealEntry, deleteWorkoutEntry, deleteMealEntry } from "~/db/entries";

// Typen definieren
type WorkoutEntry = {
  id: string;
  workout: string;
  duration: string;
  date: string;
};

type MealEntry = {
  id: string;
  meal: string;
  calories: string;
  date: string;
};

type LoaderData = {
  workoutEntries: WorkoutEntry[];
  mealEntries: MealEntry[];
};

// Lade gespeicherte Einträge
export const loader: LoaderFunction = async () => {
  const { workoutEntries, mealEntries } = await getEntries();
  return { workoutEntries, mealEntries };
};

// Neue Einträge speichern oder löschen
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

  if (actionType === "deleteWorkout") {
    const id = formData.get("id") as string;
    await deleteWorkoutEntry(id);
    return redirect("/");
  }

  if (actionType === "deleteMeal") {
    const id = formData.get("id") as string;
    await deleteMealEntry(id);
    return redirect("/");
  }

  if (actionType === "addWorkout") {
    const entry: WorkoutEntry = {
      id: crypto.randomUUID(),
      workout: (formData.get("workout") as string) || "",
      duration: (formData.get("duration") as string) || "",
      date: (formData.get("date") as string) || new Date().toISOString().split("T")[0],
    };
    await addWorkoutEntry(entry);
    return redirect("/");
  }

  if (actionType === "addMeal") {
    const entry: MealEntry = {
      id: crypto.randomUUID(),
      meal: (formData.get("meal") as string) || "",
      calories: (formData.get("calories") as string) || "",
      date: (formData.get("date") as string) || new Date().toISOString().split("T")[0],
    };
    await addMealEntry(entry);
    return redirect("/");
  }

  return redirect("/");
};

// Komponente
export default function IndexRoute() {
  const { workoutEntries, mealEntries } = useLoaderData<LoaderData>();

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

  // Einträge nach Datum gruppieren
  const groupedEntries = [...workoutEntries, ...mealEntries].reduce((acc, entry) => {
    const date = new Date(entry.date).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    if (!acc[date]) {
      acc[date] = { workouts: [], meals: [] };
    }
    if ("workout" in entry) {
      acc[date].workouts.push(entry);
    } else {
      acc[date].meals.push(entry);
    }
    return acc;
  }, {} as Record<string, { workouts: WorkoutEntry[]; meals: MealEntry[] }>);

  // Sortiere die Daten absteigend (neueste zuerst)
  const sortedDates = Object.keys(groupedEntries).sort((a, b) => {
    const dateA = new Date(a.split(".").reverse().join("-"));
    const dateB = new Date(b.split(".").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
        Fitness Tracker
      </h1>

      {/* Formulare */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Neuer Eintrag</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training Formular */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Training</h3>
            <Form method="post" className="space-y-6">
              <input type="hidden" name="_action" value="addWorkout" />
              <div>
                <label
                  htmlFor="workout"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Workout
                </label>
                <input
                  type="text"
                  id="workout"
                  name="workout"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-200"
                  placeholder="z.B. Laufen"
                />
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Dauer (Min)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-200"
                  placeholder="z.B. 30"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Datum
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 font-semibold"
              >
                Training speichern
              </button>
            </Form>
          </div>

          {/* Ernährung Formular */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ernährung</h3>
            <Form method="post" className="space-y-6">
              <input type="hidden" name="_action" value="addMeal" />
              <div>
                <label
                  htmlFor="meal"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Mahlzeit
                </label>
                <input
                  type="text"
                  id="meal"
                  name="meal"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-200"
                  placeholder="z.B. Hähnchen mit Reis"
                />
              </div>
              <div>
                <label
                  htmlFor="calories"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Kalorien
                </label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-200"
                  placeholder="z.B. 500"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Datum
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 text-gray-900 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 font-semibold"
              >
                Ernährung speichern
              </button>
            </Form>
          </div>
        </div>
      </div>

      {/* Einträge */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deine Einträge</h2>
        {sortedDates.length === 0 ? (
          <p className="text-gray-500 text-center italic">Noch keine Einträge vorhanden.</p>
        ) : (
          <div className="space-y-8">
            {sortedDates.map((date, index) => (
              <div key={date}>
                {index > 0 && <hr className="my-6 border-gray-200" />}
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{date}</h3>
                <ul className="space-y-4">
                  {groupedEntries[date].workouts.map((entry) => (
                    <li
                      key={entry.id}
                      className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Training:</span>{" "}
                            {entry.workout || "Kein Workout"} ({entry.duration || "0"} Min)
                          </p>
                        </div>
                        <Form method="post">
                          <input type="hidden" name="_action" value="deleteWorkout" />
                          <input type="hidden" name="id" value={entry.id} />
                          <button
                            type="submit"
                            className="text-red-500 hover:text-red-700 font-medium text-sm"
                          >
                            Löschen
                          </button>
                        </Form>
                      </div>
                    </li>
                  ))}
                  {groupedEntries[date].meals.map((entry) => (
                    <li
                      key={entry.id}
                      className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium">Ernährung:</span>{" "}
                            {entry.meal || "Keine Mahlzeit"} – {entry.calories || "0"} kcal
                          </p>
                        </div>
                        <Form method="post">
                          <input type="hidden" name="_action" value="deleteMeal" />
                          <input type="hidden" name="id" value={entry.id} />
                          <button
                            type="submit"
                            className="text-red-500 hover:text-red-700 font-medium text-sm"
                          >
                            Löschen
                          </button>
                        </Form>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}