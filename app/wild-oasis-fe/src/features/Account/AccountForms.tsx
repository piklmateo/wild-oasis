import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

const AccountForms = () => {
  const { register } = useForm();

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <h1 className="font-semibold text-2xl">Update your account</h1>
      <Form type="grid" heading="Update user data" headingType="xl">
        <Input
          type="text"
          htmlFor="email"
          name="email"
          id="email"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Email address
        </Input>
        <Input
          type="text"
          htmlFor="fullName"
          name="fullName"
          id="fullName"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Full name
        </Input>
        <Input
          type="file"
          htmlFor="avatar"
          name="avatar"
          id="avatar"
          labelType="grid"
          inputType="file"
          gridDivider
          register={register}
        >
          Avatar image
        </Input>

        <div className="col-span-3 flex justify-end space-x-5 pt-4">
          <Button style="secondary">Cancel</Button>
          <Button style="primary">Update account</Button>
        </div>
      </Form>

      <Form type="grid" heading="Update password" headingType="xl">
        <Input
          type="password"
          htmlFor="newPassword"
          name="newPassword"
          id="newPassword"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          New password (min 8 characters)
        </Input>
        <Input
          type="password"
          htmlFor="confirmPassword"
          name="confirmPassword"
          id="confirmPassword"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Confirm password
        </Input>

        <div className="col-span-3 flex justify-end space-x-5 pt-4">
          <Button style="secondary">Cancel</Button>
          <Button style="primary">Update password</Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountForms;
