import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { getHotelSettings } from "../../services/settingsService";
import { HotelSettings } from "../../services/data/types";
import { useQuery } from "@tanstack/react-query";
import { useUpdateSettings } from "./hooks/useUpdateSettings";
import Button from "../../components/Button";
import MiniSpinner from "../../components/MiniSpinner";
import PageSpinner from "../../components/PageSpinner";

const SettingsForm = () => {
  const {
    data: settings,
    isPending,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getHotelSettings,
  });

  const { register, handleSubmit } = useForm<HotelSettings>();
  const { updateSetting, isUpdating } = useUpdateSettings();

  const onSubmit: SubmitHandler<HotelSettings> = async (settings) => {
    try {
      const updatedSettings = {
        minBookingLength: Number(settings.minBookingLength),
        maxBookingLength: Number(settings.maxBookingLength),
        maxGuestsPerBooking: Number(settings.maxGuestsPerBooking),
        breakfastPrice: Number(settings.breakfastPrice),
      };
      updateSetting(updatedSettings);
      console.log("Updated settings:", updatedSettings);
    } catch (error) {
      console.error("Error updating settings", error);
    }
  };

  if (isPending) return <PageSpinner />;
  if (error) return <div>error</div>;

  return (
    <div className="max-w-6xl m-10 xl:mx-auto text-gray-900 flex flex-col gap-8">
      <Form type="grid" heading="Update hotel settings" headingType="xxxl" onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputConfig={{
            type: "number",
            htmlFor: "minBookingLength",
            name: "minBookingLength",
            id: "minBookingLength",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
            defaultValue: settings?.minBookingLength,
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
            defaultValue: settings?.maxBookingLength,
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
            defaultValue: settings?.maxGuestsPerBooking,
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
            defaultValue: settings?.breakfastPrice,
          }}
          register={register}
        >
          Breakfast price
        </Input>

        <div className="col-span-3 flex justify-end space-x-5 pt-4">
          <Button type="submit" style="primary" disabled={isUpdating}>
            <div className="flex justify-center gap-2 items-center">
              {isUpdating && <MiniSpinner color="#FFFFFF" secondaryColor="#e2e2e2" />}
              Update settings
            </div>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SettingsForm;
