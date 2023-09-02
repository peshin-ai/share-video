import type { FieldValues } from 'react-hook-form';

import {
  fireEvent,
  render,
} from '@testing-library/react';
import { ReactElement } from 'react';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';

import {
  FormTextField,
  FormTextProps,
} from './FormText.component';

const TestComponent = ({
  fieldName,
  label,
  ...props
}: FormTextProps): ReactElement => {
  const mockMethods = useForm();
  const { control, handleSubmit } = mockMethods;
  const onSubmit = (data: FieldValues) => {
    handleSubmit(() => data)();
  };

  return (
    <FormProvider {...mockMethods}>
      <form onSubmit={onSubmit}>
        <FormTextField
          fieldName={fieldName}
          label={label}
          control={control}
          {...props}
        />
      </form>
    </FormProvider>
  );
};

describe("FormTextField", () => {
  it("renders with custom props", () => {
    const { getByTestId } = render(
      <TestComponent
        fieldName="customField"
        label="Custom Label"
        autoComplete="off"
        inputProps={{ placeholder: "Custom Placeholder" }}
        testID="customTestId"
      />
    );

    const inputElement = getByTestId("customTestId");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "Custom Placeholder");
  });

  it("handles user input", () => {
    const { getByLabelText } = render(
      <TestComponent fieldName="testField" label="Test Label" />
    );

    const inputElement = getByLabelText("Test Label");
    fireEvent.change(inputElement, { target: { value: "Testing" } });

    expect(inputElement).toHaveValue("Testing");
  });
});
