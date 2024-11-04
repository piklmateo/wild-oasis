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
          inputConfig={{
            type: "text",
            htmlFor: "email",
            name: "email",
            id: "email",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Email address
        </Input>
        <Input
          inputConfig={{
            type: "text",
            htmlFor: "fullName",
            name: "fullName",
            id: "fullName",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Full name
        </Input>
        <Input
          inputConfig={{
            type: "text",
            htmlFor: "avatar",
            name: "avatar",
            id: "avatar",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
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
          inputConfig={{
            type: "password",
            htmlFor: "newPassword",
            name: "newPassword",
            id: "newPassword",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          New password (min 8 characters)
        </Input>
        <Input
          inputConfig={{
            type: "password",
            htmlFor: "confirmPassword",
            name: "confirmPassword",
            id: "confirmPassword",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
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
