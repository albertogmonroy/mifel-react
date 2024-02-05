import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

import { InputText as InputTextReact } from "primereact/inputtext";
import { ErrorMessage } from "@hookform/error-message";
import { KeyFilterType } from "primereact/keyfilter";
import PropTypes from "prop-types";
import { handleUpperCase } from "../../helpers/inputs";
interface FormInputTextProps {
  name: string;
  label: string;
  className?: string;
  values?: string;
  isrequired?: boolean;
  maxLength?: number;
  keyfilter?: KeyFilterType;
  rules?: RegisterOptions;
}
export const InputText = ({ label, values, ...props }: FormInputTextProps) => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;
  return (
    <Controller
      name={props.name || ""}
      control={control}
      render={({ field: { value }, fieldState }) => (
        <div className={props.className}>
          <span className="p-float-label ">
            <InputTextReact
              className={
                fieldState.invalid ? "p-invalid p-d-block" : "p-d-block"
              }
              onInput={handleUpperCase}
              {...methods.register(props.name)}
              value={values ? values : value || ""}
              {...props}
            />
            <label
              htmlFor={label || "inputText"}
              className="ml-2 -mt-4"
              style={{ fontFamily: "inherit" }}
            >
              <p className="text-md">
                {label}
                {props.isrequired ? (
                  <span
                    className="text-xl "
                    style={{ color: "red", marginLeft: "5px" }}
                  >
                    *
                  </span>
                ) : null}
              </p>
            </label>
          </span>
          <ErrorMessage
            errors={errors}
            name={props.name}
            render={({ message }) => (
              <small className="p-error">{message}</small>
            )}
          />
        </div>
      )}
      rules={props.rules}
    />
  );
};

InputText.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  values: PropTypes.string,
  isrequired: PropTypes.bool,
  maxLength: PropTypes.number,
  keyfilter: PropTypes.string,
  rules: PropTypes.object,
};
