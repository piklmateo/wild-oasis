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
            htmlFor: "email",
            name: "email",
            id: "email",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Email
        </Input>

        <Input
          inputConfig={{
            type: "password",
            htmlFor: "password",
            name: "password",
            id: "password",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Password (min 8 characters)
        </Input>

        <Input
          inputConfig={{
            type: "password",
            htmlFor: "repeatPassword",
            name: "repeatPassword",
            id: "repeatPassword",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
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
