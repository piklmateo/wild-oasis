import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";

const SettingsForm = () => {
  const { register } = useForm();

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <Form type="grid" heading="Update hotel settings" headingType="xxxl">
        <Input
          inputConfig={{
            type: "number",
            htmlFor: "minBookingLength",
            name: "minBookingLength",
            id: "minBookingLength",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Minimum nights/booking
        </Input>

        <Input
          inputConfig={{
            type: "number",
            htmlFor: "maxBookingLength",
            name: "maxBookingLength",
            id: "maxBookingLength",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Maximum nights/booking
        </Input>

        <Input
          inputConfig={{
            type: "number",
            htmlFor: "maxGuestsPerBooking",
            name: "maxGuestsPerBooking",
            id: "maxGuestsPerBooking",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Maximum guests/booking
        </Input>

        <Input
          inputConfig={{
            type: "number",
            htmlFor: "breakfastPrice",
            name: "breakfastPrice",
            id: "breakfastPrice",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Breakfast price
        </Input>
      </Form>
    </div>
  );
};

export default SettingsForm;
