import React, { Component } from 'react';
import { observer } from 'mobx-react/index';
import autobind from 'autobind-decorator';
import ChipInput from 'material-ui-chip-input';

@observer
class ArrayInput extends Component {
  @autobind
  onAdd(chip) {
    const array = this.props.field.value;
    array.push(chip);
    this.props.field.set(array);
  }

  @autobind
  onDel(chip) {
    const index = this.props.field.value.indexOf(chip);
    const array = this.props.field.value;
    array.splice(index, 1);
    this.props.field.set(array);
  }

  @autobind
  async onKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  render() {
    const { field, ...rest } = this.props;

    return (
      <ChipInput
        id={field.key}
        name={field.name}
        label={field.label}
        value={field.value}
        error={field.hasError}
        helperText={field.error}
        onAdd={this.onAdd}
        onDelete={this.onDel}
        onKeyPress={this.onKeyPress}
        fullWidth
        {...rest}
      />
    );
  }
}

export default ArrayInput;
