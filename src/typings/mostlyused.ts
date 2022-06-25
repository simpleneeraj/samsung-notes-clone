// interface arrayOfObjTypes {
//   id: number;
//   name: string;
//   age: number;
//   isMarried: boolean;
//   skills: string[];
// }
type arrayOfObjTypes = {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
  skills: string[];
};

const arrayOfObj: arrayOfObjTypes[] = [
  {
    id: 0,
    name: "James",
    age: 20,
    isMarried: false,
    skills: ["App Development", "Web development"]
    // festival: "Holi"
  }
];

export { arrayOfObj };
