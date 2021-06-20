import { useState } from "react";

const initialFormData = {
  username: "",
  email: "",
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  bestFeatures: [],
  worstFeatures: [],
  agree: false,
  disagree: false,
};

export default function Survey({ addNewAnswerList }) {
  const [answer, setAnswer] = useState(initialFormData);
  //   console.log(answer);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(answer.disagree);
    addNewAnswerList(answer);

    setAnswer(initialFormData);
    let erraseArraybestFeatures = e.target.bestFeatures;
    let erraseArrayTworstFeatures = e.target.worstFeatures;
    let erraseArraytimeSpent = e.target.timeSpent;
    let erraseArrayConsistency = e.target.consistency;
    let erraseArrayColour = e.target.colour;
    let erraseArrayLogo = e.target.logo;

    let erraseArray = [
      ...erraseArraybestFeatures,
      ...erraseArrayTworstFeatures,
      ...erraseArraytimeSpent,
      ...erraseArrayConsistency,
      ...erraseArrayColour,
      ...erraseArrayLogo,
    ];

    erraseArray.forEach((input) => {
      input.checked = false;
    });
  }

  function handleChange(e) {
    let keyName = e.target.name;
    if (e.target.type === "checkbox") {
      if (keyName === "agree" || keyName === "disagree") {
        setAnswer({ ...answer, [keyName]: e.target.checked });
      } else {
        // if (e.target.checked)
        //   setAnswer({
        //     ...answer,
        //     [keyName]: [...answer.keyname, e.target.value],
        //   });
        // else {
        //   let filterAnswer = answer.keyname.filter(
        //     (feature) => feature !== e.target.value
        //   );
        //   setAnswer({ ...answer, [keyname]: filterAnswer });
        // }

        let filterAnswer = e.target.checked
          ? [...answer[keyName], e.target.value]
          : answer[keyName].filter((feature) => feature !== e.target.value);

        setAnswer({ ...answer, [keyName]: filterAnswer });
        console.log(filterAnswer);
      }
    } else {
      setAnswer({ ...answer, [keyName]: e.target.value });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <ul>
          <li>
            <label>
              <input
                name="bestFeatures"
                type="checkbox"
                value="colour"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              Its big!
            </label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input
                name="worstFeatures"
                type="checkbox"
                value="colour"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              Its big!
            </label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input
              id="consistency1"
              type="radio"
              name="consistency"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="consistency1">1</label>
          </li>
          <li>
            <input
              id="consistency2"
              type="radio"
              name="consistency"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="consistency2">2</label>
          </li>
          <li>
            <input
              id="consistency3"
              type="radio"
              name="consistency"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="consistency3">3</label>
          </li>
          <li>
            <input
              id="consistency4"
              type="radio"
              name="consistency"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="consistency4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              id="consistency1Two"
              type="radio"
              name="colour"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="consistency1Two">1</label>
          </li>
          <li>
            <input
              id="consistency2Two"
              type="radio"
              name="colour"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="consistency2Two">2</label>
          </li>
          <li>
            <input
              id="consistency3Two"
              type="radio"
              name="colour"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="consistency3Two">3</label>
          </li>
          <li>
            <input
              id="consistency4Two"
              type="radio"
              name="colour"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="consistency4Two">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input
              id="consistency1Three"
              type="radio"
              name="logo"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="consistency1Three">1</label>
          </li>
          <li>
            <input
              id="consistency2Three"
              type="radio"
              name="logo"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="consistency2Three">2</label>
          </li>
          <li>
            <input
              id="consistency3Three"
              type="radio"
              name="logo"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="consistency3Three">3</label>
          </li>
          <li>
            <input
              id="consistency4Three"
              type="radio"
              name="logo"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="consistency4Three">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
                name="timeSpent"
                type="checkbox"
                value="swimming"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              I don't like to spend time with it!
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={answer.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={answer.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please?
        <input
          type="email"
          name="email"
          value={answer.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Do you agree to show on the page?
        <input
          className="checkbox-tick"
          type="checkbox"
          name="agree"
          value={answer.agree}
          checked={answer.agree}
          onChange={handleChange}
        />
        <span className="agreement">Yes</span>
        <input
          className="checkbox-tick"
          type="checkbox"
          name="disagree"
          value={answer.disagree}
          checked={answer.disagree}
          onChange={handleChange}
        />
        <span className="agreement">No</span>
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
