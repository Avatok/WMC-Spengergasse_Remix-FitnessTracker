export type WorkoutEntry = {
  id: string;
  workout: string;
  duration: string;
  date: string;
};

export type MealEntry = {
  id: string;
  meal: string;
  calories: string;
  date: string;
};

let workoutEntries: WorkoutEntry[] = [];
let mealEntries: MealEntry[] = [];

export const getEntries = async (): Promise<{
  workoutEntries: WorkoutEntry[];
  mealEntries: MealEntry[];
}> => {
  return { workoutEntries, mealEntries };
};

export const addWorkoutEntry = async (entry: WorkoutEntry): Promise<void> => {
  workoutEntries.push(entry);
};

export const addMealEntry = async (entry: MealEntry): Promise<void> => {
  mealEntries.push(entry);
};

export const deleteWorkoutEntry = async (id: string): Promise<void> => {
  workoutEntries = workoutEntries.filter((entry) => entry.id !== id);
};

export const deleteMealEntry = async (id: string): Promise<void> => {
  mealEntries = mealEntries.filter((entry) => entry.id !== id);
};