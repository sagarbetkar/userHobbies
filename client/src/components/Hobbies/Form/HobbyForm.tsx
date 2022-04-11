import * as React from "react";
import { Hobby } from "../../../types";
import './HobbyForm.scss';
interface IHobbyFormProps {
  onAdd(hobby: Hobby, userId: string): void;
  userId: string
}

type State = {
  fields: any;
  errors: any
};
class HobbyForm extends React.Component<IHobbyFormProps, State> {
  constructor(props: IHobbyFormProps) {
    super(props);
    this.state = {
      fields: {
        hobbyName: '',
        year: '',
        passion: ''
      },
      errors: {}
    };
  }

  handleValidation() {
    let fields: any = this.state.fields;
    let errors: any = {};
    let formIsValid: boolean = true;

    //passionLevel
    if (!fields["passion"]) {
      formIsValid = false;
      errors["passion"] = "Cannot be empty";
    }

    //Hobby name
    if (!fields["hobbyName"]) {
      formIsValid = false;
      errors["hobbyName"] = "Cannot be empty";
    }

    if (typeof fields["hobbyName"] !== "undefined") {
      if (!fields["hobbyName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["hobbyName"] = "Only letters";
      }
    }
    //year
    if (!fields["year"]) {
      formIsValid = false;
      errors["year"] = "Cannot be empty";
    }

    if (typeof fields["year"] !== "undefined") {
      if (!fields["year"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["year"] = "Only numbers";
      }
    }
    this.setState({ errors: errors });
    return formIsValid
  }

  handleSubmit(e: any) {
    e.preventDefault();
    if (this.handleValidation()) {
      const newHobby: any = {
        name: this.state.fields['hobbyName'],
        passionLevel: this.state.fields['passion'],
        year: this.state.fields['year']
      };

      this.props.onAdd(newHobby, this.props.userId);
      this.handleReset();
    }
  }

  handleChange(field: string, e: any) {
    let fields: any = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleReset() {
    this.setState({fields: {hobbyName: '', year: '', passion: ''}, errors: {}})
  }

  render() {
    return (
      <div style={{height: "50px"}}>
        <form className="hobby-form" style={{display: "flex"}} onSubmit={this.handleSubmit.bind(this)}>
          <div style={{display: "flex", flexDirection: "column", flex: '1 1 auto'}}>
            <select
              name="passion"
              value={this.state.fields['passion']}
              onChange={this.handleChange.bind(this, 'passion')}
            >
              <option value="" disabled>
                Select passion level
              </option>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
              <option value='very high'>Very High</option>
            </select>
            <span style={{ color: "red", fontSize: "12px" }}>{this.state.errors["passion"]}</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flex: '1 1 auto'}}>
            <input
              type="text"
              required
              name="hobbyName"
              placeholder="Enter user hobby"
              value={this.state.fields['hobbyName']}
              onChange={this.handleChange.bind(this, 'hobbyName')}
            />
            <span style={{ color: "red", fontSize: "12px" }}>{this.state.errors["hobbyName"]}</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", flex: '1 1 auto'}}>
            <input
              name="year"
              placeholder="Enter year"
              type="text"
              value={this.state.fields['year']}
              onChange={this.handleChange.bind(this, 'year')}
            />
            <span style={{ color: "red", fontSize: "12px" }}>{this.state.errors["year"]}</span>
          </div>
          <button style={{height: "34px"}}
            disabled={!this.state.errors}
            onClick={this.handleSubmit.bind(this)}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default HobbyForm;
