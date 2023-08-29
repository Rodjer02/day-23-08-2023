export const fetchCourseData = async () => {
  try {
    const res = await fetch(
      `http://data.fixer.io/api/latest?access_key=0ed7520cc972c6c8f8abaebcfa627f28&symbols=EUR,USD,RUB,GBP`
    );
    if (res.status === 200) {
      return res.json();
    }
    throw new Error(`Status code: ${res.status}. Data fethed unsuccessfully`);
  } catch (e) {
    console.log(e);
    throw new Error("Data fethed unsuccessfully");
  }
};
