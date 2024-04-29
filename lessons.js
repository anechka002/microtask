// console.log('Hello')
// ================= копия глубокая && поверхностная=======================
let a = {
  name: 'It-kamasutra.com',
  protocol: 'https',
  maxStudentsCount: 10,
  isOnline: true,
  students: ['ivan', 'andrey', 'farid'],
  classroom: {
      teacher: {
          name: 'wew',
          age: 18
      }
  }
}
// let b = {...a};
// b.name = 'bebe'
// b.students = [...a.students]
// b.students.push('Anna')
let b = {
    ...a,
    students: [...a.students].push('anna'),
    classroom: {...a.classroom,
      teacher: {...a.classroom.teacher,
        name: 'Alex',
        age: 11
      },   
    },
}
// console.log(a)
// console.log(b)

//==========1. Simple object==========
let man = {
  name: 'John',
  age: 18
}
let manFullCopy = {...man}
man.age = 11
manFullCopy.name = "Alex"
// console.log(man)
// console.log(manFullCopy)

//==========2. Array of primitives===========
let numbers = [1, 2, 3]
let numbersFullCopy = [...numbers]
numbers.push(4)
numbersFullCopy.push(8)
// console.log(numbers)
// console.log(numbersFullCopy)

//==========3. Object inside an object============
let man1 = {
  name: 'John',
  age: 28,
  mother: {
      name: 'Kate',
      age: 50
  }
};
let man1FullCopy = {
  ...man1,
  mother: {...man1.mother}
}
man1.mother.age = 20
man1FullCopy.mother.name = 'Anna'
// console.log(man1)
// console.log(man1FullCopy)

//======= 4. Array of primitives inside an object=========
let man2 = {
  name: 'John',
  age: 28,
  friends: ["Peter", "Steven", "William"]
};
let man2FullCopy = {
  ...man2,
  friends: [...man2.friends]
}
man2.friends.push('bebe')
man2FullCopy.age = 11
// console.log(man2)
// console.log(man2FullCopy)

// =========5 Array of objects========
let people = [
  {name: "Peter", age: 30},
  {name: "Steven", age: 32},
  {name: "William", age: 28}
];
let newPeople = {
  name: "Ole", 
  age: 10
}
let peopleFullCopy = [
  ...people, //newPeople
  people.map(el => ({...el}))
]
// console.log('people: ', people)
// console.log('peopleFullCopy: ',peopleFullCopy)

//=========== 6 Array of objects inside object==========
let man3 = {
  name: 'John',
  age: 28,
  friends: [
      {name: "Peter", age: 30},
      {name: "Steven", age: 32},
      {name: "William", age: 28}
  ]
};
let man3FullCopy = {
  ...man3,
  friends: [
    ...man3.friends.map(el => ({...el})),
  ]
}
man3FullCopy.friends[0].name = 'Ola'
// console.log(man3FullCopy)
// console.log(man3.friends)
// console.log(man3FullCopy.friends)

// ===============7 Object inside an object, inside an object========
let man4 = {
  name: 'John',
  age: 28,
  mother: {
      name: "Kate",
      age: 50,
      work: {
          position: "doctor",
          experience: 15
      }
  }
};
let man4FullCopy = {
  ...man4,
    mother: {...man4.mother,
      work: {...man4.mother.work,
        position: position = 'bebe'
      }
    }
}
// console.log(man4.mother.work)
// console.log(man4FullCopy.mother.work)

//=========== 8 Array of objects inside object -> object=======
let man5 = {
  name: 'John',
  age: 28,
  mother: {
      name: "Kate",
      age: 50,
      work: {
          position: "doctor",
          experience: 15
      },
      parents: [
          {name: "Kevin", age: 80},
          {name: "Jennifer", age: 78},
      ]
  }
};
let newParent = {
  name: "Alex", age: 10
}
let man5FullCopy = {
  ...man5,
    mother: {...man5.mother,
      // parents: [...man5.mother.parents.map(el => ({...el})), newParent ]
      // parents: [...man5.mother.parents, newParent ]
      parents: [newParent, ...man5.mother.parents ]
    }
}
// man5FullCopy.mother.parents[0].name = 'Alex'
// console.log(man5.mother.parents)
// console.log(man5FullCopy.mother.parents)

//============ 9 Object inside an object -> array -> object ->  object==========
let man6 = {
  name: 'John',
  age: 28,
  mother: {
      name: "Kate",
      age: 50,
      work: {
          position: "doctor",
          experience: 15
      },
      parents: [
          {
              name: "Kevin",
              age: 80,
              favoriteDish: {
                  title: "borscht"
              }
          },
          {
              name: "Jennifer",
              age: 78,
              favoriteDish: {
                  title: "sushi"
              }
          },
      ]
  }
};
let man6FullCopy = {
  ...man6,
    mother: {...man6.mother,
      parents: [...man6.mother.parents.map(el => ({
        ...el,
        favoriteDish: {
          ...el.favoriteDish,
          title: 'yo'
        }
      }))]
    }
}
// console.log(man6.mother.parents[0].favoriteDish.title)
// console.log(man6FullCopy.mother.parents[0].favoriteDish.title)

//=========10 Array of objects inside an object -> object -> array -> object ->  object======
let man7 = {
  name: 'John',
  age: 28,
  mother: {
      name: "Kate",
      age: 50,
      work: {
          position: "doctor",
          experience: 15
      },
      parents: [
          {
              name: "Kevin",
              age: 80,
              favoriteDish: {
                  title: "borscht",
                  ingredients: [
                      {title: "beet", amount: 3},
                      {title: "potatoes", amount: 5},
                      {title: "carrot", amount: 1},
                  ]
              }
          },
          {
              name: "Jennifer",
              age: 78,
              favoriteDish: {
                  title: "sushi",
                  ingredients: [
                      {title: "fish", amount: 1},
                      {title: "rise", amount: 0.5}
                  ]
              }
          },
      ]
  }
};

let man7FullCopy = {
  ...man7,
  mother: {...man7.mother,
    parents: man7.mother.parents.map(el=>({
      ...el,
      favoriteDish: {
        ...el.favoriteDish,
          ingredients: el.favoriteDish.ingredients.map(el=>({
            ...el,
            amount: el.title === 'beet' ? 0 : el.amount
          }))
      }
    }))
  }
}
// man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].amount = 0
// console.log(man7FullCopy.mother.parents[0].favoriteDish.ingredients)