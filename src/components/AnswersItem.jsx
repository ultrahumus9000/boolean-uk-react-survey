// Components don't need to be separeted into individual files

import { useState } from "react";

// Here we have a smaller component that helps compose the AnswersItem below
function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {Object.keys(answersSet).includes(item)
            ? answersSet[item]
            : answersSetTwo[item]}
        </li>
      ))}
    </ul>
  );
}

// These answers objects keys match the values attributes from the checkboxes
const answersSet = {
  colour: "It's yellow!",
  sound: "It squeaks!",
  logo: "It has a logo!",
  size: "Its big!",
};

const answersSetTwo = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

// const answersSetThree = {
//   "It's yellow!": "colour",
//   "It squeaks!": "sound",
//   "It has a logo!": "logo",
//   "Its big!": "size",
// };

// const answersSetFour = {
//   Swimming: "swimming",
//   Bathing: "bathing",
//   Chatting: "chatting",
//   "I don't like to spend time with it": "noTime",
// };

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: {
    username,
    email,
    consistency,
    colour,
    logo,
    timeSpent,
    review,
    bestFeatures,
    worstFeatures,
    agree,
    disagree,
  },
  answersList,
  setAnswerLists,
}) {
  const [toggle, setToggle] = useState(true);

  function handleFeaturesChange(e) {
    let keyName = e.target.name;
    let keyValue = e.target.value;
    let filteredAnswers = answersList.find(
      (answers) => answers.username === username
    );
    let filteredFeatures = filteredAnswers[keyName].filter(
      (feature) => feature !== e.target.value
    );
    console.log(filteredFeatures);
    let updatedAnswers = answersList.map((answers) => {
      if (answers.username === username) {
        return e.target.checked
          ? { ...answers, [keyName]: [...answers[keyName], keyValue] }
          : {
              ...answers,
              [keyName]: filteredFeatures,
            };
      }
      return answers;
    });
    setAnswerLists(updatedAnswers);
  }

  function handleSingleChange(e) {
    console.log(e.target.checked);
    console.log(consistency === 1);
    let updatedAnswers = answersList.map((answers) => {
      if (answers.username === username)
        return { ...answers, [e.target.name]: e.target.value };
      return answers;
    });
    console.log(e.target.value);
    setAnswerLists(updatedAnswers);
  }

  //wrong format and wrong setState
  // function listInputValue(array) {
  //   let updatedArray = array.map((item) => {
  //     return Object.keys(answersSet).includes(item)
  //       ? answersSet[item]
  //       : answersSetTwo[item];
  //   });
  //   return updatedArray;
  // }

  // function convertMultiChoiceInput(e) {
  //   let keyValue = e.target.value;
  //   let editArray = [];
  //   if (e.target.name === "bestFeatures" || e.target.name === "worstFeatures")
  //     for (const key in answersSetThree) {
  //       if (keyValue.includes(key)) {
  //         editArray = [...editArray, answersSetThree[key]];
  //       }
  //     }
  //   if (e.target.name === "timeSpent")
  //     for (const key in answersSetFour) {
  //       if (keyValue.includes(key)) {
  //         editArray = [...editArray, answersSetThree[key]];
  //       }
  //     }

  //   let filterAnswers = answersList.map((answers) => {
  //     if (answers.username === username)
  //       return { ...answers, [e.target.name]: editArray };
  //     return answers;
  //   });
  //   setAnswerLists(filterAnswers);
  // }

  return (
    <div>
      {toggle ? (
        <li className="answer-list">
          <article className="answer">
            <h3> {disagree ? "Anon" : username || "Anon"} said:</h3>
            {/* {username || "Anon"} */}
            {disagree ? null : <p>Email: {email}</p>}
            <p>
              <em>
                What would you say that are the best features of your rubber
                duck?
              </em>
            </p>
            <div>
              <ItemsList list={bestFeatures} />
            </div>
            <p>
              <em>
                What would you say that are the worst nags of your rubber duck?
              </em>
            </p>
            <div>
              <ItemsList list={worstFeatures} />
            </div>
            <p>
              <em>How do you rate your rubber duck consistency?</em>
              <span className="answer__line">{consistency}</span>
            </p>
            <p>
              <em>How do you rate your rubber duck colour?</em>
              <span className="answer__line">{colour}</span>
            </p>
            <p>
              <em>How do you rate your rubber duck logo?</em>
              <span className="answer__line">{logo}</span>
            </p>
            <p>
              <em>How do you like to spend time with your rubber duck?</em>
            </p>
            <div>
              <ItemsList list={timeSpent} />
            </div>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              <span className="answer__line">{review}</span>
            </p>
          </article>
          <button
            className="edit-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Edit
          </button>
        </li>
      ) : (
        <li className="answer-list">
          <article className="answer">
            <h3> {disagree ? "Anon" : username || "Anon"} said:</h3>
            {/* {username || "Anon"} */}
            {disagree ? null : <p>Email: {email}</p>}
            <p>
              <em>
                What would you say that are the best features of your rubber
                duck?
              </em>
            </p>
            <div>
              <ul>
                <li>
                  <label>
                    <input
                      name="bestFeatures"
                      type="checkbox"
                      value="colour"
                      checked={bestFeatures.includes("colour")}
                      onChange={handleFeaturesChange}
                    />
                    It's yellow!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="bestFeatures"
                      type="checkbox"
                      value="sound"
                      checked={bestFeatures.includes("sound")}
                      onChange={handleFeaturesChange}
                    />
                    It squeaks!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="bestFeatures"
                      type="checkbox"
                      value="logo"
                      checked={bestFeatures.includes("logo")}
                      onChange={handleFeaturesChange}
                    />
                    It has a logo!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="bestFeatures"
                      type="checkbox"
                      value="size"
                      checked={bestFeatures.includes("size")}
                      onChange={handleFeaturesChange}
                    />
                    Its big!
                  </label>
                </li>
              </ul>
            </div>
            <p>
              <em>
                What would you say that are the worst nags of your rubber duck?
              </em>
            </p>
            <div>
              <ul>
                <li>
                  <label>
                    <input
                      name="worstFeatures"
                      type="checkbox"
                      value="colour"
                      checked={worstFeatures.includes("colour")}
                      onChange={handleFeaturesChange}
                    />
                    It's yellow!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="worstFeatures"
                      type="checkbox"
                      value="sound"
                      checked={worstFeatures.includes("sound")}
                      onChange={handleFeaturesChange}
                    />
                    It squeaks!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="worstFeatures"
                      type="checkbox"
                      value="logo"
                      checked={worstFeatures.includes("logo")}
                      onChange={handleFeaturesChange}
                    />
                    It has a logo!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="worstFeatures"
                      type="checkbox"
                      value="size"
                      checked={worstFeatures.includes("size")}
                      onChange={handleFeaturesChange}
                    />
                    Its big!
                  </label>
                </li>
              </ul>
            </div>
            <p>
              <em>How do you rate your rubber duck consistency?</em>
              <ul className="radio-lists">
                <li>
                  <input
                    id="consistency1"
                    type="radio"
                    name="consistency"
                    value="1"
                    checked={consistency === 1 ? true : false}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency1">1</label>
                </li>
                <li>
                  <input
                    id="consistency2"
                    type="radio"
                    name="consistency"
                    value="2"
                    checked={consistency === 2}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency2">2</label>
                </li>
                <li>
                  <input
                    id="consistency3"
                    type="radio"
                    name="consistency"
                    value="3"
                    checked={consistency === 3}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency3">3</label>
                </li>
                <li>
                  <input
                    id="consistency4"
                    type="radio"
                    name="consistency"
                    value="4"
                    checked={consistency === 4}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency4">4</label>
                </li>
              </ul>
            </p>
            <p>
              <em>How do you rate your rubber duck colour?</em>
            </p>
            <div>
              <ul className="radio-lists">
                <li>
                  <input
                    id="consistency1Two"
                    type="radio"
                    name="colour"
                    value="1"
                    checked={colour === 1 ? true : false}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency1Two">1</label>
                </li>
                <li>
                  <input
                    id="consistency2Two"
                    type="radio"
                    name="colour"
                    value="2"
                    checked={colour === 2}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency2Two">2</label>
                </li>
                <li>
                  <input
                    id="consistency3Two"
                    type="radio"
                    name="colour"
                    value="3"
                    checked={colour === 3 ? true : false}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency3Two">3</label>
                </li>
                <li>
                  <input
                    id="consistency4Two"
                    type="radio"
                    name="colour"
                    value="4"
                    checked={colour === 4 ? true : false}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency4Two">4</label>
                </li>
              </ul>
            </div>
            <p>
              <em>How do you rate your rubber duck logo?</em>
            </p>
            <div>
              <ul className="radio-lists">
                <li>
                  <input
                    id="consistency1Three"
                    type="radio"
                    name="logo"
                    value="1"
                    checked={logo === 1}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency1Three">1</label>
                </li>
                <li>
                  <input
                    id="consistency2Three"
                    type="radio"
                    name="logo"
                    value="2"
                    checked={logo === 2 ? true : false}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency2Three">2</label>
                </li>
                <li>
                  <input
                    id="consistency3Three"
                    type="radio"
                    name="logo"
                    value="3"
                    checked={logo === 3}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency3Three">3</label>
                </li>
                <li>
                  <input
                    id="consistency4Three"
                    type="radio"
                    name="logo"
                    value="4"
                    checked={logo === 4}
                    onChange={handleSingleChange}
                  />
                  <label htmlFor="consistency4Three">4</label>
                </li>
              </ul>
            </div>
            <p>
              <em>How do you like to spend time with your rubber duck?</em>
            </p>
            <div>
              <ul>
                <li>
                  <label>
                    <input
                      name="timeSpent"
                      type="checkbox"
                      value="swimming"
                      checked={timeSpent.includes("swimming")}
                      onChange={handleFeaturesChange}
                    />
                    Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="timeSpent"
                      type="checkbox"
                      value="bathing"
                      checked={timeSpent.includes("bathing")}
                      onChange={handleFeaturesChange}
                    />
                    Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="timeSpent"
                      type="checkbox"
                      value="chatting"
                      checked={timeSpent.includes("chatting")}
                      onChange={handleFeaturesChange}
                    />
                    Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="timeSpent"
                      type="checkbox"
                      value=" noTime"
                      checked={timeSpent.includes("noTime")}
                      onChange={handleFeaturesChange}
                    />
                    I don't like to spend time with it!
                  </label>
                </li>
              </ul>
            </div>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              <span className="answer__line">
                {" "}
                <textarea
                  name="review"
                  cols="30"
                  rows="10"
                  value={review}
                  onChange={handleSingleChange}
                ></textarea>
              </span>
            </p>
          </article>
          <button
            className="submit-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Submit
          </button>
        </li>
      )}
    </div>
  );
}
