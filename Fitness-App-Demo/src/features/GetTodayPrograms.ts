export const getTodayPrograms = async (date: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/all-programs?date=${date}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("No Programs Found for this date");
  }
};
