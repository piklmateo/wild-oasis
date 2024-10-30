import Form from "../../components/Form";
import Input from "../../components/Input";

const SettingsForm = () => {
  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <Form type="grid" heading="Update hotel settings" headingType="xxxl">
        <Input
          htmlFor="minBookingLength"
          type="number"
          name="minBookingLength"
          id="minBookingLength"
          inputType="grid"
          labelType="grid"
          gridDivider
        >
          Minimum nights/booking
        </Input>

        <Input
          htmlFor="maxBookingLength"
          type="number"
          name="maxBookingLength"
          id="maxBookingLength"
          inputType="grid"
          labelType="grid"
          gridDivider
        >
          Maximum nights/booking
        </Input>

        <Input
          htmlFor="maxGuestsPerBooking"
          type="number"
          name="maxGuestsPerBooking"
          id="maxGuestsPerBooking"
          inputType="grid"
          labelType="grid"
          gridDivider
        >
          Maximum guests/booking
        </Input>

        <Input
          htmlFor="breakfastPrice"
          type="number"
          name="breakfastPrice"
          id="breakfastPrice"
          inputType="grid"
          labelType="grid"
          gridDivider
        >
          Breakfast price
        </Input>
      </Form>
    </div>
  );
};

export default SettingsForm;
