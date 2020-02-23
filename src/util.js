const emotions = {
  Neutral: 0,
  Happy: 1,
  Sad: 2,
  Angry: 3,
  Scared: 4
};

const colors = {
  Red: "#FF0000",
  Orange: "#FF8000",
  Yellow: "#FFFF00",
  Green: "#66CC00",
  Blue: "#0000FF",
  Indigo: "#4b0082",
  Violet: "#EE82EE",
  Black: "#CCC",
  White: "#FFF"
};

const getUrl = window.location;
const baseUrl =
  getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1];

export function getChildren() {
  return localStorage.getObject("children");
}

export function getChild(id) {
  const children = localStorage.getObject("children");
  return children[id];
}

export function setChild(child) {
  const children = localStorage.getObject("children");
  children[child.id] = child;
  localStorage.setObject("children", child);
}

export function addChild(child) {
  const children = localStorage.getObject("children");
  children.push(child);
  localStorage.setObject("children", children);
}

export function deleteChild(id) {
  const children = localStorage.getObject("children");
  children.splice(id, 1);
  localStorage.setObject("children", children);
}

export function addVisit(id, visit) {
  const children = localStorage.getObject("children");
  children[id].visits.push(visit);
  localStorage.setObject("children", children);
}

export function getCharacter(character) {
  return `${baseUrl}neutral${character}.png`;
}

export function getEmotionsByCharacter(emotion, character) {
  return `${baseUrl}${emotions[emotion]}${character}.png`;
}

export function setUp() {
  const children = [
    {
      id: 0,
      firstName: "José",
      lastName: "Sànchez",
      dob: "01/01/2010",
      character: "cat",
      visits: [
        {
          id: 0,
          datetime: "01/10/2020",
          notes:
            "José seemed quiet today but insisted things were going well at home. Keep an eye on results for the next couple of visits to evaluate at-risk status.",
          evaluation: {
            answer1: colors.Violet,
            answer2: emotions.Sad,
            answer3: "Yes",
            answer4: "Yes",
            isFlagged: false
          }
        },
        {
          id: 1,
          datetime: "02/10/2020",
          notes: "",
          evaluation: {
            answer1: colors.Violet,
            answer2: emotions.Scared,
            answer3: "Yes",
            answer4: "Yes",
            isFlagged: false
          }
        },
        {
          id: 2,
          datetime: "02/10/2020",
          notes:
            "José was very irritable today but refused to talk about it. I asked him if anything was upsetting him, but he wouldn't talk about it.",
          evaluation: {
            answer1: colors.Red,
            answer2: emotions.Angry,
            answer3: "No",
            answer4: "Yes",
            isFlagged: true
          }
        }
      ]
    },
    {
      id: 1,
      firstName: "Molly",
      lastName: "Smith",
      dob: "04/01/2014",
      character: "rodent",
      visits: []
    },
    {
      id: 2,
      firstName: "Alec",
      lastName: "Johnson",
      dob: "07/01/2012",
      character: "dog",
      visits: []
    }
  ];

  localStorage.setObject("children", children);
}
