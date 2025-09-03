import {useState} from "react";

export const FormComponent = () => {

  const [formData, setFormData] = useState({
      userName:'',
      userEmail:'',
      password:''
  })

  // Destructuring the state objects
  const {userName, userEmail, password} = formData

  // Funtion that manages the input on change event
  const inputChange = ({target}) => {
    // Destructuring from target the two elements that we will use
    const {name, value} = target
    setFormData({
      // First REMEMBER to make a copy of the elemets with the spread operator
      ...formData,
      // ? Propiedad computada
      // Using [] will tell JS that is variable, so any name will be ok form the lists of imputs
      [name]: value

    })
  }

  return (
    // ? ==+ Class notes +==
    // When importing html elements, it's impotant to take on mind the reserved JS words
    // class => className, for => htmlFor and the closing tags (on form elements)
    <form>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="userName"
          aria-describedby="emailHelp"
          // Value has to point to the useState
          value={userName}
          onChange={ inputChange }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="userEmail"
          aria-describedby="emailHelp"
          value={userEmail}
          onChange={ inputChange }
        />
        <div name="emailHelp" className="form-text">
          We'll EVER share your email with anyone else MUAJAJAJJA.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={ inputChange }
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary"
        >
        Submit
      </button>
    </form>
  );
};
