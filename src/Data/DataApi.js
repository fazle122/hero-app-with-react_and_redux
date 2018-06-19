
export const heroes = [
  { Id: 11, name: "Mr. Nice" },
  { Id: 12, name: "Nacro" },
  { Id: 13, name: "Bombasto" },
  { Id: 14, name: "Celeritas" },
  { Id: 15, name: "Magneta" },
  { Id: 16, name: "RubberMan" },
  { Id: 17, name: "Dynama" },
  { Id: 18, name: "Dr. IQ" },
  { Id: 19, name: "Magma" },
  { Id: 20, name: "Tornado" }
]


const generateId = (heroes) => {
  var lastHero = heroes[heroes.length - 1];
  let newId = lastHero.Id + 1;
  return newId;
};



class HeroApi {
  static getAllHeroes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], heroes));
      });
    });
  }


  static saveHero(hero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCourseTitleLength = 1;
        if (hero.name.length < minCourseTitleLength) {
          // reject(`Name must be at least ${minCourseTitleLength} characters.`);
          alert(`Name must be at least ${minCourseTitleLength} characters.`);
        }
        hero.Id = generateId(heroes);
        heroes.push(hero);
        resolve(hero);
      });
    });
  }

  static updateHero(hero) {
    console.log(hero);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCourseTitleLength = 1;
        if (hero.name.length < minCourseTitleLength) {
          reject(`Name must be at least ${minCourseTitleLength} characters.`);
        }

        if (hero.Id) {
          const existingHeroIndex = heroes.findIndex(a => a.Id === hero.Id);
          heroes.splice(existingHeroIndex, 1, hero);
        }
        resolve(Object.assign([], heroes));
      });
    });
  }

  static deleteHero(hero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (hero.Id) {
          const existingHeroIndex = heroes.findIndex(a => a.Id === hero.Id);
          heroes.splice(existingHeroIndex, 1);
        }
        console.log(heroes);
        resolve(Object.assign([], heroes));
      });
    });
  }

}

export default HeroApi;