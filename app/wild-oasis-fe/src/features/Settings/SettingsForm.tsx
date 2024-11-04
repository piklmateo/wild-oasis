import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { useQuery } from "@tanstack/react-query";
import { getHotelSettings } from "../../services/settingsService";
import { useEffect } from "react";

const SettingsForm = () => {
  const {
    data: settings,
    isPending,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getHotelSettings,
  });

  const { register, reset } = useForm({
    defaultValues: {
      minBookingLength: 0,
      maxBookingLength: 0,
      maxGuestsPerBooking: 0,
      breakfastPrice: 0,
    },
  });

  useEffect(() => {
    if (settings) {
      reset({
        minBookingLength: settings.minBookingLength,
        maxBookingLength: settings.maxBookingLength,
        maxGuestsPerBooking: settings.maxGuestsPerBooking,
        breakfastPrice: settings.breakfastPrice,
      });
    }
  }, [settings, reset]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log(settings?.maxBookingLength);

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
