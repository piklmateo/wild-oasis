import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

const UserForm = () => {
  const { register } = useForm();

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <Form type="grid" heading="Create a new user" headingType="xxxl">
        <Input
          htmlFor="fullName"
          type="text"
          name="fullName"
          id="fullName"
          inputType="grid"
          labelType="grid"
          gridDivider
          register={register}
        >
          Full name
        </Input>

        <Input
          htmlFor="email"
          type="text"
          name="email"
          id="email"
          inputType="grid"
          labelType="grid"
          gridDivider
          register={register}
        >
          Email
        </Input>

        <Input
          htmlFor="password"
          type="text"
          name="password"
          id="password"
          inputType="grid"
          labelType="grid"
          gridDivider
          register={register}
        >
          Password (min 8 characters)
        </Input>

        <Input
          htmlFor="repeatPassword"
          type="text"
          name="repeatPassword"
          id="repeatPassword"
          inputType="grid"
          labelType="grid"
          gridDivider
          register={register}
        >
          Repeat password
        </Input>

        <div className="col-span-3 flex justify-end space-x-5 pt-4">
          <Button style="secondary">Cancel</Button>
          <Button style="primary">Create new user</Button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
