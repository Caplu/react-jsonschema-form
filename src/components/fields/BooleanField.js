import React from "react";
import * as types from "../../types";

import {
  getWidget,
  getUiOptions,
  optionsList,
  getDefaultRegistry,
} from "../../utils";

function BooleanField(props) {
  const {
    schema,
    name,
    uiSchema,
    idSchema,
    formData,
    registry = getDefaultRegistry(),
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onFocus,
    onBlur,
    rawErrors,
  } = props;
  const { title } = schema;
  const { widgets, formContext } = registry;
  const { widget = "checkbox", ...options } = getUiOptions(uiSchema);
  const Widget = getWidget(schema, widget, widgets);
  const enumOptions = optionsList({
    enum: [true, false],
    enumNames: schema.enumNames || ["yes", "no"],
  });
  return (
    <Widget
      options={{ ...options, enumOptions }}
      schema={schema}
      id={idSchema && idSchema.$id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      label={title === undefined ? name : title}
      value={formData}
      required={required}
      disabled={disabled}
      readonly={readonly}
      registry={registry}
      formContext={formContext}
      autofocus={autofocus}
      rawErrors={rawErrors}
    />
  );
}

if (process.env.NODE_ENV !== "production") {
  BooleanField.propTypes = types.fieldProps;
}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false,
};

export default BooleanField;
