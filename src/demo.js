import React from "react";
import Select from "./components/Select";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null,
    multiLabel: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Input
          fullWidth
          inputComponent={Select}
          value={this.state.single}
          onChange={this.handleChange("single")}
          placeholder="Search a country (start with a)"
          id="react-select-single"
          inputProps={{
            classes,
            name: "react-select-single",
            instanceId: "react-select-single",
            simpleValue: true,
            options: suggestions
          }}
        />
        <Input
          fullWidth
          inputComponent={Select}
          value={this.state.multi}
          onChange={this.handleChange("multi")}
          placeholder="Select multiple countries"
          name="react-select-chip"
          inputProps={{
            classes,
            multi: true,
            instanceId: "react-select-chip",
            id: "react-select-chip",
            simpleValue: true,
            options: suggestions
          }}
        />
        <TextField
          fullWidth
          value={this.state.multiLabel}
          onChange={this.handleChange("multiLabel")}
          placeholder="Select multiple countries"
          name="react-select-chip-label"
          label="With label"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputComponent: Select,
            inputProps: {
              classes,
              multi: true,
              instanceId: "react-select-chip-label",
              id: "react-select-chip-label",
              simpleValue: true,
              options: suggestions
            }
          }}
        />
      </div>
    );
  }
}

export default IntegrationReactSelect;
